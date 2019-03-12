<?php 

/**
 * register_activation_hook()
 *
 * Executes when plugin referred to is activated. Useful for creating default settings on activation
 *
 * @param string(required) $file  Path to the primary plugin file
 * @param string(required) $function  The function to be executed when the plugin is activated
 */
$file = __FILE__;
$function = 'do_activation_stuff';

register_activation_hook( $file, $function );

function do_activation_stuff() {
	// code here
}

/**
 * register_deactivation_hook
 *
 * Executes when plugin referred to is deactivated.
 *
 * @param string(required) $file  Path to the primary plugin file
 * @param string(required) $function  The function to be executed when the plugin is activated
 */
register_deactivation_hook( $file, $function );


// ===================================================
// 	UNINSTALL
// ===================================================
// On a separate unistall.php file:
// If uninstall not called from WordPress exit
if( !defined( ‘WP_UNINSTALL_PLUGIN’ ) )
 exit ();

// Delete option from options table
delete_option( ‘boj_myplugin_options’ );

//remove any additional options and custom tables


/**
 * register_uninstall_hook
 *
 * Executes when plugin is deleted
 *
 * @param string(required) $file  Path to the primary plugin file
 * @param string(required) $function  The function to be executed when the plugin is activated
 */
register_deactivation_hook( $file, $function );

?>