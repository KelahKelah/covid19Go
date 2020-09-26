import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NewsList from './NewsList';
import Error from '../../components/Error/Error';
import {newsUrl} from '../../util/apiCall'


const News = () => {
    const [news, setNews] = useState({ allNews: [] })
    const [voteNews, setVoteNews] = useState(0)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        Axios.get(newsUrl)
        .then(res => {
            if(res.status === 200) {
                console.log('response for status.res',res)
                setNews({ allNews: res.data.news.slice(0, 15)})
                setVoteNews(3)
            } 
        })
            .catch((error) => {
                console.log('error for catch block is', error.response)
                if(error || error.response.status === 401) {
                    setError(true)
                } else {
                    console.log('status check is incorrect')
                    return null
                }


            })
    
    }, []);
    return error ? <Error /> : (
            <NewsList 
                news={news.allNews}
                error={error}
                setError={setError}
                setVoteNews={setVoteNews}
                voteNews={voteNews}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
    )
}
export default News;