import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PrivateRoute, PasswordCodeRoute, LoginRoute, PasswordFormRoute, PasswordDOneROute } from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Login from './components/[AUTH]/login/Login';
import PassWordResetDone from './components/[AUTH]/PassWordResetDone/PassWordResetDone';
import PasswordReset from './components/[AUTH]/password-reset/PasswordReset';
import PasswordCode from './components/[AUTH]/password-code/PasswordCode';
import PasswordForm from './components/[AUTH]/password-form/PasswordForm';
import PageHeader from './components/Bar';



function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="component">
          <Routes>
            <Route path="/login" element={<LoginRoute />}>
              <Route exact path='/login' element={<Login />} />

            </Route>
             
             <Route path="/Bar"  element={<PageHeader />} />

            <Route path="/pwd" element={<LoginRoute />}>
              <Route exact path='/pwd' element={<PasswordReset />} />
            </Route>

            <Route path="/done" element={<PasswordDOneROute />}>

              <Route exact path='/done' element={<PassWordResetDone />} />
            </Route>

            <Route path='/code' element={<PasswordCodeRoute />}>

              <Route exact path='/code' element={<PasswordCode />} />
            </Route>

            <Route path='/new' element={<PasswordFormRoute />} >
              <Route exact path='/new' element={<PasswordForm />} />
            </Route>
            <Route exact path='/' element={<PrivateRoute />}>
              
            </Route>
          </Routes>
        </div>
      </AuthProvider>




    </Router>

  );
}

export default App;
