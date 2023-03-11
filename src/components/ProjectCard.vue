<script>
  import {store} from '../store.js';

  export default {
    name: "ProjectCard",
    props:{
      project: Object,
    },
    data(){
      return{
        store
      }
    }
  }
</script>
<template lang="">
  <div class="card" style="width: 17rem;">
    <div class="card-body">
      <div class="card-img-top">
        <img :src="project.cover_image != null ? `${this.store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'" class="img-fluid" :alt="project.cover_image">
      </div>
      <div class="card-title">
        <h5>{{project.title}}</h5>
        <em v-if="project.type">Tipo: {{ project.type.name }}</em>
        <p v-if="project.technologies.length"> 
          Tecnologie:
          <span class="badge bg-primary me-1" v-for="tech in project.technologies">{{tech.name}} </span>
        </p>
      </div>
      <div class="card-text">
        {{ project.description }}
      </div>
      <!-- <div class="mt-5">
        <a href="" class="btn btn-sm btn-success">Leggi</a>
      </div> -->
      <router-link :to="{ name: 'single-project', params: { slug: project.slug} }" 
                   class="btn btn-sm btn-success">
        Leggi
      </router-link>
    </div>
  </div>
</template>
<style lang="">
  
</style>