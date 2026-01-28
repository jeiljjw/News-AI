// GNews API 설정 (배포 환경에서도 작동하는 무료 API)
const API_KEY = '7d70d36fd9a3a1c2b5471c0fa2ce65a8'; // 여기에 자신의 GNews API 키를 입력하세요
const GNEWS_URL = `https://gnews.io/api/v4/search?q=GPT OR GEMINI OR CLAUDE&lang=ko&max=20&apikey=${API_KEY}`;
// CORS 프록시를 사용하여 브라우저에서 API 호출 가능
const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(GNEWS_URL)}`;

document.addEventListener('DOMContentLoaded', function() {
    loadNews();
});

async function loadNews() {
    const newsContainer = document.getElementById('news-container');

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // allorigins.win 프록시는 응답을 JSON 형태로 감싸서 반환
        const newsData = JSON.parse(data.contents);

        if (newsData.articles && newsData.articles.length > 0) {
            displayNews(newsData.articles);
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

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        // GNews API는 'image' 필드를 사용합니다
        const imageUrl = article.image || 'https://via.placeholder.com/300x200?text=No+Image';

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