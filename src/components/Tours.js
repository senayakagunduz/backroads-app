import React, { useState } from "react";
import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  const [tour, setTour] = useState(tours);

  const removeItem = (id) => {
    let newTours = tour.filter((item) => item.id !== id);
    setTour(newTours);
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      {/* <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div> */}
      <div className="section-center featured-center">
        {tour.map((item) => {
          const { id, date, title, text, icon, time, money, img } = item;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="tour4" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{" "}
                    china
                  </p>
                  <p>{time}</p>
                  <p>{money}</p>
                </div>
              </div>
              <div>
                <button className="btn" onClick={() => removeItem(id)} style={{marginRight:'41px'}}>
                  Remove item
                </button>
                <button className="btn" onClick={()=>setTour([])}>Remove all</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
