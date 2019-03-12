<?php

/**
 * Basic shortcode
 */
function mjf_callback_function() {
	// ALWAYS return; don't echo!!
	$output = 'The shortcode output';
	return $output;
}
// output by [code_tag]
add_shortcode( 'code_tag', 'mjf_callback_function' );


/** 
 * shortcode with atts
 * 
 * @param $atts | array | whatever attributes the user gives the shortcode
 */
function mjf_shortcode_atts( $atts ) {
	// ex.: if [mjf_scode name="Mauricio"]: 
	// $atts = array( 'name' => 'Mauricio' )
	
	// to set default atts:
	if ( !isset($atts['website']) ) $atts['website'] = 'http://www.maurojflores.com';

	return '<a href="' . $atts['website'] . '">Link</a>';
}
// output by [mjf_scode]:
add_shortcode( 'mjf_scode', 'mjf_shortcode_atts' );


/**
 * Shortcode with atts and content
 *
 * Shortcode is used with opening and closing with content in between, like html tags
 *
 * @param array | $atts
 * @param string | $content | Content inserted by user between opening and closing shortcode "tags"
 */
function mjf_atts_and_content() {
	//default $atts
	if ( !isset($atts['website']) ) { $atts['website'] = 'http://www.maurojflores.com'; };
	//default content:
	if ( empty($content) ) { $content = 'Visit my website'; };
	
	// [mjf_content_scode]Visit my website[/mjf_content_scode]
	return '<a href="' . $atts['website'] . '">' . $content . '</a>';
}
// output by [mjf_content_scode]
add_shortcode( 'mjf_content_scode', 'mjf_atts_and_content' );


/**
 * shortcode_atts
 *
 * set default values for atts more efficiently
 * An array of default atts is compared with user input atts
 *
 * @param array $defaults
 * @param var $atts  values the function is comparing against, set by the shortcode user
 * @return returns
 */

$defaults = array(
	'website'	=> 'http://www.maurojflores.com',
	// optionally, a default for content can be set here 
	// and use $defaults['content'] instead of $content
	'content' => !empty($content) ? $content : 'Default content here',
);

// storing defaults to override $atts input by user
// if input $atts is different from $defaults,
// the input $atts are preserved
$atts = shortcode_atts( $defaults, $atts );

extract($atts); // use atts as individual vars
// return '<a href="' . $website . '">' . $content . '</a>';

// To enable shortcodes in widgets, add this code to your 
// theme’s functions.php file or a site-specific plugin.
add_filter('widget_text','do_shortcode');
