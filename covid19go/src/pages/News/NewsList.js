import React from 'react';



const NewsList = () => {
    const getNewsLikeCount = () => {


    }
    const getNews = () => {


    }

    
    return(
        <div>
            <div className='List_wrap'>
                <div className='main_news'>
                    <div>
                        <h1><FaGenderless />{news.author}</h1>
                       <span>{news.publishedAt}</span>
                        <h2>{news.title}</h2> 
                        <h3>{news.description}</h3>
                        <a className='myLink' href={news.url} target='blank' >Read More</a> 
                        <i onClick={() => likeNews + 1}><FaRegHeart style={{margin: ' 0px 5px'}} />{likeNews}Likes</i>
                    </div>
                </div>
                <div className='NewImage'>
                    <div>
                        <img src={news.urlToImage} alt='ball' target='blank' />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default NewsList;