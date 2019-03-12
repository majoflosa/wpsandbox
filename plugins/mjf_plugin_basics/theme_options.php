<?php
/*
 * Search for:
 * 	- get_option()
 * 	- update_option()
 * 	- add_theme_page()
 * 	- settings_errors()
 * 	- settings_fields()
 * 	- do_settings_sections()
 * 	- register_settings()
 * 	- add_settings_section()
 * 	- add_settings_field()
 */

/* ======================================================================================================
	SETTINGS/OPTIONS PAGE
====================================================================================================== */

// 1. Set default options:
function mjf_default_options() {
	$options = array(
		'color' => 'red',
		'size' => 24,
	);
	return $options;
}


// 2. Save default options if none exist - - - - - - - - - - - - - - - - - - - - - - - - - - -
function mjf_theme_options_init() {
	// get_option( string $option, mixed $default = false )
	// Retrieves an option value based on an option name. File: wp-includes/option.php

	// update_option( string $option, mixed $value, string/bool $autoload = null )
	// Update the value of an option that was already added. Returns true/false on success/fail
	// IMPORTANT: escape $option and $value before updating

	// when theme options page is loaded, check if options exist with get_option()
	// if not, set options to defaults with update_option() ?

}
// add_action( 'after_setup_theme', 'mjf_theme_options_init' );

// 3. Add Theme Options page to Dashboard menu - - - - - - - - - - - - - - - - - - - - - - - - - - -
function mjf_theme_options() {
	$page_title = 'Theme Options'; // The text to be displayed in the title tags of the page when the menu is selected.
	$menu_title = 'Theme Options'; // The text to be used for the menu.
	$capability = 'edit_theme_options'; //  The capability required for this menu to be displayed to the user.
	$menu_slug = 'theme_options'; //  The slug name to refer to this menu by (should be unique for this menu).
	$function = 'mjf_options_form'; // The callback function to be called to output the content for this page.

	//Add submenu page to the Appearance main menu. File: wp-admin/includes/plugin.php
	add_theme_page( $page_title, $menu_title, $capability, $menu_slug, $function );
}
// add_action( 'admin_menu', 'add_theme_options' );

// 4. Callback function that creates the form in theme options page
function mjf_options_form() {
	// title

	// check if settings have been updated
	// if ( isset($_GET['settings-updated']) && $_GET['settings-updated'] ) { echo 'Settings saved successfully.'; }

	// check for errors
	// Outputs a div for each error retrieved by get_settings_errors(). File: wp-admin/includes/template.php
	// settings_errors(string $setting = '', bool $sanitize = false, bool $hide_on_update = false);

	// open form and do settings fields:

	// Output nonce, action, and option_page fields for a settings page. File: wp-admin/includes/plugin.php
	// settings_fields( string $option_group );

	// Prints out all settings sections added to a particular settings page. File: wp-admin/includes/template.php
	// do_settings_sections( string $page );

	/* submit/reset the form
	<p class="submit">
		<input name="mjf_options[submit]" id="submit_options_form" type="submit" class="button-primary" value="<?php esc_attr_e( 'Save Settings', 'mjf' ); ?>">
		<input name="mjf_options[reset]" type="submit" class="button" value="<?php esc_attr_e( 'Reset Defaults', 'morazan' ); ?>">
	</p>
	*/
}

// 5. Declare each section of option fields and their respective fields to be displayed inside the form
function mjf_settings_init() {
	// Register a setting and its sanitization callback. File: wp-includes/option.php.
	// register_settings( string $option_group, string $option_name, callback $sanitize_callback = '' )

	// Add a new section to a settings page. wp-admin/includes/template.php.
	// add_settings_section( string $id, string $title, string $callback, string $page or menu_slug )

	// Register a settings field to a settings page and section.
	// add_settings_field( string $id, string $title, string $callback, string $page, string $section, array $args )
}
// add_action( 'admin_init', 'morazan_settings_init' );

// 6. Callback functions for each settings section in 5
function mjf_section_title() {
	// output title
}

// 7. Callback functions for each settings field in 5
function mjf_some_option_field() {

}

// 8. Validate input; sanitize callback in 5 register_settings()
function mjf_validate_options( $input ) {
	$default_options = mjf_default_options();
	$valid_input = $default_options;
	$mjf_theme_options = get_option( 'mjf_options' );

	$submit = !empty( $input['submit'] ) ? true : false;
	$reset = !empty( $input['reset'] ) ? true : false;

	if ( $submit ) {
		// do this for each option
		// REVISE: this conditional seems strange
		if ( $mjf_theme_options['option_name'] != $input['option_name'] && $mjf_theme_options['option_name'] != '' )
			$valid_input['option_name'] = $default_options['option_name'];
		// there should be an else here?
		$valid_input['option_name'] = $input['option_name'];
	} else {
		// if not submitted, therefore reset?
		$valid_input = $default_options;
	}
	return $valid_input;
}

// 9. Add styles and scripts
function mjf_enqueue_options_scripts() {
	wp_register_style();
	wp_register_script();

	if ( get_current_screen()->id == 'appearance_page_theme_options' ) {
		wp_enqueue_style();
		wp_enqueue_script();
	}
}
add_action( 'admin_enqueue_scripts', 'mjf_enqueue_options_scripts' );