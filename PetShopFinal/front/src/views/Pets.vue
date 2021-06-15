<template>
    <body>
        <section>
            <div class="carrinho-page">
                <div class="carrinho-card">
                    <div class="carrinho-card-header">
                        <h3>Seus Animais</h3>
                        <router-link :to="{name: 'RegisterPet'}">
                            <button class="func-btn">Cadastrar Animal</button>
                        </router-link>
                    </div>
                    <table style="width:100%">
                        <tr>
                          <th>Nome</th>
                          <th>Animal</th>
                          <th>Ações</th>
                        </tr>
                        <tr v-for="pet in pets" :key="pet.name">
                            <td>{{pet.name}}</td>
                            <td>{{pet.animalType}}</td>
                            <td><button @click="deletePet(pet)" class="register-btn">Remover Pet</button></td>
                        </tr>
                      </table>
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
            pets: [{
                username: "",
                name: "",
                animalType: "",
                race: "",
                image: ""
            }]
        }
    },
    async created() {
        this.username = localStorage.username;
        let resp = await axios.get(`http://localhost:3000/pet/username/${this.username}`);
        this.pets = resp.data;
    },
    methods: {
        async deletePet(pet) {
            try {
                await axios.delete(`http://localhost:3000/pet/id/${pet._id}`);
                alert("Pet removido com sucesso!");
                this.$router.push({name: 'Profile'});
            } catch (e) {alert("Error: " + e);}
            
        }
    }
}
</script>

<style scoped>
.carrinho-page {
    margin-top: 40px;
}

.carrinho-card {
    margin: 0 auto;
    margin-bottom: 30px;
    background-color: #FFF;
    padding: 30px;
    border-top: 6px solid rgb(74, 122, 70);
    width: 1000px;
    height: 525px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 4px rgb(177, 177, 177);
    transition: .3s;

    display: flex;
    flex-direction: column;
}

table {
    margin-top: 10px;
}

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}

th, td {
    padding: 30px;
}

td {
    text-align: center;
}

.carrinho-card-header {
    display: flex;
    justify-content: space-between;
}

.carrinho-card-header h3 {
    font-size: 30px;
}

.carrinho-card-header .func-btn {
    padding: 10px;
    font-size: 18px;
    background-color: rgb(205, 255, 190);
    cursor: pointer;
    font-weight: 600;
    border: 1px solid black;
    transition: .3s;
}

.carrinho-card-header .func-btn:hover {
    background-color: rgb(4, 138, 4);
}

.register-btn {
    padding: 10px;
    font-size: 20px;
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