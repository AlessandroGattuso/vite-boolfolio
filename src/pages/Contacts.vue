<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Contacts',
    data(){
      return {
        store,
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
        errors: '',
        loading: false,
        success: false,
      }
    },
    methods:{
      sendData(){
        this.errors = 'ciao';
        const data = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          phone: this.phone,
          message: this.message,
        }

        this.loading = true;

        axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
            if(!response.data.success){
              this.errors = response.data.errors;
            }
            else{
              this.name = '';
              this.surname = '';
              this.phone = '';
              this.email = '';
              this.message = '';
              this.success = true;
              this.loading = false;
            }
        });
      }
    }
}
</script>
<template lang="">
  <div class="container">
      <div class="row my-5">
        <div class="col-12">
          <h2>Pagina contatti</h2>
        </div>
        <div class="col-12">
          <h5>Info sui contatti</h5>
          <div class="row">
            <div class="col-12 col-md-6"> 
              <div class="d-flex text-center flex-column gap-2">
                <div>
                  <strong><i class="fas fa-phone me-2"></i>Telefono:</strong>
                   123456789
                </div>
                <div>
                  <strong><i class="fa fa-envelope me-2"></i>Email: </strong>info@boolpress.com
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6"> 
              <div>
                  <strong><i class="fas fa-phone me-2"></i>Indirizzo:</strong>
                   123456789
                </div>
                <div>
                  <strong><i class="fa fa-envelope me-2"></i>Partita iva: </strong>info@boolpress.com
                </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5 background-green text-white py-5">
          <h5 class="text-center">Scrivici</h5>
          <div class="col-12 my-5" v-if="success">
            Messaggio inviato con successo
          </div>
          <form @submit.prevent="sendData">
            <div class="row d-flex justify-content-center gap-3">
              <div class="col-12 col-md-5">
                <label class="control-label" for="nome">Nome</label>
                <input type="text" class="form-control" name="nome" id="nomeId" v-model="name">           
              </div>
              <div class="col-12 col-md-5">
                <label class="control-label" for="cognome">Cognome</label>
                <input type="text" class="form-control" name="cognome" id="cognomeId" v-model="surname">           
              </div>
              <div class="col-12 col-md-5">
                <label class="control-label" for="email">Email</label>
                <input type="text" class="form-control" name="email" id="emailId" v-model="email">           
              </div>
              <div class="col-12 col-md-5">
                <label class="control-label" for="telefono">Telefono</label>
                <input type="text" class="form-control" name="telefono" id="telefonoId" v-model="phone">           
              </div>
              <div class="col-12 col-md-5">
                <label class="control-label" for="messaggio">Messaggio</label>
                <textarea class="form-control" name="messaggio" id="messaggioId" v-model="message"></textarea>           
              </div>
              <div class="col-12 text-center mt-5">
                <button type="submit" class="btn btn-warning px-5" :disabled="loading">{{ loading ? 'Invio messaggio...' : 'Invio'}}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
  </div>
  <div class="container-fluid">
    <div class="text-center">
      GOOGLE MAPS
    </div>
  </div>
</template>
<style lang="">
  
</style>