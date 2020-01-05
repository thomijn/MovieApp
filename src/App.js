import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Main from './routes/Main';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Main />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Router>
    </div >
  );
}

export default App;
