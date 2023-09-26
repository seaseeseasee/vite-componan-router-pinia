<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
    </div>
  </nav>
  <div class="card-container">
    <div class="card" style="width: 18rem;" v-for="(n, index) in food" :key="index">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <image :xlink:href="n.img" width="100%" height="100%" />
      </svg>
      <div class="card-body">
        <h5 class="card-title">{{ n.name }}</h5>
        <p class="card-text">{{ n.description }}</p>
        <button class="btn btn-primary">เพิ่มสินค้า</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { menuStore } from '../stores/menu';
const menua = menuStore();
const food = menua.menu_list;
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  flex: 0 0 calc(33.3333% - 20px);
  box-sizing: border-box;
  text-align: center;
}

.card-image img {
  max-width: 50%;
  height: auto;
}
</style>
