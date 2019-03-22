// import { apiBase, apiGetPosts } from '../helpers/rest';
import Rest from '../helpers/Rest';
import BaseComponent from './BaseComponent';

export default class Sandbox extends BaseComponent {
    constructor( router ) {
        super( router );
        this.element = document.querySelector( '#primary' );
        this.http = new Rest();

        this.fetchData = this.fetchData.bind( this );
        this.render = this.render.bind( this );

        this.fetchData();
    }

    fetchData() {
        this.http.getPosts({ per_page: 5, order: 'asc' })
            .then( response => {
                if ( !this.http.posts.err ) this.render();
                else console.log( this.http.posts.err );
            });
    }

    render() {
        this.element.innerHTML = '<h1>Sandbox</h1>';
        console.log( this.http.posts );
    }

}