import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from 'react-router-dom';
import ApiService from '../service/ApiService';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("imagesource/welcome.jpg")
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 50%;
  text-align: center;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
`;

/* const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="EmaiId" />
          <Input placeholder="FirstName" />
          <Input placeholder="MobileNo" />
          <Input placeholder="Preference" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Link to = "/login">
          <Button>CREATE</Button>
         </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};  */

class Register extends React.Component{

  constructor(props){
      super(props);
      this.state ={
          emailId: '',
          fullName: '',
          mobileNo: '',
          preferences: '',
          password: '',
          message: null
      }
      this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
      e.preventDefault();
      let user = {emailId: this.state.emailId, fullName: this.state.fullName, mobileNo: this.state.mobileNo,  preferences: this.state.preferences, password: this.state.password};
      ApiService.addUser(user)
          .then(res => {
              this.setState({message : 'User added successfully.'});
              this.props.history.push('/add');
          });
  }

  onChange = (e) =>
      this.setState({ [e.target.name]: e.target.value });

  render() {
      return(
          <Container>
            <Wrapper>
              <Title>CREATE AN ACCOUNT</Title>
              <Form>
                <Input type="text" placeholder="emailId" name="emailId" className="form-control" value={this.state.emailId} onChange={this.onChange}/>
                <Input type="text" placeholder="fullName" name="fullName" className="form-control" value={this.state.fullName} onChange={this.onChange}/>
                <Input placeholder="mobileNo" name="mobileNo" className="form-control" value={this.state.mobileNo} onChange={this.onChange}/>
                <Input type="text" placeholder="preferences" name="preferences" className="form-control" value={this.state.preferences} onChange={this.onChange}/>
                <Input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
          
               <Agreement>
                 By creating an account, I consent to the processing of my personal
                 data in accordance with the <b>PRIVACY POLICY</b>
               </Agreement>
               <Button onClick={this.saveUser}>
                 <Link to = "/login">
                    CREATE AN ACCOUNT
               </Link>
                 </Button> 
          </Form>
          </Wrapper>
          </Container>
      );
  }
} 

export default Register;
