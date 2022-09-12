import { database, auth } from '../../libs/firebase'
import { doc, setDoc } from 'firebase/firestore'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook, FaGithub} from 'react-icons/fa'
import { providerLogin, signInMethods } from '../../libs/auth'
import { useRouter } from 'next/router'

export default function SocialMediaButtons() {
    const router = useRouter()
    const loginWithProvider = (id) => {
        providerLogin(id)
        .then(async (res) => {
            const docRef = doc(database, 'users', res.user.uid)
            await setDoc(docRef, {
                role: 'REGULAR'
            })
            router.push('/home') 
        })
        .catch(error => {
            console.log(error); 
        })
    }
    return (
        <div className='social-media-buttons-container'>
            <div className='social-media-buttons-title'>
                <div></div>
                <p>O con</p>
                <div></div>
            </div>
            <div className='social-media-buttons'>
                <FcGoogle onClick={() => loginWithProvider(signInMethods.google)} className='social-media-icon'/>
                <FaFacebook onClick={() => loginWithProvider(signInMethods.facebook)} className='social-media-icon'/>
                <FaGithub onClick={() => loginWithProvider(signInMethods.github)} className='social-media-icon'/>
            </div>
        </div>
    )
} 
