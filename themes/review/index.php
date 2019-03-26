<?php get_header(); ?>
<!-- <?php // global $wp_query; ?>
<pre><?php // print_r( $wp_query ); ?></pre> -->

<div class="template-label"><small>index.php</small></div>

<?php // echo is_front_page() ? '<p>is front page</p>' : '<p>is not front page</p>'; ?>

<section id="primary" class="primary">

<div class="posts-navigation posts-navigation-top">
    <?php review_basic_posts_navigation(); ?>
</div>

<?php

    if ( have_posts() ) {
        while ( have_posts() ) {
            /**
             * $post
             * 
             * ID, post_author, post_date, post_date_gmt, post_content, 
             * post_title, post_excerpt, post_status, comment_status, 
             * ping_status, post_password, post_name, to_ping, pinged,
             * post_modified, post_modified_gmt, post_content_filtered,
             * post_parent, guid, menu_order, post_type, post_mime_type,
             * comment_count, filter
             */
            the_post();

/**
 * Post template tags
 * 
 * body_class(), post_class(), sticky_class()
 * previous_post_link(), previous_posts_link(), next_post_link(), next_posts_link(),
 * previous_image_link(), next_image_link(), 
 * post_password_required(),
 * posts_nav_link(),
 * single_post_title(),
 * the_ID(),
 * the_title(), get_the_title(), the_title_rss(), the_title_attribute()
 * the_permalink(), get_permalink(), get_post_permalink(), permalink_anchor()
 * has_post_thumbnail(), the_post_thumbnail(), get_the_post_thumbnail(), get_post_thumbnail_id()
 * the_content(), the_content_rss(), the_excerpt(), the_excerpt_rss()
 * the_date(), get_the_date(), the_date_xml(), the_time(), single_month_title()
 * the_category(), the_category_rss(),
 * the_meta(), the_tags()
 * the_modified_date(), the_modified_time(), the_modified_author(), 
 * the_shortlink(), wp_get_shortlink()
 * the_attachment_link(), get_attachment_link(), wp_get_attachment_link(), is_attachment()
 * wp_attachment_is_image(), wp_get_attachment_image(), wp_get_attachment_img_src(), wp_get_attachment_metadata()
 * the_search_query()
 * wp_link_pages(), 
 * edit_post_link(), get_edit_post_link()
 */
?>
    
<?php get_template_part( 'template-parts/content', get_post_type() ); ?>

<?php
        } // end while
    } else {
        esc_html_e( 'There are currently no posts.' );
    }
?>

<div class="posts-navigation posts-navigation-bottom">
    <?php
        the_posts_pagination();
        // previous_posts_link();
        // echo ' | ';
        // next_posts_link();
    ?>
</div>

</section>

<?php get_footer(); ?>