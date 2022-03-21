<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/Login"> LogIn </router-link>
    <router-link to="/SignUp"> SignUp </router-link>
    <router-link to="/Cabazes"> Cabazes </router-link>
    <router-link to="/About"> About </router-link>
    <router-link to="/Erro"> Erro </router-link>
    <!-- <button @click="handleSignOut" v-if="isLoggedIn"> Sair </button> -->
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>

// import {onMounted, ref} from "vue";
// import {getAuth, onAuthStageChanged, } from "firebase/auth";
// import {useRouter} from "vue-router";

// const router = useRouter();


// const isLoggedIn = ref(false);


// let auth;
// onMounted(() => {
//   auth = getAuth();
//   onAuthStageChanged(auth, (user) =>{
//      if (user) {
//        isLoggedIn.value = true;
//      }
//      else {
//        isLoggedIn.value = false;
//      }
//   });
// });

// const handleSignOut = () => {
//   signOut(auth).then(() => {
//     router.push("/");

//   })

// };


</script>
