<?php if ( post_password_required() ) return false; ?>

<?php if ( comments_open() ) : ?>
    <div class="comments">
        <div class="comments__form">
            <?php comment_form(); ?>
        </div>
        <div class="comments__list">
            <h3>Comments</h3>
            <?php if ( have_comments() ) : ?>
                <p># of comments: <?php echo get_comments_number(); ?></p>
                <?php the_comments_navigation(); ?>
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