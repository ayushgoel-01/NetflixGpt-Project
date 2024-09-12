import React, { useState , useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'; 
import { BG_URL, USER_AVATAR } from '../utils/constants';
import { toast } from 'react-toastify';

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        // Validate the form data

        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;

        // Sign in / Sign up Logic
        
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR
                  })
                  .then(() => {
                    toast.success("User Created!", {
                        theme: "dark",
                        autoClose: 3000,
                      });
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                  })
                  .catch((error) => {
                    setErrorMessage(error.message);
                  });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage);
            });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success("Signed in!", {
                    theme: "dark",
                    autoClose: 3000,
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage);
            });
        }
    }

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header/>

        <div className='absolute'>
            <img className='h-screen w-screen object-cover md:object-none' src={BG_URL}></img>
        </div>

        <form onSubmit={(e) => e.preventDefault()}
    className='absolute w-11/12 max-w-md p-6 md:p-12 bg-black my-6 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
    
    <h1 className='font-bold text-2xl md:text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

    {!isSignInForm &&
    <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-500 rounded'/>}

    <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-500 rounded'/>

    <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-500 rounded'/>

    <p className='text-red-600 text-base md:text-lg py-3'>{errorMessage}</p>

    <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
    </button>

    <p className='py-4 text-center cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
    </p>
</form>

    </div>
  )
}

export default Login