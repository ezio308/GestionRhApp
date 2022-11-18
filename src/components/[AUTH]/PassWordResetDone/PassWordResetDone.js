import React, {  useContext, useState } from 'react';
import './PassWordResetDone.css'

import Sucesss from "../../../assets/Sucesss.png"
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
//import {IoCheckmarkDoneCircleSharp} 




const PassWordResetDone = () => {
  const navigate = useNavigate()
  const {setConfirmed} = useContext(AuthContext)


  const confirm  = (e) => {
   
    setConfirmed(false)
    navigate('/login')
  }
    return (
   <div className="Aut-con">
   <div className = "card">

      <div className='card-head'>
      <b>Mot de passe modifié avec succès</b>
      </div>

      <div className='card-body'>
        <img src = {Sucesss} className = "image"/>

          <div className='text'>Vous avez mis à jour avec succès votre mot de passe.<br></br> Vous pouvez maintenant vous connecter avec votre nouveau mot de passe</div>
      <form onSubmit={confirm}>
      <button type = "submit"className='primary' >Connecter</button>
      </form>
      
      </div>

     

   </div>
    </div>
    )
}

export default PassWordResetDone;