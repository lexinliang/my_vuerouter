<template>
  <div class="home">
 
      我是home页面
    <ul>
      <li><p @click="goto">去about页面</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{
    goto(){
      this.$router.push("/about")
    }
  }
}
</script>
<style scoped>

</style>
