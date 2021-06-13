<template>
  <div>
    <h1>Selamat Datang</h1>
    <ul>
      <li v-for="item in users" :key="item.ID_Sayang">{{ item.Nama_Sayang }}<button @click="hapus(item.ID_Sayang)">X</button></li>
    </ul>
    <input v-model="username"/>
    <input v-model="password"/>
    <button @click="tambah">Tambah</button>
  </div>
</template>

<script>
import axios from 'axios'

export default { 
  data: function(){
    return {
      users: [],
      username: '',
      password: ''
    }
  },
  created: function () {
    axios.get('http://localhost:3000/users') 
    .then(result=>{
      this.users = result.data
    })
  },
  methods: {
    tambah: function(){
      const newItem = {username:this.username, password:this.password}
      axios.post('http://localhost:3000/users',newItem)
      this.users.push(newItem)
      location.reload()
    },
    hapus: function(id){
      axios.delete(`http://localhost:3000/users/${id}`)
      location.reload()
    }
  }
}
</script>