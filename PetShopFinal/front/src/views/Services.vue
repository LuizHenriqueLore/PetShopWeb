<template>
    <body>
        <section>
            <div v-if="token == 2" class="services-first-section">
                <h3 class="services-page-title">Serviços</h3>
                <div class="services-search">
                    <router-link :to="{name: 'RegisterItem'}">
                        <button class="register-btn">Cadastrar Serviço</button>
                    </router-link>
                </div>
            </div>
            <div v-else class="services-first-section">
                <h3 class="services-page-title">Serviços</h3>
                <div class="services-search">
                    <input type="text" placeholder="Search...">
                    <button class="search-btn">Procurar</button>
                </div>
            </div>
            <div class="services-second-section">
                <div v-for="service in services" :key="service.title">
                    <div @click="actionService(service)" class="services-card" >
                        <h3 class="product-title">{{service.title}}</h3>
                        <p>{{service.description}}</p>
                        <img :src="require(`@/assets/${service.image}`)" :alt="service.title" width="250px" height="250px" />
                        <p>R${{service.price}},00</p>
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
            token: 0,
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
        let resp = await axios.get(`http://localhost:3000/service`);
        this.services = resp.data;
        this.token = localStorage.token;
        localStorage.type = "Serviço";
    },
    methods: {
        async actionService(s) {
            if(this.token == 0) {
                this.$router.push({name: 'Login'});
            } else if(this.token == 1) {
                this.$router.push({name: 'Agenda'});
            } else { //token == 2
                localStorage.title = s.title;
                this.$router.push({name: 'Alterar'});
            }
        }
    }
}
</script>

<style scoped>

.services-first-section {
    padding-top: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.services-page-title {
    margin-top: -50px;
    font-size: 50px;
}

.services-first-section .services-search input[type=text],
.services-first-section .services-search .search-btn {
    margin-top: 35px;
    font-size: 22px;
    padding: 10px;
}


.services-second-section {
    max-width: 1500px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    flex-wrap: wrap;
}

.services-card {
    margin: 0 auto;
    margin-bottom: 30px;
    background-color: #FFF;
    padding: 30px;
    border-top: 6px solid rgb(74, 122, 70);
    width: 300px;
    height: 400px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 4px rgb(177, 177, 177);
    transition: .3s;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.services-card:hover {
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