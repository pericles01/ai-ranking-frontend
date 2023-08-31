<template>
    <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Fill in the form</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="px-md-2">

                        <div class="form-outline mb-4">
                            <input type="text"  placeholder="Title" v-model="competition.title" class="form-control" />
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea1" class="form-label">Litel description</label>
                            <textarea class="form-control"  rows="3" v-model="competition.litel_description"></textarea>
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea2" class="form-label">Long description</label>
                            <textarea class="form-control"  rows="8" v-model="competition.long_description"></textarea>
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea3" class="form-label">Evaluation text</label>
                            <textarea class="form-control"  rows="4" v-model="competition.evaluation_text"></textarea>
                        </div>

                        <div class="form-outline mb-4">
                            <input class="form-control" type="file" id="ref_file" accept="file/csv, file/xls" ref="ref_file" @change="handleFileUpload"/>
                            <label for="formFile" class="form-label">Upload your CSV file</label>
                        </div>

                        <button @click="createCompetition()" class="btn btn-success btn-lg mb-1">Submit</button>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AddCompetitionModal',
    props: {
        msg: String
    },
    data() {
        return {
            competition: {
                title: '',
                litel_description: '',
                long_description: '',
                evaluation_text: '',
            },
            selectedFile: null,
        }
    },
    methods: {
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },

        createCompetition() {
            let formData = new FormData();
            formData.append('title', this.competition.title);
            formData.append('litel_description', this.competition.litel_description);
            formData.append('long_description', this.competition.long_description);
            formData.append('evaluation_text', this.competition.evaluation_text);
            formData.append('ref_file', this.selectedFile);
            //console.log(formData);
            axios.post('http://127.0.0.1:8000/api/createCompetition', formData)
            .then(function () {
                    console.log('SUCCESS!!');
            })
            .catch(function () {
                    console.log('FAILURE!!');
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/styles.css"></style>