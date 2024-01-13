<template>
    <div class="modal fade" id="delete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="fw-bolder mb-0"><span class="text-gradient d-inline">Delate competition</span></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <h1 class="modal-title fs-5" id="staticBackdropLabel">do you really want to suppress this competition ?</h1>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="delateCompetition()" class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import axios from "axios";
import { HTTP } from '../http-common';
export default {
    name: 'DelateModal',
    props: ['id_component'],
    data() {
        return {
            drawer: true,
            user: { roles: [0] },
            token: localStorage.getItem('token'), //get your local storage data
        }
    },
    methods: {
        delateCompetition() {
            console.log(this.id_component.id);
            HTTP.delete('/v1/competition/'+ this.id_component.id, {
                headers: {
                    Authorization: "Bearer " + this.token
                }
            }).then(() => (
                console.log("ok"),
                /*this.$router.go({path: "/Admin" }),*/
                this.$emit('onDelete'),
                this.$notify.success({
                    title: 'Success',
                    message: 'Competition Deleted Succesfully',
                    offset: 100
                })

            )).catch(function () {
                alert('Delete Competition Failled');
                console.log('FAILURE!!');
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/styles.css"></style>