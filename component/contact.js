import React from 'react';
import './contact.css';
// import 'C:/Users/Hp/Desktop/expressjs/public/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../fontawesome-free-5.6.3-web/css/all.css';


export const Contact =()=>{
    return (
        <div className='contact' id='contact'>
            <h3>Contact<br/><span></span></h3>
            <div className='phone'>
                <i className="fas fa-phone icon1"/>
                <h4>Phone</h4>
                <span className='text-light'>8384099294</span>
            </div>
            <div className='email'>
                <i className="fas fa-envelope-open-text icon2"/>
                <h4>Email-Address</h4>
                <span className='text-light'>absharma8384@gmail.com</span>
            </div>
            <div className='location'>
                <i className="fas fa-map-marked-alt icon3"/>
                <h4>LOCATION</h4>
                <span className='text-light'>New Delhi</span> 
            </div>
            <div className='form'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' placeholder='Enter Email' className='mail'/>
                <input type='text' placeholder='Message' className='msg'/>
                <textarea rows='4' cols='58' placeholder='Enter Query' className='query'/>
            </div>
            <button className='btn btn-danger sub'>SUBMIT MESSAGE</button>
        </div>
    )
}