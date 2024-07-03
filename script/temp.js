template: `
    <header class="blog_details-holder">
      <div>
        <div class="blog_details-news-holder-main" v-for="(article, index) in articles" :key="index">
          <div class="main_news" v-if="article.expanded">
            <h2>{{ article.theme }}</h2>
            <img :src="article.image_path" alt="Article Image">
            <p>{{ article.main_text }}</p>
            <p>{{ article.article_date }}</p>
          </div>

          <div class="blog_details-news-holder" v-for="(article, index) in articles" :key="index">     
          <div class="simple_news" v-if="!article.expanded" @click="toggleArticleExpansion(index)">
            <h2>{{ article.theme }}</h2>
            <p>{{ article.article_date }}</p>
          </div>

        </div>

        </div>
        <button v-for="tag in uniqueTags" :key="tag" @click="filterByTag(tag)">{{ tag }}</button>
      </div>
    </header>`













let articles = [
    { 
      theme: 'Современные тенденции в архитектуре', 
      image_path: '/img/BlogDetails/architecture/1 (1).jpg', 
      main_text: 'Современная архитектура воплощает инновационные...', 
      article_date: '2024-06-30',
      themeFilter: 'architecture'
    },
    { 
      theme: 'Архитектурное наследие: история и современность', 
      image_path: '/img/BlogDetails/architecture/1 (2).jpg', 
      main_text: 'История архитектуры служит источником вдохновения для современных архитекторов, объединяя т...', 
      article_date: '2024-06-29',
      themeFilter: 'architecture'
    },
    { 
      theme: 'Спа-оазис в вашей ванной комнате', 
      image_path: '/img/BlogDetails/bathroom/1 (1).jpg', 
      main_text: 'Практичные советы по декорированию ванной комнаты...', 
      article_date: '2024-06-28',
      themeFilter: 'bathroom'
    },
    { 
        theme: 'Минимализм и функциональность в ванной', 
        image_path: '/img/BlogDetails/bathroom/1 (2).jpg', 
        main_text: 'Практичные советы по декорированию ванной комнаты...', 
        article_date: '2024-06-27',
        themeFilter: 'bathroom'
    }];

  export { articles };