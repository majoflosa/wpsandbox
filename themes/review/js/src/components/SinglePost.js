import BaseComponent from './BaseComponent';

export default class SinglePost extends BaseComponent {
    constructor( router, endpoint ) {
        super( router );

        this.endpoint = `${router.baseUrl}/wp-json/wp/v2/${endpoint}`
        this.element = document.querySelector( '#primary' );

        this.cacheDom();
        this.bindEvents();
        
        this.getPost();
    }

    getPost() {
        fetch( this.endpoint )
            .then( response => response.json() )
            .then( response => {
                this.post = response;
                this.render( this.post );

                this.cacheDom();
                this.bindEvents();

                this.contentLoaded( this.element );
            })
            .catch( err => {
                console.log(err.response);
                this.contentFailed( this.element );
            });
    }

    cacheDom() {
    }

    bindEvents() {}

    render( post ) {
        this.element.innerHTML = `
            <article class="entry">
                <header class="entry__header">
                    <h2 class="entry__title">
                        <a href="${post.link}" data-component="SinglePost" data-route="${post.slug}" data-endpoint="posts/${post.id}">
                            ${post.title.rendered}
                        </a>
                    </h2>
                </header>
                <main class="entry__body">${post.content.rendered}</main>
            </article>
        `;
    }
}