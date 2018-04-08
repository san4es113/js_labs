import React from 'react';
import './LogingPage.css';

const logingPage=(props)=>(
    <div className="LogingPage">
    <form >
        <label htmlFor="userEmail">Email:</label>
        <input type="email" id="userEmail" placeholder="usermail@example.com"/>

        <label htmlFor="userPassword">Password:</label>
        <input type="password" id="userPassword" placeholder="password"/>
        
        <input type="submit" value="Enter"/>
    </form>
    </div>
);
export default logingPage;