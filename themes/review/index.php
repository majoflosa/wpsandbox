<?php get_header(); ?>

<h1>Index</h1>

<?php
if ( get_theme_support('post-thumbnails') ) {
    echo 'Post thumbnails are supported<br>';
} else {
    echo 'Post thumbnails are NOT supported<br>';
}

$post_formats_slugs = get_post_format_slugs();
echo 'Post format slugs: ';
print_r( $post_formats_slugs );

$post_formats_strings = get_post_format_slugs();
echo 'Post format strings: ';
print_r( $post_formats_strings );

echo 'Theme starter content: ',
$theme_support = get_theme_support( 'starter-content' );
echo $theme_support[0];


// function test( $something ) {
//     echo 'Num args: ' . func_num_args() . '<br>';
//     echo 'Get args: ' . func_get_args() . '<br>';
//     $sliced = array_slice( func_get_args(), 1 );
//     echo 'sliced: ';
//     print_r( $sliced );
// }
// test( 'foo', 'bar', 'baz' );
?>

<?php get_footer(); ?>