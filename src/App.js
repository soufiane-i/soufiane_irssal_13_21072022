import Router from './Router';
import {useState} from 'react'
import {Provider} from 'react-redux'
import {store} from './redux'

function App() {

  return (
    <Provider store={store}>
    <div id="app">
      <Router/>
    </div>
    </Provider>
  );
}

export default App;