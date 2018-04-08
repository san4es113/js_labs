import React from 'react';
import './LogingPage.css';

const logingPage=(props)=>(
    <div className={"LogingPage" + (props.show? "":" hide") }>
    <form onSubmit={props.onSubmitData}>
        <label htmlFor="userEmail">Email:</label>
        <input 
            type="email" 
            id="userEmail" 
            placeholder="usermail@example.com"
            onInput={props.onInputData}
            />

        <label htmlFor="userPassword">Password:</label>
        <input 
            type="password" 
            id="userPassword" 
            placeholder="password"
            onInput={props.onInputData}
            />
        
        <input type="submit" value="Enter" />
    </form>
    </div>
);
export default logingPage;