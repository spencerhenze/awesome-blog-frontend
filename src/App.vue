<template>
  <div id="app">
    <div>
      <!-- THIS IS YOUR NEW <a> -->
      <router-link :to="{name: 'Home'}">Home</router-link> 
      <!-- <router-link :to="{name: 'Products'}">Products</router-link>  -->
    </div>
    <hr>
    <router-view></router-view>
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
a{
  font-size: 30px;
  color: red;
}
</style>