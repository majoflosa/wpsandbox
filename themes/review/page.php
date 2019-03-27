<?php get_header(); ?>
<div class="template-label"><small>page.php</small></div>

<div id="primary" class="primary">

    <?php
        while ( have_posts() ) : 
            the_post();

            get_template_part( 'template-parts/content', 'page' );

            comments_template();
        endwhile;
    ?>

</div>

<?php get_footer(); ?>