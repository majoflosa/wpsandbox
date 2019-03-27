<?php

function review_basic_posts_navigation() {
    if ( get_previous_posts_link() && !get_next_posts_link() ) {
        previous_posts_link();
    } elseif ( !get_previous_posts_link() && get_next_posts_link() ) {
        next_posts_link();
    } elseif ( get_previous_posts_link() && get_next_posts_link() ) {
        previous_posts_link();
        echo ' | ';
        next_posts_link();
    }
}



// function review_custom_post_navigation() {
//     $output = get_
// }
// add_filter( 'review_filter_post_navigation', 'review_custom_post_navigation', 10, 1 );