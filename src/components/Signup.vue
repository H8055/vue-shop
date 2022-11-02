<template>
    <div class="main">
        <h3>Sign Up</h3>
        <div class="login-page">
  <div class="form">
    <div v-if="error" class="error">{{error.message}}</div>
    <form class="register-form" @submit.prevent="signupRequest">
      <!-- <input type="text" v-model="name"  placeholder="name"/> -->
      <input type="text" v-model="email" placeholder="email address"/>
      <input type="password" v-model="password" placeholder="password"/>
      
      <button>create</button>
      <p class="message">Already registered? <router-link to="./login" >Sign In</router-link> </p>
    </form>
  </div>
</div>
    </div>
    
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// const auth = getAuth();
// const db = getFirestore();
// const dbRef = collection(db, "users");
export default{
    name:'signUpPage',

    data(){
        return{
            
            email:'',
            password:'',
            error:'',
            uid: "",
        }

    },
    methods:{
        async signupRequest(){
        //     createUserWithEmailAndPassword(auth, this.email, this.password)
        // .then((dataUser) => {
        //   addDoc(dbRef, {
            
        //     email: this.email,
        //     address: this.password,
            
        //     uid: this.uid,
        //   });
        //   localStorage.setItem("uidUser", dataUser.user.uid);
        //   if (this.$store.state.cart > 0) {
        //     this.$router.replace({name:'home'});
        //   } else {
        //     this.$router.replace({name:'home'});
        //   }
        // })
        // .catch((error) => {
        //   console.log(error);
        // });



        // firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        // .then(() => {
        //   firebase.auth().currentUser;
        //     this.$router.replace({name:'home'});
          
        // //   const actionCodeSettings = {
        // //     url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
        // //   };
        // //   user.sendEmailVerification(actionCodeSettings);
        // })
        // .catch(error => {
        //   this.error = error.message;
        // });

            try{
               const user = await firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
               console.log(user)
               this.$router.replace({name:'home'});
            }catch(err){
                console.log(err)
            }
            
        }
        
    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.error{
    color: red;
    font-size: 18px;
}
.main{
    background: #76b852;
    width: 100%;
    height: 1160px ;
}
.main h3{
    text-align: center;
    padding-top: 40px;
    font-size: 3rem;
    color: #ffffff;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
/* .form .register-form {
  display: none;
} */
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
</style>