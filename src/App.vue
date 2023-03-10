<script>
import AppFooterVue from './components/AppFooter.vue';
//import ProjectMain from './components/ProjectMain.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  components:{
    //ProjectMain
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader/>
  <router-view/>
  <AppFooter/>
 <!-- <ProjectMain/> -->
</template>

<style lang="scss">
  @import "./styles/style.scss";
</style>
