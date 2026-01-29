<?php
/**
 * Plugin Name: PlayIN Registration App
 * Plugin URI: https://alsacearena.com
 * Description: Embeds the React-based PlayIN registration application via a shortcode.
 * Version: 1.1
 * Author: Antigravity
 * Text Domain: playin-registration
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * IDE SILENCING
 * These definitions only exist to stop the IDE from reporting "unknown function" errors.
 * They will never be executed because of the if (false) condition.
 */
if (false) {
    function register_post_type($post_type, $args = array())
    {
    }
    function add_action($tag, $callback, $priority = 10, $accepted_args = 1)
    {
    }
    function add_shortcode($tag, $callback)
    {
    }
    function plugin_dir_url($file)
    {
        return '';
    }
    function plugin_dir_path($file)
    {
        return '';
    }
    function wp_enqueue_style($handle, $src = '', $deps = array(), $ver = false, $media = 'all')
    {
    }
    function wp_enqueue_script($handle, $src = '', $deps = array(), $ver = false, $in_footer = false)
    {
    }
    function wp_localize_script($handle, $object_name, $l10_array)
    {
    }
    function esc_url_raw($url)
    {
        return $url;
    }
    function rest_url($path = '', $scheme = 'rest')
    {
        return $path;
    }
    function register_rest_route($namespace, $route, $args = array(), $override = false)
    {
    }
    function get_posts($args = null)
    {
        return array();
    }
    function sanitize_email($email)
    {
        return $email;
    }
    function wp_insert_post($postarr, $wp_error = false)
    {
        return 0;
    }
    function update_post_meta($post_id, $meta_key, $meta_value, $prev_value = '')
    {
    }
    function sanitize_text_field($str)
    {
        return $str;
    }
    function wp_mail($to, $subject, $message, $headers = '', $attachments = array())
    {
    }
    function rest_url_raw($path = '', $scheme = 'rest')
    {
        return '';
    }
    function esc_html($text)
    {
        return $text;
    }
    class WP_Error
    {
        public function __construct($code = '', $message = '', $data = '')
        {
        }
    }
}

// 1. Register Custom Post Type for Registrations
function playin_plugin_register_cpt()
{
    register_post_type('registration', array(
        'labels' => array(
            'name' => 'Inscriptions',
            'singular_name' => 'Inscription',
        ),
        'public' => false,
        'show_ui' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'supports' => array('title', 'editor', 'custom-fields'),
        'menu_icon' => 'dashicons-businessman',
    ));
}
add_action('init', 'playin_plugin_register_cpt');

// 2. Shortcode to embed the React App
function playin_react_app_shortcode()
{
    // Enqueue scripts and styles
    playin_plugin_enqueue_assets();

    // Return the container for React
    return '<div id="playin-react-app"></div>';
}
add_shortcode('playin_react_app', 'playin_react_app_shortcode');

// 3. Asset Loading
function playin_plugin_enqueue_assets()
{
    $plugin_url = plugin_dir_url(__FILE__);
    $dist_path = plugin_dir_path(__FILE__) . 'dist/assets/';

    // Load External Fonts (Google Fonts & FontAwesome)
    wp_enqueue_style('playin-google-fonts', 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700;900&family=Roboto:wght@300;400;500;700&display=swap', array(), null);
    wp_enqueue_style('playin-fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), null);

    // Scan dist/assets for the main JS and CSS files
    if (file_exists($dist_path)) {
        $files = glob($dist_path . '*.{js,css}', GLOB_BRACE);

        $js_counter = 0;
        $css_counter = 0;

        foreach ($files as $file) {
            $name = basename($file);
            $url = $plugin_url . 'dist/assets/' . $name;

            if (strpos($name, '.js') !== false) {
                $handle = 'playin-js-' . $js_counter++;
                wp_enqueue_script($handle, $url, array(), null, true);

                // Inject configuration for React on the first JS file
                if ($js_counter === 1) {
                    wp_localize_script($handle, 'playinConfig', array(
                        'assetsUrl' => $plugin_url . 'dist/',
                        'apiUrl' => esc_url_raw(rest_url('playin/v1/register'))
                    ));
                }
            } else if (strpos($name, '.css') !== false) {
                $handle = 'playin-css-' . $css_counter++;
                wp_enqueue_style($handle, $url, array(), null);
            }
        }
    }
}

// 4. REST API Endpoint
add_action('rest_api_init', function () {
    register_rest_route('playin/v1', '/register', array(
        'methods' => 'POST',
        'callback' => 'playin_plugin_handle_registration',
        'permission_callback' => '__return_true',
    ));
});

function playin_plugin_handle_registration($request)
{
    $params = $request->get_json_params();

    if (empty($params['email']) || empty($params['name'])) {
        return new WP_Error('missing_data', 'Missing required fields', array('status' => 400));
    }

    // Check if the email is already registered across any city
    $existing_registration = get_posts(array(
        'post_type' => 'registration',
        'meta_query' => array(
            array(
                'key' => 'registration_email',
                'value' => sanitize_email($params['email']),
                'compare' => '='
            )
        ),
        'posts_per_page' => 1
    ));

    if (!empty($existing_registration)) {
        return new WP_Error('already_registered', 'Tu es déjà inscrit à une étape de la compétition. Une seule inscription est possible par personne.', array('status' => 400));
    }

    $post_id = wp_insert_post(array(
        'post_title' => $params['name'] . ' - ' . $params['city'],
        'post_type' => 'registration',
        'post_status' => 'publish',
    ));

    if ($post_id) {
        update_post_meta($post_id, 'registration_email', sanitize_email($params['email']));
        update_post_meta($post_id, 'registration_eaid', sanitize_text_field($params['eaid']));
        update_post_meta($post_id, 'registration_birthdate', sanitize_text_field($params['birthdate']));
        update_post_meta($post_id, 'registration_discord', sanitize_text_field($params['discord']));
        update_post_meta($post_id, 'registration_phone', sanitize_text_field($params['phone']));
        update_post_meta($post_id, 'registration_city', sanitize_text_field($params['city']));

        // Send confirmation email
        playin_send_confirmation_email($params);

        return array('status' => 'success', 'message' => 'Registration saved', 'id' => $post_id);
    }

    return new WP_Error('save_failed', 'Failed to save registration', array('status' => 500));
}

/**
 * Send confirmation email to the registered user
 */
function playin_send_confirmation_email($data)
{
    $to = sanitize_email($data['email']);
    $name = sanitize_text_field($data['name']);
    $city = sanitize_text_field($data['city']);
    $eaid = sanitize_text_field($data['eaid']);
    $discord = sanitize_text_field($data['discord']);

    // Escape variables for HTML usage
    $esc_name = esc_html($name);
    $esc_city = esc_html($city);
    $esc_eaid = esc_html($eaid);
    $esc_discord = esc_html($discord);

    $subject = 'Confirmation d\'inscription - playIN Grand Est ' . $city;

    $headers = array(
        'Content-Type: text/html; charset=UTF-8',
        'From: playIN Grand Est <contact@alsacearena.com>'
    );

    $message = '<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #1E1E1E; border-radius: 8px; padding: 40px; }
        .header { text-align: center; margin-bottom: 30px; }
        .header h1 { color: #CE0033; margin: 0; font-size: 28px; }
        .content p { line-height: 1.6; color: #B0B0B0; }
        .details { background-color: #252525; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .label { color: #888; }
        .value { color: #fff; font-weight: bold; }
        .city-badge { display: inline-block; background-color: #CE0033; color: white; padding: 5px 15px; border-radius: 4px; font-weight: bold; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
        .discord-link { display: inline-block; background-color: #5865F2; color: white; padding: 12px 25px; border-radius: 25px; text-decoration: none; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>INSCRIPTION CONFIRMEE</h1>
        </div>
        
        <div class="content">
            <p>Bonjour <strong>' . $esc_name . '</strong>,</p>
            <p>Felicitations ! Ton inscription au tournoi <strong>playIN Grand Est</strong> a bien ete enregistree.</p>
            
            <div class="details">
                <table width="100%" cellpadding="8" cellspacing="0">
                    <tr><td class="label">Nom</td><td class="value">' . $esc_name . '</td></tr>
                    <tr><td class="label">EA ID</td><td class="value">' . $esc_eaid . '</td></tr>
                    <tr><td class="label">Discord</td><td class="value">' . $esc_discord . '</td></tr>
                    <tr><td class="label">Ville</td><td class="value"><span class="city-badge">' . $esc_city . '</span></td></tr>
                </table>
            </div>
            
            <p>Tu recevras prochainement toutes les informations concernant le deroulement du tournoi.</p>
            <p><strong>Il faut imperativement que tu rejoignes le Discord pour le bon fonctionnement du tournoi !</strong></p>
            <p>C\'est ici que se feront les annonces officielles, les check-ins et le support durant toute la competition.</p>
            
            <div style="text-align: center;">
                <a href="https://discord.gg/aea" class="discord-link">Rejoindre le Discord</a>
            </div>
        </div>
        
        <div class="footer">
            <p>Organise par l\'Alsace Esport Arena avec le soutien de la Caisse d\'Epargne Grand Est.</p>
            <p>2026 playIN Grand Est - Tous droits reserves.</p>
        </div>
    </div>
</body>
</html>';

    return wp_mail($to, $subject, $message, $headers);
}

