import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Home } from "./Primary/Pages/Home/Home";
import { Journal } from "./Primary/Pages/Journal/Journal";
import LoginPage from "./Primary/Pages/Login/LoginPage";
import PoidsPage from "./Primary/Pages/Poids/PoidsPage";
import { RegisterPage } from "./Primary/Pages/Register/RegisterPage";
import StatistiquePage from "./Primary/Pages/Statistiques/StatistiquePage";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//**************** Your web app's Firebase configuration *****************//
const firebaseConfig = {
  apiKey: "AIzaSyDbcSR9_PAO197-Sutc0bbXuSaEKhIO9Jk",
  authDomain: "m2iapp.firebaseapp.com",
  projectId: "m2iapp",
  storageBucket: "m2iapp.appspot.com",
  messagingSenderId: "504688295802",
  appId: "1:504688295802:web:e9dfc61a0057e1d016a0c3",
}
const app = initializeApp(firebaseConfig)
//**************** Your web app's Firebase configuration *****************//

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token")

    if (authToken) {
      navigate("/")
    }
  }, [])

  const handleAction = (id: number) => {
    const authentication = getAuth()
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          sessionStorage.setItem("Auth Token", response.user.uid)
          navigate("/")
          toast.success("La connexion a été établie")
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Le mot de passe ne correspond pas")
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Cette adresse mail n'est pas utilisée")
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          sessionStorage.setItem("Auth Token", response.user.uid)
          navigate("/")
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Cette adresse mail est déjà utilisée")
          }
        })
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <RegisterPage
              title={"Login"}
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              title={"Register"}
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/poids" element={<PoidsPage />} />
        <Route path="/statistiques" element={<StatistiquePage />} />
        <Route path="/mesrecettes" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App;
