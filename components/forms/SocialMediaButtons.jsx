import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'

export default function SocialMediaButtons() {
    return (
        <div className='social-media-buttons-container'>
            <div className='social-media-buttons-title'>
                <div></div>
                <p>O con</p>
                <div></div>
            </div>
            <div className='social-media-buttons'>
                <FcGoogle className='social-media-icon'/>
                <FaFacebook className='social-media-icon'/>
            </div>
        </div>
    )
}
