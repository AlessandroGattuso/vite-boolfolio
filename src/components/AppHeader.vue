<script>
export default {
  name: "AppHeader",
  data(){
    return {
      menuItems: [
        {
          label: 'Home',
          routeName: 'homepage',
          // link: '/'
        },
        {
          label: 'Blog',
          routeName: 'project-list'
        },
        {
          label: 'Contatti',
          routeName: 'contacts'
        }
      ]
    }
  }

}
</script>
<template lang="">
  <header>
    <nav class="nav navbar-expand-md background-green">
        <div class="container d-flex py-3">
          <div class="navbar-brand">
            <img src="../assets/vue.svg" alt="logo not found">
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContet">
            <ul class="navbar-nav ms-auto d-flex gap-3">
              <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                <!-- <a :href="item.link" class="nav-link text-white">
                  {{item.label}}
                </a> -->
                <router-link :to="{ name: item.routeName }" class="nav-link text-white">
                  {{item.label}}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
  .img{
    width: 300px;
  }
</style>