<article <?php post_class( 'entry' ); ?>>

    <header class="entry__header">
        <?php the_title( '<h2 class="entry__title">', '</h2>' ); ?>
    </header>

    <main class="entry__body">
        <?php 
            the_content(); 

            wp_link_pages();
        ?>
    </main>

    <footer class="entry__footer">
        <?php edit_post_link(); ?>
    </footer>

</article>