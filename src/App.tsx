import ToDoWizard from './component/ToDoWizard';
import './App.css';
import {BackTop} from 'antd'
import {BrowserRouter as Router,Switch,Route,Redirect,RouteProps,RouteComponentProps,Link} from 'react-router-dom';
import LoginPage from './component/LoginPage'
import BookPage from './component/BookPage';
import {
  removeCurrentUser,
  selectCurrentUser
} from './store/currentUserSlice'
import { useAppSelector,useAppDispatch } from './store/hooks'



// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({children,...rest}: RouteProps) {
  const currentUser = useAppSelector(selectCurrentUser);
 
  return (
    <Route
      {...rest}
      render={(routeProps:RouteComponentProps) =>
        currentUser!=null ? (
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
  
  const dispatch = useAppDispatch();

  const logout=()=>{
    dispatch(removeCurrentUser())
  }

  return (
    <>
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
            <li><a onClick={logout} href="#logout">logout</a></li>
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
    </>
  );
}

export default App;
