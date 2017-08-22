<template>
  <div>
    <ul>
      <li v-for="blog in blogs">
        <!-- <router-link :to="{name: 'Blog', params: {blogId: blog.id}}"> -->
        <h2>
          {{blog.title}}
        </h2>
        <p>
          {{blog.body}}
        </p>
        <hr>
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'blogs',
    data() {
      return {
      }
      // Does this go in the return or is it just an empty array?
      // blogs: [{
      //   id: store.blogs._id,
      //   title: store.blogs._id.title,
      //   body: store.blogs._id.body
      // }]
    },
    computed: {
      blogs() {
        return this.$store.state.blogs;
      }
    },


    mounted() {
      blogs = this.$store.dispatch("getBlogs")
    }
  }
</script>


<style>

</style>