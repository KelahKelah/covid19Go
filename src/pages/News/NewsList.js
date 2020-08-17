import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { FaRegHeart, FaHeart, FaGenderless } from 'react-icons/fa';
import Error from "../../components/Error/Error";
import styles from './News.module.css';

const NewsList = ({ voteNews, setVoteNews, allNews, error, setError, isLoading }) => {
    // const [error, setError] = useState(false);
// console.log('checking loader after state', isLoading)
console.log('checking error after state', error)

    useEffect(() => {
        if(allNews.length === 0) {
            // setError(true);
            console.log('The error in useEffect is', error)
        }
        setVoteNews(3)
    }, []);

        const MyAllNews = allNews.length > 0 ? (allNews.map((a, i) => {
            console.log('array of all new: ', allNews)
            return( <div key={i} className={styles.newsWrap}>
            <div className={styles.newsWrapTwo}>
                <div className={styles.articles}>
                    <h1><FaGenderless />{a.author}</h1>
                    <span>{a.publishedAt}</span>
                    <h2>{a.title}</h2> 
                    <h3>{a.description}</h3>
                    <div className={styles.readMore}>
                        <a className={styles.myLink} href={a.url} target='blank' >Read More</a>
                        <div>
                            <p>Vote news authenticity</p>
                            <i  onClick={() => setVoteNews(voteNews + 1)} id='vote'><FaRegHeart style={{margin: ' 0px 5px'}} />{voteNews}votes</i>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={a.urlToImage} alt='ball' target='blank' className={styles.img} />
                </div>
            </div>
        </div> )
        }))
        : setError(true)

    
    return error ? (
     <Error /> 
     ) : isLoading ? (
    <Loader /> 
    ) : (
        <div className='wrap-boss'>{MyAllNews}</div>
    )
  
}
export default NewsList;