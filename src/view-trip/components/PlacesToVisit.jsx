import React from "react";
import PropTypes from "prop-types";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  console.log("Full trip object:", trip);
  console.log("tripData:", trip?.tripData);
  console.log("itinerary:", trip?.tripData?.itinerary);

  

  // Ensure itinerary is correctly structured
  const itinerary = trip?.tripData?.itinerary;
  
  // console.log(sortedDays);

  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>
      <div>
        {itinerary &&
          Object.keys(itinerary).map((dayKey, index) => {
            const dayData = itinerary[dayKey];
            return (
              <div className="mt-5" key={index}>
                <h2 className="font-medium text-lg">{dayKey}</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {dayData.plan.map((place, index) => (
                    <div key={index}>
                      <PlaceCardItem place={place} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

PlacesToVisit.propTypes = {
  trip: PropTypes.shape({
    tripData: PropTypes.shape({
      itinerary: PropTypes.objectOf(
        PropTypes.shape({
          plan: PropTypes.arrayOf(
            PropTypes.shape({
              placeName: PropTypes.string,
              placeDetails: PropTypes.string,
              travelTime: PropTypes.string,
              placeImageURL: PropTypes.string,
              geoCoordinates: PropTypes.shape({
                longitude: PropTypes.number,
                latitude: PropTypes.number,
              }),
            })
          ),
        })
      ),
    }),
  }),
};

PlacesToVisit.defaultProps = {
  trip: {
    tripData: {
      itinerary: {},
    },
  },
};

export default PlacesToVisit;