<template>
    <body>
        <section>
            <div class="log-section">
                <div class="log-card">
                    <h3 class="log-page-title">Entrar</h3>
                    <img src="@/assets/dogfofinhoimg1.png" alt="teste" />
                    
                    <div class="log-field">
                        <div class="log-field-item">
                            <label>Usuário:</label>
                            <input v-model="username" type="text">
                        </div>
                        <div class="log-field-item">
                            <label>Senha:</label>
                            <input v-model="password" type="password">
                        </div>
                    </div>
                        <button @click="auth" class="log-btn">Entrar</button>
                    <p>Não é cadastrado? <router-link :to="{name: 'Register'}" >Clique aqui!</router-link></p>
                </div>
            </div>
        </section>
    </body>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            id: "",
            name: "",
            username: "",
            email: "",
            password: "",
            address: "",
            token: 0
        }
    },
    methods: {
        async auth() {
            try {
                let resp = await axios.get(`http://localhost:3000/user/username/${this.username}`);
                resp = resp.data[0];
                this.id = resp._id;
                this.name = resp.name;
                this.email = resp.email;
                this.address = resp.address;
                this.token = resp.token;
                if(resp.username && resp.password == this.password){
                    localStorage.username = this.username;
                    localStorage.token = this.token;
                    this.$router.push({name: 'Home'});
                }else {
                   alert("Senha Inválida");
                }
            }
            catch (e) {alert("Usuário Inválido");}
        }
    }
}
</script>

<style scoped>

.log-section .log-card {
    margin: 50px auto;
    width: 700px;
    height: 550px;
    padding: 30px;
    background-color: #FFF;
    border-radius: 6px;
    box-shadow: 1px 2px 4px 4px rgb(177, 177, 177);
    border-top: 6px solid rgb(15, 114, 6);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.log-page-title {
    font-size: 50px;
}

.log-section .log-card .log-field-item {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
}

.log-section .log-card .log-field-item p {
    margin-right: 5px;
}

.log-field {
    margin-bottom: 10px;
}

.log-section .log-card .log-field-item input[type=text],
.log-section .log-card .log-field-item input[type=password] {
    padding: 3px;
}

.log-btn {
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 25px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    background-color: rgb(15, 114, 6);
    transition: .3s;
}

.log-btn:hover {
    color: rgb(22, 233, 117);
}

</style>