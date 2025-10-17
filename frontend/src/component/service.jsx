// Service.jsx

import React from 'react';
import "./service.css/"
import arrow1 from '../../public/arrow1.png';

const awardsData = [
    {
        year: "2018",
        name: "Digital India Award 2022",
        description: "Recognized for the eCourts Project’s excellence in creating a Judgment and Search Portal for citizens.",
    },
    {
        year: "2023",
        name: "National IP Awards",
        description: "Honors outstanding contributions in the field of intellectual property.",
    },
    {
        year: "2019",
        name: "Legal Era Awards",
        description: "Celebrates achievements in the legal-business community.",
    },
    {
        year: "2020",
        name: "LegalTech Excellence Award",
        description: "Recognizes technological advancements that streamline legal services, enhance efficiency, or improve legal research.",
    },
    {
        year: "2015",
        name: "Pro Bono Champion Award",
        description: "Honors legal professionals who contribute significant pro bono work, providing legal assistance to underserved communities or nonprofit organizations.",
    },
    {
        year: "2024",
        name: "Justice Innovator Award",
        description: "Acknowledges groundbreaking initiatives that enhance access to justice, improve legal processes, or promote legal awareness.",
    },
];

function Service() {
    return (
        <div className="achv">
            <div className="achvt">
                <h1>Our Achievements</h1>
            </div>
            <div className="achvcontainer">
                {awardsData.map((award, index) => (
                    <div key={index} className="achvformat">
                        <h3>{award.year}</h3>
                        <h2>{award.name}</h2>
                        <p>{award.description}</p>
                        <div className="servivereadmore">
                            <p>Read more</p>
                            <img
       
                        src={arrow1} 
                        alt=""
                    />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
