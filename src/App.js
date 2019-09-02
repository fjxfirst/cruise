import React, {Fragment} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store'
import Header from './components/header'
import Home from './page/home'
import Footer from './components/footer'

export default function App(){
    return (
      <Provider store={store}>
        <div id="app-wrap">
          <Header/>
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact component={Home}/>
            </Fragment>
          </BrowserRouter>
        </div>
        <Footer/>
      </Provider>
    );
}

