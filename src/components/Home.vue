<template>
    <div>
        <h1>Home Page</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            blogs(){
                return this.$store.state.blogs;
            }
        },
        methods: {
            createNewBlog() {
                var newBlog = {
                    //pull in user input here to build the new blog object to pass to the store
                }
                this.$store.dispatch("createBlog", newBlog); // Is this syntax correct?
            }
        },

        //LIFECYCLE HOOKS
        mounted() {
            console.log("WE ARE ON THE HOME PAGE NOW")
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>