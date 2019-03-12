<?php
/**
 * Add dashboard widgets
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

/**
 * Dashboard widget with options (p. 105)
 */
function mjf_db_options_widget() {
	$id = 'mjf-options-widget';
	$name = 'MJF Options Widget';
	$callback = 'mjf_db_options_callback';
	$control_callback = 'mjf_db_control_callback';
	$callback_args = array();
	wp_add_dashboard_widget( $id, $name, $callback, $control_callback, $callback_args );
}
add_action( 'wp_dashboard_setup', 'mjf_db_options_widget' );

// $callback and $control_callback will usually take and save values from and to the database using get_option() and update_option()

