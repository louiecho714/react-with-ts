import React,{useReducer,useContext} from 'react';
import ToDoWizard from './component/ToDoWizard';
import './App.css';
import {BackTop} from 'antd'
import {BrowserRouter as Router,Switch,Route,Redirect,RouteProps,RouteComponentProps,Link} from 'react-router-dom';
import {ToDoReducer,initialState,AppContext} from './store/ToDoReducer';
import LoginPage from './component/LoginPage'
import BookPage from './component/BookPage';



// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({children,...rest}: RouteProps) {

  const {state} = useContext(AppContext);
 
  return (
    <Route
      {...rest}
      render={(routeProps:RouteComponentProps) =>
        state.CurrentUser!=null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location }
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
          <ul>
            <li><Link to='/main'>todos</Link></li>
            <li><Link to='/books'>books</Link></li>
            <li><Link to='/login'>logout</Link></li>
          </ul>
          <Switch>       
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/main">
              <ToDoWizard/>
            </PrivateRoute>
            <PrivateRoute path="/books">
              <BookPage/>
            </PrivateRoute>
          </Switch>
                
      </Router>
    </AppContext.Provider>
  );
}

export default App;
