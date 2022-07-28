import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser} from '@fortawesome/free-solid-svg-icons';

const Left = () => {
    return (
        <div className='left-container'>
            <div className='profile'>
                <h3><FontAwesomeIcon icon={faUser} className='icon' />Profile</h3>
                <p>I am Passionate and motivated individual who is committed to delivering high-performance work ethic while maintaining quality and integrity that actively meets my employers standards. I am adept at learning new concepts and applying the acquired knowledge observation and diligent attention to detail. Committed to reliably produce results which fulfill on the future of my employer, add value to the organization and its environment, and support the performance and success of my teammates.  </p>
            </div>

            <div className='work'>
                <h3><FontAwesomeIcon icon={faBriefcase} className='icon' />Work History</h3>
                <h5>Publix, 2017 - Current</h5>
                <p>Collaborate with store manager, assistant and department managers, cashiers, replenishment specialists, and clerks regarding inventory control, stocking guidelines, production and product flow. 
                    Enforce workplace and food safety procedures and standards.  Supervise and coordinate the activity of staff within the Grocery department and perform tasks such as, inventory counts, scheduled and random, to ensure and maintain product levels, training employees, implementing safety measures, and promoting the Publix brand to potential clients and customers through ‘premier customer service’. Conduct inventories, manage the quality and display of products.
                    Developed and maintained a collaborative team environment which positively impacted morale, communication and overall working conditions. Consistently rank in the top 1% of employees for product stock rate and service. 
                </p>
            </div>
        </div>
    )
}

export default Left