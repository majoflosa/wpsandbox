<?php
/* Include this file in functions.php */

class My_Custom_Nav_Walker extends Walker_Nav_Menu {

    public function start_lvl( &$output, $depth = 0, $args = array() ) {
        $output .= '<ul class="my-custom-nav">';
    }

    public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $output .= '<li class="my-custom-item">';
        $output .= $args->before;
        $output .= '<a href="' . $item->url . '">';
        $output .= $args->link_before . $item->title . $args->link_after;
        $output .= '</a>';
        $output .= $args->after;
    }

    public function end_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $output .= '</li>';
    }

    public function end_lvl( &$output, $depth = 0, $args = array() ) {
        $output .= '</ul>';
    }

}