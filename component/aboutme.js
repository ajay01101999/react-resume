import React from 'react';
import './aboutme.css';
import Image from './ajay.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const AboutMe = (props)=>{
    return (
        <div id='about' className='aboutme'>
            <h4>About Me <br/><span></span></h4>
            <img src={Image} alt='Dp'/>
            <div>
                    <h3>HELLO,</h3><br/>
                    <span>I am Ajay Sharma, web developer from New Delhi, India. I have rich experience in web site design and building and customization, also I am good at Backend.</span>
                    <p className='text-secondary'>NAME: <span className='text-dark'>AJAY SHARMA</span></p>
                    <p className='text-secondary'>BIRTHDAY: <span className='text-dark'>1st OCTOBER, 2000</span></p>
                    <p className='text-secondary line'>LOCATION: <span className='text-dark'>NEW DELHI</span></p>
                    <p className='text-secondary'>EMAIL: <span className='text-dark'>absharma8384@gmail.com</span></p>
            </div>
        </div>
    )    
}