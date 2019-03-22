export default class Error404 {
    constructor() {
        this.element = document.querySelector( '#primary' );
        this.render();
    }

    render() {
        this.element.innerHTML = '<h1>Page not found</h1>';
    }
}