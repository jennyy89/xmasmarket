import React from "react";
import "../Market.css";
//import { Map, Marker } from "pigeon-maps";
//import { FaLink } from "react-icons/fa";

const Market = ({ markets }) => {
  console.log(markets);
  return (
    <section>
      {markets.map((market, index) => (
        <>
          <div key={index} className="floatcontainer">
            <div className="floatleft">
              <img src={market.market_image} alt="" />
            </div>
            <div className="floatright">
              <h1>{market.market_name}</h1>
              <div>{market.market_link}</div>
              <div>{market.market_address}</div>
              <div>{market.market_description}</div>
            </div>
          </div>
          {/* <Map
            className="map-page"
            height={300}
            width={750}
            defaultCenter={[
              parseFloat(market.market_latitude),
              parseFloat(market.market_longtitude),
            ]}
            defaultZoom={11}
          >
            <Marker
              width={50}
              anchor={[
                parseFloat(market.market_latitude),
                parseFloat(market.market_longtitude),
              ]}
            />
          </Map> */}
        </>
      ))}
    </section>
  );
};

export default Market;
