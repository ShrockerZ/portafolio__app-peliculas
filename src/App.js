import React from 'react';
import { BrowserRouter as Router,Switch,Route  } from "react-router-dom";
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import Home from './pages/home';
import Favorite from './pages/favorite';
import Detail from './pages/detail';
import {LocalStorage} from './context/LocalStorageContext'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store';

import 'react-toastify/dist/ReactToastify.css';
import './styles/app.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <LocalStorage>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/favorites" component={Favorite} />
              <Route exact path="/detail/:id" component={Detail} />
              <Route exact path="*" component={Home} />
            </Switch>
            <ToastContainer 
                position="top-left"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover/>
          <Footer />
        </LocalStorage>
      </Router>
    </Provider>
  );
}

export default App;
