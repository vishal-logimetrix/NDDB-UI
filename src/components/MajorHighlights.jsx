import React from 'react';
import bgImage from '../assets/images/bg-structure.png';
import icon1 from '../assets/images/carbon_development.png';
import icon2 from '../assets/images/lucide_milk.png';
import icon3 from '../assets/images/fluent-emoji-high-contrast_man-farmer.png';
import icon4 from '../assets/images/mdi_graph-line.png';
import icon5 from '../assets/images/lucide_award.png';

const highlights = [
  {
    icon: icon1,
    stat: '20+',
    title: 'Producer Organization Development',
    desc: 'Established over 23 Milk Producer Organizations benefiting more than 800,000 dairy farmers across India.',
  },
  {
    icon: icon2,
    stat: '60 Lac +',
    title: 'Quality Enhancement Programs',
    desc: 'Implemented quality testing and assurance systems that have improved milk quality by 40% in partner regions.',
  },
  {
    icon: icon3,
    stat: '300 K +',
    title: 'Farmer Training Initiatives',
    desc: 'Conducted 5,000+ training programs reaching over 300,000 dairy farmers with modern practices and techniques.',
  },
  {
    icon: icon4,
    stat: '4900 Cr+',
    title: 'Economic Impact',
    desc: 'Helped increase farmer incomes by an average of 35% through improved productivity and market access.',
  },
  {
    icon: icon5,
    stat: '20+',
    title: 'Recognition & Awards',
    desc: 'Received multiple national awards for excellence in dairy development and rural empowerment.',
  },
];

const MajorHighlights = () => {
    return (
      <div className="py-5 mb-5 mt-5" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'contain' }}>
        <div className="container-fluid text-center">
          <h2 className="mb-4 mt-4" style={{ color: '#004E1C', fontWeight: 800, fontSize: '40px' }}>
            Major Highlights
          </h2>
          <p className="mb-4" style={{ color: '#1E1E1E', fontSize: '17px', }}>
            Key accomplishments and initiatives that showcase our commitment to dairy sector <br /> development.
          </p>
  
          <div className="row g-4 justify-content-center" style={{marginTop: '90px'}}>
            {highlights.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-xl-2" key={index} 
              // style={{
              //   minHeight: '250px'
              // }}
              >
                <div className="bg-white px-4 py-2 position-relative h-100" style={{ 
                    borderRadius: '38px',
                    boxShadow: '12px 12px 20px 0px #0000001A',
                    // border: '1px solid red',
                    // height: '500px'
                     }}>
                  {/* Icon Container */}
                  <div className="position-absolute top-0 start-50 translate-middle bg-white shadow 
                                d-flex align-items-center justify-content-center majorHighlitIcon"
                    style={{
                      width: '60px',
                      height: '60px',
                      marginTop: '-45px',
                      borderRadius: '50%',
                      zIndex: 2,
                    }}>
                    <img src={item.icon} alt="icon" style={{ width: '28px', height: '28px' }} />
                  </div>
  
                  {/* Stat Number */}
                  <div className="text-center mb-3 position-absolute top-0 start-50 translate-middle bg-white d-flex align-items-center justify-content-center" style={{ 
                    // marginTop: '40px', 
                    minHeight: '60px',
                    width: '150px',
                    borderRadius: '13px',
                    background: '#fff',
                    boxShadow: '0 -4px 10px -2px rgba(0, 0, 0, 0.1)',
                    
                  }}>
                    <h3 className="mb-0 mt-4" style={{ 
                      fontSize: '24px',
                      lineHeight: '1.2',
                      fontWeight: 800,
                    }}>
                      {item.stat}
                    </h3>
                  </div>
  
                  {/* Card Content */}
                  <div className="pt-2">
                    <h6 className="mb-3 mt-5" style={{ 
                      color: '#1E1E1E',
                      fontSize: '16px',
                      fontWeight: 700 ,
                      
                    }}>
                      {item.title}
                    </h6>
                    <p className="text-muted small" style={{ 
                      fontSize: '14px',
                      lineHeight: '1.4'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default MajorHighlights;

