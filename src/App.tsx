import React,{useReducer,useContext} from 'react';
import ToDoWizard from './component/ToDoWizard';
import {Location} from 'history';
import './App.css';
import {BackTop} from 'antd'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {ToDoReducer,initialState,AppContext} from './store/ToDoReducer';
import LoginPage from './component/LoginPage'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children:React.Children, ...rest }) {

  const {state} = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={({ location:Location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

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
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/todos">
              <ToDoWizard/>
            </PrivateRoute>
          </Switch>
                
      </Router>
    </AppContext.Provider>
  );
}

export default App;
