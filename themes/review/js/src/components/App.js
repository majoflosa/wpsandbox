export default class App {
    constructor( apiRoot ) {
        this.initialRequestUrl = `${apiRoot}/posts`;
        this.posts = [];

        this.renderPosts = this.renderPosts.bind( this );
        this.cacheDom = this.cacheDom.bind( this );
        this.getPosts = this.getPosts.bind( this );

        this.cacheDom();
        this.getPosts();
    }

    cacheDom() {
        this.element = document.querySelector( '#primary' );
    }

    getPosts() {
        fetch( this.initialRequestUrl )
            .then( response => response.json() )
            .then( response => {
                this.posts = response;
                this.renderPosts( this.posts );
            })
            .catch( err => console.log(err) );
    }
        
    renderPosts( posts ) {
        console.log(posts);
        let content = '';
        posts.forEach( post => {
            content += `
                <article class="entry">
                    <header class="entry__header">
                        <h2 class="entry__title"><a href="${post.link}">${post.title.rendered}</a></h2>
                    </header>
                    <main class="entry__body">${post.excerpt.rendered}</main>
                </article>
            `;
            this.element.innerHTML = content;
        });
    }
}