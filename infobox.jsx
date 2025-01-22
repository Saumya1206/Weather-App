// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import "./infobox.css";
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';



// export default function InfoBox({info}){
//     const INT_URL =
//      "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
//     // let info = {
//     //     city: "Delhi",
//     //     feelslike: 28.24,
//     //     temp: 27,
//     //     tempMin: 25.45,
//     //     tempMax : 35.45,
//     //     humidity: 56,
//     //     weather: "haze"

//     // }

//   const HOT_URL = "https://images.unsplash.com/photo-1499479387933-4567e710809c?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   const COLD_URL = "https://images.unsplash.com/photo-1518467946652-b194dd6dd321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
//   const RAIN_URL = "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";







//     return (
//         <div className="InfoBox">
//     {/* <h1> WeatherInfo = { info.weather} </h1> */}
//     <div className='cardContainer'>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={info.humidity > 80? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {info.city} 
//           {info.humidity > 80? ThunderstormIcon  : info.temp > 15 ? WbSunnyIcon : AcUnitIcon }
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
//           <p> Temperature = {info.temp}&deg;C </p>
//           <p> Humidity = {info.humidity} </p>
//           <p> Minimum Temperature = {info.tempMin}&deg;C </p>
//           <p> Maximum Temperature = {info.tempMax}&deg;C </p>
//           <p> The Weather is <i>{info.weather} </i>Feels Like = {info.feelslike}&deg;C </p>
//         </Typography>
//       </CardContent>
//       {/* <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions> */}
//     </Card>
//     </div>
//         </div>
//     )
// }


// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import "./infobox.css";
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";

// export default function InfoBox({ info }) {
//   const INT_URL =
//     "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
//   const HOT_URL =
//     "https://images.unsplash.com/photo-1499479387933-4567e710809c?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   const COLD_URL =
//     "https://images.unsplash.com/photo-1518467946652-b194dd6dd321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
//   const RAIN_URL =
//     "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   return (
//     <div className="InfoBox">
//       <div className="cardContainer">
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             sx={{ height: 140 }}
//             image={
//               info.humidity > 80
//                 ? RAIN_URL
//                 : info.temp > 15
//                 ? HOT_URL
//                 : COLD_URL
//             }
//             title="Weather Image"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {info.city}{" "}
//               <span>
//                 {info.humidity > 80 ? (
//                   <ThunderstormIcon />
//                 ) : info.temp > 15 ? (
//                   <WbSunnyIcon />
//                 ) : (
//                   <AcUnitIcon />
//                 )}
//               </span>
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ color: "text.secondary" }}
//               component={"span"}
//             >
//               <p>Temperature = {info.temp}&deg;C</p>
//               <p>Humidity = {info.humidity}</p>
//               <p>Minimum Temperature = {info.tempMin}&deg;C</p>
//               <p>Maximum Temperature = {info.tempMax}&deg;C</p>
//               <p>
//                 The Weather is <i>{info.weather}</i>, Feels Like ={" "}
//                 {info.feelslike}&deg;C
//               </p>
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import "./infobox.css";

// export default function InfoBox({ info }) {
//   const INT_URL =
//     "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
//   const HOT_URL =
//     "https://images.unsplash.com/photo-1499479387933-4567e710809c?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   const COLD_URL =
//     "https://images.unsplash.com/photo-1518467946652-b194dd6dd321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
//   const RAIN_URL =
//     "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   return (
//     <div className="InfoBox">
//       <div className="cardContainer">
//         <Card
//           sx={{
//             maxWidth: 400,
//             borderRadius: 5,
//             boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
//             animation: "fadeIn 1s ease-in-out",
//           }}
//         >
//           <CardMedia
//             sx={{ height: 180 }}
//             image={
//               info.humidity > 80
//                 ? RAIN_URL
//                 : info.temp > 15
//                 ? HOT_URL
//                 : COLD_URL
//             }
//             title="Weather Image"
//           />
//           <CardContent sx={{ backgroundColor: "#1e293b", color: "#f1f5f9" }}>
//             <Typography
//               gutterBottom
//               variant="h4"
//               component="div"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               {info.city}
//               <span>
//                 {info.humidity > 80 ? (
//                   <ThunderstormIcon sx={{ color: "#00c8ff" }} />
//                 ) : info.temp > 15 ? (
//                   <WbSunnyIcon sx={{ color: "#ffdd00" }} />
//                 ) : (
//                   <AcUnitIcon sx={{ color: "#00bfff" }} />
//                 )}
//               </span>
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontSize: "1.1rem",
//                 lineHeight: 1.6,
//                 color: "rgba(255, 255, 255, 0.8)",
//               }}
//             >
//               <p>Temperature: {info.temp}&deg;C</p>
//               <p>Feels Like: {info.feelslike}&deg;C</p>
//               <p>Minimum Temperature: {info.tempMin}&deg;C</p>
//               <p>Maximum Temperature: {info.tempMax}&deg;C</p>
//               <p>
//                 The Weather is <i>{info.weather}</i>
//               </p>
//               <p>Humidity: {info.humidity}%</p>
//             </Typography>
//             <Button
//               startIcon={<RefreshIcon />}
//               sx={{
//                 marginTop: 2,
//                 color: "#fff",
//                 backgroundColor: "#0077cc",
//                 "&:hover": { backgroundColor: "#005fa3" },
//               }}
//               onClick={() => window.location.reload()}
//             >
//               Refresh
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import "./infobox.css";

// export default function InfoBox({ info }) {
//   const INT_URL =
//     "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
//   const HOT_URL =
//     "https://images.unsplash.com/photo-1499479387933-4567e710809c?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   const COLD_URL =
//     "https://images.unsplash.com/photo-1518467946652-b194dd6dd321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
//   const RAIN_URL =
//     "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   return (
//     <div className="InfoBox">
//       <Card
//         sx={{
//           maxWidth: 400,
//           borderRadius: 5,
//           boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
//           animation: "fadeIn 1s ease-in-out",
//           backgroundColor: "#1e293b",
//           color: "#f1f5f9",
//         }}
//       >
//         <CardMedia
//           sx={{ height: 180 }}
//           image={
//             info.humidity > 80
//               ? RAIN_URL
//               : info.temp > 15
//               ? HOT_URL
//               : COLD_URL
//           }
//           title="Weather Image"
//         />
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h4"
//             component="div"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             {info.city}
//             <span>
//               {info.humidity > 80 ? (
//                 <ThunderstormIcon sx={{ color: "#00c8ff" }} />
//               ) : info.temp > 15 ? (
//                 <WbSunnyIcon sx={{ color: "#ffdd00" }} />
//               ) : (
//                 <AcUnitIcon sx={{ color: "#00bfff" }} />
//               )}
//             </span>
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               fontSize: "1.1rem",
//               lineHeight: 1.6,
//               color: "rgba(255, 255, 255, 0.8)",
//             }}
//           >
//             <p>Temperature: {info.temp}&deg;C</p>
//             <p>Feels Like: {info.feelslike}&deg;C</p>
//             <p>Minimum Temperature: {info.tempMin}&deg;C</p>
//             <p>Maximum Temperature: {info.tempMax}&deg;C</p>
//             <p>
//               The Weather is <i>{info.weather}</i>
//             </p>
//             <p>Humidity: {info.humidity}%</p>
//           </Typography>
//           <Button
//             startIcon={<RefreshIcon />}
//             sx={{
//               marginTop: 2,
//               color: "#fff",
//               backgroundColor: "#0077cc",
//               "&:hover": { backgroundColor: "#005fa3" },
//             }}
//             onClick={() => window.location.reload()}
//           >
//             Refresh
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./infobox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1499479387933-4567e710809c?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1518467946652-b194dd6dd321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 5,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
          animation: "fadeIn 1s ease-in-out",
          backgroundColor: "#1e293b",
          color: "#f1f5f9",
        }}
      >
        <CardMedia
          sx={{ height: 180 }}
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
              ? HOT_URL
              : COLD_URL
          }
          title="Weather Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {info.city}
            <span>
              {info.humidity > 80 ? (
                <ThunderstormIcon sx={{ color: "#00c8ff", fontSize: "2rem" }} />
              ) : info.temp > 15 ? (
                <WbSunnyIcon sx={{ color: "#ffdd00", fontSize: "2rem" }} />
              ) : (
                <AcUnitIcon sx={{ color: "#00bfff", fontSize: "2rem" }} />
              )}
            </span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <p><strong>Temperature:</strong> {info.temp}&deg;C</p>
            <p><strong>Feels Like:</strong> {info.feelslike}&deg;C</p>
            <p><strong>Min Temp:</strong> {info.tempMin}&deg;C</p>
            <p><strong>Max Temp:</strong> {info.tempMax}&deg;C</p>
            <p><strong>Weather:</strong> {info.weather}</p>
            <p><strong>Humidity:</strong> {info.humidity}%</p>
          </Typography>
          <Button
            startIcon={<RefreshIcon />}
            sx={{
              marginTop: 2,
              color: "#fff",
              backgroundColor: "#0077cc",
              "&:hover": { backgroundColor: "#005fa3" },
            }}
            onClick={() => window.location.reload()}
          >
            Refresh
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}