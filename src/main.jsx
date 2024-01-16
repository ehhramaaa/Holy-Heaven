import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/plugins/owlcarousel/owl.carousel.min.css';
import './assets/plugins/magnific-popup/magnific-popup.min.css';
import './assets/css/custom.css';
import './assets/css/style.css';

import { initThinBackend } from 'thin-backend';

// This needs to be run before any calls to `query`, `createRecord`, etc.
initThinBackend({
  // This url is different for each backend, this one points to 'holy-heaven'
  host: 'https://holy-heaven.thinbackend.app'
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
