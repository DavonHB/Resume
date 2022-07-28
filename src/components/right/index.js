import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBookAtlas, faBuildingColumns, faHatWizard, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Right = () => {
    return (
        <div className='right-container'>

            <div className='skills'>
                <h3><FontAwesomeIcon icon={faBookAtlas}  className='icon'/>Skills</h3>
                <span>React.js</span>
                <span>JavaScript</span>
                <span>Express.js</span>
                <span>Node.js</span>
                <span>mySQL</span>
                <span>graphQL</span>
                <span>Git</span>
                <span>Github</span>
            </div>

            <div className='education'>
                <h3><FontAwesomeIcon icon={faBuildingColumns}  className='icon'/>Education</h3>
                <p>Associates of Science</p>
                <p className='date'>August 2019 - March 2021</p>
                <p>Major in Mechanical Engineering, Columbia State College</p>
                <p>5 Consecutive Semesters on the Dean's List</p>
                <br />

                <p>Certificate of Full Stack Development</p>
                <p className='date'>February 2022 - July 2022</p>
            </div>

            <div className='core'>
                <h3><FontAwesomeIcon icon={faHatWizard} className='icon' />Competencies</h3>
                <p>Customer Service</p>
                <p>Management</p>
                <p>Communication</p>
                <p>Problem Solving</p>
                <p>Motivator</p>
                <p>Social Responsibility</p>
                <p>Leadership Role</p>
                <p>Value of Ethics</p>
            </div>

            <div className='border'>
                <p>border</p>
            </div>

            <footer>
                <div className='contact'>
                    <h3><FontAwesomeIcon icon={faAddressBook} className='icon'/>Contact</h3>
                    <a className='contact-icon' href='mailto:davonb113@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='icon' />davonb113@gmail.com</a>
                    <a className='contact-icon' href='tel:6157398777'><FontAwesomeIcon icon={faPhone} className='icon' />(615)-739-8777</a>
                    <a className='contact-icon' href='https://github.com/DavonHB'><FontAwesomeIcon icon={faGithub} className='icon' />DavonHB</a>
                </div>
            </footer>
        </div>
    )
}

export default Right