import styled from "styled-components";

export const CardsStyled = styled.div`
  box-sizing: border-box;
  .champions {
    list-style: none;
    padding: 0.8rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    gap: 1.6rem;
    margin: 0 8.33%;

    .champions_card {
      .champions_card__img {
        filter: brightness(90%);
        height: 9rem;
        position: relative;
        text-align: center;
        p {
          margin: 0;
        }

        .trait {
          position: absolute;
          bottom: 10px;
          left: 10px;
        }
        .origin {
          position: absolute;
          bottom: 35px;
          left: 10px;
        }

        img {
          height: 9rem;
          width: 100%;
          object-fit: cover;
        }
      }
      .champions_card__name {
        display: flex;
        justify-content: space-around;
        background-color: hsl(209, 85%, 15%);
        border-bottom-left-radius: 7%;
        border-bottom-right-radius: 7%;

        p {
          font-size: 1.2rem;
          margin: 0;
          padding: 10px 4px;
        }
      }
    }
  }
`;
