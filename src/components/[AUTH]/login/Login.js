import React, { useContext, useState } from 'react';
import './Login.css'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import Checkbox from "@material-ui/core/Checkbox"
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import LOGO_inspire from "../../../assets/LOGO_inspire.png"

const Login = () => {




  const [state, setState] = useState(false)

  const { loginUser } = useContext(AuthContext)

  const history = useNavigate();

  const login = (e) => {
    console.log(e)
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password);
 
  }

  return (

    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <div className=".Auth-form-title">
            <img src={LOGO_inspire} className="Logo" style={{ height: 55, width: 308 }} />
          </div>

          <form onSubmit={login}>
            <div className="form-group mt-3">
              <h5>Bienvenue à My Inspire</h5>
              <label style={{ color: 'red' }}>* <label>Email</label> </label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Entrer votre email"
              />
            </div>
            <div className="form-group mt-3">
              <label style={{ color: 'red' }}>* <label>Mot de passe</label></label>
              <div className="pwdcontainer">
                <div className="input-group">
                  <input
                    name="password"
                    className="form-control"
                    placeholder="Entrer votre mot de passe"
                    type={state ? "text" : "password"}
                    style={{ borderStyle: "border-style: solid none solid solid" }}
                  />
                  <a className='input-group-text bg-transparent ' onClick={() => setState(!state)}>
                    {state ? <ShowIcon /> : <ShowOffIcon />}
                  </a>
                </div>
              </div>
              <br></br>
            </div>
            <div className="row">
              <div className='col-6'>
                <Checkbox supportIntermediate={true} />
                <label className='label-check'>Rester connecté</label>
              </div>
              <div className='col-6'>
                <a href="/pwd" style={{ color: 'black' }} className="linkcnx">Mot de passe oublié </a>
              </div>
            </div>
            <div className="d-grid-gap-2 mt-3">
              <button type="submit" className="btn-btn-primary">
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default Login;