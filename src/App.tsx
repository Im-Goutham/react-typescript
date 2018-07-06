import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './pages/Home';
import Login from './pages/Login';

import { persistor,store} from './store';


class App extends React.Component {

  public render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/login" component={Login}/>
          {/* <Route path="*" component={NoMatch}/> */}
          </div>
      </Router>
    </PersistGate>
 </Provider>
    );
  }
}

export default App;
