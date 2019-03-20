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
            <?php the_content(); ?>
        </main>

        <footer class="entry__footer">
            <?php 
                the_time( get_option('date_format') ); 
                edit_post_link();    
            ?>
        </footer>
    </article>

    <?php if ( comments_open() ) : ?>
    <div class="comments">
        <div class="comments__form">
            <?php comment_form(); ?>
        </div>
        <div class="comments__list">
            <h3>Comments</h3>
            <?php if ( get_comments_number() ) : ?>
                <p># of comments: <?php echo get_comments_number(); ?></p>
                <?php wp_list_comments( 
                    array('echo' => true), 
                    get_comments( array('post_id' => get_the_ID() ) ) 
                ); ?>
            <?php else : ?>
                <p>There are no comments for this article.</p>
            <?php endif; ?>
        </div>
    </div>
    <?php endif; ?>

<?php
    endwhile;
endif;
?>
</section>