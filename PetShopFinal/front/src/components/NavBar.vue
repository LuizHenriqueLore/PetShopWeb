<template>
    <nav class="nav-home">
        <ul v-if="token == 2" class="nav-list-2">
                <li class="nav-item-all">
                    <p class="nav-item">
                        <i class="fas fa-paw home-icon"></i>
                    </p>
                    <router-link class="nav-item shop-name" :to="{name: 'Home'}">Tico's PetShop</router-link>
                </li>
                <li class="nav-item-all">
                    <router-link class="nav-item" :to="{name: 'Funcionarios'}">Funcionários</router-link>
                    <router-link class="nav-item" :to="{name: 'Agenda'}">Agenda</router-link>
                </li>
               <li class="nav-item-all">
                    <router-link class="nav-item" :to="{name: 'Products'}">Produtos</router-link>
                    <router-link class="nav-item" :to="{name: 'Services'}">Serviços</router-link>
                </li>
                <li class="nav-item-all nav-item-3">
                    <router-link class="nav-item" :to="{name: 'Profile'}">Perfil</router-link>
                    <button @click="logOut" class="register-btn">LogOut</button>
                </li>
            </ul>
        <ul v-else-if="token == 1" class="nav-list-2">
                <li class="nav-item-all">
                    <p class="nav-item">
                        <i class="fas fa-paw home-icon"></i>
                    </p>
                    <router-link class="nav-item shop-name" :to="{name: 'Home'}">Tico's PetShop</router-link>
                </li>
                <li class="nav-item-all">
                    <router-link class="nav-item" :to="{name: 'Carrinho'}">Carrinho</router-link>
                    <router-link class="nav-item" :to="{name: 'Agenda'}">Agendados</router-link>
                </li>
               <li class="nav-item-all">
                    <router-link class="nav-item" :to="{name: 'Products'}">Produtos</router-link>
                    <router-link class="nav-item" :to="{name: 'Services'}">Serviços</router-link>
                </li>
                <li class="nav-item-all nav-item-3">
                    <router-link class="nav-item" :to="{name: 'Profile'}">Perfil</router-link>
                    <button @click="logOut" class="register-btn">LogOut</button>
                </li>
            </ul>
            <ul v-else class="nav-list">
                <li class="nav-item-all">
                    <p class="nav-item">
                        <i class="fas fa-paw home-icon"></i>
                    </p>
                    <router-link class="nav-item shop-name" :to="{name: 'Home'}">Tico's PetShop</router-link>
                </li>
                <li class="nav-item-all">
                    <router-link class="nav-item" :to="{name: 'Products'}">Produtos</router-link>
                    <router-link class="nav-item" :to="{name: 'Services'}">Serviços</router-link>
                </li>
                <li class="nav-item-all nav-item-3">
                    <router-link class="nav-item" :to="{name: 'Register'}">Registrar</router-link>
                    <router-link class="nav-item" :to="{name: 'Login'}">Entrar</router-link>
                </li>
            </ul>
        </nav>
</template>

<script>
export default {
    data() {
        return {
            token: 0
        }
    },
    methods: {
        logOut() {
            localStorage.username = null;
            localStorage.token = 0;
            this.$router.push({name: 'Login'});
        }
    },
    created() {
        this.token = localStorage.token;
    }
}
</script>

<style scoped>

.nav-home {
    height: 5rem;
    width: 100%;
    background-color: rgb(15, 114, 6);
}

.nav-home .nav-list {
    width: 100%;
    height: 5rem;
    display: grid;
    grid-template-columns: 1fr 300px 200px;
    align-items: center;
}

.nav-home .nav-list-2 {
    width: 100%;
    height: 5rem;
    display: grid;
    grid-template-columns: 1fr 300px 300px 200px;
    align-items: center;
}

.home-icon {
    font-size: 40px;
    margin: 0 10px 0 15px;
}

.nav-item-all {
    margin: 0 10px;
    padding: 20px 0;
    font-size: 18px;
    list-style: none;
    display: flex;
    font-weight: 600;
}

.nav-item-all .shop-name {
    font-size: 30px;
    font-weight: 800;
}

.nav-item-all .nav-item {
    margin-right: 5px;
    padding: 5px;    
    transition: .3s;
}

a:link {
    text-decoration: none;
}

a:hover {
    color: rgb(22, 233, 117);
    font-size: 20px;
}

.register-btn {
    font-size: 20px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    background-color: rgb(15, 114, 6);
    transition: .3s;
}

.register-btn:hover {
    color: rgb(22, 233, 117);
    font-size: 25px;
}

</style>