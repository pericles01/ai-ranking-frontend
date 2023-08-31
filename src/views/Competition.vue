<template>
    <div class="container px-5 my-5">
                    <div class="text-center mb-5">
                        <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Our Competitions</span></h1>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-11 col-xl-9 col-xxl-8">
                            <!-- Experience Section-->
                            <section>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <h2 class="text-primary fw-bolder mb-0">Experience</h2>
                                </div>
                                <!-- Experience Card 1-->
                            </section>
                            <!-- Divider-->
                            <div class="pb-5"></div>
                            <!-- Skills Section-->
                            <section>
                                <!-- Skillset Card-->
                                <div class="card shadow border-0 rounded-4 mb-5" v-for="competition in competitions" :key="competition">
                                    <div class="card-body p-4">
                                        <!-- Professional skills list-->
                                        <div class="mb-1">
                                            <div class="d-flex align-items-center mb-4">
                                                <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-trophy-fill"></i></div>
                                                <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">{{ competition.title }}</span></h3>
                                            </div>
                                            <div class="row align-items-center gx-5">
                                                <div class="col text-center text-lg-start">
                                                        <div class="bg-light p-4 rounded-4">
                                                            <img class="img-fluid" src="../assets/compet.jpg" alt="New York">
                                                        </div>
                                                    </div>
                                                <div class="col-lg-8">
                                                    <div>{{ competition.litel_description }}.</div>
                        
                                                    <router-link class="btn btn-primary mt-3 px-3 py-2" :to="{ name: 'Detail', params: { id: competition.id } }">raed more..</router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Languages list-->
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>       
</template>

<script>
import axios from "axios";

export default {
    name: 'Competition',
    components: {
       
    },
    data() {
        return {
            competitions: null
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/index')
            .then(response => (this.competitions = response.data))
            .catch(error => console.log(error))
    },
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
