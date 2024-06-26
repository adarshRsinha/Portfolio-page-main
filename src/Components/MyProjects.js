import "./MyProjectStyle.css";
import React from 'react'
import IntroImg from "../assets/business-work-area.jpg";
import prof1 from "../assets/rupypay.png";
import prof2 from "../assets/Screenshot (659).png";
import prof3 from "../assets/Screenshot (660).png"

const MyProjects = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={prof1} alt='image'/>
                <h2 className='project-title'>RapydPay</h2>
                <div className='pro-details'>
                    <p>This is a Fullstack Payment Platform that supports sending and reciving of payments. This application uses Rapyd payment APIs to handle the payments of the user.</p>
                    <div className='pro-btns'>
                        <a href="https://github.com/adarshRsinha/RapydPay" className="btn">Source</a>
                        <a href="https://github.com/adarshRsinha/RapydPay" className="btn">View</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={prof3} alt='image'/>
                <h2 className='project-title'>Sicu-Aura</h2>
                <div className='pro-details'>
                    <p>A Web page is a record system all India, improved patient care through informed decision-making, enhanced public health monitoring, increased research opportunities, improved emergency response, patient empowerment through access to health records, and the promotion of interoperability for seamless information exchange between healthcare providers.</p>
                    <div className='pro-btns'>
                        <a href="https://github.com/adarshRsinha/Sicu-Aura" className="btn">Source</a>
                        <a href="https://sicu-aura-seven.vercel.app/" className="btn">View</a>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={prof2} alt='image'/>
                <h2 className='project-title'>Sikhsharti App</h2>
                <div className='pro-details'>
                    <p>Shiksharti-app is a full Stack based web application with a strong focus on providing an enhanced and user-friendly job search experience. It incorporates advanced search features, MongoDB for data management, and reflects a commitment to innovation in career optimization. The project has successfully built and deployed a web application that achieves its objectives of improving the job search process and empowering users in their career endeavors.</p>
                    <div className='pro-btns'>
                        <a href="https://github.com/adarshRsinha/shiksharti-app" className="btn">Source</a>
                        <a href="https://shiksharti-app.vercel.app/" className="btn">View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProjects
