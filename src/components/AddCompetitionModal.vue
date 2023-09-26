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

                        <div class="form-outline mb-4" :class="{ error: v$.competition.$errors.length }" >
                            <label for="exampleFormControlTextarea" class="form-label">Title</label><i class="bi bi-asterisk"></i>
                            <input type="text"  placeholder="Title" required v-model="v$.competition.title.$model" class="form-control" />
                            <div class="input-errors" v-for="(error, index) of v$.competition.title.$errors" :key="index">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </div>

                        <div class="form-outline mb-4" :class="{ error: v$.competition.$errors.length }">
                            <label for="exampleFormControlTextarea1" class="form-label">Litel description</label><i class="bi bi-asterisk"></i>
                            <textarea class="form-control"  rows="3" required v-model="v$.competition.litel_description.$model"></textarea>
                            <div class="input-errors" v-for="(error, index) of v$.competition.litel_description.$errors" :key="index">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </div>

                        <div class="form-outline mb-4" :class="{ error: v$.competition.$errors.length }">
                            <label for="exampleFormControlTextarea2" class="form-label">Long description</label><i class="bi bi-asterisk"></i>
                            <textarea class="form-control"  rows="8" required v-model="v$.competition.long_description.$model"></textarea>
                            <div class="input-errors" v-for="(error, index) of v$.competition.long_description.$errors" :key="index">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </div>

                        <div class="form-outline mb-4" :class="{ error: v$.competition.$errors.length }">
                            <label for="exampleFormControlTextarea3" class="form-label">Evaluation text</label><i class="bi bi-asterisk"></i>
                            <textarea class="form-control"  rows="4" required v-model="v$.competition.evaluation_text.$model"></textarea>
                            <div class="input-errors" v-for="(error, index) of v$.competition.evaluation_text.$errors" :key="index">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </div>

                        <div class="form-outline mb-4">
                            <input class="form-control" type="file" id="ref_file" required accept="file/csv, file/xls" ref="ref_file" @change="handleFileUpload"/>
                            <label for="formFile" class="form-label">Upload your CSV file</label>
                            <i class="bi bi-asterisk"></i>
                        </div>

                        <button type="button" :disabled="v$.competition.$invalid" @click="createCompetition()" class="btn btn-success btn-lg mb-1" data-bs-dismiss="">Submit</button>

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
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
    name: 'AddCompetitionModal',
    setup() {
        return { v$: useVuelidate() }
    },
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
            drawer: true,
            user: { roles: [0] },
            token: localStorage.getItem('token'), //get your local storage data
        }
    },
    validations() {
        return {
            competition: {
                title: {
                    required,
                    min: minLength(4)
                },
                litel_description: {
                    required,
                    min: minLength(10)
                },
                long_description: {
                    required,
                    min: minLength(20)
                },
                evaluation_text: {
                    required,
                    min: minLength(10)
                },
            },
        }
    },
    methods: {
        open1() {
            this.$notify.success({
                title: 'Success',
                message: 'Ceci est un message de succès',
                offset: 100
            });
        },
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
            axios.post('http://127.0.0.1:8000/api/v1/competition', formData, {
                headers: {
                    Authorization: "Bearer " + this.token
                }
            })
                .then(() => (this.$router.go({ name: "Admin"}), this.$notify.success({
                        title: 'Success',
                        message: 'Competition Added Succesfully',
                        offset: 100
                    }))
                )
                .catch(function () {
                    alert('Competition Failled');
                    console.log('FAILURE!!');
                });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/styles.css"></style>
<style scoped>
    .bi-asterisk {
        margin-left: 5px;
        color: rgb(194, 12, 12);
        font-size: small;

    }

</style>