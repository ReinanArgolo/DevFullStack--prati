import { useState, useEffect } from 'react'

function News() {
    const [news, setNews] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const fetchNews = async () => {
                setLoading(true)

                try {
                    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9b9fed1b6f35466b808eb066e3c07c78')
                    const newsData = await response.json()
                    console.log(newsData)
                    setNews(newsData.articles.slice(0, 5))

                } catch (error) {
                    console.log(error)
                }

                setLoading(false)


            }

            fetchNews()
        }, 300000)

        return () => {
            clearInterval(intervalId)
        }

    }, []) // Array vazio indica que isso rodará apenas quando o componente for montado

    // Resto do seu componente...

    return (
        <div>

            <h1>Ultimas Noícias</h1>

            {Loading ? (
                <p>Carregando...</p>
            ) : (
                news.map((article, index) => (
                    <div key={index}>
                        <h2>{article.title}</h2>
                        <img src={article.urlToImage} alt="" />
                        <p>{article.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default News