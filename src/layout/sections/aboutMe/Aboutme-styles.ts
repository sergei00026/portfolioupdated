import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Fsz} from "../../../styles/Common";

const AboutMeBody = styled.div`
  display: grid;
  align-items: center;
  @media ${Theme.media.tabletMin} {
    grid-template-columns: 6fr 6fr;
  }
`

const AboutMeText = styled.div`
  line-height: 160%;
  color: #ABB2BF;

  ${Fsz({fMax: 16, fMin: 12})}
  p {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }

  :not(:last-child) {
    margin-bottom: 27px;
  }
`

const AboutMeImg = styled.div`
  display: none;

  @media ${Theme.media.tabletMin} {
    display: block;
    img {
      max-width: 100%;
    }

    > div {
      margin: 0 auto;
    }
  }

`

export const S = {
    AboutMeBody,
    AboutMeText,
    AboutMeImg
}
