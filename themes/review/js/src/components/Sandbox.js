import Rest from '../helpers/Rest';
import BaseComponent from './BaseComponent';

export default class Sandbox extends BaseComponent {
    constructor( props ) {
        super( props );
        this.data = null;
        this.baseUrl = 'http://localhost:8888/wpsandbox/wp-json/wp/v2';
        // this.element = document.querySelector( '#primary' );
        
        // this.authenticate = this.authenticate.bind( this );
        this.fetchData = this.fetchData.bind( this );
        this.postData = this.postData.bind( this );
        this.render = this.render.bind( this );
        
        // this.authenticate();
        // this.fetchData();
        // this.postData();
    }
    
    onInit() {
        console.log( 'Sandbox init' );
        this.element = document.querySelector( '#primary' );

        this.render();

        this.cacheDom();
        this.bindEvents();
    }

    cacheDom() {
        this.DOM.button = document.querySelector( '#create-post' );
    }

    bindEvents() {
        this.DOM.button.addEventListener( 'click', () => this.fetchData() );
    }

    async fetchData() {
        try {
            let data = await fetch( 'http://localhost:8888/wpsandbox/wp-json/wp/v2/posts' );
            data = await data.json();

            console.log( 'response: ', data );
        } catch (err) {
            console.log( err );
        }
    }

    async postData() {
        try {
            let response = await fetch( `${this.baseUrl}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    // 'Authorization': wpSettings.nonce, 
                    'X-WP-Nonce': wpSettings.nonce
                },
                body: JSON.stringify({
                    title: 'Post via REST API',
                    content: 'Testing post creation with REST',
                    status: 'publish'
                })
            });
            response = response.json();
            console.log( 'post response: ', response );
        } catch( err ) {
            console.log( err );
        }
    }

    render() {
        console.log( 'sandbox render' );
        this.element.innerHTML = `
            <h1>Sandbox</h1>
            <button id="create-post">Create Post</button>
        `;
    }

}