import React from 'react';
import attorney from '../../public/attorney.jpg';
import Service from './service';

function About() {
    return (
        <div className="about">
            <div className="abouttitle">
                <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 ease-in-out">
                    ABOUT US
                </h1>
            </div>
            <div className="aboutsection">
                <div className="aboutleft">
                    <img
                        className="border-double border-4 border-gray-600 transition duration-500 ease-in-out transform hover:scale-110 shadow-lg"
                        src={attorney}
                        alt=""
                    />
                </div>
                <div className="aboutright">
                    <div className="para">
                        <p>
                            <span className="text-blue-400 hover:text-blue-800">
                                <u>Our Mission:</u>
                            </span>{' '}
                            At the heart of our legal practice is a commitment to justice and integrity. With years of experience navigating the complexities of the law, we are dedicated to providing our clients with the highest level of legal representation. Our team is driven by a passion for the law and an unwavering commitment to our clients' success. Whether it's a small personal matter or a large corporate dispute, we approach each case with the same diligence and dedication, ensuring that justice is served and our clients' rights are protected.
                        </p>
                    </div>
                    <div className="aboutskills">
                        <div className="aboutskill">
                            <p>
                                <span className="text-blue-700 hover:text-blue-900 hover:underline transition duration-300 ease-in-out">Criminal Law</span>
                            </p>
                            <hr style={{ width: '50%' }} />
                        </div>
                        <div className="aboutskill">
                            <p>
                                <span className="text-blue-700 hover:text-blue-900 hover:underline transition duration-300 ease-in-out">Educational Law</span>
                            </p>
                            <hr style={{ width: '50%' }} />
                        </div>
                        <div className="aboutskill">
                            <p>
                                <span className="text-blue-700 hover:text-blue-900 hover:underline transition duration-300 ease-in-out">Business Law</span>
                            </p>
                            <hr style={{ width: '50%' }} />
                        </div>
                        <div className="aboutskill">
                            <p>
                                <span className="text-blue-700 hover:text-blue-900 hover:underline transition duration-300 ease-in-out">Civil Law</span>
                            </p>
                            <hr style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutachievements">
                <div className="aboutachievement">
                    <h1>10+</h1>
                    <p>Years of experience</p>
                </div>
                <hr />
                <div className="aboutachievement">
                    <h1>100+</h1>
                    <p>Cases solved</p>
                </div>
                <hr />
                <div className="aboutachievement">
                    <h1>70</h1>
                    <p>Justice served</p>
                </div>
            
            </div>
         <Service/>
        </div>
    );
}

export default About;
