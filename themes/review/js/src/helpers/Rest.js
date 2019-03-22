export default class Rest {
    constructor() {
        this.baseUrl = 'http://localhost:8888/wpsandbox/wp-json/wp/v2';
        this.baseRoute = '';
        this.queryParams = [];
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
    }

    getPosts( args ) {
        this.baseRoute = 'posts';
        
        if ( args && typeof args === 'object' ) {
            for ( let arg in args ) {
                this.queryParams.push( `${arg}=${args[arg]}` );
            }
        }
        
        const url = `${this.baseUrl}/${this.baseRoute}?${this.queryParams.join('&')}`;
        return fetch( url )
            .then( response => response.json() )
            .then( response => this.posts = response )
            .catch( err => this.posts = { err } );
    }
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