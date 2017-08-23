<template>
  <div id="app">
    <div>
      <!-- THIS IS YOUR NEW <a> -->
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'Blogs'}">Blogs</router-link>
    </div>
    <hr>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <!-- page content injected here. This is telling vue, whatever router-link is selected, inject that between the <router-view> tags -->
          <router-view></router-view>

        </div>
      </div>
    </div>
    <hr>
    <footer>
      FOOT HERE
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }

</script>

<style>
  a {
    font-size: 30px;
    color: red;
  }
</style>