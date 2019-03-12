<?php
/* ============================================================
	Action hooks functions
============================================================== */
/**
 * do_action( $tag, $arg = '');
 * do_action_ref_array( $tag, array $args);
 *
 * Creates a hook, telling where to execute actions.
 *
 * @param string $tag  The name of the action hook
 * @param string $arg  Value(s) passed to registered actions
 */



/**
 * add_action( $tag, $function, $priority, $accepted_args = 1 );
 *
 * Register action to execute on specified hook ($tag parameter)
 *
 * @param string $tag  The name of the action hook your function executes on. 
 * @param string $function  The name of your function that WordPress calls. 
 * @param string $priority  An integer that represents the order in which the action is fired
 * @param int $accepted_args  The number of parameters the action hook will pass to your function
 */

/**
 * remove_action( $tag, $function, $priority, $accepted_args = 1);
 *
 * Undoes add_action. Parameters must exactly match corresponding action.
 */

/**
 * remove_all_actions( $tag, $priority)
 *
 * Removes all actions from a hook. If priority is set, only actions of that priority are removed.
 */

/**
 * has_action( $tag, $function_to_check )
 *
 * Check if specified hook ($tag) has action registered ($function_to_check)
 */

/**
 * did_action( $tag )
 *
 * Checks if a hook has already executed
 *
 * @param type  Description
 * @return returns
 */


/* ============================================================
	Common action hooks
============================================================== */

// plugins_loaded: fired after most of the WordPress files are loaded but before the pluggable functions and WordPress starts executing anything

// init: fired after most of WordPress is set up

// admin_menu: called only when an administration page loads

// template_redirect: It is executed on the front-end just before the theme template is chosen for the particular page view

// wp_head

// wp_footer

// get_footer