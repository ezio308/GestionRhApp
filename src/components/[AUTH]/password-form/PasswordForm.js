import React, { Component, useContext, useState } from 'react';
import './PasswordForm.css'
import LOGO_inspire from "../../../assets/LOGO_inspire.png"
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';


const PasswordForm = () => {


  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmPass] = useState("")
  const [state, setState] = useState(false)
  const [state2, setState2] = useState(false)
  const { changePassword } = useContext(AuthContext)
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    const rep = changePassword(password)
    rep.then(value => {

      if (value) {
        navigate("/done")
      }
      else {

      }
    })
  }
  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <div className=".Auth-form-title">
            <img src={LOGO_inspire} className="Logo" style={{ height: 55, width: 308 }} />
          </div>
          <form onSubmit={submit}>
            <div className="form-group mt-3">
              <h5 style={{ marginBottom: "20px" }}>Veuillez entrer votre nouveau mot de passe</h5>
              <label style={{ color: 'red' }}>* <label>Nouveau mot de passe</label> </label>
              <div className="input-group">

                <input
                  value={password}
                  onChange={(value) => setPassword(value.target.value)}
                  type={state ? "text" : "password"}
                  style={{ borderStyle: "solid none solid solid" }}
                  className="form-control"
                  placeholder="Entrer votre nouveau mot de passe"
                />
                <a className='input-group-text bg-transparent ' onClick={() => setState(!state)}>
                  {state ? <ShowIcon /> : <ShowOffIcon />}
                </a>
              </div>
            </div>
            <div className="form-group mt-3">
              <label style={{ color: 'red' }}>* <label>Confirmer le mot de passe</label></label>
              <div className="input-group">

                <input
                  value={confirmpass}
                  onChange={(value) => setConfirmPass(value.target.value)}
                  className="form-control"
                  placeholder="Entrer votre mot de passe"
                  type={state2 ? "text" : "password"}
                  style={{ borderStyle: "solid none solid solid" }}
                />
                <a className='input-group-text bg-transparent ' onClick={() => setState2(!state2)}>
                  {state ? <ShowIcon /> : <ShowOffIcon />}
                </a>
              </div>
              <br></br>
            </div>
            <div className="phrase">
              <p><br></br>Retour à la page de <a className="env" href="/log" style={{ color: 'black' }}>Connexion</a></p>
            </div>
            <div className="d-grid-gap-2 mt-3">
              <button disabled={password != confirmpass || (password == "")} type="submit" className="btn-btn-primary" >
                Réinitialiser
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default PasswordForm;