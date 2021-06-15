<template>
    <body>
        <section>
            <div v-if="token == 2" class="products-first-section">
                <h3 class="products-page-title">Produtos</h3>
                <div class="products-search">
                    <router-link :to="{name: 'RegisterItem'}">
                        <button class="register-btn">Cadastrar Produto</button>
                    </router-link>
                    
                </div>
            </div>
            <div v-else class="products-first-section">
                <h3 class="products-page-title">Produtos</h3>
                <div class="products-search">
                    <input type="text" placeholder="Search...">
                    <button class="search-btn">Procurar</button>
                </div>
            </div>
            <div class="products-second-section">
                <div v-for="product in products" :key="product.title" >
                    <div @click="actionProduct(product)" class="products-card">
                        <h3 class="product-title">{{product.title}}</h3>
                        <p>{{product.description}}</p>
                        <img :src="require(`@/assets/${product.image}`)" :alt="product.title" width="250px" height="250px" />
                        <p>R${{product.price}},00</p>
                    </div>
                </div>
            </div>
        </section>
    </body>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            username: "",
            token: 0,
            products: [{
                title: "",
                description: "",
                slug: "",
                image: "",
                price: ""
            }]
        }
    },
    methods: {
        async actionProduct(p) {
            if(this.token == 0) {
                this.$router.push({name: 'Login'});
            } else if(this.token == 1) {
                await axios.post(`http://localhost:3000/carrinho`,{
                    username: this.username,
                    title: p.title,
                    price: p.price
                });
                alert("Produto adicionado ao carrinho com sucesso!");
                this.$router.push({name: 'Carrinho'});
            } else { //token == 2
                localStorage.title = p.title;
                this.$router.push({name: 'Alterar'});
            }
        }
    },
    async created () {
        let resp = await axios.get(`http://localhost:3000/product`);
        this.products = resp.data;
        this.token = localStorage.token;
        this.username = localStorage.username;
        localStorage.type = "Produto";
    }
}
</script>

<style scoped>
.products-first-section {
    padding-top: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.products-page-title {
    margin-top: -50px;
    font-size: 50px;
}

.products-first-section .products-search input[type=text],
.products-first-section .products-search .search-btn {
    margin-top: 35px;
    font-size: 22px;
    padding: 10px;
}

.products-second-section {
    max-width: 1500px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    flex-wrap: wrap;
}

.products-card {
    margin: 0 10px;
    margin-bottom: 30px;
    background-color: #FFF;
    padding: 30px;
    border-top: 6px solid rgb(74, 122, 70);
    width: 300px;
    height: 400px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 4px rgb(177, 177, 177);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.products-card:hover {
    box-shadow: 3px 6px 4px 4px rgb(177, 177, 177);
    font-size: 16px;
}

.product-title {
    font-size: 26px;
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