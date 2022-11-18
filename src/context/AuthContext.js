import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();
const BASE_URL = 'http://127.0.0.1:8000/auth/'
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);
  const [isReset , setReset] = useState(false)
  const [isForm , setForm] = useState(false)
  const [isConfirmed , setConfirmed] = useState(false)

  const [email , setEmail] = useState(null)
  

  const history = useNavigate();

  const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email : email,
        password : password
      })
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      history('/')
    } else {
      history('/')
      alert("Something went wrong!");
    }
  };


  const requestReset = async (email) => {
    const response = await fetch(`${BASE_URL}resetpassword/`
    , {
      method : "POST" , 
      headers : {
        "Content-Type": "application/json"
      },
      body :  JSON.stringify({
        email : email
      })
    }
    );
     if (response.status == 200) {
      setEmail(email)
      setReset(true)
      history('/code')
     }
  }

  const validateCode =  async (code) => {
    const response = await fetch(`${BASE_URL}resetpassword/validate/` , {

      method : "POST" , 
      headers : {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        email : email,
        code  :  code
      })
    });

    const data = await response.text()
    console.log(data)
    if (data === "True"){
      setForm(true)
      return true;
    }
    else {
      return false;
    }
  }

  const changePassword = async (password) => {
    const response = await fetch(`${BASE_URL}resetpassword/` , 
    {
      method : "PUT" , 
      headers : {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        email : email , 
        password :  password
      })
    }
    )
    const data = await response.text()
    if (data === "Password reseted"){
      setForm(false)
      setEmail(null)
      setReset(false)
      setConfirmed(true)
      return true
    }
    else{
      return false
    }
  }
  


  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history('/login')
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    loginUser,
    logoutUser,
    isReset,
    setReset,
    requestReset,
    validateCode,
    changePassword,
    isForm,
    isConfirmed,
    setConfirmed

  };

  

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};