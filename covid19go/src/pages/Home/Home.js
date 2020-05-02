import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
// import { baseUrl } from '../../util/apiCall'

const Home = () => {
    const [statistic, setStatistic] = useState({ confirmed:0, discharged:0, death:0 })
    const [currentDate, setCurrentDate] = useState({date: ''})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // useEffect(() => {
    //         // testing API
    //     axios.get('https://www.who.int/feeds/entity/hac/en/rss.xml')
    //     .then(res => {
    //         setLoading(true)
    //         // if(status === 200) {
    //         if(true) {
    //             // setStatistic({confirmed: res.confirmed.count, discharged: res.discharged.count, deaths: res.death.count})
    //             console.log('Response data')

    //         }
    //     })
    // })

    // let getDate = () => {
    //     let date = {
    //         currentDate: new Date()
    //     } 

    // }

    let myDate = new Date().toDateString()

    useEffect(() => {
        setStatistic({confirmed: 1204, discharged: 324, deaths: 41})
        setCurrentDate({date: myDate})
        console.log(myDate)

        // .catch((error) => {
        //     console.log(error)
        //     setError(true)
        // })
    }, [])
    
    
    return(
        <div>
            <div className='home_wrap'>
                <div className='main_title'>
                    <h1>COVID-19 UPDATE</h1>
                </div>
                <div>
                    <h1 className='title'>NEW CASES CONFIRMED</h1>
                </div>
                <i id='date'>{currentDate.date}</i>
                <div className='statistic'>
                    <div className='confirmed'>
                        <label className='confirmed_item'>TOTAL CONFIRMED</label>
                        <p className='confirmed_item'>{statistic.confirmed}</p>
                    </div>
                    <div className='discharged'>
                        <label className='discharged_item'>DISCHARGED</label>
                        <p className='discharged_item'>{statistic.discharged}</p>
                    </div>
                    <div className='death'>
                        <label className='death_item'>DEATHS</label>
                        <p className='death_item'>{statistic.deaths}</p>
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}
export default Home;