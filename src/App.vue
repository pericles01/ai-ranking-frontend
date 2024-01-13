<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <div class="container-fluid">
            <a class="navbar-brand text-gradient fw-bolder" href="#">
              <img class="img-fluid" src="/assets/thm.svg" alt="New York">
            </a>
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
                <li class="nav-item" v-if="token">
                    <router-link class="nav-link mx-2" :class="$route.name == 'Admin' ? 'active' : ''" aria-current="page" :to="{ name: 'Admin' }">Manage Competition</router-link>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
                <li class="nav-item mx-2" v-if="token">
                    <button class="nav-link text-whit h5 fw-bolder text-gradient" @click="logout()">
                      <div class="pulse text-gradient fw-bolder">
                        <i class="bi bi-box-arrow-right"></i>
                      </div>
                      Logout
                    </button>
                  </li>
                <li class="nav-item mx-2" v-else>
                  <router-link class="nav-link text-whit h5 fw-bolder text-gradient" to="/login">
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
//import axios from 'axios';
import { HTTP } from './http-common';
export default {
  name: 'App',
  setup() {
    return { islog$: localStorage.getItem('token') }
  },
  components: {
   Footer
  },
  data() {
    return {
       token: localStorage.getItem('token'),//get your local storage data
    }
  },
  watch: {
    '$route.path'() {
      this.token = localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      HTTP.delete('/logout', {
        headers: {
          Authorization: "Bearer " + this.token
        }
      }).then(() => (
        console.log("ok"),
        localStorage.removeItem('token'),
        localStorage.removeItem('expiration'),
        this.$router.go('/Login'),
        this.$notify.success({
          title: 'Success',
          message: 'Logout Succesfully',
          offset: 100
        })
      )).catch(function () {
        alert('Competition Failled');
        console.log('FAILURE!!');
      });
    }
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
