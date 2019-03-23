export default class Rest {
    constructor( baseUrl ) {
        this.baseUrl = baseUrl;

        this.posts = null;
        this.post = null;
        this.postRevisions = null;
        this.categories = null;
        this.tags = null;
        this.pages = null;
        this.page = null;
        this.comments = null;
        this.taxonomies = null;
        this.media = null;
        this.users = null;
        this.postTypes = null;
        this.postStatuses = null;
        this.settings = null;

        this.getPosts = this.getPosts.bind( this );
    }

    getPosts( args ) {
        const baseRoute = 'posts';
        
        let queryParams = [];
        if ( args && typeof args === 'object' ) {
            for ( let arg in args ) {
                queryParams.push( `${arg}=${args[arg]}` );
            }
        }
        
        const url = queryParams.length 
            ? `${this.baseUrl}/${baseRoute}?${queryParams.join('&')}`
            : `${this.baseUrl}/${baseRoute}`;
            
        return fetch( url )
            .then( response => {
                if ( response.ok ) return response.json();
                else throw new Error( response.statusText );
            })
            .catch( err => {
                console.error( 'Rest.getPosts() error: ', err );
                err.error = true;
                return err;
            });
    }

    getPost( args ) {
        const baseRoute = `posts/${args}`;
        
        // let queryParams = [];
        // if ( args && typeof args === 'object' ) {
        //     for ( let arg in args ) {
        //         queryParams.push( `${arg}=${args[arg]}` );
        //     }
        // }
        
        const url = `${this.baseUrl}/${baseRoute}`;
        // const url = queryParams.length 
        //     ? `${this.baseUrl}/${baseRoute}?${queryParams.join('&')}`
        //     : `${this.baseUrl}/${baseRoute}`;
            
        return fetch( url )
            .then( response => {
                if ( response.ok ) return response.json();
                else throw new Error( response.statusText );
            })
            .catch( err => {
                console.error( 'Rest.getPost() error: ', err );
                err.error = true;
                return err;
            });
    }

    createPost() {}

    updatePost() {}

    deletePost() {}


    getPages() {}

    getPage() {}

    createPage() {}

    updatePage() {}

    deletePage() {}
}




export const apiBase = 'http://localhost:8888/wpsandbox/wp-json//wp/v2/';
export const resources = {
    posts: `posts`,
    post: `posts`,
    postRevisions: `revisions`,
    categories: `categories`,
    tags: `tags`,
    pages: `pages`,
    page: `pages`,
    comments: `comments`,
    taxonomies: `taxonomies`,
    media: `media`,
    users: `users`,
    postTypes: `types`,
    postStatuses: `statuses`,
    settings: `settings`
};
// {
    // baseUrl: 'http://localhost:8888/wpsandbox/wp-json/',
    // version: '/wp/v2/',
// }

export const apiGetPosts = {
    baseRoute: 'posts',
    queryParams: {
        // context: view, // view, embed, edit
        // page: 1,
        per_page: 10, 
        // search: '',
        // after: ISO8601 date,
        // author: authorId,
        // author_exclude: authorId,
        // before: ISO8601 date,
        // exclude: IDs,
        // include: IDs,
        // offset: number,
        order: 'desc', // desc, asc
        orderby: 'date', // author, date, id, include, modified, parent, relevance, slug, title
        // slug: 'page-slug',
        // status: 'publish', 
        // categories: categories,
        // categories_exclude: categories,
        // tags: tags,
        // tags_exclude: tags,
        // sticky: ???
    },
}