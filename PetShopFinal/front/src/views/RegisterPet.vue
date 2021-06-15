<template>
    <body>
        <section>
            <div class="register-section">
                <div class="register-card">
                    <h3 class="register-page-title">Registrar Pet</h3>
                    <img src="@/assets/gatofofinhoimg1.jpg" alt="teste" />
                    
                    <div class="register-field">
                        <div class="register-field-item">
                            <label>Nome:</label>
                            <input v-model="name" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Tipo do Animal:</label>
                            <input v-model="animalType" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Raça:</label>
                            <input v-model="race" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Imagem:</label>
                            <input v-model="image" type="text">
                        </div>
                    </div>
                    <button @click="create" class="register-btn">Cadastrar Pet</button>
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
            username: "",
            name: "",
            animalType: "",
            race: "",
            image: ""
        }
    },
    methods: {
        async create() {
            try{
                await axios.post(`http://localhost:3000/pet`,
                    {
                        username: this.username,
                        name: this.name,
                        animalType: this.animalType,
                        race: this.race,
                        image: this.image
                    });
                alert("Pet Cadastrado com sucesso");
                this.$router.push({ name: 'Pets' })
            } catch (e) {alert("Error: " + e);}
        }
    },
    created() {
        this.username = localStorage.username;
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