import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { FaRegHeart, FaGenderless } from 'react-icons/fa';
import './News.css';
import NewsList from './NewsList';
import Error from '../../components/Error/Error';

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=11583d075b4e49aaacfeaf43f6d5706'
// const apiKey = '11583d075b4e49aaacfeaf43f6d5706'

const News = () => {
    const [news, setNews] = useState({ allNews: [], title: '', author: '', publishedAt: '', description: '', url: '', urlToImage: ''})
    const [voteNews, setVoteNews] = useState(0)
    const [error, setError] = useState(false)
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(false)
=======
    const [isLoading, setIsLoading] = useState(true)
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4

    useEffect(() => {
        Axios.get(url)
        .then(res => {
            var i;
<<<<<<< HEAD
            console.log('the response is', res)
            // setIsLoading(true)
=======
            console.log('the index is :', res.data.articles[i])
            setIsLoading(false)
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
            if(res.status === 200) {
                // setIsLoading(false)
                setNews({ allNews: res.data.articles.slice(0, 11)})
                // setNews({ allNews: res.data.articles.slice(0, 11), title: res.data.articles[1].title})
                setVoteNews(3)
                console.log('Response data', res.data.articles)
                // console.log('Response data', res.data.articles.description)
<<<<<<< HEAD
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

=======
            } 
        })
            .catch((error) => {
                if(error.status == "error") {
                    setError(true)
                    // console.log("checking my error" , error)
>>>>>>> 52d6a110f9606782745c3c94b087e306431270d4
                }
            })
    
    }, []);

    return error ? <Error /> : (<>
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
    </>)
}
export default News;