import { useState, useEffect } from 'react'
import css from './News.module.css'

const API = import.meta.env.VITE_NEWS

console.log(API)

function News() {
const [news, setNews] = useState([])
const [Loading, setLoading] = useState(true)
const [start, setStart] = useState(0)
const [end, setEnd] = useState(6)

const fetchNews = async () => {
    setLoading(true)


    try {
        const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/world/americas.json?api-key=${API}`)
        const newsData = await response.json()
        setNews(newsData.results.slice(start, end))
        console.log(newsData)
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
}

useEffect(() => {
    fetchNews()
    const intervalId = setInterval(() => {
        fetchNews()
    }, 30000)
    return () => {
        clearInterval(intervalId)
    }
}, [start, end])

const prev = () => {
    if (start > 0) {
        setStart(start - 6)
        setEnd(end - 6)
    }
}

const next = () => {
    if (end < news.length + 6){
        setStart(start + 6)
        setEnd(end + 6)
    }
}

return (
    <div className={css.container}>
        <h1 className={css.title}>Últimas Notícias</h1>
        {Loading ? (
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading" />
        ) : (
            ""
        )}
        <div className={css.newsContainer}>

            
            {news.map((article, index) => (
                <a href={article.url}>
                <div key={index} className={css.news} style={{ backgroundImage: `url(${article.multimedia && article.multimedia[2] ? article.multimedia[2].url : 'URL_de_reserva'})` }}>
                    <div className={css.newsOverlay}>
                        <h2 className={css.title}>{article.title}</h2>
                        <p className={css.abstract}>{article.abstract}</p>
                        {/* <button className={css.button}><a href={article.url}>Leia mais...</a></button> */}
                    </div>
                </div>
                </a>
                
            ))}
        </div>
        <div className={css.changeButtons}>
            <button className={css.prev} onClick={prev}> &#8249; </button>
            <button className={css.next} onClick={next}> &#8250; </button>
        </div>
    </div>
);
}

export default News
