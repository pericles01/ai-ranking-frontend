<template>
    <div class="modal fade" id="update" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
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
                            <label for="exampleFormControlTextarea" class="form-label">Title</label><i
                                class="bi bi-asterisk"></i>
                            <input type="text" placeholder="Title" required v-model="competition.title"
                                class="form-control" />
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea1" class="form-label">Litel description</label><i
                                class="bi bi-asterisk"></i>
                            <!--<textarea class="form-control" rows="3" required
                                v-model="competition.litel_description"></textarea>-->
                            <editor
                                        class="form-control"
                                        api-key="i0d60ttl84iapdj8e75appqte6cj9izf0viyi6vmr2roc4kb"
                                        :init="{
                                            height: 200,
                                            menubar: false,
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic backcolor | \
                                                                                                                        alignleft aligncenter alignright alignjustify | \
                                                                                                                        bullist numlist outdent indent | removeformat | help'
                                        }"
                                        initial-value=""
                                        required
                                        v-model="competition.litel_description"
                            />    
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea2" class="form-label">Long description</label><i
                                class="bi bi-asterisk"></i>
                            <!--<textarea class="form-control" rows="8" required
                                v-model="competition.long_description"></textarea>-->
                            <editor
                                        class="form-control"
                                        api-key="i0d60ttl84iapdj8e75appqte6cj9izf0viyi6vmr2roc4kb"
                                        :init="{
                                            height: 200,
                                            menubar: false,
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic backcolor | \
                                                                                                                        alignleft aligncenter alignright alignjustify | \
                                                                                                                        bullist numlist outdent indent | removeformat | help'
                                        }"
                                        initial-value=""
                                        required
                                        v-model="competition.long_description"
                            />     
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea3" class="form-label">Evaluation text</label><i
                                class="bi bi-asterisk"></i>
                            <!--<textarea class="form-control" rows="4" required
                                v-model="competition.evaluation_text"></textarea>-->
                            <editor
                                    class="form-control"
                                    api-key="i0d60ttl84iapdj8e75appqte6cj9izf0viyi6vmr2roc4kb"
                                    :init="{
                                        height: 200,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar:
                                            'undo redo | formatselect | bold italic backcolor | \
                                                                                alignleft aligncenter alignright alignjustify | \
                                                                                bullist numlist outdent indent | removeformat | help'
                                    }"
                                    initial-value=""
                                    required
                                    v-model="competition.evaluation_text"
                            />    
                        </div>

                        <div class="form-outline mb-4">
                            <input class="form-control" type="file" id="ref_file" required accept="file/csv, file/xls"
                                ref="ref_file" @change="handleFileUpload" />
                            <label for="formFile" class="form-label">Upload your CSV file</label>
                        </div>

                        <button type="button" @click="updateCompetition()"
                            class="btn btn-success btn-lg mb-1" data-bs-dismiss="modal">Submit</button>

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
import Editor from '@tinymce/tinymce-vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

export default {
    name: 'AddCompetitionModal',
    components: {
        'editor': Editor
    },
    props: ['id_component','index'],
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
    watch: {
        id_component: function (newValue) {
            this.getCompetitionData(newValue.id); 
        }
    },
    mounted() {
        try {
            this.getCompetitionData(this.newValue);
        } catch (e) {
             []
        }
    },
    methods: {
        getCompetitionData(competitionsId) {
            axios.get('http://127.0.0.1:8000/api/show/' + competitionsId, {
                headers: {
                    Authorization: "Bearer " + this.token
                }
            })
                .then(response => ( console.log(competitionsId),
                        this.competition = response.data,
                        this.competition.title = response.data.title,
                        this.competition.litel_description = response.data.litel_description,
                        this.competition.long_description = response.data.long_description,
                        this.competition.evaluation_text = response.data.evaluation_text
                    )
                )
                .catch(error => console.log(error))
        },
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
        updateCompetition() {
            let formData = new FormData();
            //formData.append('_method', 'PUT');
            formData.append('title', this.competition.title);
            formData.append('litel_description', this.competition.litel_description);
            formData.append('long_description', this.competition.long_description);
            formData.append('evaluation_text', this.competition.evaluation_text);
            formData.append('ref_file', this.selectedFile);
            axios.put('http://127.0.0.1:8000/api/v1/competition/' + this.id_component.id, 
                {
                    title: this.competition.title,
                    litel_description: this.competition.litel_description,
                    long_description: this.competition.long_description,
                    evaluation_text: this.competition.evaluation_text,
                }
            , {
                headers: {
                    Authorization: "Bearer " + this.token
                }
            })
                .then(() => (/*this.$router.go({ name: "Admin" }),*/
                    this.$emit('onUpdate'),
                    this.$notify.success({
                        title: 'Success',
                        message: 'Competition Updated Succesfully',
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
<style scoped>.bi-asterisk {
    margin-left: 5px;
    color: rgb(194, 12, 12);
    font-size: small;

}</style>