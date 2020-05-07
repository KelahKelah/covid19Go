import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FaRegHeart, FaGenderless } from 'react-icons/fa';
import './News.css';

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=11583d075b4e49aaacfeaf43f6d57067'
// const apiKey = '11583d075b4e49aaacfeaf43f6d5706'

const News = () => {
    const [news, setNews] = useState({title: '', author: '', publishedAt: '', description: '', url: '', urlToImage: ''})
    const [likeNews, setLikeNews] = useState(0)
    const [errorMessage, setErrorMessage] = useState({error: '', success: ''})
    const [isLoading, setIsLoading] = useState(false)

    
    useEffect(() => {
        // testing API
        Axios.get(url)
        .then(res => {
            console.log('the response is :', res)
            // setIsLoading(true)
            if(res.status === 200) {
                setNews({ title: res.data.articles[1].title, author: res.data.articles[1].author, 
                        publishedAt:res.data.articles[1].publishedAt, description: res.data.articles[1].description,  
                        url: res.data.articles[1].url, urlToImage: res.data.articles[1].urlToImage })
                setLikeNews(3)
                console.log('Response data', res.data.articles[1].description)
                // console.log('Response data', res.data.articles.description)

            } else {
                setErrorMessage({error:'something went wrong'})
                console.log('else block')
            }
            
        })
            .catch((error) => {
                if(error) {
                    console.log(console.error()
                    )
                }
            })
    
    }, [])

    console.log(likeNews)

    
    return(
        <div className='news-wrap'>
            <div className='wrap-two'>
                <div className='articles'>
                    <h1><FaGenderless />{news.author}</h1>
                    <span>{news.publishedAt}</span>
                    <h2>{news.title}</h2> 
                    <h3>{news.description}</h3>
                    <div className='read-more'>
                        <a className='myLink' href={news.url} target='blank' >Read More</a>
                        <i onClick={() => likeNews + 1}><FaRegHeart style={{margin: ' 0px 5px'}} />{likeNews}Likes</i>
                    </div>
                </div>
                <div>
                    <img src={news.urlToImage} alt='ball' target='blank' className='img' />
                </div>
            </div>
            {/* <NewsList /> */}
        </div>
    )
}
export default News;