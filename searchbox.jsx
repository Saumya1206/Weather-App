
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./searchbox.css";
// import { useState } from 'react';


// export default function SearchBox(){
//     let [city, setCity]  = useState("");
//    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//    const API_KEY = "3cf80475406eb96eb1b93b1f878596c4";

//    let getWeatherInfo = async () => {
//       let response = await fetch(`${API_URL}?q={city},&appid=${API_KEY}`)
//       let jsonResponse = await response.json();
//       console.log(jsonResponse);
//    }



   

//     let handleChange  = (evt) => {
//         setCity(evt.target.value);
//     }
    
//     let handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(city);
//         setCity("");
//         getWeatherInfo();
//     }



//     return(
//     <div className='SearchBox'>
//         <h3> Search for the Weather </h3>
//         <form onSubmit={handleSubmit}>
//         <TextField id="City" label="City Name" variant="outlined"  required value={city} onChange={handleChange}/>
//         <br/> <br/>
        
//         <Button variant="contained" type='submit' >
//         Search
//       </Button>
//         </form>
//     </div>
//     )
// }


// 



// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import './searchbox.css';
// import { useState } from 'react';

// export default function SearchBox({ updateInfo }) {
//   let [city, setCity] = useState('');
//   let [error, setError] = useState(false);
//   const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
//   const API_KEY = '3cf80475406eb96eb1b93b1f878596c4';

//   // // This function fetches weather information
//   // let getWeatherInfo = async () => {
//   //   try{
//   //   let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//   //   let jsonResponse = await response.json();
//   //   console.log(jsonResponse);
//   //   let result = {
//   //     city: city,
//   //     temp: jsonResponse.main.temp,
//   //     tempMin: jsonResponse.main.temp_min,
//   //     tempMax: jsonResponse.main.temp_max,
//   //     humidity: jsonResponse.main.humidity, // Fix typo from `himidity`
//   //     feelsLike: jsonResponse.main.feels_like,
//   //     weather: jsonResponse.weather[0].description,
//   //   };
//   //   console.log(result);
//   //   return result;
//   //    }
//   // };
//   let getWeatherInfo = async () => {
//     try {
//       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       let jsonResponse = await response.json();
//       console.log(jsonResponse);
//       let result = {
//         city: city,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity, // Fix typo
//         feelsLike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//       };
//       console.log(result);
//       return result;
//     } catch (error) {
//       console.error("Error fetching weather information:", error);
//      throw error;
//     }
//   };
  

//   // Handle the input change
//   let handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   // Handle form submission
//   let handleSubmit = async (evt) => {
//     try{
//       evt.preventDefault();
//     console.log(city);
//     setCity(''); // Clear the input field
//     let newInfo = await getWeatherInfo(); // Fetch weather information
//     updateInfo(newInfo); // Pass the result to the parent component
//     }catch(error){
//       setError(true);
//     }
//   };

//   return (
//     <div className="SearchBox">
//       {/* <h3>Search for the Weather</h3> */}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="City"
//           label="City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//         {error && <p style={{color: "red"}}>No such place exists</p>}
//       </form>
//     </div>
//   );
// }


// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useState } from "react";
// import "./searchbox.css";

// export default function SearchBox({ updateInfo }) {
//   const [city, setCity] = useState("");
//   const [error, setError] = useState(false);
//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "3cf80475406eb96eb1b93b1f878596c4";

//   const getWeatherInfo = async () => {
//     try {
//       const response = await fetch(
//         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const jsonResponse = await response.json();
//       if (jsonResponse.cod === 200) {
//         return {
//           city: city,
//           temp: jsonResponse.main.temp,
//           tempMin: jsonResponse.main.temp_min,
//           tempMax: jsonResponse.main.temp_max,
//           humidity: jsonResponse.main.humidity,
//           feelsLike: jsonResponse.main.feels_like,
//           weather: jsonResponse.weather[0].description,
//         };
//       } else {
//         throw new Error(jsonResponse.message);
//       }
//     } catch (error) {
//       console.error("Error fetching weather information:", error);
//       throw error;
//     }
//   };

//   const handleChange = (evt) => {
//     setCity(evt.target.value);
//     setError(false); // Clear error on input change
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       const newInfo = await getWeatherInfo();
//       setCity("");
//       updateInfo(newInfo);
//     } catch (error) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="SearchBox">
//       <form onSubmit={handleSubmit} className="searchForm">
//         <TextField
//           id="City"
//           label="Enter City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//           sx={{ width: "100%", marginBottom: "16px" }}
//         />
//         <Button
//           variant="contained"
//           type="submit"
//           sx={{
//             width: "100%",
//             backgroundColor: "#0077cc",
//             "&:hover": { backgroundColor: "#005fa3" },
//             boxShadow: "0px 4px 15px rgba(0, 119, 204, 0.4)",
//           }}
//         >
//           Search
//         </Button>
//         {error && (
//           <p className="errorMessage">No such place exists. Try again!</p>
//         )}
//       </form>
//     </div>
//   );
// }

// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useState } from "react";
// import "./searchbox.css";

// export default function SearchBox({ updateInfo }) {
//   const [city, setCity] = useState("");
//   const [error, setError] = useState(false);
//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "3cf80475406eb96eb1b93b1f878596c4";

//   const getWeatherInfo = async () => {
//     try {
//       const response = await fetch(
//         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const jsonResponse = await response.json();
//       if (jsonResponse.cod === 200) {
//         return {
//           city: city,
//           temp: jsonResponse.main.temp,
//           tempMin: jsonResponse.main.temp_min,
//           tempMax: jsonResponse.main.temp_max,
//           humidity: jsonResponse.main.humidity,
//           feelsLike: jsonResponse.main.feels_like,
//           weather: jsonResponse.weather[0].description,
//         };
//       } else {
//         throw new Error(jsonResponse.message);
//       }
//     } catch (error) {
//       console.error("Error fetching weather information:", error);
//       throw error;
//     }
//   };

//   const handleChange = (evt) => {
//     setCity(evt.target.value);
//     setError(false); // Clear error on input change
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       const newInfo = await getWeatherInfo();
//       setCity("");
//       updateInfo(newInfo);
//     } catch (error) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="SearchBox">
//       <form onSubmit={handleSubmit} className="searchForm">
//         <TextField
//           id="City"
//           label="Enter City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//           sx={{ width: "100%", marginBottom: "16px" }}
//         />
//         <Button
//           variant="contained"
//           type="submit"
//           sx={{
//             width: "100%",
//             backgroundColor: "#0077cc",
//             "&:hover": { backgroundColor: "#005fa3" },
//             boxShadow: "0px 4px 15px rgba(0, 119, 204, 0.4)",
//           }}
//         >
//           Search
//         </Button>
//         {error && (
//           <p className="errorMessage">No such place exists. Try again!</p>
//         )}
//       </form>
//     </div>
//   );
// }

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./searchbox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3cf80475406eb96eb1b93b1f878596c4";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      if (jsonResponse.cod === 200) {
        return {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
      } else {
        throw new Error(jsonResponse.message);
      }
    } catch (error) {
      console.error("Error fetching weather information:", error);
      throw error;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false); // Clear error on input change
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      setCity("");
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h1 className="appHeading">Weather App</h1>
      <form onSubmit={handleSubmit} className="searchForm">
        <TextField
          id="City"
          label="Enter City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{ width: "100%", marginBottom: "16px" }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: "100%",
            backgroundColor: "#0077cc",
            "&:hover": { backgroundColor: "#005fa3" },
            boxShadow: "0px 4px 15px rgba(0, 119, 204, 0.4)",
          }}
        >
          Search
        </Button>
        {error && (
          <p className="errorMessage">No such place exists. Try again!</p>
        )}
      </form>
    </div>
  );
}