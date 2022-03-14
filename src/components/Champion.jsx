import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { detailURL } from "../utils/api";
import { URL } from "../utils/api";
import { ChampionStyled } from "./Champion.styled";

const Champion = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://workflow-strapiheroku.herokuapp.com/api/champions/${id}?populate=*`
      )
      .then((response) => {
        setData(response.data.data.attributes);
        // console.log(data);
      });
  }, []);

  return (
    <ChampionStyled>
      <div>
        {data ? (
          <>
            <div className="champion_img">
              <img src={data.url} />
            </div>
            <h2>{data.name}</h2>
            <div className="traits">
              <p>{data.origin}</p>
              <p>{data.trait}</p>
            </div>
            <p>Cost: {data.cost}</p>

            <p>Set: {data.set}</p>
          </>
        ) : (
          "Loading.."
        )}
      </div>
    </ChampionStyled>
  );
};

export default Champion;

// const Champion = () => {
//   const { id } = useParams();

//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const { data } = await axios.get(
//       `https://workflow-strapiheroku.herokuapp.com/api/champions/${id}?populate=*`
//     );
//     setData(data);
//     console.log(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       {data.data.length > 0
//         ? data.map((champion, idx) => {
//             return (
//               <div className="champions_details" key={idx}>
//                 <h2>{data.attributes.name}</h2>
//               </div>
//             );
//           })
//         : null}
//     </>
//   );
// };
// export default Champion;
