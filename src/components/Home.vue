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
        //LIFECYCLE HOOKS
        mounted() {
            console.log("WE ARE ON THE HOME PAGE NOW")
        },
        beforeDestroy() {
            console.log("GOOD BYE HOME")
        },
        destroyed() {
            console.log("THE HOME COMPONENT IS GONE")
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>