Vue.component('footer-component', {
    data() {
        return {
            
        }
    },
    template: `
        <footer class="footer">
            <div class="logos-holder">
                <div class="logoHolder">
                    <img src="../img/logo.svg" alt="logo">
                    <h2 class="logotext dm-serif-display-regular font_40">Interno</h2>
                </div>
                <div class="footer_social-holder">
                    <img src="../img/twitter.svg" alt="twitter">
                    <img class="insta_logo" src="../img/instagram.svg" alt="instagram">
                </div>
            </div>
            <nav class="pages">
                <h3 class="dm-serif-display-regular font_25">Страницы</h3>
                <ul class="nav_links-holder2 jost-font font_20">
                    <li><a href="./index.html">Домой</a></li>
                    <li><a href="about.php">Проект</a></li>
                    <li><a href="./blog.html">Блог</a></li>
                </ul>
            </nav>
            <section class="footer_contacts">
                <h3 class="dm-serif-display-regular font_25">Контакты</h3>
                <p>55 East Birchwood Ave.<br> Brooklyn, New York 11201</p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
            </section>
        </footer>`
})