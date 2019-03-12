<?php
/* ============================================================
	Filter hooks functions
============================================================== */
/**
 * apply_filters( $tag, $value )
 *
 * Acts as a hook for filters implemented with add_filter. Equivalent to do_action
 *
 * @param string $tag  The name of the filter hook. 
 * @param string $value The parameter passed to any filters added to the hook
 */

/**
 * add_filter( $tag, $function, $priority, $accepted_args );
 *
 * Adds a filter to the specified filter hook ($tag)
 *
 * @param string $tag  The name of the filter hook.
 * @param string $function  The function name of the filter that you create to manipulate the output. 
 * @param string $priority  An integer that represents in what order your filter should be applied.
 * @param int $accepted_args  The number of parameters your filter function can accept
 */

// apply_filters( 'wp_title', $title, $sep, $seplocation );

function my_test_filter( $title, $sep ) {
	$name = 'Boogie';
	$title .= $sep . ' ' . $name;

	return $title;
}

add_filter( 'wp_title', 'my_test_filter', 10, 2 );
