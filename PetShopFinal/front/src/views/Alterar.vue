<template>
    <body>
        <section>
            <div class="register-section">
                <div class="register-card">
                    <input v-model="title" type="text" class="register-page-title" />
                    <img :src="require(`@/assets/${image}`)" :alt="title" width="250px" height="250px" />
                    
                    <div class="register-field">
                        <div class="register-field-item">
                            <p>Descrição</p>
                            <input v-model="description" type="text"/>
                        </div>
                        <div class="register-field-item">
                            <p>Preço</p>
                            <input v-model="price" type="number"/>
                        </div>
                    </div>
                    
                    <button @click="edit" class="register-btn">Alterar</button>
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
            type: "",
            title: "",
            description: "",
            image: "",
            price: ""
        }
    },
    async created() {
        this.title = localStorage.title;
        this.type = localStorage.type;
        if(this.type == "Produto"){
            let resp = await axios.get(`http://localhost:3000/product/title/${this.title}`);
            resp = resp.data[0];
            this.description = resp.description;
            this.image = resp.image;
            this.price = resp.price;
            this.id = resp._id;
        } else {
            let resp = await axios.get(`http://localhost:3000/service/title/${this.title}`);
            resp = resp.data[0];
            this.description = resp.description;
            this.image = resp.image;
            this.price = resp.price;
            this.id = resp._id;
        }
        
    },
    methods: {
        async edit() {
            try{
                if(this.type == "Produto"){
                    await axios.put(`http://localhost:3000/product/id/${this.id}`,{
                    title: this.title,
                    description: this.description,
                    price: this.price
                    });
                    alert("Produto alterado com sucesso!");
                    this.$router.push({name: 'Products'});
                } else {
                    await axios.put(`http://localhost:3000/service/id/${this.id}`,{
                    title: this.title,
                    description: this.description,
                    price: this.price
                    });
                    alert("Serviço alterado com sucesso!");
                    this.$router.push({name: 'Services'});
                }
                
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

.home-fourth-section {
    margin-top: 93px;
    max-width: 100%;
    height: 10rem;
    padding: 20px;
    background-color: rgb(15, 114, 6);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

</style>