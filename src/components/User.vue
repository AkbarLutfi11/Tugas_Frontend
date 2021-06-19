<template>
  <div>
    <h1>Daftar Panggilan yang Tersimpan</h1>
    <ul>
      <li v-for="item in users" :key="item.ID_User">{{ item.Username }}<button @click="hapus(item.ID_User)">X</button></li>
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
    const username = localStorage.getItem('User')
    const password = localStorage.getItem('Pass')
    axios.get('http://localhost:3000/User', {headers: {username: username, password: password} }) 
    .then(result=>{
      this.users = result.data
    })
  },
  methods: {
    tambah: function(){
      const username = localStorage.getItem('User')
      const password = localStorage.getItem('Pass')
      const newItem = {username:this.username, password:this.password}
      axios.post('http://localhost:3000/User',newItem, {headers: {username: username, password: password} })
      this.users.push(newItem)
      location.reload()
    },
    hapus: function(id){
      const username = localStorage.getItem('User')
      const password = localStorage.getItem('Pass')
      axios.delete(`http://localhost:3000/User/${id}`, {headers: {username: username, password: password} })
      location.reload()
    }
  }
}
</script>