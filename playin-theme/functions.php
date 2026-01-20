<?php

// 1. Enqueue React Assets
function playin_enqueue_assets()
{
    // When in development, you might want to link to local Vite server
    // For production, we load from the theme's dist folder
    $dist_path = get_template_directory_uri() . '/dist/assets/';

    // Scan dist/assets for the main JS and CSS files (Vite generates hashes)
    $files = glob(get_template_directory() . '/dist/assets/*.{js,css}', GLOB_BRACE);

    foreach ($files as $file) {
        $name = basename($file);
        $url = $dist_path . $name;
        if (str_ends_with($name, '.js')) {
            wp_enqueue_script('playin-react', $url, array(), null, true);
        } else if (str_ends_with($name, '.css')) {
            wp_enqueue_style('playin-style', $url);
        }
    }
}
add_action('wp_enqueue_scripts', 'playin_enqueue_assets');

// 2. Register Custom Post Type for Registrations
function playin_register_cpt()
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
add_action('init', 'playin_register_cpt');

// 3. REST API Endpoint for Registration
add_action('rest_api_init', function () {
    register_rest_route('playin/v1', '/register', array(
        'methods' => 'POST',
        'callback' => 'playin_handle_registration',
        'permission_callback' => '__return_true', // You might want to add nonces for security
    ));
});

function playin_handle_registration($request)
{
    $params = $request->get_json_params();

    if (empty($params['email']) || empty($params['name'])) {
        return new WP_Error('missing_data', 'Missing required fields', array('status' => 400));
    }

    // Create the registration post
    $post_id = wp_insert_post(array(
        'post_title' => $params['name'] . ' - ' . $params['city'],
        'post_type' => 'registration',
        'post_status' => 'publish',
    ));

    if ($post_id) {
        // Save metadata
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
