import React from 'react';
import ReactDOM from 'react-dom';
import { ContactsOutlined, ThreeSixtySharp } from '@material-ui/icons';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Control from './control';

class Controller extends React.Component{    
  constructor(props){
      super(props);
      this.state = {
          login : false,
      }
      this.isLogin = this.isLogin.bind(this);
      this.isLogout = this.isLogout.bind(this);
  }

  componentDidMount(){}
  componentWillUnmount(){}

  isLogin(){
    this.setState({login:true});
  }
  isLogout(){
    this.setState({login:false});
  }

  getLoginStatus(){
    return this.state.login;
  }

  render(){
    return(
        <Control
            isLogin = {this.isLogin}
            isLogout = {this.isLogout}
            LoginStatus = {this.getLoginStatus()}
        />
    );
  }
}

ReactDOM.render(
  <Controller />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
