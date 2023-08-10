<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <div class="container-fluid">
            <a class="navbar-brand text-gradient fw-bolder" href="#">P-LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item">
                  <router-link class="nav-link mx-2" :class=" $route.name == 'Home' ? 'active' : '' " aria-current="page" :to="{ name: 'Home' }"> Home </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link mx-2" :class="$route.name == 'Competition' ? 'active' : ''" aria-current="page" :to="{ name: 'Competition' }">Competition</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link mx-2" :class="$route.name == 'Admin' ? 'active' : ''" aria-current="page" :to="{ name: 'Admin' }">Manage Competition</router-link>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
                <li class="nav-item mx-2">
                  <router-link class="nav-link text-whit h5 fw-bolder text-gradient" to="/Login">
                    <div class="pulse text-gradient fw-bolder">
                      <i class="bi bi-box-arrow-right"></i>
                    </div>
                    Login
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
    </nav>
  </div>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
   Footer
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .nav-item {
        font-size:18px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height:70px;
        line-height:64px;
  }
    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-weight: normal;
      font-style: normal;
      font-size: 40px;  
      color: rgb(236, 126, 24);
      animation: pulse 3s infinite;
  }
  .bi{
    font-size: xx-large;
  }


</style>
