<script setup>
// import {ref} from 'vue'

import {menuStore} from '../stores/menu'

const allmenu = menuStore()
const alist = allmenu.menu_list

function del(i){
    allmenu.deleteMenu(i);
}

function addMenu (){
    const aMenu =
        {name:'ไก่ทอด', img:'', price:200,rating:5}

        alist.push
        (aMenu)
}

</script>
<template>
    <div>
        <h1>Menu List </h1>

        <ul>
            <li v-for="(n,index) in alist" :key="index">
                {{ n.name }}, {{ n.price }}. 
                <button @click="del(index)">ลบ</button></li>


        </ul>
        <button @click="addMenu(index)">เพิ่มเมนู</button>
    </div>
</template>