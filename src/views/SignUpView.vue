<template>
  <div class="SignUp">
    <h2>SignUp Page</h2>
  </div>
  <div class="imgcontainer">
    <img src="~@/assets/img/logo.jpg" alt="Avatar" class="avatar" />
  </div>
  <div class="box">
    <form action="/action_page.php" method="post">
      <label for="email"><b>Email</b></label>
      <input type="email" placeholder="Enter Email" name="email" required />
      <p></p>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <button @click="register" class="btn btn-outline-success">SignUp</button>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> lembrar
        usuario
      </label>

      <div class="container">
        <p>Já tem conta?</p>
        <button type="button" class="btn btn-outline-success">LogIn</button>
        <p></p>
        <span class="psw">Esqueceu a <a href="#">password?</a></span>
      </div>
    </form>
  </div>
</template>


<script>
/* eslint-disable */

// methods: {
// signupRequest() {
// firebase
// .auth()
// .createUserWithEmailAndPassword(this.email,
// this.password)
// .then(
// () => {
// this.successMessage = "Register Successfully.";
// },
// error => {
// let errorResponse = JSON.parse(error.message);
// this.errorMessage = errorResponse.error.message;
// }
// );
// },
// },

// import { ref } from "vue";
// //import { getAuth, LogInWithEmailAndPassword } from "firebase/firebase-auth";
// import firebase from "firebase";
// import { useRouter } from "vue-router";
// const email = ref("");
// const password = ref("");
// const errMsg = ref();
// const router = useRouter();

// const register = () => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email.value, password.value)
//     .then((data) => {
//       console.log("Bem vindo");
//       router.push("/");
//     })

//     .catch((error) => {
//       console.log(error.code);
//       alert(errMsg);
//     });
// };
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.box {
  position: fixed;
  width: 300px;
  height: 500px;
  /*background-color: #a3eed3;*/
  padding: 30px;
  margin-top: 50px;
  margin-right: 50px;
  border-radius: 25px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  /*border: 1px solid #ccc;*/
  box-sizing: border-box;
  text-align: center;
  justify-self: center;
}

button {
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

/*.signup {
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
  position: fixed;
  margin-top: 25px;
  margin-left: 100px;
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
  .signup {
    width: 100%;
  }
  .home {
    width: 100%;
  }
}
</style>