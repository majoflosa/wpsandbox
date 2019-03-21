export default class Nav {
    constructor( router ) {
        this.element = document.querySelector( '#site-header__nav' );
        this.router = router;
        this.navItems = [];

        this.getNavPages = this.getNavPages.bind( this );
        this.render = this.render.bind( this );

        this.getNavPages();
    }
    
    getNavPages() {
        fetch( `${this.router.baseUrl}/wp-json/wp/v2/pages?per_page=100&orderby=menu_order&order=asc` )
        .then( response => response.json() )
        .then( response => {
            console.log( 'pages: ', response );
            this.navItems = response.filter( page => {
                return page.parent === 0;
            });
            this.render();
        })
        .catch( err => console.log(err) );
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
                <span><a href="" data-component="Page" data-route="${item.slug}" data-endpoint="">${item.title.rendered}</a></span> 
            `
            $navContent.appendChild( $link );
        });
        /*
        navContent.innerHTML = `
            <li id="menu-item-1759" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1759">
                <span class="before-link-markup">
                    <a href="http://localhost:8888/wpsandbox/" aria-current="page">Home</a>
                </span>
            </li>
            <li id="menu-item-1760" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1760">
                <span class="before-link-markup">
                    <a href="http://localhost:8888/wpsandbox/blog/">a Blog page</a>
                </span>
            </li>
            <li id="menu-item-1761" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1761">
                <span class="before-link-markup">
                    <a href="http://localhost:8888/wpsandbox/front-page/">Front Page</a>
                </span>
            </li>
            <li id="menu-item-1762" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1762">
                <span class="before-link-markup">
                    <a href="http://localhost:8888/wpsandbox/about/">About The Tests</a>
                </span>
            </li>
            <li id="menu-item-1766" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1766">
                <span class="before-link-markup">
                    <a href="http://localhost:8888/wpsandbox/level-1/">Level 1</a>
                </span>
            </li>
            <li id="menu-item-1769" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769">
                <span class="before-link-markup">
                    <a href="http://localhost:8888/wpsandbox/lorem-ipsum/">Lorem Ipsum</a>
                </span>
            </li>
            <li id="menu-item-1791" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1791">
                <span class="before-link-markup">
                    <a href="http://localhost:8888/wpsandbox/page-a/">Page A</a>
                </span>
            </li>
            <li id="menu-item-1792" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1792">
                <span class="before-link-markup">
                    <a href="http://localhost:8888/wpsandbox/page-b/">Page B</a>
                </span>
            </li>
        `;
        */

        this.element.appendChild( $navContent );
    }
}