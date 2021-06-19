<template>
  <router-link to="/">Halaman User</router-link>
  <br>
  <router-link to="/Pacar">Halaman Input</router-link>
  <br>
  <router-link to="/user">Halaman Daftar</router-link>
  <router-view></router-view>
</template>
  



<script setup>
import Todo from './components/Todo.vue'
import User from './components/User.vue'
</script>

