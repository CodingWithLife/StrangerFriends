// import React from 'react';
//
// class Signin extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      email:"",
//      password:""
//    }
//    this.add = this.add.bind(this);
//    this.email = this.email.bind(this);
//    this.password = this.password.bind(this);
//     }
//
//  updateEmail(e){
//    this.setState({
//      email: e.target.value
//    })
//  }
//  updatePassword(e){
//    this.setState({
//      password: e.target.value
//    })
//  }
//
//  onSubmitSignIn(){
//     console.log(this.state);
//     fetch('http://localhost:3000/users', {
//       method: 'post',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         email: this.state.email,
//         password: this.state.password
//       })
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data === "OK mr. Pancho") {
//           // this.props.loadUser(user)
//           this.props.onRouteChange('home');
//         }
//       })
//       console.log("no pos no se pudo mr.Pancho");
//  }
//
//  render () {
//     return (
//
//       <div >
//         <main >
//           <div >
//             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//               <legend >Sign In</legend>
//               <div >
//                 <label htmlFor="email-address">Email</label>
//                 <input
//                   type="email"
//                   name="email-address"
//                   id="email-address"
//                   onChange={this.updateEmail}
//                 />
//               </div>
//               <div >
//                 <label  htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   onChange={this.updatePassword}
//                 />
//               </div>
//             </fieldset>
//             <div className="">
//               <input
//                 onClick={this.onSubmitSignIn}
//                 type="submit"
//                 value="Sign in"
//               />
//             </div>
//             <div >
//               <p>Register</p>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }
// }
//
// export default Signin;
