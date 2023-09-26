<template>
    <section class="py-5 bg-gradient-primary-to-secondary text-white">
        <div class="container px-5 my-5">
            <div class="text-center">
                <h2 class="display-4 fw-bolder mb-4">Create a New Competitions</h2>
                <a class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Add competitions</a>
            </div>
        </div>
    </section>
    <AddCompetModal/>
    <!-- Divider-->
        <div class="pb-5"></div>
    <!--End Divider-->    
    <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-11 col-xl-9 col-xxl-8">
                <section>
                                        <!-- Skillset Card-->
                                        <div class="card shadow border-0 rounded-4 mb-5" v-for="(competition, index) in this.competitions" :key="index">
                                            <div class="card-body p-4">
                                                <!-- Professional skills list-->
                                                <div class="mb-1">
                                                    <router-link style="text-decoration: none;" :to="{ name: 'Detail', params: { id: competition.id } }">
                                                    <div class="d-flex align-items-center mb-4">
                                                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-trophy-fill"></i></div>
                                                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">{{ competition.title }}</span></h3>
                                                    </div>
                                                    </router-link>
                                                    <div class="row align-items-center gx-5">
                                                        <router-link class="col text-center text-lg-start" style="text-decoration: none;" :to="{ name: 'Detail', params: { id: competition.id } }">
                                                        <div class="col text-center text-lg-start">
                                                                <div class="bg-light p-4 rounded-4">
                                                                    <img class="img-fluid" src="../assets/compet.jpg" alt="New York">
                                                                </div>
                                                        </div>
                                                        </router-link>
                                                        <div class="col-lg-6">
                                                            <router-link style="text-decoration: none;" :to="{ name: 'Detail', params: { id: competition.id } }"><div>{{ competition.litel_description }}</div></router-link>
                                                            <router-link class="btn btn-primary mt-3 px-3 py-2" :to="{ name: 'Detail', params: { id: competition.id } }">Read more</router-link>
                                                        </div>
                                                        <div class="col align-content-lg-end">
                                                            <i class="bi bi-trash-fill" data-bs-toggle="modal" @click="() => maFonction(competition)" data-bs-target="#delete"></i>
                                                            <i class="bi bi-pencil-square" data-bs-toggle="modal" @click="() => maFonction(competition)" data-bs-target="#update"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Languages list-->
                                            </div>
                                        </div>
                                        <DelateModal :id_component ="selectCompetition"/>
                                        <UpdateModal :id_component ="selectCompetition"/>
                </section>
            </div>
        </div>
    </div>                
</template>

<script>
import AddCompetModal from "@/components/AddCompetitionModal.vue";
import DelateModal from "@/components/DelateModal.vue";
import UpdateModal from "@/components/UpdateModal.vue";
import axios from "axios";

export default {
    name: 'AdminPage',
    components: {
        AddCompetModal,
        DelateModal,
        UpdateModal,
    },
    data() {
        return {
            competitions: null,
            drawer: true,
            user: { roles: [0] },
            token: localStorage.getItem('token'), //get your local storage data
            selectCompetition: {},
        }
    },
    watch: {
        competitions(newValueCompetitions) {
            console.log(this.competitions);
            return this.competitions= newValueCompetitions;
        }
    },
    mounted() {
        this.getCompetition();
    },
    methods: {
        getCompetition() {
            axios
                .get('http://127.0.0.1:8000/api/v1/competition', {
                    headers: {
                        Authorization: "Bearer " + this.token
                    }
                })
                .then(response => (this.competitions = response.data))
                .catch(error => console.log(error))
        },
        maFonction(competition) {
            this.selectCompetition = competition;
        }

    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bi-trash-fill{
        color: rgb(194, 12, 12);

    }
    .bi-pencil-square{
        color: hsl(246, 79%, 46%);
    }
</style>
