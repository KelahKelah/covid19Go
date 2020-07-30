import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Loader from '../../components/Loader/Loader';
// import { baseUrl } from '../../util/apiCall'

// const GoogleMapApikey = 'AIzaSyC0Cq0grSLW5T4wMwT8aXIyokN1mYT_XHA'
const url = 'https://api.apify.com/v2/key-value-stores/Eb694wt67UxjdSGbc/records/LATEST?disableRedirect=true'
const Home = () => {
    const [statistic, setStatistic] = useState({ confirmed: 0, discharged: 0, death: 0 });
    const [currentDate, setCurrentDate] = useState({ date: '' });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    let myDate = new Date().toDateString()

    useEffect(() => {
            // testing API
        axios.get(url)
        .then(res => {
            setIsLoading(false)
            setCurrentDate({date: myDate})
            console.log(myDate)

            if(res.status === 200) {
                setStatistic({confirmed: res.data.infected, discharged: res.data.recovered, death: res.data.deceased})
                // console.log('res.response data', res)
                // console.log('Single data', res.data.infected, res.data.recovered, res.data.deceased)
            } else {
                setError(true)
            }
        })
    }, [])

    
    return isLoading? <Loader /> : (
        <div>
            <div className='main-title'>
                <h1>COVID-19 UPDATE</h1>
            </div>
            <div className='home-wrap'>
                <div className='title'>
                    <h1>NEW CASES CONFIRMED</h1>
                </div>
                <i id='date'>{currentDate.date}</i>
                <div className='statistic'>
                    <div className='confirmed'>
                        <div className='confirmed-item space width-label'>
                            <div>TOTAL CONFIRMED</div>
                        </div>
                        <div className='confirmed-item width-count'>
                            <div>{statistic.confirmed}</div>
                        </div>
                    </div>
                    <div className='discharged'>
                        <div className='discharged-item space width-label'>
                            <div>DISCHARGED</div>
                        </div>
                        <div className='discharged-item width-count'>
                            <div>{statistic.discharged}</div>
                        </div>
                    </div>
                    <div className='death'>
                        <div className='death-item space width-label'>
                            <div>DEATHS</div>
                        </div>
                        <div className='death-item width-count'>
                            <div>{statistic.death}</div>
                        </div>
                    </div>

                </div>

            </div>
          
        </div>
    )
}
export default Home;