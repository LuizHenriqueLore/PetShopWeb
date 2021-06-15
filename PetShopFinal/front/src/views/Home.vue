<template>
    <body>
        <section>
            <div class="home-first-section">
                <div class="home-text-space">
                    <p class="home-text-words">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                </div>
            </div>

            <div class="home-second-section">
                <div v-for="product in products.slice(0, 3)" :key="product.title" >
                    <router-link class="home-card" :to="{name: 'Login'}">
                        <h3 class="product-title">{{product.title}}</h3>
                        <p>{{product.description}}</p>
                        <img :src="require(`../assets/${product.image}`)" :alt="product.title" width="250px" height="250px" />
                        <p>R${{product.price}},00</p>
                    </router-link>
                </div>
            </div>
            <div class="home-third-section">
                <div class="home-second-section">
                    <div v-for="service in services.slice(0, 3)" :key="service.title">
                        <router-link class="home-card" :to="{name: 'Login'}">
                            <h3 class="product-title">{{service.title}}</h3>
                            <p>{{service.description}}</p>
                            <img :src="require(`../assets/${service.image}`)" :alt="service.title" width="250px" height="250px" />
                            <p>R${{service.price}},00</p>
                        </router-link>
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
            products: [{
                title: "",
                description: "",
                slug: "",
                image: "",
                price: ""
            }],
            services: [{
                title: "",
                description: "",
                slug: "",
                image: "",
                price: ""
            }]
        }
    },
    async created () {
        let resp = await axios.get(`http://localhost:3000/product`);
        this.products = resp.data;
        resp = await axios.get(`http://localhost:3000/service`);
        this.services = resp.data;
    }
}
</script>

<style scoped>

.home-first-section{
    padding-left: 50px;
    padding-top: 50px;
    max-width: 100vw;
    height: 100vh;
    background: url('../assets/dogimg2.jpg');
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
}

.home-text-space {
    margin: 50px;
    width: 500px;
    background-color: rgb(247, 247, 247, 0.3);
    border-radius: 4px;
}

.home-text-words{
    color: rgb(22, 22, 22);
    padding: 40px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
}

.home-second-section {
    max-width: 1500px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    flex-wrap: wrap;
}

.home-third-section {
    margin-top: 50px;
    padding-top: 30px;
    background-color: rgb(221, 253, 213);
}

.home-card {
    margin: 0 auto;
    margin-bottom: 30px;
    background-color: #FFF;
    padding: 30px;
    border-top: 6px solid rgb(15, 114, 6);
    width: 300px;
    height: 400px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 4px rgb(177, 177, 177);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.home-card:hover {
    box-shadow: 3px 6px 4px 4px rgb(177, 177, 177);
    cursor: pointer;
}

.product-title {
    font-size: 26px;
}

.home-fourth-section {
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