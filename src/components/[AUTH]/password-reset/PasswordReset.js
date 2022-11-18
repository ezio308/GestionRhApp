import React, { Component, useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import './PasswordReset.css'
import LOGO_inspire from "../../../assets/LOGO_inspire.png"



const PasswordReset =  () => {

    const {requestReset} = useContext(AuthContext)

    const reset = (e) => {
        console.log(e)
        e.preventDefault()
        const email = e.target.email.value;
        requestReset(email)
    }
    return (
        <div className="Auth-form-container">  
          <div className="Auth-form"> 
          <div className="Auth-form-content">
          <div className=".Auth-form-title">
              <img src={LOGO_inspire} className="Logo"  style={{height:55 , width:308 }}/>
          </div> 
 <div className="form-group mt-3">
   <h5 style={{marginBottom:"20px"}}>Mot de passe oublié ?</h5>
   <p>Saisissez votre adresse email utilisée et nous vous enverrons les instructions pour réinitialiser votre mot de passe.</p>
   </div>
   <label style={{color:'red'}}>* <label>Adresse email</label> </label>

   <form onSubmit={reset}>
   <input
  type="email"
  name = "email"
  className="form-control mt-1"
  placeholder="Entrer votre email"
 />
<div className="phrase">
 <p><br></br>Retour à la page de <a className="env" href="/login" style={{color:'black' , textDecoration:"none"}}>Connexion</a></p>
</div> 
<div className="d-grid-gap-2-mt-3">
          <button type="submit" className="btn-btn-second">
          Envoyer
          </button>
 </div>
   </form>
 
   </div>
   </div>    
 
</div>
    );
}
 

export default PasswordReset;