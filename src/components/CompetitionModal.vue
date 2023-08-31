<template>
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
                    <input type="text" id="form3Example1q" placeholder="Name" class="form-control" v-model="name" />
                </div>

                <div class="form-outline mb-4">
                    <input type="phone" class="form-control" placeholder="Phone nomber" id="examplePhone" v-model="phone_number"/>
                </div>

                <div class="form-outline mb-4">
                    <input class="form-control" type="file" id="formFile" accept="file/csv" ref="file" />
                    <label for="formFile" class="form-label">Upload your CSV file</label>
                </div>

                <button v-on:click="submitFormData()" class="btn btn-success btn-lg mb-1">Submit</button>

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
import axios from "axios";
export default {
   props: ['competitionId'],
  name: 'CompetitionModal',  
  data() {
    return {
      name: '',
      phone_number: '',
      file: '', 
    }
  },
  methods: {
    submitFormData() {
      let visitor = new visitor();
      visitor.append('name', this.name);
      visitor.append('phone_number', this.phone_number);
      visitor.append('file', this.file);
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
        });

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/styles.css"></style>