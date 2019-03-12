<?php
/**
 * add_option ( string $option, mixed $value = '', string $deprecated = '', string $autoload = 'yes' )
 *
 * Adds option/value pair to the options database table
 * Checks whether the option has already been added, returns false if it exists
 * Checks if name is protected, and dies with error if it is
 *
 * @param string $option  Name of option to be added; use name must be lowercase, no spaces
 * @param mixed $value  Value for this options
 * @param string $deprecated  leave blank
 * @return bool true on success, false on failure
 */
add_option( 'mjf_font_styles', 'red' );
add_option( 'mjf_font_styles', 'red', '', 'yes' );

/**
 * update_option( string $option, mixed $new_value, mixed $autoload = 'yes' )
 *
 * Update a named option/value pair to the options database table
 * If option does not exist, uses add_option to create it
 *
 * @param string $option  Name of the option to update
 * @param mixed $new_value  The new value for this option name
 * @param mixed $autoload  Whether to load the option when WP starts up
 * @return bool true on success, false on failure
 */
update_option( 'default_comment_status', 'closed' );

/**
 * get_option( string $option, mixed $default = false )
 *
 * Retrieves an option value based on the option name
 * If option does not exist, false is returned
 * 
 * @param string $option  Name of option to retrieve
 * @param mixed $default  Default value to return if option doesn't exist  
 * @return mixed  value set for option, false on failure
 */
get_option( 'mjf_font_styles' );

// check if option exists
if ( get_option( 'mjf_font_styles' ) !== false ) {
	// option exists
	$my_option = get_option( 'mjf_font_styles' );
} else {
	// option does not exist
	add_option( 'mjf_font_styles', 'red' );
}

/**
 * delete_option( string $option )
 *
 * Safely removes name/value pair from options database
 *
 * @param string $option  Name of option to remove
 * @return bool  true on success, false on failure or option does not exist
 */
delete_option( 'my_option' );