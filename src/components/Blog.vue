<template>
    <div>
        <h1>Blog {{ id }}</h1>
    </div>
</template>

<script>
    import Blogs from './Blogs'


    export default {
        name: 'blog',
        data() {
            return {
                id: this.$route.params.blogId
            }
        },

        mounted() {
            store.getBlogById(this.$route.params.blogId)
        }
    }

</script>

<style></style>