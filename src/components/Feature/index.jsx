import React from "react";
import { featureQuotes } from "../../static/data/features";
function Feature() {
  const RenderFeatureQuotes = () => {
    return featureQuotes.map((quote, index) => {
      return (
        <div key={index} className="grid__page--items">
          <img
            src={quote.image}
            alt=""
            className="grid-images wow animate__backInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.2s"
          />
          <div
            className="grid-content wow animate__backInUp"
            data-wow-duration="0.4s"
            data-wow-delay="0.25s"
          >
            {quote.description}
          </div>
          <p className="grid-title">{quote.name}</p>
          <a href="/KenCrystalK57/#" className="grid-btn">
            See more
          </a>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="con_pad grid" id="feature__me">
        <h2
          className="grid--title wow animate__fadeInUp"
          data-wow-duration="0.3s"
          data-wow-delay="0.2s"
        >
          Quotes Thomas Edison
        </h2>
        <div className="grid__page">
          <RenderFeatureQuotes />
        </div>
      </div>
    </div>
  );
}

export default Feature;
