import './App.css'
import { Landing } from './coponents/Landing'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Signin } from './coponents/Signin';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { userAtom } from './coponents/store/atoms/User';
import { Topbar } from './coponents/Topbar';
import { LoginPage } from './coponents/Login';


const firebaseConfig = {
  apiKey: "AIzaSyAbno9__ueLY2jd6uOKrsMPT27iyKdS9aM",
  authDomain: "dsahustler.firebaseapp.com",
  projectId: "dsahustler",
  storageBucket: "dsahustler.firebasestorage.app",
  messagingSenderId: "556482804526",
  appId: "1:556482804526:web:134614d93d5eb9d7b118bf",
  measurementId: "G-1F295DLRS8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



function App() { 

const setUser = useSetRecoilState(userAtom);

useEffect(()=>{
  onAuthStateChanged(auth, function(user){
    if(user && user.email){
      setUser({
        isLoggedIn : true,
        user:{
          email: user.email
        }
      })
      console.log("This is the user ", user);
    }
    else{
      console.log("there is no loggedin User");
    }
  })
},[]);



  return (
    <>
      <div>
        {/* <Topbar/> */}
        <LoginPage/>
      </div>
        
    </>
  )
}

export default App
