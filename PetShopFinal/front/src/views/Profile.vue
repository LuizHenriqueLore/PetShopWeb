<template>
    <body>
        <section>
            <div class="register-section">
                <div class="register-card">
                    <h3 class="register-page-title">Seu Perfil</h3>
                    <router-link :to="{name: 'Pets'}">
                        <button class="perfil-btn" >Seus Pets</button>
                    </router-link>
                    <img src="@/assets/passarinhoimg.jpg" alt="teste" />
                    
                    <div class="register-field">
                        <div class="register-field-item">
                            <label>Nome completo:</label>
                            <input v-model="name" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Usuário:</label>
                            <input v-model="username" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Email:</label>
                            <input v-model="email" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Senha:</label>
                            <input v-model="password" type="password">
                        </div>
                        <div class="register-field-item">
                            <label>Endereço:</label>
                            <input v-model="address" type="text">
                        </div>
                    </div>

                    <button @click="editUser" class="register-btn">Editar Perfil</button>
                    <button @click="deleteUser" class="register-btn">Excluir Perfil</button>
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
            token: ""
        }
    },
    methods: {
        async deleteUser() {
            try{
                await axios.delete(`http://localhost:3000/user/id/${this.id}`);
                this.$router.push({name: 'Login'});
                alert("Perfil Exlcuído com sucesso");
            } catch (e) {alert("Error: " + e);}
        },
        async editUser() {
            try{
                await axios.put(`http://localhost:3000/user/id/${this.id}`,{
                    name: this.name,
                    username: localStorage.username,
                    email: this.email,
                    password: this.password,
                    address: this.address
                });
                alert("Usuário alterado com sucesso!");
            } catch (e) {alert("Error: " + e);}
        }
    },
    async created() {
        let resp = await axios.get(`http://localhost:3000/user/username/${localStorage.username}`);
        resp = resp.data[0];
        console.log(resp);
        this.id = resp._id;
        this.name = resp.name;
        this.username = resp.username;
        this.email = resp.email;
        this.password = resp.password;
        this.address = resp.address;
        this.token = resp.token;
    }
}
</script>

<style scoped>
.register-section .register-card {
    margin: 50px auto;
    max-width: 700px;
    min-height: 650px;
    padding: 30px;
    background-color: #FFF;
    border-radius: 6px;
    box-shadow: 1px 2px 4px 4px rgb(177, 177, 177);
    border-top: 6px solid rgb(15, 114, 6);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.register-page-title {
    font-size: 50px;
}

.register-section .register-card .register-field-item {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
}

.register-section .register-card .register-field-item p {
    margin-right: 5px;
}

.register-field {
    margin-bottom: 10px;
}

.register-section .register-card .register-field-item input[type=text],
.register-section .register-card .register-field-item input[type=password] {
    padding: 3px;
}

.register-btn {
    margin-top: 15px;
    padding: 10px;
    font-size: 25px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    background-color: rgb(15, 114, 6);
    transition: .3s;
}

.register-btn:hover {
    color: rgb(22, 233, 117);
}

.perfil-btn {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 18px;
    background-color: rgb(205, 255, 190);
    cursor: pointer;
    font-weight: 600;
    border: 1px solid black;
    transition: .3s;
}

.perfil-btn:hover {
    background-color: rgb(4, 138, 4);
}
</style>