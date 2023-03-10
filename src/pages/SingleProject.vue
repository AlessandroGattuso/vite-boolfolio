<script>
import axios from 'axios';
import { store } from '../store';

export default {
  name: 'SingleProject',
  data(){
    return{
      store,
      project: null,
      loading: true
    };
  },
  mounted(){
    this.loading = true;
    axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
      this.project = response.data.project;
      this.loading = false;
    });
  }
}
</script>
<template lang="">
  <div class="container">
    <div v-if="loading"></div>
    <div v-else>
      <div class="row">
        <div class="col-12">
          <h4>{{ project.title }}</h4>
        </div>
        <div class="cover-img">
          <img :src="project.cover_image ? `${this.store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'" class="img-fluid" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    .cover-img{
      width: 300px;
    }
</style>