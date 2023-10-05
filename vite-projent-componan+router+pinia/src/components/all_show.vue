<script setup>
import { ref } from 'vue'
import { menuStore } from '../stores/menu.js'

const menu_store = menuStore();
const menu_food_all = ref(menu_store.menu_list)
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="(i, index) in menu_food_all" :key="index">
      <div class="card h-100">
        <img :src="i.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"><strong>{{ i.name }}</strong></h5>
          <p class="card-text"> {{i.description}}</p>
          <p class="card-text"> ราคา : {{i.price}} บาท</p>
        </div>
        <button class="btn btn-primary" type="submit">เข้าตะกร้า</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card-img-top {
  width: 100%;      
  height: 200px;    
  object-fit: cover; 
}
</style>