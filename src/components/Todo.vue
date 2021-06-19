<template>
  <div>
    <h1>Masukkan Panggilan</h1>
    <ul>
      <li v-for="item in todos" :key="item.ID_Sayang">{{ item.Nama_Sayang }}<button @click="hapus(item.ID_Sayang)">X</button></li>
    </ul>
    <input v-model="myText" name="Nama_Sayang"/>
    <button @click="tambah">Tambah</button>
  </div>
</template>

<script>
import axios from 'axios'

export default { 
  data: function(){
    return {
      todos: [],
      myText: ''
    }
  },
  created: function() {
    const username = localStorage.getItem('User')
    const password = localStorage.getItem('Pass')
    axios.get('http://localhost:3000/Pacar', {headers: {username: username, password: password} }) 
    .then(result=>{
      this.todos = result.data
    })
  },
  methods: {
    tambah: function(){
      const newItem = {Nama_Sayang:this.myText}
      const username = localStorage.getItem('User')
      const password = localStorage.getItem('Pass')
      axios.post('http://localhost:3000/Pacar',newItem, {headers: {username, password} })
      .then(()=> {
      // this.todos.push(newItem)
      location.reload()
      })
    },
    hapus: function(id){
      axios.delete(`http://localhost:3000/Pacar/${id}`)
      location.reload()
    }
  }
}
</script>