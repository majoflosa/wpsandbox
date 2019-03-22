import BaseComponent from './BaseComponent';

export default class Nav extends BaseComponent {
    constructor( router ) {
        super( router );

        this.element = document.querySelector( '#site-header__nav' );
        this.navItems = [];

        this.getNavPages = this.getNavPages.bind( this );
        this.render = this.render.bind( this );

        this.getNavPages();
    }
    
    getNavPages() {
        fetch( `${this.router.baseUrl}/wp-json/wp/v2/pages?per_page=100&orderby=menu_order&order=asc` )
        .then( response => response.json() )
        .then( response => {
            this.navItems = response.filter( page => {
                return page.parent === 0;
            });

            this.render();
            this.contentLoaded( this.element );
        })
        .catch( err => {
            console.log(err);
            this.contentFailed( err, $element );
        });
    }

    render() {
        const $navContent = document.createElement( 'ul' );
        $navContent.id = 'site-header__nav-links';
        $navContent.classList.add( 'site-header__nav-links' );

        this.navItems.forEach( item => {
            let $link = document.createElement( 'li' );
            $link.id = `menu-item-${item.id}`;
            $link.classList.add( 'menu-item' );
            $link.innerHTML = `
                <span>
                    <a href="" data-component="Page" data-route="${item.slug}" data-endpoint="page/${item.id}">
                        ${item.title.rendered}
                    </a>
                </span> 
            `
            $navContent.appendChild( $link );
        });

        this.element.appendChild( $navContent );
    }
}