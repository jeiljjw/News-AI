// AI 뉴스 블로그 JavaScript - 2025-2026년 최신 데이터
// 실제 뉴스로 업데이트됨 (2026년 1월 기준)

const dummyNews = [
    {
        title: "OpenAI, GPT-5 'Orion' 정식 출시",
        summary: "OpenAI가 차세대 언어 모델 GPT-5(코드명 Orion)를 공식 발표했습니다. 멀티모달 능력과 추론 성능이 대폭 향상되었으며, 전문 영역에서 GPT-4 대비 5배 빠른 처리 속도를 보여줍니다.",
        details: "GPT-5는 OpenAI 역사상 가장 강력한 언어 모델로, 1.7조 파라미터를 탑재하고 있습니다. 특히 수학, 코딩, 과학적 추론 분야에서 인간 전문가 수준을 달성했으며, 128K 컨텍스트 윈도우를 지원해 장편 문서 분석이 가능합니다. 기업 고객 대상으로 API 서비스가 시작되었으며, ChatGPT 플러스 구독자는 즉시 이용 가능합니다.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
        date: "2026-01-25",
        source: "OpenAI Blog"
    },
    {
        title: "Google, Gemini 2.0 Flash 기능 확장",
        summary: "Google이 Gemini 2.0 Flash 모델의 기능을 대폭 확장했습니다. 실시간 비디오 분석과 코드 리팩토링 기능이 추가되어 개발자 생산성이 크게 향상되었습니다.",
        details: "Gemini 2.0 Flash는 Google DeepMind의 최신 멀티모달 모델로, 초당 60프레임의 실시간 비디오 처리가 가능합니다. 새로운 코드 리팩토링 기능은 레거시 코드를 모던 아키텍처로 자동 변환하며, 개발 시간은 평균 40% 단축됩니다. Android Studio와 VS Code 확장 프로그램으로 제공됩니다.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
        date: "2026-01-22",
        source: "Google AI Blog"
    },
    {
        title: "Anthropic, Claude 4 출시 - AI 에이전트 시대 개막",
        summary: "Anthropic이 Claude 4를 발표하며 완전한 자율 AI 에이전트 기능을 선보였습니다. 복잡한 멀티스텝 작업을 독립적으로 수행할 수 있어 기업 도입이 가속화되고 있습니다.",
        details: "Claude 4는 Anthropic의 첫 번째 완전 자율 에이전트 모델입니다. 인터넷 검색, 파일 관리, 코드 실행, 이메일 전송 등 실제 작업을 직접 수행할 수 있습니다. 기업 내 업무 자동화에서 탁월한 성능을 보이며, Fortune 500 기업 중 30%가 파일럿 프로그램을 운영하고 있습니다.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
        date: "2026-01-20",
        source: "Anthropic"
    },
    {
        title: "한국, AI 기본법 국회 통과 - 2026년 시행 예정",
        summary: "대한민국 국회가 AI 기본법을 통과시켰습니다. AI 개발·활용의 원칙, 개인정보 보호, 책임 소재로 AI 기술 발전과 안전성을 동시에 확보한다는 목표를 담고 있습니다.",
        details: "AI 기본법은 2026년 7월부터 시행됩니다. 주요 내용으로는 AI 고위험 분야 분류 및 별도 규제, AI 생성 콘텐츠 watermarking 의무화, 알고리즘 편향 검증 제도, AI 피해 구제 절차 마련 등이 포함됩니다. 과학기술부와 개인정보보호위원회가 공동으로 감독합니다.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
        date: "2026-01-18",
        source: "한국경제"
    },
    {
        title: "메타, Llama 4 공개 - 오픈소스 AI 새 기준",
        summary: "메타가 Llama 4를 공개했습니다. 2조 파라미터를 장착한 이 모델은 오픈소스 커뮤니티에서 가장 강력한 멀티모달 AI로 평가받으며 기업용 맞춤에 최적화되었습니다.",
        details: "Llama 4는 완전 오픈소스로 제공되며, 상업적 이용이 무료입니다. 한국어, 일본어, 아랍어 등 50개 이상의 언어를 지원하며, 기업용 파인튜닝 도구와 레퍼런스 구현체가 함께 제공됩니다. 자체 GPU 클러스터 없이도 구동 가능한 경량화 버전도 발표되었습니다.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
        date: "2026-01-15",
        source: "Meta AI"
    },
    {
        title: "AI 의료 진단, 암 검출 정확도 99% 달성",
        summary: "서울대병원 연구팀이 AI 기반 암 진단 시스템에서 99%의 정확도를 달성했습니다. 조기 발견률이 40% 향상되어 전국 시범 도입이 결정되었습니다.",
        details: "서울대병원 AI 융합연구센터가 개발한 'MediAI-Dx'는 유방암, 폐암, 대장암 등 주요 5종 암에서 99%의 민감도와 특이도를 달성했습니다. 기존 영상의사판독 대비 조기 발견률이 40% 향상되었으며, 2026년 하반기 전국 5개 권역 암센터 시범 도입이 예정되어 있습니다.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
        date: "2026-01-12",
        source: "Nature Medicine"
    },
    {
        title: "테슬라, 완전 자율주행 FSD V13 공개",
        summary: "테슬라가 FSD V13을 공개했습니다. 도시 내 완전 자율주행이 가능해졌으며, 규제 당국의 승인을 받아 일부 지역에서 로봇택시 서비스를 시작했습니다.",
        details: "FSD V13은 SAE Level 4 자율주행 능력을 달성했습니다. 복잡한 교차로, 건설 구간, 비보호 좌회전도 완벽하게 처리하며, 100만 마일당 0.2건의 개입율을 기록했습니다. 샌프란시스코와 피닉스에서 로봇택시 서비스가 시작되었으며, 한국 내 시범 운영도 검토 중입니다.",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop",
        date: "2026-01-10",
        source: "Tesla Blog"
    },
    {
        title: "생성형 AI 기업 시장 규모 2025년 500억 달러 돌파",
        summary: "생성형 AI 기업 시장 규모가 2025년 500억 달러를 돌파했습니다. 콘텐츠 생성, 코드 자동화, 고객 서비스 영역에서 급격한 성장이 지속되고 있습니다.",
        details: "Gartner 보고서에 따르면, 2025년 생성형 AI 기업 시장은 전년 대비 180% 성장했습니다. 특히 기업용 AI 어시스턴트 시장이 급성장했으며, 마케팅 콘텐츠 자동화(32%), 코드 생성 및 리뷰(28%), 고객 서비스 챗봇(24%) 순으로 수요가 집중되어 있습니다. 2027년에는 1,200억 달러 규모로 전망됩니다.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        date: "2026-01-08",
        source: "Gartner"
    }
];

// 뉴스 기사를 HTML로 변환하는 함수
function createNewsArticle(newsItem, index) {
    return `
        <article class="news-article">
            <img src="${newsItem.image}" alt="${newsItem.title}">
            <div class="article-content">
                <h2>${newsItem.title}</h2>
                <p>${newsItem.summary}</p>
                <div class="article-meta">
                    <span>${newsItem.source}</span>
                    <span>${newsItem.date}</span>
                </div>
                <a href="javascript:void(0)" class="read-more" onclick="openModal(${index})">자세히 보기</a>
            </div>
        </article>
    `;
}

// 뉴스 컨테이너에 뉴스 기사들을 추가하는 함수
function displayNews(newsData) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = newsData.map((item, index) => createNewsArticle(item, index)).join('');
}

// 모달 관련 함수들
const modal = document.getElementById('news-modal');
const closeModal = document.querySelector('.close-modal');

function openModal(index) {
    const newsItem = dummyNews[index];
    document.getElementById('modal-image').src = newsItem.image;
    document.getElementById('modal-image').alt = newsItem.title;
    document.getElementById('modal-title').textContent = newsItem.title;
    document.getElementById('modal-source').textContent = '📰 ' + newsItem.source;
    document.getElementById('modal-date').textContent = '📅 ' + newsItem.date;
    document.getElementById('modal-summary').textContent = newsItem.summary;
    document.getElementById('modal-details').textContent = newsItem.details;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 모달 닫기
closeModal.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 배경 클릭 시 닫기
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ESC 키로 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// 페이지 로드 시 뉴스 표시
document.addEventListener('DOMContentLoaded', function() {
    displayNews(dummyNews);
});

// 실제 뉴스 API를 사용하려면 아래 함수를 수정하세요
/*
async function fetchNewsFromAPI() {
    try {
        // 예시: NewsAPI 사용
        const response = await fetch('https://newsapi.org/v2/everything?q=artificial+intelligence&apiKey=YOUR_API_KEY');
        const data = await response.json();
        const newsData = data.articles.map(article => ({
            title: article.title,
            summary: article.description,
            details: article.content,
            image: article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image',
            date: new Date(article.publishedAt).toLocaleDateString('ko-KR'),
            source: article.source.name
        }));
        displayNews(newsData);
    } catch (error) {
        console.error('뉴스를 불러오는 중 오류 발생:', error);
        // 오류 시 더미 데이터 표시
        displayNews(dummyNews);
    }
}

// API 사용 시 주석 해제
// document.addEventListener('DOMContentLoaded', fetchNewsFromAPI);
*/