import React from 'react';
import "./work.css/";
import award1 from '../assets/award1.jpeg'; 
import award2 from '../assets/award2.jpeg'; 
import award3 from '../assets/award3.png'; 
import award4 from '../assets/award4.png'; 
import award5 from '../assets/award5.png'; 
import award6 from '../assets/award6.png'; 



const mywork_data = [{ 
      w_no: "1",
w_name: "Digital India Award 2022",
w_img: award1,
w_description: "Streamlined government services. The Digital India Awards 2022 recognize and honor exemplary digital governance initiatives in India.",
},
{
    w_no: "2",
    w_name: "Justice for All Campaign",
    w_img: award2,
    w_description: "Equal access to legal resources.The focus was on empowering local communities and ensuring access to justice for vulnerable populations.",
},
    {
        w_no: "1",
        w_name: "Landmark Environmental Verdict",
        w_img: award3,
        w_description: " By providing evidence management, expert collaboration, and public awareness campaigns",
    },
    {
        w_no: "1",
        w_name: "Startup Dispute Resolution",
        w_img: award4,
        w_description: "Through mediation, negotiation, and legal guidance, we helped resolve conflicts related to equity distribution, intellectual property, and founder disagreements",
    },
    {
        w_no: "1",
        w_name: "Consumer Rights Advocacy",
        w_img: award5,
        w_description: "Our platform empowered consumers by providing legal information, complaint filing assistance, and access to consumer protection laws.",
    },
    {
        w_no: "1",
        w_name: "Blockchain and Smart Contracts",
        w_img: award6,
        w_description: "By analyzing case law, regulatory frameworks, and contractual disputes, we contributed to shaping the legal landscape for decentralized transactions.",
    },
];

function Work() {
    return (
        <div className='mywork'>
            <div className="myworktitle">
                <h1>Our Works</h1>
                <div class="animated-line"></div>

            </div>
            <div className="myworkcontainer">
                {mywork_data.map((work, index) => (
                    <div key={index} className="work-box">
                        
                        <img src={work.w_img} alt={work.w_name} />
                        <div className="work-details">
                            <h2>{work.w_name}</h2>
                            <p>{work.w_description}</p>
                        </div>
                    </div>
                ))}
            </div>
          
        </div>
    );
}

export default Work;

