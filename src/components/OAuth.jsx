import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'
import { db } from '../firebase.config'

function OAuth() {
    const navigate = useNavigate()
    const location = useLocation()
    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if (!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    emai: user.email,
                    timestamp: serverTimestamp()
                })

            }
            navigate('/')
        } catch (error) {
            toast.error('Could not Authorize with google')
        }
    }
    return (
        <div className='socialLogin'>
            <p>Sign {location.pathname === '/sign-up' ? 'up' : 'In'}
                with </p>
            <button className='socialIconDiv'>
                <img className='socialIconImg' src={googleIcon} alt='google' onClick={onGoogleClick} />
            </button>
        </div>
    )
}

export default OAuth