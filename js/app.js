// news apiKey
const apiKey = `7eb60c632d2c4abdb11f3010163b223b`;

const loadApi = () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayAllNews(data.articles)
        });
}

const displayAllNews = data => {

    const showNews = document.getElementById('display-data');

    data.forEach(singleNews => {
        // console.log(singleNews);
        const { title, urlToImage, content, description } = singleNews;
        const elementDiv = document.createElement('div')
        elementDiv.classList.add('col')
        elementDiv.innerHTML = `
        <div class="card">
            <img src="${urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text"> ${description} </p>
                <p class="card-text"> ${content} </p>
            </div>
        </div>        
        `;
        showNews.appendChild(elementDiv);


    })
}



loadApi();