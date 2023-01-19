import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import markerReducer from './markerSlice';
import MyMap from './MyMap2';

const store = createStore(markerReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyMap />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
