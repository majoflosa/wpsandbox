<?php

/* ======================================================================================================
	METABOXES
====================================================================================================== */

/**
 * Add Metaboxes
 *
 * 1. create action that calls add_meta_box
 * 2. callback function that creates form. Needs $post as argument
 * 3. handler function that saves input data. Add to the 'save_post' action hook
 */
function mjf_metaboxes() {
	$id = 'mjf-meta-box'; // id attribute - required
	$title = 'Box Title'; // Box title -required
	$callback = 'mjf_meta_box_form'; // Callback function that creates form - required
	$post_type = 'post'; // post type where meta box should show (can also be 'dashboard') - required
	// $context = 'normal'; // Part of the page where box will show up (normal, advanced, side, ) - optional
	// $priority = 5; // position in page - optional
	// $callback_args = array(); // callback args - optional

	// create meta box
	add_meta_box( $id, $title, $callback, $post_type );
}
add_action( 'add_meta_boxes', 'mjf_metaboxes' );

// Callback funcion that outputs form
function mjf_meta_box_form( $post ) {
	$action = basename( __FILE__ );
	$name = 'mjf_postmeta_nonce';
	// hidden field for secure saving
	wp_nonce_field( $action, $name );
	$mjf_stored_meta = get_post_meta( $post->ID );
	// code for meta box form goes below
?>

	<div class="outer">
		<p>Instructions go here</p>
		<div class="meta-row">
			<div class="meta-th">
				<label for="mjf_meta" class="mjf_row-title">MJF-Meta</label>
			</div>
			<div class="meta-td">
			<?php 
				if ( ! empty( $mjf_stored_meta['mjf_meta'] ) ) {
					$mjf_meta_value = esc_attr( $mjf_stored_meta['mjf_meta'][0] );
				} else {
					$mjf_meta_value = '';
				}
			 ?>
				<input type="text" name="mjf_meta" id="mjf_meta" value="<?php echo $mjf_meta_value; ?>">
			</div>
		</div>			
	</div>

<?php 
}

function mjf_save_meta( $post_id ) {
	// Checks autosave
	$is_autosave = wp_is_post_autosave( $post_id );
	$is_revision = wp_is_post_revision( $post_id );
	$is_valid_nonce = ( isset($_POST['mjf_postmeta_nonce']) && wp_verify_nonce($_POST['mjf_postmeta_nonce'], basename( __FILE__ )) ) ? 'true' : false;

	// Exits script depending on save status
	if( $is_autosave || $is_revision || !$is_valid_nonce ) { return; }

	// Do this for every meta field to save
	if ( isset( $_POST['mjf_meta'] )) {
		// update post meta - $post_id, $meta_key, $meta_value, $prev_value
		update_post_meta( $post_id, 'mjf_meta', sanitize_text_field($_POST['mjf_meta']) );
	}
}
add_action( 'save_post', 'mjf_save_meta' );

/*
 * Using the WP Admin UI
 */
// div class="wrap"
// div id="message"
// input type="submit" name="Save" value="Save Options" class="button-primary"
// input type="submit" name="Save" value="Save Options" class="button-secondary"
// table class="form-table"
// table class="widefat"
// 
