<template>
    <footer class="bg-white py-4 mt-auto">
                <div class="container px-5">
                    <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div class="col-auto"><div class="small m-0">Copyright &copy; peri 2023</div></div>
                        <div class="col-auto">
                            <a class="small text-decoration-none text-gradient" href="#!">Home</a>
                            <span class="mx-1 ">&middot;</span>
                            <a class="small text-decoration-none text-gradient" href="#!">About</a>
                            <span class="mx-1">&middot;</span>
                            <a class="small text-decoration-none text-gradient" href="#!">Contact</a>
                        </div>
                    </div>
                </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/styles.css"></style>