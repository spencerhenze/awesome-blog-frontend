<template>
    <div>
        <h1>Vue is fun</h1>
        <!--insert wysiwug here  -->
        <div>
            <form id="blog-form" @submit.prevent="createNewBlog()">
                 <input type="text" placeholder="Title" v-model="blogTitle"> 
                 <input type="text-area" placeholder="enter blog text here" v-model="blogBody">
            </form>
        </div>
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
                msg: 'Welcome to Your Vue.js App',
                blogTitle: '',
                blogBody: ''
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
                    title: this.blogTitle,
                    body: this.blogBody
                }
                this.$store.dispatch("createBlog", newBlog);
            }
        },

        //LIFECYCLE HOOKS
        mounted() {
            this.$store.dispatch("getBlogs")
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #blog-form{
        display: flex;
        flex-direction: column;
    }
</style>