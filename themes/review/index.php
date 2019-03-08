<?php get_header(); ?>
<!-- <?php // global $wp_query; ?>
<pre><?php // print_r( $wp_query ); ?></pre> -->

<div class="template-label"><small>index.php</small></div>


<section id="primary" class="primary">

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
 * the_permalink(), get_permalink(), get_post_permalink(), permalinkk_anchor()
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

    <article <?php post_class( 'entry' ); ?>">
        <header class="entry__header">
            <?php the_title( 
                '<h2 class="entry__title"><a href="' . esc_url( get_the_permalink() ) . '">', 
                '</a></h2>' 
            ); ?>
        </header>
        <main class="entry__body">
            <?php the_excerpt(); ?>
        </main>
        <footer class="entry__footer">
            <?php the_time( get_option('date_format') ); ?>
            <?php edit_post_link(); ?>
        </footer>
    </article>

<?php
        }
    } else {
        esc_html_e( 'There are currently no posts.' );
    }
?>

</section>

<?php get_footer(); ?>