Vue.component('nav-component', {
    data() {
        return {
            
        }
    },
    template: `
        <nav class="navHolder">
            <div class="logoHolder">
                <img src="../img/logo.svg" alt="logo">
                <h1 class="logotext dm-serif-display-regular font_40">Interno</h1>
            </div>
            <ul class="nav_links-holder jost-font font_20">
                <li><a href="../index.html">Домой</a></li>
                <li><a href="about.php">Проект</a></li>
                <li><a href="../blog.html">Блог</a></li>
            </ul>
        </nav>`
})