import styled from "styled-components";

export const ChampionStyled = styled.div`
  max-width: 60vw;
  margin: auto;

  h2 {
    margin: 12px 0 0 0;
  }

  .traits {
    display: flex;

    p {
      margin-right: 8px;
    }
  }

  .champion_img {
    width: 100%;
    height: 60vh;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
