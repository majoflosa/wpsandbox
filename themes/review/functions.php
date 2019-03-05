<?php

function review_scripts() {
    wp_enqueue_style( 'review-style', get_stylesheet_uri(), array(), '0.0.1' );
}
add_action( 'wp_enqueue_scripts', 'review_scripts' );