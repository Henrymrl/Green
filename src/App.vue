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
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contacto">
            <h3>Green Food Valley</h3>
            <p>
              Estrada do Vale <br />
              Ribeira Brava, 9350-145<br />
              Ilha da Madeira <br /><br />
              <strong>Telefone:</strong> 291291291<br />
              <strong>Email:</strong> info@greenfoodvalley.com<br />
            </p>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Subscreve à nossa Newsletter</h4>
            <p>
              Acompanha todas as novidades para estar apar de tudo o que
              acontece na Green Valley
            </p>
            <form action="" method="post">
              <input type="email" name="email" /><input
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">
      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Green Food Valley</span></strong
          >. All Rights Reserved
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
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
