import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './News.module.css';
import NewsList from './NewsList';
import Error from '../../components/Error/Error';
import {newsUrl} from '../../util/apiCall'


const News = () => {
    const [news, setNews] = useState({ allNews: [] })
    const [voteNews, setVoteNews] = useState(0)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Axios.get(newsUrl)
        .then(res => {
            console.log('The second endpoint res is :', res.data.news[1])
            // setIsLoading(true)
            // setIsLoading(false)
            if(res.status === 200) {
                // setIsLoading(false)
                console.log('The second endpoint res is :','1')
                setNews({ allNews: res.data.news.slice(0, 15)})
                setVoteNews(3)
                setError(false)
                console.log('The second endpoint res is :', '2')
            } 
        })
            .catch((error) => {
                console.log("checking my error" , error)
                if(error.status == "error") {
                    setError(true)
                    console.log("checking my error" , error)
                }
            })
    
    }, []);
console.log('news error ', error)
    return error ? <Error /> : (<>
    <>
            <NewsList 
                news={news.allNews}
                error={error}
                setError={setError}
                setVoteNews={setVoteNews}
                voteNews={voteNews}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </>
    </>)
}
export default News;