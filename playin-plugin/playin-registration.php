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

        return array('status' => 'success', 'message' => 'Registration saved', 'id' => $post_id);
    }

    return new WP_Error('save_failed', 'Failed to save registration', array('status' => 500));
}
