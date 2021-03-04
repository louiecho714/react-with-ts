import React,{useReducer} from 'react';
import ToDoWizard from './component/ToDoWizard';

import './App.css';
import {BackTop} from 'antd'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {ToDoReducer,initialState,AppContext} from './store/ToDoReducer';

function App() {

  const [state,dispatch] = useReducer(ToDoReducer,initialState);

  return (
    <AppContext.Provider value={{state,dispatch}}>
      <BackTop>
          <div style={{
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,
          }}>
            UP
          </div>
        </BackTop>
      <Router>
          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/protected">
              <ToDoWizard/>
            </PrivateRoute>
          </Switch>
                
      </Router>
    </AppContext.Provider>
  );
}

export default App;
