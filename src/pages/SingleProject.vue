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
      if(response.data.success){
        this.project = response.data.project;
        this.loading = false;
      }
      else{
        this.$router.push({name: 'not-found'});
      }
    
    });
  }
}
</script>
<template lang="">
  <div class="container">
    <div v-if="loading"></div>
    <div v-else class="d-flex">
        <div class="row g-0 my-4 d-flex">
          <div class="col-4">
            <img :src="project.cover_image ? `${this.store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-5 ms-2">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item p-0" v-if="project.type">Tipo: {{ project.type.name }}</li>
                <li class="list-group-item p-0" v-if="project.technologies.length">
                    Tecnologie: 
                    <div class="d-flex flex-wrap gap-4">
                     <span class="badge bg-primary" v-for="(tech, index) in project.technologies" :key="index">{{ tech.name }}</span>
                    </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col d-flex justify-content-end">
            <div>
              <router-link :to="{ name: 'homepage' }" class="btn btn-primary">Go back</router-link>
            </div>
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