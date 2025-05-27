import React from 'react';
import card1 from "../assets/images/card1.jpg";
import card2 from "../assets/images/card2.jpg";
import card3 from "../assets/images/card3.png";

const cardsData = [
  {
    img: card1,
    title: 'Premium Cattle Feed',
    description:
      'Nutritionally balanced feed for dairy cattle, enhancing milk production and animal health.',
  },
  {
    img: card2,
    title: 'Dairy Mineral Mixture',
    description:
      'Essential mineral supplement for dairy animals to improve overall health and productivity.',
  },
  {
    img: card3,
    title: 'Calf Starter Feed',
    description:
      'Specially formulated feed for calves to ensure proper growth and development.',
  },
];

const Cards = () => {
  return (
    <div className="container py-5 mb-5">
      <div className="row g-5">
        {cardsData.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="position-relative" style={{ paddingBottom: '60px' }}>
              <div
                className="shadow-sm overflow-hidden"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '280px',
                  borderRadius: '14px'
                }}
              ></div>

              <div
                className="bg-white shadow position-absolute start-0 end-0 mx-3 p-3 text-center"
                style={{
                  bottom: '-40px',
                  zIndex: 2,
                  borderRadius: '14px'
                }}
              >
                <h6 className="mb-2" style={{
                    color: '#717171',
                    fontWeight: 700
                }}>{card.title}</h6>
                <p className="small text-muted mb-2">{card.description}</p>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{
                    color: '#004E1C',
                    fontWeight: 600
                  }}
                >
                  Read more <span><i class="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;



