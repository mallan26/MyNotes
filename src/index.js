import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store/configureStore'
import App from './App'

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
  //localStorage.setItem("userDetails" , JSON.stringify(store.getState()))
  console.log('update store', store.getState())
})

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root')
  )
