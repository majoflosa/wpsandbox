import '../../sass/style.sass';

import App from './components/App';

const apiRoot = 'http://localhost:8888/wpsandbox/wp-json/wp/v2';
const app = new App( apiRoot );
