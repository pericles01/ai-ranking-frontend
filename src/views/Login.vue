<template>
    <section class="background-radial-gradient overflow-hidden">
      <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(251, 85%, 49%)">
              LOG<span style="color: hsl(266, 53%, 84%)">IN</span>
            </h1>
            <p class="mb-4 opacity-70" style="color: hsl(256, 44%, 71%)">
              Welcome to your Admin login page!! pleace inter your login and password
            </p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

            <div class="card bg-glass">
              <div class="card-body px-4 py-5 px-md-5">
                <form>
                  <!-- Email input -->
                  <div class="form-outline mb-4" :class="{ error: v$.authuser.$errors.length }">
                    <input type="email" id="form3Example3" class="form-control" v-model="v$.authuser.email.$model" />
                    <label class="form-label" for="form3Example3">Email address</label>
                    <div class="input-errors" v-for="(error, index) of v$.authuser.email.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4" :class="{ error: v$.authuser.$errors.length }">
                    <input type="password" id="form3Example4" class="form-control" v-model="v$.authuser.password.$model" />
                    <label class="form-label" for="form3Example4">Password</label>
                    <div class="input-errors" v-for="(error, index) of v$.authuser.password.$errors" :key="index">
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label class="form-check-label" for="form2Example33">
                      Remember me
                    </label>
                  </div>

                  <!-- Submit button -->
                  <button type="button" :disabled="v$.authuser.$invalid" @click="loginUser()" class="btn btn-primary btn-block mb-4">
                    Login
                  </button>

                  <!-- Register buttons -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
</template>

<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  name: 'Login',
  setup() {
    return { v$: useVuelidate() , islog$: localStorage.getItem('token') }
  },
  props: {
        msg: String
  },
  data() {
    return {
      authuser: {
        email: '',
        password: '',
      },
      selectedFile: null,
    }
  },
  validations() {
    return {
      authuser: {
        email: {
          required,
          email,
        },
        password: {
          required,
        },
      },
    }
  },
  methods: {
    loginUser() {
      
      let formData = new FormData();
      formData.append('email', this.authuser.email);
      formData.append('password', this.authuser.password);
      console.log(formData);
      axios.post('http://127.0.0.1:8000/api/login', formData).then(response => (
        localStorage.setItem('token', response.data.token), //store them from response
        this.$router.push({ path: '/Admin'}),
        this.$notify.success({
          title: 'Success',
          message: 'Loguet Succesfully',
          offset: 100
        })
      ))
      .catch(function () {
        alert('Connecxion Failled');
        console.log('FAILURE!!');
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .background-radial-gradient {
      background-color: hsl(288, 90%, 47%);
      background-image: radial-gradient(650px circle at 0% 0%,
          hsl(266, 81%, 58%) 15%,
          hsl(281, 64%, 53%) 35%,
          hsl(278, 23%, 9%) 75%,
          hsl(288, 38%, 47%) 80%,
          transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
          hsl(266, 81%, 58%) 15%,
          hsl(281, 64%, 53%) 35%,
          hsl(278, 23%, 9%) 75%,
          hsl(288, 38%, 47%) 80%,
          transparent 100%);
    }

    #radius-shape-1 {
      height: 220px;
      width: 220px;
      top: -60px;
      left: -130px;
      background: radial-gradient(#8d0576, #280963);
      overflow: hidden;
    }

    #radius-shape-2 {
      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
      bottom: -60px;
      right: -110px;
      width: 300px;
      height: 300px;
      background: radial-gradient(#8d0576, #280963);
      overflow: hidden;
    }

    .bg-glass {
      background-color: hsla(0, 0%, 100%, 0.445) !important;
      backdrop-filter: saturate(200%) blur(25px);
      border-radius: 30px;
    }
    .bi-person-fill{
      color: aliceblue;
      align-self: center;
      width: 100;
    }
</style>