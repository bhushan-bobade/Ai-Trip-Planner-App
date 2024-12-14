import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "\nGenerate a Travel Plan for Location: Athens, Greece, for 3 Days for Friends with a Moderate budget, Give me a description of the City with what this city is known for and what is one thing that the traveler shouldn't miss, Hotels options list with HotelName, Hotel address, Price, Hotel image URL, Geo Coordinates, rating, descriptions, and suggest itinerary with placeName, Place Details, Place image URL, Geo Coordinates, ticket Pricing, rating, Time to travel each of the locations for 3 days with each day plan with the best time to visit in JSON Format.\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"cityDescription\": \"Athens, the vibrant capital of Greece, is a city steeped in history and brimming with culture.  Known as the cradle of Western civilization, it boasts iconic landmarks like the Acropolis, ancient Agora, and numerous museums showcasing millennia of art and artifacts. Beyond its historical significance, Athens offers a modern pulse with bustling markets, delicious cuisine, lively nightlife, and stunning coastal views.  The city effortlessly blends ancient wonders with contemporary energy, making it a captivating destination.\",\n  \"mustDo\": \"Visiting the Acropolis at sunset is an absolute must. The golden light illuminating the Parthenon and surrounding structures creates an unforgettable and magical experience.\",\n  \"hotels\": [\n    {\n      \"hotelName\": \"Hotel Ermou\",\n      \"hotelAddress\": \"Ermou 10, Athens 105 55, Greece\",\n      \"price\": \"$100-$150/night\",\n      \"hotelImageURL\": \"https://example.com/hotel_ermous.jpg\",  // Replace with actual image URL\n      \"geoCoordinates\": { \"latitude\": 37.9764, \"longitude\": 23.7342 },\n      \"rating\": 4.2,\n      \"description\": \"A centrally located hotel offering comfortable rooms and easy access to major attractions.\"\n    },\n    {\n      \"hotelName\": \"The Stanley\",\n      \"hotelAddress\": \"Filellinon 28, Athens 105 57, Greece\",\n      \"price\": \"$50-$100/night\",\n      \"hotelImageURL\": \"https://example.com/the_stanley.jpg\", // Replace with actual image URL\n      \"geoCoordinates\": { \"latitude\": 37.9764, \"longitude\": 23.7342 },\n      \"rating\": 4.0,\n      \"description\": \"A boutique hotel near the historical center, with a charming atmosphere and friendly staff.\"\n    },\n    {\n      \"hotelName\": \"Adrian Hotel\",\n      \"hotelAddress\": \"Mitropoleos 24, Athens 105 57, Greece\",\n      \"price\": \"$170-$200/night\",\n      \"hotelImageURL\": \"https://example.com/adrian_hotel.jpg\", // Replace with actual image URL\n      \"geoCoordinates\": { \"latitude\": 37.9764, \"longitude\": 23.7342 },\n      \"rating\": 4.5,\n      \"description\": \"Known for its excellent location and good value for money.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"plan\": [\n        {\n          \"placeName\": \"Acropolis\",\n          \"placeDetails\": \"Explore the Parthenon, Erechtheion, and other ancient structures. Allow ample time to wander and appreciate the history.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Acropolis_of_Athens.jpg/1280px-Acropolis_of_Athens.jpg\",\n          \"geoCoordinates\": { \"latitude\": 37.9715, \"longitude\": 23.7260 },\n          \"ticketPricing\": \"€20 (Adult)\",\n          \"rating\": 4.9,\n          \"travelTime\": \"1-2 hours\"\n        },\n        {\n          \"placeName\": \"Acropolis Museum\",\n          \"placeDetails\": \"Discover artifacts unearthed from the Acropolis, providing context to the monuments you've just seen.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Acropolis_Museum_exterior.jpg/1280px-Acropolis_Museum_exterior.jpg\",\n          \"geoCoordinates\": { \"latitude\": 37.9703, \"longitude\": 23.7265 },\n          \"ticketPricing\": \"€5 (Adult)\",\n          \"rating\": 4.7,\n          \"travelTime\": \"2-3 hours\"\n        },\n        {\n          \"placeName\": \"Plaka District\",\n          \"placeDetails\": \"Enjoy dinner in the charming Plaka neighborhood, known for its narrow streets, tavernas, and shops.\",\n          \"placeImageURL\": \"https://example.com/plaka_district.jpg\", // Replace with actual image URL\n          \"geoCoordinates\": { \"latitude\": 37.9725, \"longitude\": 23.7276 },\n          \"ticketPricing\": \"N/A\",\n          \"rating\": 4.6,\n          \"travelTime\": \"Flexible\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"plan\": [\n        {\n          \"placeName\": \"Ancient Agora\",\n          \"placeDetails\": \"Walk through the heart of ancient Athenian life, seeing the Temple of Hephaestus and other ruins.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ancient_Agora_of_Athens.jpg/1280px-Ancient_Agora_of_Athens.jpg\",\n          \"geoCoordinates\": { \"latitude\": 37.9702, \"longitude\": 23.7212 },\n          \"ticketPricing\": \"€8 (Adult)\",\n          \"rating\": 4.5,\n          \"travelTime\": \"1-2 hours\"\n        },\n        {\n          \"placeName\": \"Roman Agora\",\n          \"placeDetails\": \"Explore the remains of the Roman-era marketplace and admire the Tower of the Winds.\",\n          \"placeImageURL\": \"https://example.com/roman_agora.jpg\", // Replace with actual image URL\n          \"geoCoordinates\": { \"latitude\": 37.9705, \"longitude\": 23.7239 },\n          \"ticketPricing\": \"Included in combined ticket with Ancient Agora\",\n          \"rating\": 4.4,\n          \"travelTime\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"Monastiraki Flea Market\",\n          \"placeDetails\": \"Browse through the vibrant Monastiraki flea market for souvenirs, antiques, and local crafts.\",\n          \"placeImageURL\": \"https://example.com/monastiraki_market.jpg\", // Replace with actual image URL\n          \"geoCoordinates\": { \"latitude\": 37.9710, \"longitude\": 23.7248 },\n          \"ticketPricing\": \"N/A\",\n          \"rating\": 4.3,\n          \"travelTime\": \"Flexible\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"plan\": [\n        {\n          \"placeName\": \"National Archaeological Museum\",\n          \"placeDetails\": \"Immerse yourself in Greek history and art with this vast collection of artifacts from various periods.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/National_Archaeological_Museum_of_Athens.jpg/1280px-National_Archaeological_Museum_of_Athens.jpg\",\n          \"geoCoordinates\": { \"latitude\": 37.9855, \"longitude\": 23.7371 },\n          \"ticketPricing\": \"€10 (Adult)\",\n          \"rating\": 4.6,\n          \"travelTime\": \"2-3 hours\"\n        },\n        {\n          \"placeName\": \"Panathenaic Stadium\",\n          \"placeDetails\": \"Visit the historic stadium where the first modern Olympic Games were held.\",\n          \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Panathenaic_Stadium_Athens.jpg/1280px-Panathenaic_Stadium_Athens.jpg\",\n          \"geoCoordinates\": { \"latitude\": 37.9708, \"longitude\": 23.7467 },\n          \"ticketPricing\": \"€5 (Adult)\",\n          \"rating\": 4.2,\n          \"travelTime\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"Lycabettus Hill\",\n          \"placeDetails\": \"Enjoy panoramic views of Athens from the top of Lycabettus Hill (consider a funicular ride up).\",\n          \"placeImageURL\": \"https://example.com/lycabettus_hill.jpg\", // Replace with actual image URL\n          \"geoCoordinates\": { \"latitude\": 37.9950, \"longitude\": 23.7581 },\n          \"ticketPricing\": \"Funicular: €7 (Adult), Walking: Free\",\n          \"rating\": 4.8,\n          \"travelTime\": \"Flexible\"\n        }\n      ]\n    }\n  },\n  \"bestTimeToVisit\": \"Spring (April-May) and Autumn (September-October) offer pleasant weather and fewer crowds.\"\n}\n```\n\n**Remember to replace the placeholder image URLs with actual URLs.**  Also,  prices and opening times can change, so it is crucial to verify this information on official websites before your trip.  Travel times are estimates and will depend on your mode of transport and traffic conditions.  Consider using a map app for precise directions and travel times.\n"},
        ],
      },
    ],
  });





// const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

//   export const chatSession = model.startChat({
//     generationConfig,
//     history: [
//       {
//         role: "user",
//         parts: [
//           {text: "Generate Travel Plan for Location :  Las Vegas, for 3 Days for Couple with a Cheap budget ,  Give me a Hotels options list with\nHotelName, Hotel address, Price, hotel image ur, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time  travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {text: "I cannot provide real-time data like hotel prices, images, URLs, and geo-coordinates.  That requires access to live feeds from booking sites and image databases.  However, I can give you a JSON template with placeholders. You can then fill it in using online search engines (like Google Maps, Booking.com, Expedia) to find the specific information.\n\n```json\n{\n  \"tripName\": \"Las Vegas Budget Trip for Couples (3 Days)\",\n  \"budget\": \"Cheap\",\n  \"travelers\": 2,\n  \"hotels\": [\n    {\n      \"hotelName\": \"[ Circus Circus]\",\n      \"hotelAddress\": \"[Hotel Address 1 -  Find on Booking.com]\",\n      \"priceRange\": \"[$100 - $150 /night -  Check Booking.com]\",\n      \"hotelImageURL\": \"[Image URL 1 - Search Google Images for hotel name]\",\n      \"geoCoordinates\": \"[Latitude, Longitude -  Find on Google Maps]\",\n      \"rating\": \"[Rating -  Find on Booking.com or TripAdvisor]\",\n      \"description\": \"[Hotel Description -  Find on Booking.com]\"\n    },\n    {\n      \"hotelName\": \"[Hotel Name 2 - e.g., Motel 6]\",\n      \"hotelAddress\": \"[Hotel Address 2]\",\n      \"priceRange\": \"[$ - $ /night]\",\n      \"hotelImageURL\": \"[Image URL 2]\",\n      \"geoCoordinates\": \"[Latitude, Longitude]\",\n      \"rating\": \"[Rating]\",\n      \"description\": \"[Hotel Description]\"\n    },\n    {\n      \"hotelName\": \"[Hotel Name 3 -  e.g., Budget-friendly option off-Strip]\",\n      \"hotelAddress\": \"[Hotel Address 3]\",\n      \"priceRange\": \"[$200 - $250 /night]\",\n      \"hotelImageURL\": \"[Image URL 3]\",\n      \"geoCoordinates\": \"[Latitude, Longitude]\",\n      \"rating\": \"[Rating]\",\n      \"description\": \"[Hotel Description]\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": [\n      {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"Free walking area with light shows and street performers.\",\n        \"placeImageURL\": \"[Image URL - Search Google Images]\",\n        \"geoCoordinates\": \"[Latitude, Longitude - Find on Google Maps]\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": \"[Rating - Find on TripAdvisor]\",\n        \"time\": \"Evening (7 PM - 10 PM)\"\n      },\n      {\n        \"placeName\": \"Downtown Container Park\",\n        \"placeDetails\": \"Unique shopping and dining area with a playground.\",\n        \"placeImageURL\": \"[Image URL]\",\n        \"geoCoordinates\": \"[Latitude, Longitude]\",\n        \"ticketPricing\": \"Free entry; prices vary for food/shopping\",\n        \"rating\": \"[Rating]\",\n        \"time\": \"Afternoon (2 PM - 5 PM)\"\n      }\n    ],\n    \"day2\": [\n      {\n        \"placeName\": \"The Strip (walking tour)\",\n        \"placeDetails\": \"Explore the iconic hotels and casinos on foot. Window shopping and people-watching.\",\n        \"placeImageURL\": \"[Image URL]\",\n        \"geoCoordinates\": \"[Latitude, Longitude]\",\n        \"ticketPricing\": \"Free (unless entering casinos)\",\n        \"rating\": \"[Rating]\",\n        \"time\": \"Morning & Afternoon (10 AM - 5 PM)\"\n      },\n      {\n        \"placeName\": \"Free Fountain Show at Bellagio\",\n        \"placeDetails\": \"Spectacular water, music, and light show.\",\n        \"placeImageURL\": \"[Image URL]\",\n        \"geoCoordinates\": \"[Latitude, Longitude]\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": \"[Rating]\",\n        \"time\": \"Evening (7 PM - 8 PM)\"\n      }\n    ],\n    \"day3\": [\n      {\n        \"placeName\": \"Red Rock Canyon National Conservation Area (Consider Transportation Costs)\",\n        \"placeDetails\": \"Scenic hiking and rock formations (requires transportation)\",\n        \"placeImageURL\": \"[Image URL]\",\n        \"geoCoordinates\": \"[Latitude, Longitude]\",\n        \"ticketPricing\": \"Entrance fee + transportation costs\",\n        \"rating\": \"[Rating]\",\n        \"time\": \"Full Day (Pack snacks and water)\"\n      },\n      {\n        \"placeName\": \"Alternative: Pool Day at Hotel\",\n        \"placeDetails\": \"Many budget hotels offer a pool – a great way to relax.\",\n        \"placeImageURL\": \"[Image URL]\",\n        \"geoCoordinates\": \"[Latitude, Longitude]\",\n        \"ticketPricing\": \"Free (usually included with hotel stay)\",\n        \"rating\": \"[Rating]\",\n        \"time\": \"Afternoon\"\n\n      }\n    ]\n  }\n}\n```\n\nRemember to replace the bracketed placeholders with actual data obtained from online resources.  Prioritize free activities to stick to your budget.  Consider transportation costs when planning day trips outside the immediate Strip area.\n"},
//         ],
//       },
//     ],
//   });