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
                            <h2 class="card-title fw-bolder mb-3 mt-3">{{ model.competition.title }}</h2>
                            <p class="card-text">
                                litel description...<br>
                                {{ model.competition.litel_description }}
                            </p>
                            <p class="card-text mb-5 mt-5">
                                long description...<br>
                                {{ model.competition.long_description }}
                            </p>
                            <p class="card-text mb-5">
                                evaluation text...<br>
                               {{ model.competition.evaluation_text }}
                            </p>
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

                    <div class="form-outline mb-4">
                        <input type="text" id="form3Example1q" placeholder="Name" class="form-control" v-model="visitor.name" />
                    </div>

                    <div class="form-outline mb-4">
                        <input type="phone" class="form-control" placeholder="Phone nomber" id="examplePhone" v-model="visitor.phone_number"/>
                    </div>

                    <div class="form-outline mb-4">
                        <input class="form-control" type="file" id="file" accept="file/csv" ref="file"  @change="handleFileUpload" />
                        <label for="formFile" class="form-label">Upload your CSV file</label>
                    </div>

                    <button  @click="submitFormData()" class="btn btn-success btn-lg mb-1">Submit</button>

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
                <th>Name</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ranking in rankings" :key="ranking">
                <td v-if="ranking.name" :r=r++>{{ r }}</td>
                <td>{{ ranking.name }}</td>
                <td>{{ ranking.result }}%</td>
              </tr>
            </tbody>
          </table>
        </div>    
                   

</template>

<script>
//import competModal from "@/components/CompetitionModal.vue";
import axios from "axios";
export default {
    name: 'Detail',
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
                phone_number: '',
            },
            selectedFile: null,
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
            formData.append('phone_number', this.visitor.phone_number);
            formData.append('file', this.selectedFile);
            //console.log(formData);
            axios.post(`http://127.0.0.1:8000/api/compareFile/${competitionId}`, formData)
                .then(function () {
                    console.log('SUCCESS!!');
                })
                .catch(function () {
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
</style>
