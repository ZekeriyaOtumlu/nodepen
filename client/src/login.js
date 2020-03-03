import React, { Component } from 'react';
import { fire, facebookProvider, googleProvider } from './config/fire';
import 'firebase/app';
// import './login.css'
export class SignIn extends Component {
   state = {
      user: {},
      email: '',
      password: '',
      message: '',
   }
  
  
  
  
  
  
  
  
  
  
  
  
   componentDidMount = () => this.authListener();
   closeModalHandler = () => this.props.history.push('/');
   createAccountRedirect = () => this.props.history.push("/SignUp");
   signInAccountRedirect = () => this.props.history.push("/SignIn");
   authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
         if (user) {
            this.setState({ user });
         } else {
            this.setState({ user: null });
            localStorage.removeItem('user');
         }
      });
   }
   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   }
   // Sign In/Up with Facebook
   authWithFacebook = () => {
      fire.auth().signInWithPopup(facebookProvider)
         .then((result) => {
            this.props.history.push('/');
         })
         .catch(err => alert(err));
   }
   // Sign In/Up with Google
   authWithGoogle = () => {
      fire.auth().signInWithPopup(googleProvider)
         .then((result) => {
            this.props.history.push('/');
         })
         .catch(err => alert(err));
   }
   loginBtn = () => {
      const email = this.state.email;
      const password = this.state.password;
      fire.auth().signInWithEmailAndPassword(email, password)
         .then(user => {
            console.log(user);
            this.props.history.push('/');
         })
         .catch(err => {
            console.log(err);
            this.setState({ message: "*Incorrect Password or Email" });
         });
   }
   render() {
      return (
         <div id="login-box">
            <div className="left-box">
               <h1 id="signUp">Sign In</h1>
               {/* <form> */}
               <input
                  value={this.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="signInEmailInput" />
               <input
                  value={this.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="signInPasswordInput" />
               <button
                  onClick={() => this.loginBtn()}
                  type="submit"
                  className="signInBtn">
                  Enter
               </button>
               <br></br>
               
               <button
                  onClick={() => this.createAccountRedirect()}
                  type="submit"
                  className="">
                  Create An Account
               </button>
               {/* </form> */}
               <p style={{ color: "red" }}>{this.message}</p>
            </div>
            <div className="signInBackground">
               <div className="exit-btn">
                  <button
                     onClick={() => this.closeModalHandler()}
                     id="exit">
                     X
                  </button>
               </div>
               <div className="right-box">
                  <span className="signInWith">Sign in with <br /> Social Network</span>
                  <button className="social facebook" onClick={() => this.authWithFacebook()}>Log in with Facebook</button>
                  <button className="social google" onClick={() => this.authWithGoogle()}>Log in with Google</button>
               </div>
            </div>
         </div>
      )
   }
}
export class SignUp extends Component {
   state = {
      user: {},
      email: '',
      password: '',
      message: '',
   }
   componentDidMount = () => this.authListener();
   closeModalHandler = () => this.props.history.push('/');
   signInAccountRedirect = () => this.props.history.push("/SignIn");
   authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
         if (user) {
            this.setState({ user });
         } else {
            this.setState({ user: null });
            localStorage.removeItem('user');
         }
      });
   }
   handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   }
   // Sign In/Up with Facebook
   authWithFacebook = () => {
      fire.auth().signInWithPopup(facebookProvider)
         .then((result) => {
            this.props.history.push('/');
         })
         .catch(err => alert(err));
   }
   // Sign In/Up with Google
   authWithGoogle = () => {
      fire.auth().signInWithPopup(googleProvider)
         .then((result) => {
            this.props.history.push('/');
         })
         .catch(err => alert(err));
   }
   signUp = () => {
      const email = this.state.email;
      const password = this.state.password;
      fire.auth().createUserWithEmailAndPassword(email, password)
         .then(user => {
            console.log(user);
            this.props.history.push('/');
         })
         .catch(err => {
            console.log(err);
            this.setState({ message: "*The email address is already in use by another account. Please try another one." });
         });
   }
   render() {
      return (
         <div id="login-box">
            <div className="left-box">
               <h1 id="signUp">Create Account</h1>
               <input
                  value={this.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="signUpEmailInput" />
               <input
                  value={this.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="signUpPasswordInput" />
               <button
                  onClick={() => this.signUp()}
                  type="submit"
                  className="signUpBtn">
                  Submit
               </button>
               <br></br>
               <button
                  onClick={() => this.signInAccountRedirect()}
                  type="submit"
                  className="">
                  Sign In
               </button>
               <p style={{ color: "red" }}>{this.message}</p>
            </div>
            <div className="signUpBackground">
               <div className="exit-btn">
                  <button
                     onClick={() => this.closeModalHandler()}
                     id="exit">
                     X
                  </button>
               </div>
               <div className="right-box">
                  <span className="signInWith">Sign up with <br /> Social Network</span>
                  <button className="social facebook" onClick={() => this.authWithFacebook()}>Sign up with Facebook</button>
                  <button className="social google" onClick={() => this.authWithGoogle()}>Sign up with Google</button>
               </div>
            </div>
         </div>
      )
   }
}



