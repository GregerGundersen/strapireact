import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../utils/api";
import { CardsStyled } from "./Cards.styled";
import gold from "../media/gold.svg";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <CardsStyled>
      <ul className="champions">
        {data.length > 0 ? console.log(data) : null}
        {data.length > 0
          ? data.map((champion, idx) => {
              return (
                <li className="champions_card" key={idx}>
                  <div className="champions_card__img">
                    <img src={champion.attributes.url}></img>
                    <p className="trait">{champion.attributes.trait}</p>
                    <p className="origin">{champion.attributes.origin}</p>
                  </div>
                  <div className="champions_card__name">
                    <p>{champion.attributes.name}</p>
                    <div className="cost">
                      <img src={gold} />
                      <p>{champion.attributes.cost}</p>
                    </div>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </CardsStyled>
  );
}

export default Cards;
