<template>
    <div class="container px-5 my-5">
        <div class="text-center mb-5">
            <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">{{ model.competition.title }}</span></h1>
        </div>
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-11 col-xl-9 col-xxl-8">
                <!-- Experience Section-->
                <section class="align-items-center">
                    <div class="card" style="width:800px">
                        <img class="card-img-top" src="../assets/compet.jpg" alt="Card image">
                        <div class="card-body">
                            
                            <b class="gt-text">Overview</b><br>
                            <p class="card-text mt-2" v-html="model.competition.litel_description"></p>
                                
                            
                            
                            <b class="gt-text mb-5 mt-5">Description</b><br>
                            <p class="card-text mb-2 mt-2" v-html="model.competition.long_description"></p>
                            
                            
                            
                            <b class="gt-text mb-5 mt-5">Evaluation</b><br>
                            <p class="card-text mb-2 mt-2" v-html="model.competition.evaluation_text" ></p>
                            
                           
                        </div>
                    </div>
                </section>
                <!-- Divider-->
                <div class="pb-5"></div>
                <!-- Skills Section-->
            </div>
        </div>
    </div>
    <section class="py-5 bg-gradient-primary-to-secondary text-white">
        <div class="container px-5 my-5">
            <div class="text-center">
                <h2 class="display-4 fw-bolder mb-4">Let's test your skill in this field</h2>
                <a class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Participate</a>
            </div>
        </div>
    </section>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Fill in the form</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form class="px-md-2">

                    <div class="form-outline mb-4" :class="{ error: v$.visitor.$errors.length }">
                        <label for="exampleFormControlNameInput" class="form-label">Name</label><i class="bi bi-asterisk"></i>
                        <input type="text" id="form3Example1q" placeholder="Name" class="form-control" v-model="v$.visitor.name.$model" />
                        <div class="input-errors" v-for="(error, index) of v$.visitor.name.$errors" :key="index">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                    <div class="form-outline mb-4" :class="{ error: v$.visitor.$errors.length }">
                        <label for="exampleFormControlMatriculeInput" class="form-label">Matricule</label><i class="bi bi-asterisk"></i>
                        <input type="text" class="form-control" placeholder="Matricule" id="matricule" v-model="v$.visitor.matricule.$model"/>
                        <div class="input-errors" v-for="(error, index) of v$.visitor.matricule.$errors" :key="index">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div>

                    <div class="form-outline mb-4">
                        <input class="form-control" type="file" id="file" accept="file/csv" ref="file"  @change="handleFileUpload" />
                        <label for="formFile" class="form-label">Upload your CSV file</label><i class="bi bi-asterisk"></i>
                    </div>

                    <button type="button" :disabled="v$.visitor.$invalid" @click="submitFormData()" class="btn btn-success btn-lg mb-1">Submit</button>

                </form>         
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
    </div>
    <!-- Divider-->
        <div class="pb-5"></div>
    <!-- Skills Section-->
    
        
        <!-- Experience Section-->
            <section>
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h2 class="text-primary fw-bolder mb-0 m-4">Ranking<i class="bi bi-trophy m-2"></i></h2>
                </div>
                <!-- Experience Card 1-->
            </section>
            <!-- Divider-->
            <div class="pb-5"></div>
            <!-- Skills Section-->
        <div class="col-lg-11 col-xl-9 col-xxl-8 m-4">    
          <table class="table table-striped mb-5">
            <thead>
              <tr>
                <th>Rang</th>
                <th>Matricule</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
               <tr v-for="(ranking, index) in this.rankings" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ ranking.matricule }}</td>
                <td>{{ ranking.result }}%</td>
              </tr>
            </tbody>
          </table>
        </div>    
                   

</template>

<script>
//import competModal from "@/components/CompetitionModal.vue";
import axios from "axios";
import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
export default {
    name: 'Detail',
    setup() {
        return { v$: useVuelidate() }
    },
    components:{
        //competModal,
    },
    data() {
        return {
            r: 1,
            rankings: null,
            model: {
                competition: {
                    title: '',
                    litel_description: '',
                    long_description: '',
                    evaluation_text: ''
                }
            },
            visitor: {
                name: '',
                matricule: '',
            },
            selectedFile: null,
        }
    },
    validations() {
        return {
            visitor: {
                name: {
                    required,
                    min: minLength(4)
                },
                matricule: {
                    required,
                    min: minLength(4)
                },
            },
        }
    },
    /*onCreated() {
        this.id = this.$route.params.id;
    },*/
    mounted() {
        this.getCompetitionData(this.$route.params.id);
        this.getRankingData(this.$route.params.id);
    },
    methods: {
        open1() {
            this.$notify.success({
                title: 'Success',
                message: 'Ceci est un message de succès',
                offset: 100
            });
        },
        getCompetitionData(competitionId) {
            axios.get(`http://127.0.0.1:8000/api/show/${competitionId}`)
                .then(response => (this.model.competition = response.data))
                .catch(error => console.log(error))
        },

        getRankingData(competitionId) {
            axios.get(`http://127.0.0.1:8000/api/ranking/${competitionId}`)
                .then(response => ( this.rankings = response.data))
                .catch(error => console.log(error))
        },

        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },

        submitFormData() {
            let competitionId = this.$route.params.id
            let formData = new FormData();
            formData.append('name', this.visitor.name);
            formData.append('matricule', this.visitor.matricule);
            formData.append('file', this.selectedFile);
            //console.log(formData);
            axios.post(`http://127.0.0.1:8000/api/compareFile/${competitionId}`, formData)
                .then(() => (this.$router.go({ path: `/Detail/${competitionId}` }), this.$notify.success({
                        title: 'Success',
                        message: 'Your file  added Succesfully!! go to bottom and tcheck your result',
                        offset: 100
                    }))
                )
                .catch(function () {
                    alert('Participation Failled');
                    console.log('FAILURE!!');
                });
            /*let visitor = new visitor();
            visitor.append('name', this.name);
            visitor.append('phone_number', this.phone_number);
            visitor.append('file', this.file);
            console.log(visitor);
            axios.post(`http://127.0.0.1:8000/api/compareFile/1`,
                visitor,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function () {
                console.log('SUCCESS!!');
            })
            .catch(function () {
                console.log('FAILURE!!');
            });*/

        },
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card{
        border-color: rgba(93, 30, 209, 0.76);
        border-width: 1px;
    }
    .bi-asterisk {
        margin-left: 5px;
        color: rgb(194, 12, 12);
        font-size: small;

    }
    .gt-text{
        font-size: large;
        /*font-family: 'Lucida Grande';*/
        color:rgba(93, 30, 209, 0.76);
    }
</style>
