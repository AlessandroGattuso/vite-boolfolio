<script>
export default {
  name: 'NotFound',
}
</script>
<template lang="">
  <div class="container">
    <div class="my-5 d-flex gap-3 align-items-center flex-column w-100">
      <h2>Pagina non trovata</h2>
      <div>
        <router-link :to="{ name: 'homepage'}" class="btn btn-success">Go home</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="">
</style>