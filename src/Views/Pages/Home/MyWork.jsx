import React from 'react';
import Card from '../Components/Card/Card';

const MyWork = () => {
    return (
        <div className="container py-4 py-md-5">
            <h2
                style={{
                    fontFamily: "Playwrite AU SA, serif",
                    borderBottom: "2px solid #94E214",
                    display: 'inline-block'
                }}
                className='mb-4 mb-lg-5'
                data-aos="fade-down"
            >
                Latest Works
            </h2>

            <section className="mb-5">
                <h2 className='text-center mb-4' data-aos="fade-up">Website Templates</h2>
                <div className="row gx-2 gy-4" data-aos="fade-up">
                    <Card img={"Project-1.png"} link="https://github.com/dhaval659/agency" />
                    <Card img={"project-2.png"} link="https://github.com/dhaval659/gaming-main" />
                    <Card img={"project-3.png"} link="https://github.com/dhaval659/Cake-Shop-" />
                </div>
            </section>

            <section>
                <h2 className='text-center mb-4' data-aos="fade-up">React Projects</h2>
                <div className="row gx-2 gy-4" data-aos="fade-up">
                    <Card img={"React-1.png"} link="https://onyxconsultancyservices.co/" />
                    <Card img={"React-2.png"} link="https://github.com/Akxay28/PGMTeam" />
                    <Card img={"React-3.png"} link="https://github.com/dhaval659/NGO" />
                </div>
            </section>
        </div>
    );
};

export default MyWork;