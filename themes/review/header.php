<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
    <header class="site-header">
        <h1 class="site-header__title <?php if ( !has_custom_logo() ) echo 'no-logo'; ?>">
            <span class="site-header__logo-wrap">
                <?php if ( has_custom_logo() ) the_custom_logo(); ?>
            </span>
            <a class="site-header__title-link" href="<?php echo esc_url( home_url('/') ); ?>">
                <?php bloginfo( 'name' ); ?>
            </a>
        </h1>

        <?php
            $nav_args = array(
                'menu'          => 178,
                'menu_class'    => 'site-header__nav-links',
                'menu_id'       => 'site-header__nav-links',
                'container'     => '',
                // 'container_class' => 'site-header-nav',
                // 'container_id'  => 'site-header-nav',
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
        ?>
        <nav id="site-header__nav" class="site-header__nav">
            <button class="responsive-nav-toggle">MENU</button>
            <?php wp_nav_menu( $nav_args ); ?>
        </nav>
    </header>

    <div id="page-wrap">