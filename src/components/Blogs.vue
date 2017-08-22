<template>
  <div>
    <h1>Blogs</h1>

    <ul>
      <li v-for="blog in blogs">
        <router-link :to="{title: 'Blog', params: { blogId: blog.id} }">{{blog.title}}</router-link>
      </li>
    </ul>
  </div>
  </template>


  <script>

    export default {
      name: 'blogs',
      data() {
        return {
          blogs: []
        }
          // Does this go in the return or is it just an empty array?
          // blogs: [{
          //   id: store.blogs._id,
          //   title: store.blogs._id.title,
          //   body: store.blogs._id.body
          // }]
      },

      mounted() {
        blogs = store.getBlogs()
      }
    }

  </script>


  <style>

  </style>