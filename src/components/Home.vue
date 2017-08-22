<template>
    <div>
        <h1>Vue is fun</h1>
        <button @click="createNewBlog">CREATE</button>
        <div v-if="blogs.length > 0">
            <ul>
                <li v-for="blog in blogs">
                    <router-link :to="{name: 'Blog', params: {blogId: blog._id}}">{{blog.title}}</router-link>
                </li>
            </ul>
        </div>
        <div v-else>
            <img src="https://media.tenor.com/images/85d269dc9595a7bcf87fd0fa4039dd9f/tenor.gif" alt="">
        </div>
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