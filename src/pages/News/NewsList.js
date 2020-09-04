import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaGenderless } from 'react-icons/fa';
import Img from '../../assets/covid19.jpg'
import Error from "../../components/Error/Error";
import Loader from '../../components/Loader/Loader';
import styles from './News.module.css';

const NewsList = ({ voteNews, setVoteNews, news, newsId, error, setError, isLoading }) => {
    // const [error, setError] = useState();
console.log('newslist all news is : ', news)

    useEffect(() => {
        if(news.length === 0) {
            // setError(true);
            console.log('The error in useEffect is', error)
        }
        setVoteNews(3)
    }, []);

        const allNews = news.length > 0 ? (news.map((all, i) => {
            console.log('array of all new: ', news)
            return( 
                <div key={i} className={styles.newsWrap}>
                        <div className={styles.article}>
                            <div className={`${styles.flag} d-flex`}>
                                <p><FaGenderless className={styles.icon} />{all.provider.name}</p>
                                <p className={styles.date}>{all.publishedDateTime}</p>
                            </div>
                            <div>
                                <h1 className={styles.title}>{all.title}</h1>
                                <h2 className={styles.excerpt}>{all.excerpt}</h2> 
                                <a href={all.webUrl} target='blank' className={styles.myLink}>Read more</a>
                            </div>
                            <div className={`d-flex`}>
                                <p onClick={() => setVoteNews(voteNews + 1)} id={styles.vote} ><FaRegHeart className={styles.icon} />{voteNews}votes</p>
                                <p className={styles.voteText}>Vote news authenticity </p>
                            </div>
                        </div>
                        <div>
                            <img src={Img} alt="" className={styles.image} />
                        </div>
                </div>
             )
        }))
        : (isLoading ?  <Loader /> : null )

    
    return error ? (
     <Error /> 
     )  : (
        <div className='wrap-boss'>{allNews}</div>
    )
  
}
export default NewsList;