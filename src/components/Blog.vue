<template>
    <div>
        <h1>Blog {{ activeBlog.title }}</h1>
    </div>
</template>

<script>
    import Blogs from './Blogs'


    export default {
        name: 'blog',
        data() {
            return {
                id: this.$route.params.blogId,
            }
        },

        mounted() {
            this.$store.dispatch("getBlogById", this.$route.params.blogId)
        },

        computed: {
            activeBlog() {
                return this.$store.state.activeBlog;
            }
        }
    }

</script>

<style></style>