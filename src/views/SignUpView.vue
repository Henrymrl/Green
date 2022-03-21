<template>
  <div class="SignUp">
    <h2>SignUp Page</h2>
  </div>

  <div class="logo">
    <img
      src="../assets/img/logo.jpg"
      alt="Avatar"
      class="avatar"
    />
  </div>

  <div class="Register">
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <br />
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p><button @click="register"> Sign Up </button></p>
    <p><button @click="signInWithGoogle"> Sign In With Google </button></p>
  </div>

    <label>
      <input type="checkbox" checked="checked" name="remember" /> lembrar
      usuario
      <span class="psw">Esqueceu a <a href="#">password?</a></span>
    </label>
  <div class="container" style="background-color:#f1f1f1">   
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
// import { ref } from "vue";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { useRouter } from "vue-router";
// const email = ref("");
// const password = ref("");
// const router = useRouter();

// const register = () => {
//   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
//     .then((data) => {
//       console.log("Registado com sucesso");
//       router.push("/");
//     })

//     .catch((error) => {
//       console.log(error.code);
//       alert(error.message);
//     });
// };

// const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(getAuth(), provider)
//     .then((result) => {
//       console.log(result.user);
//       router.push("/");
//     })
//     .catch((error) => {});
// };
</script>