<template>
    <body>
        <section>
            <div class="carrinho-page">
                
                <div class="carrinho-card">
                    <div class="carrinho-card-header">
                        <h3>Funcionários</h3>
                        <router-link :to="{name: 'RegisterFunc'}">
                            <button class="func-btn">Cadastrar Funcionário</button>
                        </router-link>
                    </div>
                    <table style="width:100%">
                        <tr>
                          <th>Nome</th>
                          <th>Competência</th>
                          <th>Ações</th>
                        </tr>
                        <tr v-for="funcionario in funcionarios" :key="funcionario.name">
                            <td>{{funcionario.name}}</td>
                            <td>{{funcionario.competencia}}</td>
                            <td><button @click="deleteFunc(funcionario)" class="register-btn">Remover Funcionário</button></td>
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
            funcionarios: [{
                name: "",
                competencia: "",
                image: ""
            }]
        }
    },
    async created() {
        let resp = await axios.get(`http://localhost:3000/funcionario`);
        this.funcionarios = resp.data;
    },
    methods: {
        async deleteFunc(f) {
            await axios.delete(`http://localhost:3000/funcionario/id/${f._id}`);
            alert("Funcionario removido com sucesso!");
            this.$router.push({name: 'Home'});
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
    cursor: pointer;
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