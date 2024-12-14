// export type TravelerOption = {
//     id: number;
//     title: string;
//     description: string;
//     icon: string;
//     people: string;
//   };
  
  export const SelectTravelersList = [
    {
      id: 1,
      title: "Just Me",
      description: "A sole traveler in exploration",
      icon: "✈️",
      people: "1",
    },
    {
      id: 2,
      title: "A Couple",
      description: "Two travelers in tandem",
      icon: "🥂",
      people: "2 People",
    },
    {
      id: 3,
      title: "Family",
      description: "A group of fun-loving adventurers",
      icon: "🏡",
      people: "3 to 5 People",
    },
    {
      id: 4,
      title: "Friends",
      description: "A bunch of thrill-seekers",
      icon: "⛵",
      people: "5 to 10 People",
    },
  ];
  
//   export type BudgetOption = {
//     id: number;
//     title: string;
//     description: string;
//     icon: string;
//   };
  
  export const SelectBudgetOptions = [
    {
      id: 1,
      title: "Cheap",
      description: "Stay conscious of costs",
      icon: "💵",
    },
    {
      id: 2,
      title: "Moderate",
      description: "Keep cost on the average side",
      icon: "💰",
    },
    {
      id: 3,
      title: "Luxury",
      description: "Don't worry about cost",
      icon: "💸",
    },
  ];
  
  export const AI_PROMPT =
    "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with the best time to visit in JSON Format.";