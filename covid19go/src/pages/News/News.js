import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './News.css'

const News = () => {
    const [news, setNews] = useState({title: '', photo: '', discription: '', author: ''})
    const [voteNews, setVoteNews] = useState(0)
    const [errorMessage, setErrorMessage] = useState({error: '', success: ''})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // testing API
        Axios.get('https://www.who.int/feeds/entity/hac/en/rss.xml')
        .then(res => {
            console.log('the response is :', res)
            setIsLoading(true)
            // if(status === 200) {
                if(true) {
                // setNews({title: res.title, photo:res.photo, discription: res.discription, author: res.author})
                // setVoteNews(res.voteNews.count)
                console.log('Response data')
            } else {
                // setErrorMessage({error:'something went wrong'})
                console.log('else block')
            }
            
        })
            .catch((error) => {
                if(error) {
                    console.log(console.error()
                    )
                }
            })
    
    }, [])
    
    
    return(
        <div>
            <div className='news_wrap'>
                <div className='main_news'>
                    <div>
                        <img src='' />
                        <h2>I am the news page</h2>
                        <i>29th may 2020</i>
                        <p>Kelechi Ekebor</p>
                    </div>
                    <div>
                        <img src='' />
                        <h2>I am the news page</h2>
                        <i>29th may 2020</i>
                        <p>Kelechi Ekebor</p>
                    </div>
                    
                </div>
                <div className='sidebar_news'>
                    <div>
                        <h2>Title</h2>
                        <i>29th may 2020</i>
                    </div>
                    <div>
                        <h2>Title</h2>
                        <i>29th may 2020</i>
                    </div>
                    <div>
                        <h2>Title</h2>
                        <i>29th may 2020</i>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default News;