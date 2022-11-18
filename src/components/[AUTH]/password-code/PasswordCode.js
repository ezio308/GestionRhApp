import React, { Component, useContext, useState } from 'react';
import './PasswordCode.css'
import LOGO_inspire from "../../../assets/LOGO_inspire.png"
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';




const PasswordCode = () => {
    const style_valid = {
        borderColor: "#20C997"
    }

    const style_invalid = {
        borderColor: "#FF4D4F"
    }
    const navigate = useNavigate()
    const [isValid, setValid] = useState(false)
    const { validateCode } = useContext(AuthContext)
    const [isValidated, setValidated] = useState(false)


    let digitValidate = (ele) => {
        if (isValidated) {
            setValidated(false)
        }


        ele.target.value = ele.target.value.replace(/[^0-9]/g, '');
    }

    let tabChange = (val) => {
        let ele = document.querySelectorAll('input');
        if (ele[val - 1].value != '') {
            ele[val].focus()
        } else if (ele[val - 1].value == '') {
            ele[val - 2].focus()
        }
    }

    const submit = () => {

        console.log("here")
        const code = document.getElementById("input-1").value + document.getElementById("input-2").value + document.getElementById("input-3").value + document.getElementById("input-4").value + document.getElementById("input-5").value + document.getElementById("input-6").value
        const state = validateCode(code)
        state.then((value) => {
            console.log(value)
            if (value) {
                setValid(true)
                setValidated(true)
            }
            else {
                setValid(false)
                setValidated(true)
            }
        })
    }

    const validate = (e) => {
        if (isValid) {
            navigate('/new')
        }
    }

    return (
        <div className="Auth-form-container">
            <div className="Auth-form">
                <div className="Auth-form-content">
                    <div className=".Auth-form-title">
                        <img src={LOGO_inspire} className="Logo" style={{ height: 55, width: 308 }} />
                    </div>
                    <form onSubmit={validate}>
                        <div className="form-group-mt-4">
                            <h5>Saisir votre code</h5>
                            <p className="para1">Entrez le numéro à six chiffres qui vous a été envoyé par courriel.</p><br></br>
                        </div>
                        <section class="verification__fields">

                            <br></br>
                            <fieldset class="verification__field">

                                <input name="f1" style={isValid && isValidated ? style_valid : !isValid && isValidated ? style_invalid : {}} type="number" className="verification__input-verification__input" id="input-1" onKeyUp={(event) => tabChange(1)} onInput={(event) => digitValidate(event)} maxLength="1" />
                                <input name="f2" style={isValid && isValidated ? style_valid : !isValid && isValidated ? style_invalid : {}} type="number" className="verification__input-verification__input" id="input-2" onKeyUp={(event) => tabChange(2)} onInput={(event) => digitValidate(event)} maxLength="1" />
                                <input name="f3" style={isValid && isValidated ? style_valid : !isValid && isValidated ? style_invalid : {}} type="number" className="verification__input-verification__input" id="input-3" onKeyUp={(event) => tabChange(3)} onInput={(event) => digitValidate(event)} maxLength="1" />
                                <input name="f4" style={isValid && isValidated ? style_valid : !isValid && isValidated ? style_invalid : {}} type="number" className="verification__input-verification__input" id="input-4" onKeyUp={(event) => tabChange(4)} onInput={(event) => digitValidate(event)} maxLength="1" />
                                <input name="f5" style={isValid && isValidated ? style_valid : !isValid && isValidated ? style_invalid : {}} type="number" className="verification__input-verification__input" id="input-5" onKeyUp={(event) => tabChange(5)} onInput={(event) => digitValidate(event)} maxLength="1" />
                                <input name="f6" style={isValid && isValidated ? style_valid : !isValid && isValidated ? style_invalid : {}} type="number" className="verification__input-verification__input" id="input-6" onKeyUp={(event) => submit()} maxLength="1" />

                            </fieldset>

                            <br></br>

                        </section>
                        <p id="valid_text" style={isValid ? { color: "#20C997", marginLeft: "5px" } : { color: "#FF4D4F", marginLeft: "5px" }} hidden={!isValidated}>{isValid ? "Le code est correct" : "Code incorrect"}</p>
                        <br></br>



                        <button disabled={!isValid} type="submit" className="btn-btn-third" >
                            Envoyer
                        </button>
                        <div className="links">
                            <br></br><a className="a1" href="/code" style={{ color: 'black' }}>Renvoyer le code</a>
                            <br></br><a className="a2" href="#" style={{ color: 'black' }}>Modifier l'adresse Email</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
}

export default PasswordCode;