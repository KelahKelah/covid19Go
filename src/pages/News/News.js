import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { FaRegHeart, FaGenderless } from 'react-icons/fa';
import './News.css';
import NewsList from './NewsList';

const url = 'httpss://newsapi.org/v2/top-headlines?country=us&apiKey=11583d075b4e49aaacfeaf43f6d5706'
// const apiKey = '11583d075b4e49aaacfeaf43f6d5706'

const News = () => {
    const [news, setNews] = useState({ allNews: [], title: '', author: '', publishedAt: '', description: '', url: '', urlToImage: ''})
    const [voteNews, setVoteNews] = useState(0)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // testing API
        Axios.get(url)
        .then(res => {
            var i;
            console.log('the index is :', res.data.articles[i])
            setIsLoading(false)
            if(res.status === 200) {
                // setIsLoading(false)
                setNews({ allNews: res.data.articles.slice(0, 11)})
                // setNews({ allNews: res.data.articles.slice(0, 11), title: res.data.articles[1].title})
                setVoteNews(3)
                console.log('Response data', res.data.articles)
                // console.log('Response data', res.data.articles.description)
            } 
        })
            .catch((error) => {
                if(error.status == "error") {
                    setError(true)
                    // console.log("checking my error" , error)
                }
            })
    
    }, []);

    return(
        <>
            <NewsList 
                error={error}
                setError={setError}
                setVoteNews={setVoteNews}
                voteNews={voteNews}
                news={news.id}
                allNews={news.allNews} 
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setVoteNews={setVoteNews}
                voteNews={voteNews}
                news={news.id}
                allNews={news.allNews}
            />
        </>

    )
}
export default News;