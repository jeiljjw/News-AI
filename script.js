// NewsAPI 설정
const API_KEY = 'b0acaf4e5d3e4fa189beb28a5c1d5816'; // 여기에 자신의 NewsAPI 키를 입력하세요
const API_URL = `https://newsapi.org/v2/everything?q=(GPT+OR+GEMINI+OR+CLAUDE)&language=ko&sortBy=publishedAt&apiKey=${API_KEY}`;

document.addEventListener('DOMContentLoaded', function() {
    loadNews();
    scheduleDailyNewsUpdate();
});

async function loadNews() {
    const newsContainer = document.getElementById('news-container');

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            newsContainer.innerHTML = '<p>뉴스를 불러오는 중 오류가 발생했습니다.</p>';
        }
    } catch (error) {
        console.error('뉴스를 불러오는 중 오류:', error);
        newsContainer.innerHTML = '<p>뉴스를 불러오는 중 오류가 발생했습니다. 인터넷 연결을 확인해주세요.</p>';
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    articles.slice(0, 20).forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const imageUrl = article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image';

        newsItem.innerHTML = `
            <img src="${imageUrl}" alt="${article.title}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <div class="news-content">
                <h2>${article.title}</h2>
                <p>${article.description || '설명이 없습니다.'}</p>
                <a href="${article.url}" target="_blank">자세히 보기</a>
            </div>
        `;

        newsContainer.appendChild(newsItem);
    });
}