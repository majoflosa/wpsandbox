<article <?php post_class( 'entry' ); ?>">
    <header class="entry__header">
        <?php 
            if ( is_singular() ) {
                the_title( '<h1 class="entry__title">', '</h1>' ); 
            } else {
                the_title( 
                    '<h2 class="entry__title"><a href="' . esc_url( get_the_permalink() ) . '">', 
                    '</a></h2>' 
                ); 
            }
        ?>
            
            <div class="entry__by-line">
                by <a href="" class="entry__author"><?php the_author_link(); ?></a>
            </div>

        <?php
            if ( has_post_thumbnail() ) {
                // sizes: thumbnail, medium, medium_large, large, full
                the_post_thumbnail( 'medium' );
            }

            echo '<div>';
            the_tags();
            // var_dump( get_the_tags() );
            // $tags = get_the_tags();
            // foreach( $tags as $tag ) {
            //     echo "<span><em>$tag->name</em></span>";
            // }

            the_category();
            // var_dump( get_the_category_list() );
            echo '</div>';
        ?>
    </header>
    <main class="entry__body">
        <hr>
        <?php
            if ( is_singular() ) {
                the_content(); 
            } 
            else {
                // mjf_filter_excerpt defined in functions.php
                // $filtered_excerpt = apply_filters( 
                //     'mjf_filter_excerpt', 
                //     get_the_excerpt(), // 1st arg in filter callback
                //     '[Testing filter] ' // 2nd arg in filter callback
                // );
                // echo $filtered_excerpt;
                the_excerpt();
            } 
        ?>
    </main>
    <footer class="entry__footer">
        <hr>
        <?php 
            the_time( get_option('date_format') ); 
            edit_post_link(); 
            if ( comments_open() ) : ?>
                <span> | Comments: <?php echo get_comments_number(); ?></span>
        <?php endif; ?>
        <div class="post-meta">
            <?php
                // var_dump( get_post_meta( get_the_ID() ) );    
                the_meta(); // ignores meta whose key starts with _
            ?>
        </div>
    </footer>
</article>