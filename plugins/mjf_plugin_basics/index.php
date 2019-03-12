<?php 
/*
 * Plugin Name: Plugin Dev Experiments
 * Plugin URI: http://maurojflores.com
 * Description: Experiments with plugin development
 * Author: Mauricio J Flores
 * Author URI: http://maurojflores.com
 * Version: 1.0
*/

add_filter('widget_text','do_shortcode');

/**
 * testing diff between ways to call a plugin dir path
 */
function mjf_dir_path() {
	// Local path to plugin files
	// Outputs: C:\wamp\www\experimentwp\wp-content\plugins\mjf_plugin basics/
	echo 'plugin_dir_path: ' . plugin_dir_path( __FILE__ ) . '<br>';

	// Full local server path to current file
	// Output: C:\wamp\www\experimentwp\wp-content\plugins\mjf_plugin basics\index.php
	echo '__FILE__: ' . __FILE__ . '<br>';
	
	// Full plugins directory URL
	// Output: http://localhost/experimentwp/wp-content/plugins/mjf_plugin basics/some-folder/
	// Output (no __FILE__): http://localhost/experimentwp/wp-content/plugins/some-folder/
	echo 'plugins_url: ' . plugins_url( 'some-folder/', __FILE__ ) . '<br>';

	// Full plugins directory URL
	// Output: http://localhost/experimentwp/wp-includes/some-folder/
	echo 'includes_url: ' . includes_url( 'some-folder/' ) . '<br>';

	// Full content directory URL
	// Output: http://localhost/experimentwp/wp-content/some-folder/
	echo 'content_url: ' . content_url( 'some-folder/' ) . '<br>';

	// Full admin directory URL
	// Output: http://localhost/experimentwp/wp-content/some-folder/
	echo 'admin_url: ' . admin_url( 'some-folder/' ) . '<br>';
}

add_action( 'wp_footer', 'mjf_dir_path' );

/**
 * testing do_action and add_action
 */
function mjf_test_action( $arg_1, $arg_2 ) {
	echo '<h3>Testing do_action hook: ' . $arg_1 . ', ' . $arg_2 . '</h3>';
}
add_action( 'mjf_before_content', 'mjf_test_action', 10, 2 );

function mjf_test_action_2( $arg_1, $arg_2, $arg_3 ) {
	echo '<h3>Testing second function in same do_action hook: ' . $arg_1 . ', ' . $arg_2 . ', ' . $arg_3 . ' </h3>';
}
add_action( 'mjf_before_content', 'mjf_test_action_2', 11, 3 );

/**
 * testing do_action_ref_array
 */
function mjf_array_action( $args ) {
	echo '<hr>';
	echo '<h3>Calling array args: ' . $args->arg_1 . ', ' . $args->arg_2 . '</h3>';
}
add_action( 'mjf_after_post', 'mjf_array_action' );

/**
 * testing remove action
 */
// remove_action( 'wp_footer', 'mjf_dir_path' );

/**
 * Add footer paths using plugins_loaded
 */
function mjf_footer_paths_setup() {
	// add_action( 'get_footer', 'mjf_dir_path' );
}
add_action( 'plugins_loaded', 'mjf_footer_paths_setup' );

/**
 * Trying out filter hooks, changing title tag, content.
 */
function mjf_modify_title( $t ) {
	$desc = get_bloginfo( 'admin_email' );
	$sep = '-';

	$t .= $desc . $sep;

	return $t;
}
// add_filter( 'wp_title', 'mjf_modify_title', 10, 2 );

apply_filters( 'wp_title', 'Boogie' );
add_theme_support('title_tag');

function my_test_filter() {
	return 'Boogie';
}


function mjf_modify_content( $content ) {
	if ( is_single() ) { 
		$content .= '<p>Testing content filter.</p>';

		return $content;
	} else {
		return $content;
	}
}
add_filter( 'the_content', 'mjf_modify_content' );

/**
 * Adding menu item to dashboard
 */
function mjf_create_menu() {
	$page_title = 'MJF My Menu';
	$menu_title = 'MJF My Menu';
	$capability = 'manage_options';
	$menu_slug = __FILE__;
	$function = 'mjf_menuexampe_settings_page';
	$icon_url = '';
	add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url ); 
}

add_action( 'admin_menu', 'mjf_create_menu' );

function mjf_menuexampe_settings_page() {
	?>
	<div class="wrap">
		<h1>Test Menu Page</h1>
		<p>This took me a lot of time for being supid.</p>
	</div>
	<?php
}

/**
 * Adding submenu page(s)
 */
function mjf_add_submenus() {
	$parent_slug = __FILE__;
	$page_title = 'MJF A Submenu';
	$menu_title = 'MJF A Submenu';
	$capability = 'manage_options';
	$menu_slug = __FILE__ . '_page1';
	$function = 'mjf_submenu_1';

	add_submenu_page( $parent_slug, $page_title, $menu_title, $capability, $menu_slug, $function );
	add_submenu_page( __FILE__, 'About', 'About', 'manage_options', __FILE__ . '_page2', 'mjf_submenu2' );
}
add_action( 'admin_menu', 'mjf_add_submenus' );

function mjf_submenu_1() {
	?>
		<div class="wrap">
			<h1>A Submenu Page</h1>
			<p>Testing submenu page</p>
		</div>
	<?php
}

function mjf_submenu2() {
	?>
		<div class="wrap">
			<h1>Another Submenu Page</h1>
			<p>Testing submenu page 2</p>
		</div>
	<?php
}

/**
 * Add menu item to existing page
 */
function mjf_menu_existing_page() {
	add_theme_page( 'MJF Theme Test', 'MJF Theme Test', 'manage_options', 'mjf_test', 'mjf_theme_test_page' );
}
add_action( 'admin_menu', 'mjf_menu_existing_page' );

function mjf_theme_test_page() {
	?>
	<h1>MJF Theme Test Page</h1>
	<?php
}

/**
 * Add Dashboard widget
 */
function mjf_dashboard_widget() {
	$widget_id = 'mjf_my_db_widget'; // The CSS ID added to the widget DIV element 
	$widget_name = 'MJF My DB Widget'; // The name of your widget displayed in its heading 
	$callback = 'mjf_create_db_widget'; // Function to be called to display your widget
	$control_callback = ''; // The name of a function you create that will handle submission of widget options (configuration) forms, and will also display the form elements.
	$callback_args = ''; // Arguments to pass into your callback function. The callback will receive the $post object and whatever parameters are passed through this variable.
	wp_add_dashboard_widget( $widget_id, $widget_name, $callback, $control_callback, $callback_args );
}
add_action( 'wp_dashboard_setup', 'mjf_dashboard_widget' );

function mjf_create_db_widget() {
	?>
	<p>This is my first dashboard widget.</p>
	<?php
}

// global $wpdb;
// var_dump($wpdb);

// Continue: pg 123
