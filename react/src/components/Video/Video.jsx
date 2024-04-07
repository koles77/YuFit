import React from 'react';
import Slider from 'react-slick';
import './Video.css';
import '..//Slider/slick-theme.css';
import '..//Slider/slick.css';

const video_1 = new URL ('../../assets/video/video_1.MP4', import.meta.url);
const video_2 = new URL ('../../assets/video/video_2.MP4', import.meta.url);
const video_3 = new URL ('../../assets/video/video_3.MP4', import.meta.url);

function Video() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScrol: 3,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScrol: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScrol: 1
                }
            }
        ]
    };
    return (
        <div className='video'>
            <h3>Видео <span>знакомство</span></h3>
            <Slider {...settings}>
                <div>
                    <video loop='loop' controls='controls'>
                        <source src={video_1} type='video/mp4'/>
                    </video>
                    <h4>Жим лежа в наклоне</h4>
                </div>
                <div>
                    <video loop='loop' controls='controls'>
                        <source src={video_3} type='video/mp4'/>
                    </video>
                    <h4>Отжимания на брусьях</h4>
                </div>         
                <div>
                    <video loop='loop' controls='controls'>
                        <source src={video_2} type='video/mp4'/>
                    </video>
                    <h4>Тяга сверху</h4>
                </div>
                <div>
                    <video loop='loop' controls='controls'>
                        <source src={video_3} type='video/mp4'/>
                    </video>
                    <h4>Отжимания на брусьях</h4>
                </div>         
                <div>
                    <video loop='loop' controls='controls'>
                        <source src={video_2} type='video/mp4'/>
                    </video>
                    <h4>Тяга сверху</h4>
                </div>                   
            </Slider>
        </div>
    );
}

export default Video