import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ? : user defined js scripts
// window.addEventListener("load",function(){})
// import './assets/js/jquery.min.js';
// import './assets/js/jquery.easing.1.3.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/jquery.waypoints.min.js';
// import './assets/js/jquery.stellar.min.js';
// import './assets/js/jquery.easypiechart.min.js';
// // import './assets/js/google_map.js';
// import './assets/js/main.js';
// // import './assets/js/naye2m.js';
// import './assets/js/modernizr-2.6.2.min.js';
// import './assets/js/respond.min.js';


