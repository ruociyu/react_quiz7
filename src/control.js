import React from 'react';
import SignInSide from './signinside';
import ToDoApp from './todoapp'

class Control extends React.Component{
    constructor(props){
        super(props);
        this.signInOut = this.signInOut.bind(this);
    }

    componentDidMount(){}
    componentWillUnmount(){}

    signInOut(){
        if(this.props.LoginStatus){
            return (<ToDoApp/>);
        }else{
            return (<SignInSide isLogin={this.props.isLogin}/>);
        }
    }

    render(){
        return(
            <div>
              {this.signInOut()}
            </div>
        );
      }
}

export default Control;