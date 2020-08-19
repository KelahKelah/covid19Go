import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './News.module.css';
import NewsList from './NewsList';
import Error from '../../components/Error/Error';
import {newsUrl} from '../../util/apiCall'


const News = () => {
    const [news, setNews] = useState({ allNews: [], title: '', author: '', publishedAt: '', description: '', url: '', urlToImage: ''})
    const [voteNews, setVoteNews] = useState(0)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Axios.get(newsUrl)
        .then(res => {
            console.log('The second endpoint res is :', res.data.news[1])
            // setIsLoading(true)
            setIsLoading(false)
            if(res.status === 200) {
                // setIsLoading(false)
                setNews({ allNews: res.data.news[1]})
                setVoteNews(3)
            } 
        })
            .catch((error) => {
                if(error.status == "error") {
                    setError(true)
                    // console.log("checking my error" , error)
                }
            })
    
    }, []);

    return error ? <Error /> : (<>
    <>
            <NewsList 
                news={news}
                error={error}
                setError={setError}
                setVoteNews={setVoteNews}
                voteNews={voteNews}
                // news={news.id}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                // news={news.id}
            />
        </>
    </>)
}
export default News;