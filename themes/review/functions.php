<?php

/**
 * Setup 
 */
function rev_setup() {
    add_theme_support( 'post-thumbnails' );

    // to support all formats, get_post_format_slugs() returns all post formats
    // otherwise pass array of specific post formats
    add_theme_support( 'post-formats', get_post_format_slugs() );

    add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );

    add_theme_support( 'custom-logo' );

    add_theme_support( 'custom-header-uploads' );
    
    add_theme_support( 'custom-header' );
    
    add_theme_support( 'custom-background' );
    
    add_theme_support( 'title-tag' );

    add_theme_support( 'automatic-feed-links' );

    add_theme_support( 'customize-selective-refresh-widgets' );

    // add_theme_support( 'starter-content' );

    register_nav_menus( array(
        'main_nav' => 'Main Navigation'
    ) );
}
add_action( 'after_setup_theme', 'rev_setup' );

/** 
 * Widgets
 */
function rev_widget_areas_init() {
    register_sidebar( array(
        'name' => 'Main Sidebar',
        'id' => 'main-sidebar',
        'description' => 'This is the main sidebar',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>'
    ) );
}
add_action( 'widgets_init', 'rev_widget_areas_init' );

/**
 * Scripts and styles
 */
function review_scripts() {
    $loadInFooter = true; // true by default
    $version = $_SERVER['DOCUMENT_ROOT'] === '/Applications/MAMP/htdocs' ? time() : '0.0.1';
    
    wp_enqueue_style( 'review-style', get_stylesheet_uri(), array(), $version );
    // wp_enqueue_script( 'unique-handle', get_stylesheet_directory_uri, array(), $version, $loadInFooter );
}
add_action( 'wp_enqueue_scripts', 'review_scripts' );


// Filters
function someFilterCallback( $string, $arg1 ) {
    return "{$arg1} - {$string}";
}
add_filter( 'mjf_filter_excerpt', 'someFilterCallback', 10, 2 );