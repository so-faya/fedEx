import React from 'react'
import driver from '../Image/fy22_leavenworth_220206_mk_fedex_leavenworth-00281.webp'
import deliverywoman from '../Image/fy20_walmart__e1a1133_fdi.webp'
import fedexbox from '../Image/master-dm-13-005-03-03-02-284-160-110-3_retouch_727x463.jpg'
import purplecarbon from '../Image/Purple_Carbon_Sequestration_Icon_Large.webp'
import fedexcares from '../Image/2019_fedexcares_memphis_45_2955252.webp'
import shieldlock from '../Image/shield+lock_icon.png'

const Momentun = () => {
  return (
    <div className='momentun-container'>
        <div className='momentun-holder'>
            <h2 className='momentun-hd'>
                Keep holiday momentum going for your business
            </h2>

            <div className='momentun-row-one momentunrow'>
                <div className='momentun-img-container'>
                    <img src={driver}></img>
                </div>
                <div className='momentun-info-holder'>
                    <h2 className='momentun-info-hd'>
                        Get the guide to holiday shipping success
                    </h2>
                    <p className='momentun-info-p'>
                        From delivery FAQs to marketing articles, 
                        find resources to support you and your customers. 
                        Bookmark this page for easy reference throughout the season.
                    </p>
                    <a href=''>FIND TIPS AND TOOLS</a>
                </div>
            </div>

            <div className='momentun-row-two momentunrow'>
                <div className='momentun-img-container'>
                    <img src={deliverywoman}></img>
                </div>
                <div className='momentun-info-holder'>
                    <h2 className='momentun-info-hd'>
                        Make sure you’re prepared for returns
                    </h2>
                    <p className='momentun-info-p'>
                        Not every gift will be a hit with your customers. 
                        But returns are easy with scannable QR codes, no-box options, pre-printed labels, 
                        and retail <a href=''>drop off locations.</a>
                    </p>
                    <a href=''>SIMPLIFY RETURNS</a>
                </div>
            </div>

            <div className='momentun-row-three momentunrow'>
                <div className='momentun-img-container'>
                    <img src={fedexbox}></img>
                </div>
                <div className='momentun-info-holder'>
                    <h2 className='momentun-info-hd'>
                        Plan your packaging strategy
                    </h2>
                    <p className='momentun-info-p'>
                        Are you equipped to handle the holiday rush? Explore in-store shipping supplies or order free reusable packaging. 
                        And find tips to help you reduce costs and waste.
                    </p>
                    <a href=''>GET PACKAGING</a>
                </div>
            </div>

            <div className='co2-icon-row'>
                <div className='co2-icon-holder'>
                    <img src={purplecarbon}></img>
                </div>
                <div className='co2-icon-info'>
                    <h3 className='co2-icon-hd'>
                        Understand the environmental impact of your shipping
                    </h3>
                    <div className='co2-icon-p'>
                        Use FedEx® Sustainability Insights to track your carbon footprint. 
                        View your historical estimated CO2e** shipping emissions at package and account levels.
                    </div>
                    <a href=''>SEE SHIPPING EMISSIONS</a>
                </div>
            </div>

            <h2 className='datetoremember-hd'>
                Dates to remember in November
            </h2>

            <div className='momentun-row-three momentunrow'>
                
                <div className='momentun-info-holder'>
                    <h2 className='momentun-info-hd'>
                        Give back in your own way
                    </h2>
                    <p className='momentun-info-p'>
                        Giving Tuesday is November 28. 
                        It’s always on the Tuesday after Thanksgiving, and it encourages people around 
                        the world to do good. Consider giving your time or a donation, and watch for the winners 
                        of our 2023 Giving Tuesday Grant Contest.
                    </p>
                    <a href=''>
                        LEARN ABOUT FEDEX CARES
                    </a>
                </div>

                <div className='momentun-img-container'>
                    <img src={fedexcares}></img>
                </div>
            </div>
            <div className='fraud-warning'>
                <div className='fraud-icon'>
                    <img src={shieldlock}></img>
                </div>
                <div className='fraud-info'>
                    <h3 className='fraud-info-hd'>
                        Get serious about preventing fraud
                    </h3>
                    <div className='fraud-info-p'>
                        November 30 is International Computer Security Day, so here’s a refresher on common scams. 
                        Learn how to help protect yourself and your FedEx account from fraud.
                    </div>
                    <a href=''>
                        BE PROACTIVE
                    </a>
                </div>
            </div>

            <div className='money-back-guarantee'>
                <h3 className='money-back-hd'>
                    FedEx money-back guarantee
                </h3>
                <p className='money-back-p'>
                    We offer a money-back guarantee for select services. This guarantee may be suspended, modified, or revoked. 
                    Please check <a href=''>money-back guarantee</a> for the latest status of our money-back guarantee.
                </p>
                <span>*With weekend delivery to over 98% of the U.S. population on Saturdays and over 50% on Sundays.</span>
                <span>**Includes carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O).</span>
            </div>

        </div>

    </div>
  )
}

export default Momentun