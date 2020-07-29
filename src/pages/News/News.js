import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { FaRegHeart, FaGenderless } from 'react-icons/fa';
import './News.css';
import NewsList from './NewsList';

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=11583d075b4e49aaacfeaf43f6d57067'
// const apiKey = '11583d075b4e49aaacfeaf43f6d5706'

const News = () => {
    const [news, setNews] = useState({ allNews: [], title: '', author: '', publishedAt: '', description: '', url: '', urlToImage: ''})
    const [voteNews, setVoteNews] = useState(0)
    const [errorMessage, setErrorMessage] = useState({error: '', success: ''})
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
                // setNews({ allNews: res.data.articles.slice(0, 11), title: res.data.articles[1].title, author: res.data.articles[1].author, 
                //     publishedAt:res.data.articles[1].publishedAt, description: res.data.articles[1].description,  
                //     url: res.data.articles[1].url, urlToImage: res.data.articles[1].urlToImage })
                setVoteNews(3)
                console.log('Response data', res.data.articles)
                // console.log('Response data', res.data.articles.description)
            } else {
                setErrorMessage({error:'something went wrong'})
                // console.log('else block')
                console.log('Response data', news.res.data.articles)

            }
            
        })
            .catch((error) => {
                if(error) {
                    console.log(error)
                }
            })
    
    }, [])
    // console.log('all of us', news.allNews)
    // console.log("what is is laoding?", isLoading)

    return(
        <>
            <NewsList 
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