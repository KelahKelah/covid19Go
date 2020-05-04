import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
// import { baseUrl } from '../../util/apiCall'

const GoogleMapApikey = 'AIzaSyC0Cq0grSLW5T4wMwT8aXIyokN1mYT_XHA'
const statistics_url = 'https://nigeria-covid-19.p.rapidapi.com/api/confirmed'

const Home = () => {
    const [statistic, setStatistic] = useState({ confirmed: 0, discharged: 0, death: 0 })
    const [currentDate, setCurrentDate] = useState({ date: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // useEffect(() => {
    //         // testing API
    //     axios.get('https://nigeria-covid-19.p.rapidapi.com/api/confirmed')
    //     .then(res => {
    //         setLoading(true)
    //         setCurrentDate({date: 'myDate'})
    //         console.log(myDate)

    //         if(res.status === 200) {
    //             // setStatistic({confirmed: res.confirmed.count, discharged: res.discharged.count, deaths: res.death.count})
    //             console.log('Response data', res)

    //         }
    //     })
    // }, [])

    let getDate = () => {
        let date = {
            currentDate: new Date()
        } 

    }

    let myDate = new Date().toDateString()

    useEffect(() => {
        setStatistic({ confirmed: 1204, discharged: 324, deaths: 41 })
        setCurrentDate({ date: myDate })
        console.log(myDate)

        // .catch((error) => {
        //     console.log(error)
        //     setError(true)
        // })
    }, [])


    return (
        <div>
            <div className='main_title'>
                <h1>COVID-19 UPDATE</h1>
            </div>
            <div className='home_wrap'>
                <div className='title'>
                    <h1>NEW CASES CONFIRMED</h1>
                </div>
                <i id='date'>{currentDate.date}</i>
                <div className='statistic'>
                    <div className='confirmed'>
                        <div className='confirmed_item space width-label'>
                            <div>TOTAL CONFIRMED</div>
                        </div>
                        <div className='confirmed_item width-count'>
                            <div>{statistic.confirmed}</div>
                        </div>
                    </div>
                    <div className='discharged'>
                        <div className='discharged_item space width-label'>
                            <div >DISCHARGED</div>
                        </div >
                        <div className='discharged_item width-count'>
                            <div>{statistic.discharged}</div>
                        </div>
                    </div>
                    <div className='death'>
                        <div className='death_item space width-label'>
                            <div>DEATHS</div>
                        </div>
                        <div className='death_item width-count'>
                            <div>{statistic.deaths}</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Home;