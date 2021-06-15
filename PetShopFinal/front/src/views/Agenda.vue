<template>
    <body>
        <section>
            <div class="agenda-page">
                <div class="agenda-card">
                    <table style="width:100%">
                        <tr>
                          <th>Segunda</th>
                          <th>Terça</th>
                          <th>Quarta</th>
                          <th>Quinta</th>
                          <th>Sexta</th>
                          <th>Sábado</th>
                          <th>Domingo</th>
                        </tr>
                        <tr>
                            <td @click="goDay(1)">1</td>
                            <td @click="goDay(2)">2</td>
                            <td @click="goDay(3)">3</td>
                            <td @click="goDay(4)">4</td>
                            <td @click="goDay(5)">5</td>
                            <td @click="goDay(6)">6</td>
                            <td @click="goDay(7)">7</td>
                        </tr>
                        <tr>
                            <td @click="goDay(8)">8</td>
                            <td @click="goDay(9)">9</td>
                            <td @click="goDay(10)">10</td>
                            <td @click="goDay(11)">11</td>
                            <td @click="goDay(12)">12</td>
                            <td @click="goDay(13)">13</td>
                            <td @click="goDay(14)">14</td>
                        </tr>
                        <tr>
                            <td @click="goDay(15)">15</td>
                            <td @click="goDay(16)">16</td>
                            <td @click="goDay(17)">17</td>
                            <td @click="goDay(18)">18</td>
                            <td @click="goDay(19)">19</td>
                            <td @click="goDay(20)">20</td>
                            <td @click="goDay(21)">21</td>
                        </tr>
                        <tr>
                            <td @click="goDay(22)">22</td>
                            <td @click="goDay(23)">23</td>
                            <td @click="goDay(24)">24</td>
                            <td @click="goDay(25)">25</td>
                            <td @click="goDay(26)">26</td>
                            <td @click="goDay(27)">27</td>
                            <td @click="goDay(28)">28</td>
                        </tr>
                        <tr>
                            <td @click="goDay(29)">29</td>
                            <td @click="goDay(30)">30</td>
                            <td @click="goDay(31)">31</td>
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
            agendeds: [{
                username: "",
                title: "",
                petName: "",
                price: "",
                day: "",
                hour: "",
                classDay: ""
            }],
            username: ""
        }
    },
    async created() {
        this.username = localStorage.username;
        let resp = await axios.get(`http://localhost:3000/agendado/username/${this.username}`);
        let i = 0;
        this.agendeds.length = 31;
        while(i <= resp.data.length){
            this.agendeds[resp.data[i].day] = resp.data[i];
            this.agendeds[resp.data[i].day].classDay = "class1";
            i++;
        }
    },
    methods: {
        goDay(day) {
            localStorage.dayNow = day;
            this.$router.push({ name: 'DayPage'});
        }
    }
}
</script>

<style scoped>
.agenda-page {
    margin-top: 40px;
}

.class1{
    background-color: rgb(252, 147, 147);
}

.class2{
    background-color: #FFF;
}

.agenda-card {
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
</style>