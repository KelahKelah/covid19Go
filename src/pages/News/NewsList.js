import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaGenderless } from 'react-icons/fa';
import Error from "../../components/Error/Error";
import Loader from '../../components/Loader/Loader'
import styles from './News.module.css';

const NewsList = ({ voteNews, setVoteNews, news, newsId, error, setError, isLoading }) => {
    // const [error, setError] = useState();
// console.log('newslist all news is : ', newsId)
console.log('newslist all news is : ', news)
// console.log('checking error after state', error)

    useEffect(() => {
        if(news.length === 0) {
            // setError(true);
            console.log('The error in useEffect is', error)
        }
        setVoteNews(3)
    }, []);

        const MyAllNews = news.length > 0 ? (news.map((a, i) => {
            console.log('array of all new: ', news)
            return( 
                <div key={i} className={styles.newsWrap}>
                    <div className={styles.newsWrapTwo}>
                        <div className={styles.articles}>
                            <h1><FaGenderless />{a.title}</h1>
                            <span>{a.provider.name}</span>
                            <span>{a.path}</span>
                            <h2>{a.excerpt}</h2> 
                            {/* <h3>{a.description}</h3> */}
                            <div className={styles.readMore}>
                                <a className={styles.myLink} href={a.webUrl} target='blank' >Read More</a>
                                <div>
                                    <p>Vote news authenticity</p>
                                    <i  onClick={() => setVoteNews(voteNews + 1)} id='vote'><FaRegHeart style={{margin: ' 0px 5px'}} />{voteNews}votes</i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.mainImage}></div>
                        </div>
                </div>
            </div>
             )
        }))
        : (isLoading ?  <Loader /> : null )

    
    return error ? (
     <Error /> 
     )  : (
        <div className='wrap-boss'>{MyAllNews}</div>
    )
  
}
export default NewsList;