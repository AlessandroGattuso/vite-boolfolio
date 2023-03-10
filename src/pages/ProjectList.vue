<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import {store} from '../store.js';

export default {
  name: "ProjectList",
  components:{
    ProjectCard
  },
  data(){
    return{
      store,
      projects: [],
      loading: true,
      currentPage: 1,
      lastPage: null
    } 
  },
  methods:{
    getProjects(project_page){
      this.loading = true;
      axios.get(`${this.store.baseUrl}/api/projects`, {params: {page: project_page}}).then((response) => {
        if(response.data.success){
          //this.projects = response.data.projects;
          console.log(response.data.projects.data[0].cover_image);
          this.projects = response.data.projects.data;
          this.currentPage = response.data.projects.current_page;
          this.lastPage = response.data.projects.last_page;
          this.loading = false;
        }
        else{

        }
      })
    }
  },
  mounted(){
    this.getProjects(this.currentPage);
  }
}
</script>
<template lang="">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center">Boolpress</h2>
        </div>
        <div class="col-12 w-100 d-flex justify-content-center">
          <div v-if="loading" class="d-flex justify-content-center">
            <div class="loader"></div>
          </div>
          <div v-else class="d-flex justify-content-between flex-wrap w-75 my-3">
            <template v-for="project in projects" :key="project.id">
              <ProjectCard :project="project"/>
            </template>
          </div>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-12  d-flex justify-content-center">
          <nav>
            <ul class="pagination">
              <li :class="currentPage === 1 ? 'disabled' : ''">
                <button class="page-link" @click="getProjects(currentPage - 1)">Prev</button>
              </li>
              <li v-for="i in lastPage">
                <button class="page-link" @click="getProjects(i)">{{i}}</button>
              </li>
              <li :class="currentPage === lastPage ? 'disabled' : ''">
                <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>