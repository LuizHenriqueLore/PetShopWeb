<template>
    <body>
        <section>
            <div class="register-section">
                <div class="register-card">
                    <h3 class="register-page-title">Registrar</h3>
                    <img src="@/assets/gatofofinhoimg1.jpg" alt="teste" />
                    
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
                    <button @click="create" class="register-btn">Registrar</button>
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
            name: "",
            username: "",
            email: "",
            password: "",
            address: "",
            token: 2
        }
    },
    methods: {
        async create() {
            try{
                await axios.post(`http://localhost:3000/user`,
                    {
                        name: this.name,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        address: this.address,
                        token: this.token
                    });
                localStorage.username = this.username;
                localStorage.token = this.token;
                alert("Usuário Cadastrado com sucesso");
                this.$router.push({ name: 'Profile' })
            } catch (e) {alert("Error: " + e);}
        }
    }
}
</script>

<style scoped>

.register-section .register-card {
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

</style>