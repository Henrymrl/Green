<template>
  <div class="SignUpView">
    <h2>SignUp Page</h2>
    <div class="container" style="background-color: #f1f1f1">
      <button type="button" class="Home" href="index.html">Home</button>
    </div>
  </div>

  <div class="imgcontainer">
    <img
      src="C:\Users\Net05\Desktop\Green Valley\GREEN_VALLEY-FOOD\Green Food Valley\assets\img\logo.jpg"
      alt="Avatar"
      class="avatar"
    />
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />
    <br />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button class="button" type="submit" @click="submitSignUpForm()"> Sign Up </button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> lembrar
      usuario
    </label>
  
  </div>

  <div class="container" style="background-color: #f1f1f1">
    <button type="button" class="login">Login</button>

    <span class="psw">Esqueceu a <a href="#">password?</a></span>

  </div>
  <div> 

<p>Ps: O "script" foi //comentado por razões desconhecidas que impossibilitavam o site de correr</p>

  </div>
<footer> Green Food 2022 </footer>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
  justify-self: center;
}

button {
  background-color: #2ec253;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
}

button:hover {
  opacity: 0.8;
}

.login {
  width: auto;
  padding: 10px 18px;
  background-color: #04aa6d;
}

.home {
  width: auto;
  padding: 10px 18px;
  background-color: #7a7a7a;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .login {
    width: 100%;
  }
  .home {
    width: 100%;
  }
}
</style>
<script>
// import useValidade from "@vuelidate/core";
// import { required, email, minlength, sameAs } from "@vuelidate/validators";
// import firebase from "firebase";

// export default {
//   name: "SignInView",
//   components: {
//     data() {
//       return {
//         v$: useValidade(),
//         email: "",
//         password: "",
//         passwordConfirm: "",
//       };
//     },

//     methods: {
//       submitSignUpForm() {
//         this.v$.Validade(); //checks all inputs
//         if (!this.v$.error) {
//           alert("Form successfully submitted");
//           this.signupRequest();
//           this.$router.push("/");
//         } else {
//           alert("Form failed validation");
//         }
//       },
//       signupRequest() {
//         firebase
//           .auth()
//           .createUserWithEmailAndPassword(this.email, this.password)
//           .then(() => {
//             this.successMessage = "Register Successfully.";
//           })
//           .catch((error) => {
//             let errorResponse = JSON.parse(error.message);
//             this.errorMessage = errorResponse.error.message;
//           });
//       },
//     },
//   },
// };
</script>