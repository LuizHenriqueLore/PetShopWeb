<template>
    <footer>
            <div class="home-fourth-section">
                <div class="footer-links">
                    <a href="#">
                        <i class="fab fa-facebook-square footer-icon"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-instagram-square footer-icon"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-whatsapp-square footer-icon"></i>
                    </a>
                </div>
                <div class="footer-text">
                    <p>Feito com carinho por Luiz Henrique Lourenção</p>
                </div>
            </div>
        </footer>
</template>

<style scoped>

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

.footer-icon {
    font-size: 60px;
    margin: 0 5px;
    transition: .3s;
}

.footer-icon:hover {
    font-size: 70px;
}

.footer-text {
    font-weight: 600;
}
</style>