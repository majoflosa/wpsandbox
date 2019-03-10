<article <?php post_class( 'entry' ); ?>">
    <header class="entry__header">
        <?php the_title( 
            '<h2 class="entry__title"><a href="' . esc_url( get_the_permalink() ) . '">', 
            '</a></h2>' 
        ); ?>
    </header>
    <main class="entry__body">
        
        <?php
            if ( is_singular() ) the_content(); 
            else the_excerpt();
        ?>
    </main>
    <footer class="entry__footer">
        <?php the_time( get_option('date_format') ); ?>
        <?php edit_post_link(); ?>
        <?php if ( comments_open() ) : ?>
        <span> | Comments: <?php echo get_comments_number(); ?></span>
        <?php endif; ?>
    </footer>
</article>