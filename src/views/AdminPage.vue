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
                                        <div class="card shadow border-0 rounded-4 mb-5">
                                            <div class="card-body p-4">
                                                <!-- Professional skills list-->
                                                <div class="mb-1">
                                                    <div class="d-flex align-items-center mb-4">
                                                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-trophy-fill"></i></div>
                                                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Competition 1</span></h3>
                                                    </div>
                                                    <div class="row align-items-center gx-5">
                                                        <div class="col text-center text-lg-start">
                                                                <div class="bg-light p-4 rounded-4">
                                                                    <img class="img-fluid" src="../assets/compet.jpg" alt="New York">
                                                                </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                                                            <a class="btn btn-primary mt-3 px-3 py-2" href="/Detail">
                                                                raed more..
                                                            </a>
                                                        </div>
                                                        <div class="col align-content-lg-end">
                                                            <i class="bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#delete"></i>
                                                            <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#update"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Languages list-->
                                            </div>
                                        </div>
                                        <div class="card shadow border-0 rounded-4 mb-5">
                                                <div class="card-body p-4">
                                                    <!-- Professional skills list-->
                                                    <div class="mb-1">
                                                        <div class="d-flex align-items-center mb-4">
                                                            <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-trophy-fill"></i></div>
                                                            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Competition 2</span></h3>
                                                        </div>
                                                        <div class="row align-items-center gx-5">
                                                            <div class="col text-center text-lg-start">
                                                                    <div class="bg-light p-4 rounded-4">
                                                                        <img class="img-fluid" src="../assets/compet.jpg" alt="New York">
                                                                    </div>
                                                                </div>
                                                            <div class="col-lg-6">
                                                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                                                                <a class="btn btn-primary mt-3 px-3 py-2" href="/Detail">
                                                                    raed more..
                                                                </a>
                                                            </div>
                                                            <div class="col align-content-lg-end">
                                                                <i class="bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#delete"></i>
                                                                <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#update"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Languages list-->
                                                </div>
                                        </div>
                                        <div class="card shadow border-0 rounded-4 mb-5">
                                                    <div class="card-body p-4">
                                                        <!-- Professional skills list-->
                                                        <div class="mb-1">
                                                            <div class="d-flex align-items-center mb-4">
                                                                <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-trophy-fill"></i></div>
                                                                <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Competition 3</span></h3>
                                                            </div>
                                                            <div class="row align-items-center gx-5">
                                                                <div class="col text-center text-lg-start">
                                                                        <div class="bg-light p-4 rounded-4">
                                                                            <img class="img-fluid" src="../assets/compet.jpg" alt="New York">
                                                                        </div>
                                                                    </div>
                                                                <div class="col-lg-6">
                                                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div>
                                                                    <a class="btn btn-primary mt-3 px-3 py-2" href="/Detail">
                                                                        raed more..
                                                                    </a>
                                                                </div>
                                                                <div class="col align-content-lg-end">
                                                                    <i class="bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#delete"></i>
                                                                    <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#update"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Languages list-->
                                                    </div>
                                        </div>
                                        <DelateModal/>
                                        <UpdateModal/>
                </section>
            </div>
        </div>
    </div>                
</template>

<script>
import AddCompetModal from "@/components/AddCompetitionModal.vue";
import DelateModal from "@/components/DelateModal.vue";
import UpdateModal from "@/components/UpdateModal.vue";

export default {
    name: 'AdminPage',
    components: {
        AddCompetModal,
        DelateModal,
        UpdateModal,
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
