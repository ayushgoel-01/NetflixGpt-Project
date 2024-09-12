import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { LOGO } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/languageConstants'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    const handleSignOut = () =>{
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error");
        });
    }

    // To add user or remove user from store on signin/signup and signout
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate("/browse");
            }
            else{
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsubscribe when component unmounts (cleanup function)
        return () => unsubscribe();
    },[]);


    const handleGptSearchClick = () =>{
        // Toggle GPT Search
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.target.value));
    }


  return (
    <div className='absolute w-screen px-8 pt-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0'
        src={LOGO}>
        </img>
        
        {user && <div className='flex px-2'>

            {showGptSearch && <select onChange={handleLanguageChange} className='bg-gray-900 text-white cursor-pointer h-6 mt-5'>
                {SUPPORTED_LANGUAGES.map(lang => 
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>}

            <button className='h-10 md:text-md text-sm px-4 m-2 mx-4 my-3 bg-purple-800 hover:bg-purple-700 text-white rounded-lg' onClick={handleGptSearchClick}>
                {showGptSearch ? "Home Page" : "GPT Search"}
            </button>

            <img className='w-13 h-14 p-2'
            src={user?.photoURL}></img>

            <button onClick={handleSignOut} className='font-bold text-white text-sm md:text-md pb-5'>(Sign Out)</button>
        </div>}
        
    </div>
  )
}

export default Header