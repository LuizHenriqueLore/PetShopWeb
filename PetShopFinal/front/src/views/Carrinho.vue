<template>
    <body>
        <section>
            <div class="carrinho-page">
                <div class="carrinho-card">
                    <table style="width:100%">
                        <tr>
                          <th>Produto</th>
                          <th>Preço</th>
                          <th>Ações</th>
                        </tr>
                        <tr v-for="carrinho in carrinhos" :key="carrinho.title">
                            <td>{{carrinho.title}}</td>
                            <td>R${{carrinho.price}},00</td>
                            <td><button @click="deleteProduct(carrinho)" class="register-btn">Remover Produto</button></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>R${{total}},00</td>
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
            carrinhos: [{
                username: "",
                title: "",
                price: "",
                total: ""
            }],
            username: ""
        }
    },
    async created() {
        this.username = localStorage.username;
        let resp = await axios.get(`http://localhost:3000/carrinho/username/${this.username}`);
        this.carrinhos = resp.data;
        this.total = 0;
        console.log(this.carrinhos[0]._id)
        let i = 0;
        while(i <= this.carrinhos.length) {
            this.total += this.carrinhos[i].price;
            i++;
        }
    },
    methods: {
        async deleteProduct(product) {
            try {
                await axios.delete(`http://localhost:3000/carrinho/id/${product._id}`);
                alert("Produto removido com sucesso!");
                this.$router.push({name: 'Products'});
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
    min-height: 525px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 4px rgb(177, 177, 177);
    transition: .3s;

    display: flex;
    flex-direction: column;
    align-items: center;
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