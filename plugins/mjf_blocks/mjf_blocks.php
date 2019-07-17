<?php
/**
 * Plugin Name: MJF Blocks
 * Description: Creates custom Gutenberg blocks
 */

add_action( 'enqueue_block_editor_assets', 'mjf_enqueue_block_editor_assets' );
function mjf_enqueue_block_editor_assets() {
    wp_register_script(
        'mjf_blocks_bundle',
        plugins_url( '/blocks/dist/bundle.js', __FILE__ ),
        array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api' ),
        time()
    );

    wp_enqueue_script( 'mjf_blocks_bundle' );
}

add_action( 'enqueue_block_assets', 'mjf_enqueue_block_assets' );
function mjf_enqueue_block_assets() {
    wp_register_style(
        'mjf_blocks',
        plugins_url( '/blocks/dist/blocks-main.css', __FILE__ )
    );

    wp_enqueue_style( 'mjf_blocks' );
}