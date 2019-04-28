import React from 'react';

//+++++++++++ Importing styles @@ เอาไสตล์เข้ามาใข้ ++++++++++
import './App.css';
// --------------------------------

//------------------ Importing Router เอามาสำหรับไปหน้าต่างๆ ------------------------
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//-------------------------------------------------------------------------------

// -------------- Redux -----------------
import { Provider } from 'react-redux';
import store from './redux/store';
// --------------------------------------

// ----------------- Import UI pages เอาหน้าต่างๆที่เราทำเข้ามา ------------------------
import Index from './components/main-ui/indexPage/Index';
import Test from './components/main-ui/testPage/Test';
import ReduxPage from './components/main-ui/reduxPage/ReduxPage';
//-------------------------------------------------------------------------------

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={ReduxPage} />
        <Route exact path="/test" component={Test} />
      </Router>
    </Provider>
  );
}

export default App;
