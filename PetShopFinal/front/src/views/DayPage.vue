<template>
    <body>
        <section>
            <div class="carrinho-page">
                <div class="carrinho-card">
                    <table style="width:100%">
                        <tr>
                          <th>Dia</th>
                          <th>Disponível</th>
                        </tr>
                        <tr>
                            <td>{{day}}</td>
                            <td>{{message}}</td>
                        </tr>
                      </table>
                    <div v-if="available == true">
                        <button @click="agendar" class="register-btn">Agendar para este dia</button>
                    </div>
                    <router-link :to="{name: 'Agenda'}" v-else>
                        <button class="register-btn">Escolher outro dia</button>
                    </router-link>
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
            title: "",
            petName: "",
            price: "",
            day: "",
            hour: "",
            message: "",
            available: ""
        }
    },
    async created() {
        this.day = localStorage.dayNow;
        this.username = localStorage.username;
        let resp = await axios.get(`http://localhost:3000/agendado/day/${this.day}`);
        resp = resp.data[0];
        if(resp){
            this.available = false;
            this.message = "não";
        } else {
            this.available = true;
            this.message = "sim";
        }
    },
    methods: {
        async agendar() {
            await axios.post(`http://localhost:3000/agendado`,{
                username: this.username,
                day: this.day
            });
            alert("Serviço agendado com sucesso!");
            this.$router.push({name: 'Agenda'});
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
    cursor: pointer;
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