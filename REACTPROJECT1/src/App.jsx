// Not using the .map when the data is available

// import { Entry } from "../component/Entry";
// import { Header } from "../component/Header";

// export function App(){
//   return(
//     <>
//       <Header></Header>
//       <Entry
//         img={{
//           src:"../public/fuji.jpg",
//           alt:"Mount Fuji"
//         }}
//         country="JAPAN"
//         title="Mount fuji"
//         googlemaplink="https://www.bing.com/maps/directions?rtp=%7Epos.35.36055374145508_138.7274932861328__Mt.Fuji%252C%2520Shizuoka%252C%2520Japan_&cp=35.360554%7E138.727493&lvl=16&style=r"
//         dates="12 Jan,2021 - 24 Jan,2021"
//         text="Mount Fuji is Japan's tallest mountain at 3,776 meters. It is an active volcano and one of the country's most iconic landmarks, attracting millions of visitors each year for hiking, sightseeing, and photography."
//       />
//       <Entry
//         img={{
//           src:"../public/fuji.jpg",
//           alt:"Mount Fuji"
//         }}
//         country="JAPAN"
//         title="Mount fuji"
//         googlemaplink="https://www.bing.com/maps/directions?rtp=%7Epos.35.36055374145508_138.7274932861328__Mt.Fuji%252C%2520Shizuoka%252C%2520Japan_&cp=35.360554%7E138.727493&lvl=16&style=r"
//         dates="12 Jan,2021 - 24 Jan,2021"
//         text="Mount Fuji is Japan's tallest mountain at 3,776 meters. It is an active volcano and one of the country's most iconic landmarks, attracting millions of visitors each year for hiking, sightseeing, and photography."
//       />
//     </>
//   )
// }




// Using the .map when the data is not readily available
// and will be passed after

import { Entry } from "../component/Entry";
import { Header } from "../component/Header";
import data from "../component/data.js"

export function App(){
  const entryElement = data.map((entry)=>{
    return (
      <Entry 
          // img={{
          //   src: entry.img.src,
          //   alt: entry.img.alt
          // }}

          key={entry.id}

          // img= {entry.img}
          // country={entry.country}
          // title={entry.title}
          // googleMapsLink={entry.googleMapsLink}
          // dates={entry.dates}
          // text={entry.text}

          // when the amount of properties are very much passing
          // each one of them is a hard so we use a single props
          // entry={entry}

          // Another way
          {...entry}
      />
    )
  })
  return(
    <>
      <Header></Header>
      {entryElement}
    </>
  )
}