<template>
    <body>
        <section>
            <div class="register-section">
                <div class="register-card">
                    <h3 class="register-page-title">Registrar {{type}}</h3>
                    <img src="@/assets/gatofofinhoimg1.jpg" alt="teste" />
                    
                    <div class="register-field">
                        <div class="register-field-item">
                            <label>Título:</label>
                            <input v-model="title" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Descrição:</label>
                            <input v-model="description" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Slug:</label>
                            <input v-model="slug" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Preço:</label>
                            <input v-model="price" type="text">
                        </div>
                        <div class="register-field-item">
                            <label>Imagem:</label>
                            <input v-model="image" type="text">
                        </div>
                    </div>
                    <button @click="create" class="register-btn">Cadastrar {{type}}</button>
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
            type: "",
            title: "",
            description: "",
            slug: "",
            price: "",
            image: ""
        }
    },
    methods: {
        async create() {
            if(this.type == "Produto"){
                try{
                    await axios.post(`http://localhost:3000/product`,
                        {
                            title: this.title,
                            description: this.description,
                            slug: this.slug,
                            price: this.price,
                            image: this.image
                        });
                    alert("Produto Cadastrado com sucesso");
                    this.$router.push({ name: 'Products' })
            } catch (e) {alert("Error: " + e);}
            } else {
                try{
                    await axios.post(`http://localhost:3000/service`,
                        {
                            title: this.title,
                            description: this.description,
                            slug: this.slug,
                            price: this.price,
                            image: this.image
                        });
                    alert("Serviço Cadastrado com sucesso");
                    this.$router.push({ name: 'Services' })
            } catch (e) {alert("Error: " + e);}
            }
        }
    },
    created() {
        this.type = localStorage.type;
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