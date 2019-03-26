<?php get_header(); ?>
<div class="template-label"><small>single.php</small></div>

<section id="primary" class="primary">
<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
?>

    <article <?php post_class('entry single-entry'); ?>>
        <header class="entry__header">
        <?php the_title(
            '<h1 class="entry__title">',
            '</h1>'
        ); ?>
        </header>

        <main class="entry__body">
            <hr>
            <?php the_content(); ?>
        </main>

        <footer class="entry__footer">
            <hr>
            <?php 
                the_time( get_option('date_format') ); 
                edit_post_link();    
            ?>
        </footer>
    </article>

    <?php 
        $post_nav_args = array(
            'prev_text' => '« %title',
            'next_text' => '%title »'
        );

        the_post_navigation( $post_nav_args ); 
    ?>
    
    <?php comments_template(); ?>
    

<?php
    endwhile;
endif;
?>
</section>