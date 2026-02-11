<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * IDE SILENCING
 * These definitions only exist to stop the IDE from reporting "unknown function" errors.
 * They will never be executed because of the if (false) condition.
 */
if (false) {
    function add_submenu_page($parent_slug, $page_title, $menu_title, $capability, $menu_slug, $callback = '')
    {
    }
    function submit_button($text = null, $type = 'primary', $name = 'submit', $wrap = true, $other_attributes = null)
    {
    }
    function current_user_can($capability, ...$args)
    {
        return true;
    }
    function get_post_meta($post_id, $key = '', $single = false)
    {
        return '';
    }
    function add_action($tag, $callback, $priority = 10, $accepted_args = 1)
    {
    }
    function add_filter($tag, $callback, $priority = 10, $accepted_args = 1)
    {
    }
    function get_current_screen()
    {
        return (object) array('post_type' => 'registration');
    }
    function admin_url($path = '', $scheme = 'admin')
    {
        return '';
    }
    function esc_url($url, $protocols = null, $_context = 'display')
    {
        return $url;
    }

    // Fix for "Trying to get property of non-object" on $post->ID
    // By defining get_posts to return an array of objects
    class WP_Post
    {
        public $ID;
        public $post_title;
        public $post_date;
    }
    function get_posts($args = null)
    {
        return array(new WP_Post());
    }
}

// Add submenu to the "Inscriptions" menu
function playin_register_export_submenu()
{
    add_submenu_page(
        'edit.php?post_type=registration', // Parent slug (Registration CPT)
        'Export CSV',                      // Page title
        'Export CSV',                      // Menu title
        'manage_options',                  // Capability
        'playin-export-csv',               // Menu slug
        'playin_render_export_page'        // Callback function
    );
}
add_action('admin_menu', 'playin_register_export_submenu');

// Method 1: Add "Export CSV" to the views list (All | Published | Export CSV)
function playin_add_export_link_to_views($views)
{
    $export_url = admin_url('admin-post.php?action=playin_download_csv');
    $views['export-csv'] = '<a href="' . esc_url($export_url) . '" style="color: #CE0033; font-weight: bold;">Exporter en CSV</a>';
    return $views;
}
add_filter('views_edit-registration', 'playin_add_export_link_to_views');

// Method 2: Add a prominent Admin Notice with the button
function playin_export_admin_notice()
{
    $screen = get_current_screen();
    $post_type = isset($_GET['post_type']) ? $_GET['post_type'] : '';
    if (!$post_type && $screen) {
        $post_type = $screen->post_type;
    }

    if ($post_type === 'registration') {
        $export_url = admin_url('admin-post.php?action=playin_download_csv');
        ?>
        <div class="notice notice-info" style="border-left-color: #CE0033;">
            <p style="font-size: 16px;">
                <strong>PlayIN :</strong> Vous pouvez exporter toutes les inscriptions ici :
                <a href="<?php echo esc_url($export_url); ?>" class="button button-primary"
                    style="background: #CE0033; border-color: #CE0033; margin-left: 10px;">Télécharger le fichier CSV</a>
            </p>
        </div>
        <?php
    }
}
add_action('admin_notices', 'playin_export_admin_notice', 5);


// Render the export page
function playin_render_export_page()
{
    ?>
    <div class="wrap">
        <h1>Exporter les Inscriptions</h1>
        <p>Cliquez sur le bouton ci-dessous pour télécharger un fichier CSV contenant toutes les inscriptions.</p>
        <form method="get" action="<?php echo admin_url('admin-post.php'); ?>">
            <input type="hidden" name="action" value="playin_download_csv">
            <?php submit_button('Télécharger CSV'); ?>
        </form>
    </div>
    <?php
}

// Handle the CSV download
function playin_handle_csv_download()
{
    if (!current_user_can('manage_options')) {
        return;
    }

    // Clean buffer
    if (ob_get_length())
        ob_end_clean();

    // Set headers for download
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=registrations_' . date('Y-m-d') . '.csv');

    // Open output stream
    $output = fopen('php://output', 'w');

    // Add BOM for Excel compatibility
    fprintf($output, chr(0xEF) . chr(0xBB) . chr(0xBF));

    // Add CSV headers
    fputcsv($output, array('ID', 'Nom', 'Email', 'Ville', 'EA ID', 'Discord', 'Téléphone', 'Date de Naissance', 'Date Inscription'));

    // Fetch all registrations
    $args = array(
        'post_type' => 'registration',
        'posts_per_page' => -1,
        'post_status' => 'any',
    );
    $registrations = get_posts($args);

    foreach ($registrations as $post) {
        $post_id = $post->ID;
        $city = get_post_meta($post_id, 'registration_city', true);
        $title = $post->post_title;

        // Attempt to extract name from title "Name - City"
        $name = $title;
        if ($city && strpos($title, ' - ' . $city) !== false) {
            $name = str_replace(' - ' . $city, '', $title);
        }

        fputcsv($output, array(
            $post_id,
            $name,
            get_post_meta($post_id, 'registration_email', true),
            $city,
            get_post_meta($post_id, 'registration_eaid', true),
            get_post_meta($post_id, 'registration_discord', true),
            get_post_meta($post_id, 'registration_phone', true),
            get_post_meta($post_id, 'registration_birthdate', true),
            $post->post_date
        ));
    }

    fclose($output);
    exit;
}
add_action('admin_post_playin_download_csv', 'playin_handle_csv_download');
// Also handle the legacy POST if coming from the submenu page specific form
if (isset($_POST['playin_action']) && $_POST['playin_action'] == 'download_csv') {
    add_action('admin_init', 'playin_handle_csv_download');
}
