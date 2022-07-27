import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Left = () => {
    return (
        <div className='left-container'>
            <div className='profile'>
                <h3><FontAwesomeIcon icon={faUser} className='icon' />Profile</h3>
                <p>I am Passionate and motivated individual who is committed to delivering high-performance work ethic while maintaining quality and integrity that actively meets my employers standards. I am adept at learning new concepts and applying the acquired knowledge observation and diligent attention to detail. Committed to reliably produce results which fulfill on the future of my employer, add value to the organization and its environment, and support the performance and success of my teammates.  </p>
            </div>
            
            <div className='contact'>
                <h3>Contact</h3>
                <a className='contact-icon' href='mailto: davonb113@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='icon' />davonb113@gmail.com</a>
                <a className='contact-icon' href='tel:6157398777'><FontAwesomeIcon icon={faPhone} className='icon' />(615)-739-8777</a>
                <a className='contact-icon' href='https://github.com/DavonHB'><FontAwesomeIcon icon={faGithub} className='icon' />DavonHB</a>
            </div>
        </div>
    )
}

export default Left