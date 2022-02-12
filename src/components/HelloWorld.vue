<script setup>
import { ref, getCurrentInstance } from 'vue'
// import sayHello from "../api/user/sayHello";

const msg = ref("test")
const { proxy } = getCurrentInstance();

const say = () => {
  proxy.$api.UserService.sayHello('api/v1').then(res => {
    console.log(res)
    msg.value = res.data;
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="say()">counts</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    say () {-->
<!--      this.$api.UserService.sayHello('api/v1').then(res => {-->

<!--      })-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->