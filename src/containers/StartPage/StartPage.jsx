import React,{Component} from 'react';
import LogingPage from '../../components/LogingPage/LogingPage';
import { login } from '../../store/actions/auth';
import { connect } from 'react-redux';

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
        this.props.login(this.userData.email);
        this.setState({showPage: false});
        this.userData = {};
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
const mapDispatchToProps = dispatch => {
  return {
    login: (email) => dispatch(login(email,'asfsdfsfgsdgddfkjaslfnsaasdlkfjasdp;gkansdlsadfasgasasg'))
  }
}
export default connect(null, mapDispatchToProps)(StartPage);