<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
    <div id="page" class="page-wrap">
        
        <header class="site-header">
            <div class="site-header-logo">LOGO</div>
            <?php
                $nav_args = array(
                    'menu'          => 178,
                    'menu_class'    => 'site-nav-links',
                    'menu_id'       => 'site-nav-links',
                    'container'     => 'nav',
                    'container_class' => 'site-nav',
                    'container_id'  => 'site-nav',
                    'fallback_cb'   => 'wp_page_menu',
                    'before'        => '<span class="before-link-markup">',
                    'after'         => '</span>',
                    'link_before'   => '',
                    'link_after'    => '',
                    'echo'          => true,
                    'depth'         => 1,
                    // 'walker'        => ???
                    'theme_location' => 'main_nav',
                    'items_wrap'    => '<ul class="%1$s" id="%2$s" data-custom="This is a custom attr">%3$s</ul>',
                    'item_spacing'  => 'preserve'
                );
                wp_nav_menu( $nav_args );
            ?>
        </header>