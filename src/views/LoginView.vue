<template>
  <div class="LOGIN">
    <h2>Login Page</h2>
    <div class="container" style="background-color: #f1f1f1">
      <a href="index.html" class="get-started-btn" style="color: #000000"
        >HOME
      </a>
    </div>
  </div>
  <div class="imgcontainer">
    <img src="~@/assets/img/logo.jpg" alt="Avatar" class="avatar" />
  </div>
  <div class="box">
    <!-- <form> -->
      <label for="uname"><b>Email</b></label>
      <input
        type="email"
        placeholder="Enter Email"
        name="uname"
        required
        v-model="email"
      />
      <p></p>
      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        required
        v-model="password"
      />

      <button type="submit" class="btn btn-outline-success" @click="submit">
        Login
      </button>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> lembrar
        usuario
      </label>

      <div class="container">
        <p>Ainda não tem conta?</p>
        <button type="button" class="btn btn-outline-success">Sign Up</button>
        <p></p>
        <span class="psw">Esqueceu a <a href="#">password?</a></span>
      </div>
    <!-- </form> -->
  </div>
</template>


<script>
// /* eslint-disable */
// import { ref } from "vue";
// // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "firebase";
// import { useRouter } from "vue-router";
// const email = ref("");
// const password = ref("");
// const errMsg = ref();
// const router = useRouter();

// const submit = () => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email.value, password.value)
//     .then((data) => {
//       console.log("Bem vindo");
//       router.push("/");
//     })

//     .catch((error) => {
//       console.log(error.code);
//       switch (error.code) {
//         case "auth/invalid-email":
//           errMsg.value = "Email inválido";
//           break;
//         case "auth/user-not-found":
//           errMsg.value = "Não existe conta som este email";
//           break;
//         case "auth/wrong-password":
//           errMsg.value = "Password incorreta";
//           break;
//         default:
//           errMsg.value = "Email ou Password incorreta";
//           break;
//       }
//     });
// };
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.box{
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