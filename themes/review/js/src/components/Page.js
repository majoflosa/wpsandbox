import BaseComponent from './BaseComponent';

export default class Page extends BaseComponent {
    constructor( router ) {
        super( router );
        this.element = document.querySelector( '#primary' );
        
        this.render = this.render.bind( this );
        this.render();
    }

    render() {
        this.element.innerHTML = '<h1>Page Component</h1>';
    }
}