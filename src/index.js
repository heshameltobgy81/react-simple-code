import React from 'react';
import {render} from 'react-dom';
import App from './app';
import './css/index.scss';

// class App extends React.Component {
//     render() {
//        return (
//         <h4>This project uses webpack 4 as a build tool for a full stack React application. It contains the advanced features that increase the performance and decrease load times which can allow the powerful development and deployment of React applications.</h4>
//       )
//     }
// }

render (
  <App />,
  document.getElementById('root')

)
