<?php
/*
 * Plugin Name: MJF Theme Options
 * Plugin URI: http://maurojflores.com
 * Description: Experimenting with Settings API
 * Author: Mauricio J Flores
 * Author URI: http://maurojflores.com
 * Version: 1.0
*/

/* ==========================================================================================
 *	1. Set default options:
 * ========================================================================================== */
function mjf_default_options() {
	$options = array(
		'name' => 'Mauro',
		'instagram' => 'maurojflores',
		'image' => 'https://pbs.twimg.com/profile_banners/761711023610933248/1470445304/1500x500',
	);
	return $options;
}

/* ==========================================================================================
*	2. Save default options if none exist
* ========================================================================================== */
function mjf_theme_options_init() {
	$current_options = get_option( 'mjf_options' );
	$default_options = mjf_default_options();

	// check if each option exists among current options. If a new default has been added, include it and update 
	foreach ($default_options as $option => $value) {
		if ( !isset($current_options[$option]) ) {
			$current_options[$option] = $value;
		}
	}
	update_option( 'mjf_options', $current_options );
	// in_array(needle, haystack)
}
add_action( 'after_setup_theme', 'mjf_theme_options_init' );

/* ==========================================================================================
*	3. Add Theme Options page to Dashboard menu
* ========================================================================================== */
function mjf_theme_options() {
	$page_title = 'Theme Options';
	$menu_title = 'MJF Theme Options';
	$capability = 'edit_theme_options';
	$menu_slug = 'mjf_theme_options';
	$function = 'mjf_options_form';

	//Add submenu page to the Appearance main menu. File: wp-admin/includes/plugin.php
	add_theme_page( $page_title, $menu_title, $capability, $menu_slug, $function );
}
add_action( 'admin_menu', 'mjf_theme_options' );

/* ==========================================================================================
*	4. Callback function that creates the form in theme options page
* ========================================================================================== */
function mjf_options_form() {
	$current_options = get_option( 'mjf_options' );
	?>
<div class="wrap">
	<h1>MJF Theme Options</h1>

	<?php // check if settings have been updated
		if ( isset($_GET['settings-updated']) && $_GET['settings-updated'] ) { 
			echo '<div id="message" class="updated notice notice-success"><p>Settings saved succesfully.</p></div>'; 
		} // else { echo '<div id="message" class="notice notice-warning"><p>Testing</p></div>'; }

		//check for errors
		settings_errors( 'mjf_options_errors' );

		// if media library is needed
		wp_enqueue_media();
	?>

	<!-- submit/reset the form -->
	<form action="options.php" method="post" enctype="multipart/form-data">
	<?php
		// settings_fields( string $option_group );
		settings_fields( 'mjf_options' ); // Output nonce, action, and option_page fields for a settings page.
		// do_settings_sections( string $page );
		do_settings_sections( 'mjf_theme_options' ); // Prints out all settings sections added to a particular settings page.Should match with last argument of add_settings_section/field()
	?>
		<p class="submit">
			<input name="mjf_options[submit]" id="submit_options_form" type="submit" class="button-primary" value="<?php esc_attr_e( 'Save Settings', 'mjf' ); ?>">
			<input name="mjf_options[reset]" type="submit" class="button" value="<?php esc_attr_e( 'Reset Defaults', 'morazan' ); ?>">
		</p>
	</form>

</div><!-- .wrap -->
<?php } // end options form wrap  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

/* ==========================================================================================================
*	5. Declare each section of option fields and their respective fields to be displayed inside the form
* ========================================================================================================== */
function mjf_settings_init() {
	// Register a setting and its sanitization callback. File: wp-includes/option.php.
	// register_settings( string $option_group, string $option_name, callback $sanitize_callback = '' )
	register_setting( 'mjf_options', 'mjf_options', 'mjf_validate_input' );

	// Add a new section to a settings page. wp-admin/includes/template.php.
	// add_settings_section( string $id, string $title, string $callback, string $page or menu_slug )
	add_settings_section( 'general_options', 'General Options', 'general_options_title', 'mjf_theme_options' );

	// Register a settings field to a settings page and section.
	// add_settings_field( string $id, string $title, string $callback, string $page, string $section, array $args )
	add_settings_field( 'name', 'Name', 'general_options_name', 'mjf_theme_options', 'general_options' );
	add_settings_field( 'instagram', 'Instagram', 'general_options_ig', 'mjf_theme_options', 'general_options' );
	add_settings_field( 'image', 'Image', 'general_options_img', 'mjf_theme_options', 'general_options' );
}
add_action( 'admin_init', 'mjf_settings_init' );

/* ==========================================================================================
*	6. Callback functions for each settings section in 5
* ========================================================================================== */
function general_options_title() {
	echo '<p>Options for general information about your site.</p>';
}

/* ==========================================================================================
*	7. Callback functions for each settings field in 5
* ========================================================================================== */
function general_options_name() {
	$current_options = get_option( 'mjf_options' );
	?>
	<input type="text" size="40" name="mjf_options[name]" value="<?php echo $current_options['name']; ?>">
	<span class="description">Add your name as a theme option</span>
	<?php
}
function general_options_ig() {
	$current_options = get_option( 'mjf_options' );
	?>
	<input type="text" size="40" name="mjf_options[instagram]" value="<?php echo $current_options['instagram']; ?>">
	<span class="description">Add your instagram username</span>
	<?php
}
function general_options_img() {
	$current_options = get_option( 'mjf_options' );
	?>
	<input type="text" size="40" name="mjf_options[image]" id="image_attachment_id" value="<?php echo $current_options['image']; ?>">
	<input id="upload_image_button" type="button" class="button" value="<?php _e( 'Upload image' ); ?>" />
	<!-- <input type="hidden" name="image_attachment_id" id="image_attachment_id" value="<?php echo $current_options['image']; ?>"> -->
	<span class="description">Add an image</span>

	<div class='image-preview-wrapper'>
		<img id='image-preview' src='<?php echo $current_options['image']; ?>' height='100'>
	</div>
	<?php
}

/* ==========================================================================================
*	8. Sanitize callback in 5 register_settings()
* ========================================================================================== */
function mjf_validate_input( $input ) {
	$default_options = mjf_default_options();
	$current_options = get_option( 'mjf_options' );

	if ( $current_options ) {
		$valid_input = $current_options;
	} else {
		$valid_input = $default_options;
	}

	$submit = !empty( $input['submit'] ) ? true : false;
	$reset = !empty( $input['reset'] ) ? true : false;

	if ( $submit ) {
		// validate name
		if ( $input['name'] != '' && $input['name'] != $current_options['name'] ) {
			$valid_input['name'] = $input['name'];
		}

		// validate ig
		if ( $input['instagram'] != '' && $input['instagram'] != $current_options['instagram'] ) {
			$valid_input['instagram'] = $input['instagram'];
		}

		// validate img
		if ( $input['image'] != '' && $input['image'] != $current_options['image'] ) {
			$valid_input['image'] = $input['image'];
		}
	} elseif ( $reset ) {
		$valid_input = $default_options;
	}

	return $valid_input;
}

/* ==========================================================================================
*	9. Enqueue styles and scripts
* ========================================================================================== */
function mjf_enqueue_options_scripts() {
	wp_register_style( 'mjf_options_style', plugins_url( 'css/mjf_options_style.css', __FILE__ ) );
	wp_register_script( 'mjf_options_script', plugins_url( 'js/mjf_upload_media.js', __FILE__ ), array('jquery'));

	if ( 'appearance_page_mjf_theme_options' == get_current_screen()->id ) {
		wp_enqueue_style( 'mjf_options_style' );
		wp_enqueue_script( 'mjf_options_script' );
	}
}
add_action( 'admin_enqueue_scripts', 'mjf_enqueue_options_scripts' );
