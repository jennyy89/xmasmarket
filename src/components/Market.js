import React from "react";
import "../Market.css";
import { Map, Marker } from "pigeon-maps";

const Market = ({ markets }) => {
  const option = "Weihnachtsmarkt Karlsruhe";
  return (
    <div className="background">
      {markets.map(
        (market, index) =>
          String(market.market_name) === String(option) && (
            <div key={index}>
              <h1>{market.market_name}</h1>
              <img src={market.market_image} alt="" />
              <div>{market.market_link}</div>
              <div>{market.market_address}</div>
              <div>{market.market_description}</div>
              <Map
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
              </Map>
            </div>
          )
      )}
    </div>
  );
};

export default Market;
