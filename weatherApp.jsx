// // // import SearchBox from "./searchbox";
// // // import InfoBox from "./infobox";
// // // import React, { useState } from "react";
// // // import "./weatherApp.css"
 


// // // export default function WeatherApp(){
// // //     const[weatherInfo, setWeatherInfo] = useState({
        
// // //         city: "Delhi",
// // //         feelslike: 28.24,
// // //         temp: 27,
// // //         tempMin: 25.45,
// // //         tempMax : 35.45,
// // //         humidity: 56,
// // //         weather: "haze"

// // //     });

// // //     let updateInfo = (newInfo) => {
// // //           setWeatherInfo(newInfo);
// // //     }






// // //        return(
// // //         <div style={{textAlign: "center"}}> 
// // //             Weather App by Sam
// // //             <SearchBox updateInfo={ updateInfo}/>
// // //             <InfoBox info = {weatherInfo }/>
// // //              </div>
// // //        )
// // // }

// // // import React, { useState } from "react";
// // // import SearchBox from "./searchbox";
// // // import InfoBox from "./InfoBox";
// // // import "./infobox.css"; // Styles for InfoBox
// // // import "./searchbox.css"; // Styles for SearchBox

// // // export default function WeatherApp() {
// // //   const [weatherInfo, setWeatherInfo] = useState(null);

// // //   const updateInfo = (info) => {
// // //     setWeatherInfo(info);
// // //   };

// // //   return (
// // //     <div className="weatherAppContainer">
// // //       <div className="weatherContent">
// // //         <div className="searchSection">
// // //           <SearchBox updateInfo={updateInfo} />
// // //         </div>
// // //         <div className="infoSection">
// // //           {weatherInfo ? (
// // //             <InfoBox info={weatherInfo} />
// // //           ) : (
// // //             <p className="placeholderText">Search for a city to view its weather.</p>
// // //           )}
// // //         </div>
// // //       </div>
      
// // //     </div>
// // //   );
// // // }

// // import React, { useState } from "react";
// // import SearchBox from "./searchbox";
// // import InfoBox from "./InfoBox";
// // import "./weatherApp.css"; // Main styles for the app
// // import "./infobox.css"; // Styles for InfoBox
// // import "./searchbox.css"; // Styles for SearchBox

// // export default function WeatherApp() {
// //   const [weatherInfo, setWeatherInfo] = useState(null);

// //   const updateInfo = (info) => {
// //     setWeatherInfo(info);
// //   };

// //   return (
// //     <div className="weatherAppContainer">
// //       <div className="weatherContent">
// //         <div className="searchSection">
// //           <SearchBox updateInfo={updateInfo} />
// //         </div>
// //         <div className="infoSection">
// //           {weatherInfo ? (
// //             <InfoBox info={weatherInfo} />
// //           ) : (
// //             <p className="placeholderText">Search for a city to view its weather.</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import SearchBox from "./searchbox";
// import InfoBox from "./InfoBox";
// import "./weatherApp.css"; // Main styles for the app
// import "./infobox.css"; // Styles for InfoBox
// import "./searchbox.css"; // Styles for SearchBox

// export default function WeatherApp() {
//   const [weatherInfo, setWeatherInfo] = useState(null);

//   const updateInfo = (info) => {
//     setWeatherInfo(info);
//   };

//   // Dynamic background based on weather condition
//   const getBackgroundImage = () => {
//     if (!weatherInfo) return "linear-gradient(135deg, #1c1c1c, #333)"; // Default gradient
//     if (weatherInfo.humidity > 80) return "url('https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
//     if (weatherInfo.temp > 15) return "url('https://images.unsplash.com/photo-1499479387933-4567e710809c?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
//     return "url('https://images.unsplash.com/photo-1518467946652-b194dd6dd321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D')";
//   };

//   return (
//     <div
//       className="weatherAppContainer"
//       style={{
//         backgroundImage: getBackgroundImage(),
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="weatherContent">
//         <div className="searchSection">
//           <SearchBox updateInfo={updateInfo} />
//         </div>
//         <div className="infoSection">
//           {weatherInfo ? (
//             <InfoBox info={weatherInfo} />
//           ) : (
//             <p className="placeholderText">Search for a city to view its weather.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import SearchBox from "./searchbox";
import InfoBox from "./InfoBox";
import "./weatherApp.css"; // Main styles for the app
import "./infobox.css"; // Styles for InfoBox
import "./searchbox.css"; // Styles for SearchBox

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (info) => {
    setWeatherInfo(info);
  };

  // Dynamic background based on weather condition
  const getBackgroundImage = () => {
    if (!weatherInfo) return "linear-gradient(135deg, #1c1c1c, #333)"; // Default gradient
    if (weatherInfo.humidity > 80) return "url('https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    if (weatherInfo.temp > 15) return "url('https://images.unsplash.com/photo-1499479387933-4567e710809c?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    return "url('https://images.unsplash.com/photo-1518467946652-b194dd6dd321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D')";
  };

  return (
    <div
      className="weatherAppContainer"
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="weatherContent">
        <div className="searchSection">
          <SearchBox updateInfo={updateInfo} />
        </div>
        <div className="infoSection">
          {weatherInfo ? (
            <InfoBox info={weatherInfo} />
          ) : (
            <p className="placeholderText">Search for a city to view its weather.</p>
          )}
        </div>
      </div>
    </div>
  );
}