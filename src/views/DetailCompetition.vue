<template>
    <div class="container px-5 my-5">
        <div class="text-center mb-5">
            <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Title of Competition</span></h1>
        </div>
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-11 col-xl-9 col-xxl-8">
                <!-- Experience Section-->
                <section class="align-items-center">
                    <div class="card" style="width:800px">
                        <img class="card-img-top" src="../assets/compet.jpg" alt="Card image">
                        <div class="card-body">
                            <h2 class="card-title fw-bolder mb-3 mt-3">Title Competition</h2>
                            <p class="card-text">
                                litel description...<br>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius at enim eum illum aperiam placeat esse? 
                                Mollitia omnis minima saepe recusandae libero,
                                iste ad asperiores! Explicabo commodi quo itaque! Ipsam!
                            </p>
                            <p class="card-text mb-5 mt-5">
                                long description...<br>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius at enim eum illum aperiam placeat esse? 
                                Mollitia omnis minima saepe recusandae libero,
                                iste ad asperiores! Explicabo commodi quo itaque! Ipsam!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius at enim eum illum aperiam placeat esse? 
                                Mollitia omnis minima saepe recusandae libero,
                                iste ad asperiores! Explicabo commodi quo itaque! Ipsam!
                            </p>
                            <p class="card-text mb-5">
                                evaluation text...<br>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius at enim eum illum aperiam placeat esse? 
                                Mollitia omnis minima saepe recusandae libero,
                                iste ad asperiores! Explicabo commodi quo itaque! Ipsam!
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
    <competModal/>
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
              <tr>
                <td>1</td>
                <td>Pierre</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Victor</td>
                <td>75%</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Julia</td>
                <td>73%</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Martin</td>
                <td>60%</td>
              </tr>
            </tbody>
          </table>
        </div>    
                   

</template>

<script>
import competModal from "@/components/CompetitionModal.vue";
export default {
    name: 'Detail',
    components:{
        competModal,
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card{
        border-color: rgba(93, 30, 209, 0.76);
        border-width: 1px;
    }
</style>
