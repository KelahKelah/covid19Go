import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { FaRegHeart, FaGenderless } from 'react-icons/fa';
import './News.css';
import NewsList from './NewsList';
import Error from '../../components/Error/Error';

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=11583d075b4e49aaacfeaf43f6d57067'
// const apiKey = '11583d075b4e49aaacfeaf43f6d5706'

const News = () => {
    const [news, setNews] = useState({ allNews: [], title: '', author: '', publishedAt: '', description: '', url: '', urlToImage: ''})
    const [voteNews, setVoteNews] = useState(0)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // testing API
        Axios.get(url)
        .then(res => {
            var i;
            console.log('the response is', res)
            // setIsLoading(true)
            if(res.status === 200) {
                setNews({ allNews: res.data.articles.slice(0, 11), title: res.data.articles[1].title, author: res.data.articles[1].author, 
                        publishedAt:res.data.articles[1].publishedAt, description: res.data.articles[1].description,  
                        url: res.data.articles[1].url, urlToImage: res.data.articles[1].urlToImage })
                setVoteNews(3)
                console.log('Response data', res.data.articles)
                // console.log('Response data', res.data.articles.description)
            } else {
                if(Error)
                // console.log()
                setError(true)
                // console.log('error message',errorMessage)

            }
            
        })
            .catch((error) => {
                if(error) {
                    setError(true)
                    console.log('the error is ', error)

                }
            })
    
    }, [])
    console.log('all of us', news.allNews)

    return error ? <Error /> : (<>
    <>
            <NewsList 
                setVoteNews={setVoteNews}
                voteNews={voteNews}
                news={news.id}
                allNews={news.allNews}
                title={news.title} 
                author={news.author} 
                publishedAt={news.publishedAt} 
                description={news.description} 
                url={news.url} 
                urlToImage={news.urlToImage} 
            />
        </>
    </>)
}
export default News;