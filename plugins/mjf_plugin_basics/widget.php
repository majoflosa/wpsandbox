<?php 
// 1. Create widget as class that extends base class WP_Widget
class MJF_Widget extends WP_Widget {
	// 1.1 set parameters in constructor and call parent construct
	function __construct() {
		$params = array(
			'description' => 'Describe what the widget does.',
			'name' => 'MJF_Widget',
		);

		// __construct( $id_base, $name, $widget_options = array(), $control_options = array() )
		parent::__construct( 'MJF_Widget', '', $params );
	}

	// 1.2 create form that takes widget options
	// $instance is an array of whatever users type into the inputs
	// extract $instance turns the array into individual variables
	public function form($instance) {
		extract($instance);
		?>
		<p>
			<!-- do this for each field -->
			<label for="<?php echo $this->get_field_id('title'); ?>">Title</label>
			<input 
				class="widefat" 
				id="<?php echo $this->get_field_id('title'); // sets the input id to 'title' ?>" 
				name="<?php echo $this->get_field_name('title'); // sets the input name to 'name' ?>" 
				value="<?php if(isset($title)) echo esc_attr($title); // if a title has already been save, add it as default value ?>"
			>
		</p>
		<!-- Next input here -->

		<?php
	}

	// 1.3 define what the widget outputs on the front end
	public function widget($args, $instance) {
		/*
		 * Don't override these, before & after title are set in register_sidebar()
		 * usually in functions.php
		Array $args(
			'before_title' => '<h3 class="mjf_widget_title">',
			'after_title' => '</h3>',
			'widget_id' => 'mjf_widget_1',
			'widget_name' => 'MJF_Widget',
		);*/
		extract($args);
		extract($instance);

		// escape instance inputs
		$title = apply_filters('widget_title', $title);
		// $description = apply_filters('widget_description', $description);

		// OPTIONAL: set default values for inputs
		if (empty($title)) $title = 'A default title';

		// Use extracted $args to construct the html to output
		echo $before_widget;
			echo $before_title . $title . $after_title;
			// echo $description, for example
		echo $after_widget;
	}

}

// 2. register the widget
function register_mjf_widget() {
	register_widget( 'MJF_Widget' );
}
add_action( 'widgets_init', 'register_mjf_widget' );