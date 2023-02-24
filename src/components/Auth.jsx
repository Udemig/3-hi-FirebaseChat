import React from 'react';
import { auth, provider } from '../firebase/FirebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const Auth = () => {
  //üye olma
  const signIn = ({ setIsAuth }) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem('token', res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <h1>CHAT ODASI</h1>
      <p>Devam etmek için giriş yapın</p>
      <button onClick={signIn}>Google ile giriş yap</button>
    </div>
  );
};

export default Auth;
