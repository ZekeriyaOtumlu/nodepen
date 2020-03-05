import React, { Component } from 'react'
import fire from './config/fire';
import Nav from './components/Nav'



class Login extends Component {
   constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.signUp = this.signUp.bind(this);
      this.state = {
         email: "",
         password: "",
         message: ''

      }
      
   }
   login = (e) => {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      }).catch((error) => {
         console.log(error);
         
      });
   }

   signUp(e) {
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
         .catch((error) => {
            console.log(error);
         }
         )
   }


   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   }

   render() {
      
      return (
         <div className='outerBox'>
         <Nav />
            <div  alt='beach'className='box' >
         
            <form style={{width:'40%', marginLeft:'30%', backgroundColor:'lightblue'}}>
               <div  class="form-group" >
                  <label for="exampleInputEmail1">Email address</label>
                  <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                     class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                     placeholder="Enter Email" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input value={this.state.password} onChange={this.handleChange} type="password"
                     name="password" class="form-control" id="exampleInputPassword1" placeholder="password" />
               </div>

               <button type="submit" onClick={this.login} class="btn btn-primary">Log in</button>
               <button onClick={this.signUp} style={{marginLeft: '25px'}} className='btn
               btn-success'>SignUp</button>
            </form>
         </div>

         </div>
         
      );
   }
}

export default Login;