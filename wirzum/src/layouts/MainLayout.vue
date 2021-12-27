<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

  export default {
    name: 'ManiLayout',

    components:{
      Header,
      Footer
    }
  }
</script>
<style lang="scss">

</style>