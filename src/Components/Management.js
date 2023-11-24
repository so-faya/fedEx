import React from 'react'
import courier from '../Image/icon_courier_purple_lg_1637809911.png'
import delivery from '../Image/icon_delivery_purple_lg_2143296207.png'
import retail from '../Image/icon_retail_services_purple_med.png'
import alert from '../Image/icon_alert_purple_lg.png';
import returnsign from '../Image/icon_returns_purple_lg_1184917500.png'
import clock from '../Image/Purple_Time_Based_Icon_-_Large.webp'
import twof from '../Image/fy22_leavenworth_220208-pn-fedex-7483.webp'
import smile from '../Image/fy20_walmart_1e1a9622_fdi.webp'
import truck from '../Image/b_master_dm_13_004_02_04_02_137_160_110_2.webp'
import fatty from '../Image/fy20_dollargeneral_e1a2981_fdi.webp'
import problem from '../Image/Gradient_Problem_Solving_Icon_Large.webp'
import empty from '../Image/Gradient_Empty_Packaging_Icon.webp'
const Management = () => {
  return (
    <div className='manage-container'>
        <div className='manage-holder'>
            <h2>Manage your shipments and returns</h2>
            <div className='manage-icons'>
                <div className='icon-one iconny'>
                    <a href=''>
                        <img src={courier} alt="" /> 
                    </a>
                    <a href=''>DROP OFF A PACKAGE</a>
                </div>
                <div className='icon-two iconny'>
                    <a href=''>
                        <img src={delivery} alt="" /> 
                    </a>
                    <a href=''>REDIRCT A PACKAGE</a>
                </div>
                <div className='icon-three iconny'>
                    <a href=''>
                        <img src={retail} alt="" /> 
                    </a>
                    <a href=''>STORE HOURS AND SERVICES</a>
                </div>
                <div className='icon-four iconny'>
                    <a href=''>
                        <img src={alert} alt="" /> 
                    </a>
                    <a href=''>SERVICE ALRETS</a>
                </div>
                <div className='icon-five iconny'>
                    <a href=''>
                        <img src={returnsign} alt="" /> 
                    </a>
                    <a href=''>RETURN A PACKAGE</a>
                </div>
            </div>
            <div className='schedule'>
                <div className='clock-icon'>
                    <img src={clock} alt="" /> 
                </div>

                
                <div className='schedule-info'>
                    <h2 className='schedule-info-hd'>
                        Send holiday gifts in time
                    </h2>
                    <p className='schedule-info-p'>
                        Use our 2023 shipping holiday schedule to stay on track.
                        See the last days you can ship with FedEx for arrival in time for the holidays.
                    </p>
                    <a href=''>
                        VIEW THE SCHEDULE
                    </a>
                </div>
            </div>

            <div className='ready-to-help'>
                <h2 className='ready-to-help-hd'>
                    Ready and waiting to help you with the holidays
                </h2>
                <div className='ready-to-help-rowone ready'>
                    <div className='rowone-img-holder'>
                        <img src={twof} alt=''></img>
                    </div>
                    <div className='rowone-info'>
                        <h1 className='rowone-hd'>
                            Convenient deliveries, no matter where you are
                        </h1>
                        <p className='rowone-p'>
                            You may not always be home for the holidays, but FedEx Delivery Manager® is. 
                            Request to redirect a delivery to a <a href=''>FedEx location</a>, then pick it up while you’re out and about.
                            Or place a free vacation hold for up to 14 days to keep packages off your porch.
                        </p>
                        
                        <div className='package-link'>
                            <a href='' className='assistance'>ENROLL FOR FREE</a>
                        </div>
                    </div>
                </div>
                <div className='ready-to-help-rowtwo ready'>
                 
                    <div className='rowtwo-info'>
                        <h1 className='rowtwo-hd'>
                            Ship with confidence on the go
                        </h1>
                        <p className='rowtwo-p'>
                            Save time with the FedEx® Mobile app by creating a shipping label on your phone. 
                            You’ll get a QR code you can bring to a <a href=''>FedEx Office location</a>. Let us print it and ship your package.
                        </p>
                        
                        <div className='package-link'>
                            <a href='' className='assistance' >DOWNLOAD THE APP</a>
                        </div>
                    </div>
                    <div className='rowtwo-img-holder'>
                        <img src= {smile} alt=''></img>
                    </div>
                </div>

                <div className='ready-to-help-rowthree ready'>
                    <div className='rowthree-img-holder'>
                        <img src= {truck} alt=''></img>
                    </div>
                    <div className='rowthree-info'>
                        <h1 className='rowthree-hd'>
                            Send holiday cheer early
                        </h1>
                        <p className='rowthree-p'>
                            With service 7 days a week*, FedEx Home Delivery® makes holiday shipping so simple. 
                            Get reliable delivery in 1–5 days (3–7 days in Alaska and Hawaii). 
                            If you're shipping to a business, <a href=''>use FedEx Ground</a>. It's faster to more locations than UPS Ground.
                        </p>
                        <div className='package-link'>
                            <a href='' className='assistance'>GET HOME DELIVERY</a>
                        </div>
                        
                    </div>
                </div>

                <div className='ready-to-help-rowfour ready'>
                 
                    <div className='rowfour-info'>
                        <h1 className='rowfour-hd'>
                            Drop off gifts while you shop for more
                        </h1>
                        <p className='rowfour-p'>
                            Holiday shopping isn’t always a one-and-done job. 
                            Drop off packages at retail locations like FedEx Office, Walgreens, Dollar General, and select grocery locations. 
                            Then, keep shopping for who’s left on your list.
                        </p>
                        <a href='' className='assistance'>FIND LOCATIONS</a>
                    </div>
                    <div className='rowfour-img-holder'>
                        <img src={fatty} alt=''></img>
                    </div>
                </div>
            </div>
            <div className='package-container'>
                <div className='package-one'>
                    <div className='package-icon'>
                        <img src={problem}></img>
                    </div>
                    <h3 className='package-hd'>
                        Move toward what's next this season
                    </h3>
                    <p className='package-p'>
                        The holidays are almost here and it can get a little hectic. 
                        Breeze through your to-dos with packing, shipping, and tracking resources—all in one place.
                    </p>
                    <div className='package-link'>
                        <a href='' className='assistance'>GET THE HOLIDAY GUIDE</a>
                    </div>
                </div>
                <div className='package-two'>
                    <div className='package-icon'>
                        <img src={empty}></img>
                    </div>
                    <h3 className='package-hd'>
                       Here for your holiday packing needs
                    </h3>
                    <p className='package-p'>
                        From cushioning fragile gifts to packing up specialty items, our experts can handle it. 
                        Save time with pack-and-ship services at local FedEx Office stores.
                    </p>
                    <div className='package-link'>
                        <a href='' className='assistance'>LOCATE STORES</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Management