<?php
/* ============================================================
	Dashboard Menu
============================================================== */
/**
 * add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function = '', $icon_url = '', $position = null ); 
 *
 * Registers top level menu page to dashboard. The hook you should use is admin_menu.
 *
 * @param string $page_title  The title of the page as shown in the <title> tags 
 * @param string $menu_title  The name of your menu displayed on the dashboard 
 * @param string $capability  Minimum capability required to view the menu
 * @param string $menu_slug  Slug name to refer to the menu; should be a unique name
 * @param string $function  Function to be called to display the page content for the item
 * @param string $icon_url  URL to a custom image to use as the Menu icon 
 * @param string $position  Location in the menu order where it should appear
 */

function mjf_create_menu() {
	$page_title = 'MJF My Menu';
	$menu_title = 'MJF My Menu';
	$capability = 'manage_options';
	$menu_slug = __FILE__;
	$function = 'mjf_menuexampe_settings_page';
	$icon_url = plugins_url( '/images/wp_icon.png' );
	add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url ); 
}

add_action( 'admin_menu', 'mjf_create_menu' );

function mjf_menuexampe_settings_page() {
	// Output html here
}

/**
 * add_submenu_page( parent_slug, page_title, menu_title, capability, menu_slug, function = '' )
 *
 * Function Description
 *
 * @param string $parent_slug  The slug name for the parent menu
 * @param string $page_title  The text to be displayed in the title tags of the page when the menu is selected.
 * @param string $menu_title  The text to be used for the menu.
 * @param string $capability  The capability required for this menu to be displayed to the user.
 * @param string $menu_slug  The slug name to refer to this menu by (should be unique for this menu).
 * @param string $function  The function to be called to output the content for this page
 */

function mjf_add_submenus() {
	$parent_slug = __FILE__;
	$page_title = 'MJF A Submenu';
	$menu_title = 'MJF A Submenu';
	$capability = 'manage_options';
	$menu_slug = __FILE__ . '_page1';
	$function = 'mjf_submenu_1';

	add_submenu_page( $parent_slug, $page_title, $menu_title, $capability, $menu_slug, $function );
}
add_action( 'admin_menu', 'mjf_add_submenus' );

function mjf_submenu_1() {
	?>
		<div class="wrap">
			<h1>A Submenu Page</h1>
		</div>
	<?php
}

/**
 * add_MENUNAME_page( $page_title, $menu_title, $capability, $menu_slug, $function )
 * Add submenu item to existing page
 *
 * add_dashboard_page
 * add_posts_page
 * add_media_page
 * add_pages_page
 * add_comments_page
 * add_theme_page
 * add_plugins_page
 * add_users_page
 * add_management_page
 * add_options_page
 *
 * @param type  Description
 * @return returns
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