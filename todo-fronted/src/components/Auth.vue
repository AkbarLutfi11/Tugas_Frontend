<template>
    <div>
        <div>
            <label>username</label>
            <input type="text" v-model="username"/>
        </div>
        <div>
            <label>password</label>
            <input type="password" v-model="password"/>
        </div>
    
        <button @click="simpan">Save</button>
        <button @click="hapus">Delete</button>
    </div>
</template>

<script>
export default{
    data: function() {
        return{
            username: '',
            password: ''
        }
    },
    created: function (){
        this.username = localStorage.getItem('User')
        this.password = localStorage.getItem('Pass')
    },
    methods: {
        simpan: function(){
            localStorage.setItem('User', this.username)
            localStorage.setItem('Pass',this.password)
        },
        hapus: function(){
            localStorage.removeItem('User')
            localStorage.removeItem('Pass')
            this.username = ''
            this.password = ''
        }
    }
}
</script>
