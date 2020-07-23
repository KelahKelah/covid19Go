import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaGenderless } from 'react-icons/fa';


const NewsList = ({ voteNews, setVoteNews, allNews, title, author, publishedAt, description, url,urlToImage }) => {
    // const [voteNews, setVoteNews] = useState(0)

    // useEffect(() => {
    //     setVoteNews(3)
    // }, [])
         
        const MyAllNews = allNews.length > 0 ? (allNews.map((a, i) => {
            // console.log('array of all new: ', allNews)
            return( <div key={i} className='news-wrap'>
            <div className='news-wrap-two'>
                <div className='articles'>
                    <h1><FaGenderless />{a.author}</h1>
                    <span>{a.publishedAt}</span>
                    <h2>{a.title}</h2> 
                    <h3>{a.description}</h3>
                    <div className='read-more'>
                        <a className='myLink' href={a.url} target='blank' >Read More</a>
                        <div>
                            <p>Vote news authenticity</p>
                            <i  onClick={() => setVoteNews(voteNews + 1)} id='vote'><FaRegHeart style={{margin: ' 0px 5px'}} />{voteNews}votes</i>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={a.urlToImage} alt='ball' target='blank' className='img' />
                </div>
            </div>
        </div> )
        }))
        : (false)

    
    return(
        <div className='wrap-boss'>{MyAllNews}</div>
    )

   
}
export default NewsList;