import React,{Component} from 'react';
import LogingPage from '../../components/LogingPage/LogingPage';

class StartPage extends Component{
    constructor(props){
        super(props);
        this.state={
            showPage:true
        }
        this.userData={
            email:'',
            password:''
        }
    }
    onInputUserData = (e)=>{
        if(e.target.id ==='userEmail' ){
            this.userData.email= e.target.value;
        } else if (e.target.id === 'userPassword') {
            this.userData.password = e.target.value;
        }
    }
    onSubmitData = (e) => {
        // make ajax to server
        e.preventDefault();
        alert(`email:${this.userData.email}, password:${this.userData.password}`);
        this.setState({showPage: false});
    }

    render(){
        return (
            <div>
                <LogingPage 
                    show = {this.state.showPage}
                    onInputData = {this.onInputUserData}
                    onSubmitData = {this.onSubmitData}/>
            </div>
        );
    }
    componentDidMount(){
   
    }
}
export default StartPage;