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
                            <input type="text" id="form3Example1q" placeholder="Title" name="Title" class="form-control" />
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea1" class="form-label">Litel description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea1" class="form-label">Long description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                        </div>

                        <div class="form-outline mb-4">
                            <label for="exampleFormControlTextarea1" class="form-label">Evaluation text</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>

                        <div class="form-outline mb-4">
                            <input class="form-control" type="file" id="formFile" accept="file/csv, file/xls" />
                            <label for="formFile" class="form-label">Upload your CSV file</label>
                        </div>

                        <button type="submit" class="btn btn-success btn-lg mb-1">Submit</button>

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
export default {
    name: 'AddCompetitionModal',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/styles.css"></style>