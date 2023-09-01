import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Fsz} from "../../../styles/Common";

const MainWrapper = styled.div`
  padding-top: 62px;
  gap: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  .main-img-box {
    @media ${Theme.media.tabletMin} {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 2;
      flex: 0 1 calc(50% - 8px);

      > img {
        position: relative;
        z-index: 1;
        object-fit: cover;
        max-width: 100%;
      }
    }
  }

  @media ${Theme.media.tablet} {
    flex-direction: column;
    justify-content: center;
    padding-top: 32px;

  }
`
const MainTextBlock = styled.div`
  flex: 0 1 calc(50% - 8px);
`

const MainTitle = styled.h1`
  //font-size: 32px;
  ${Fsz({fMax: 32, fMin: 20})}
  font-weight: 600;
  color: #FFF;

  span {
    color: #C778DD;
  }


  :not(:last-child) {
    margin-bottom: 32px;
  }
`

const MainDesc = styled.p`
  line-height: 156%;
  color: #ABB2BF;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`

const MainImgBox = styled.div`
  display: none;

`

const ImgLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: #ABB2BF;
  border: 1px solid #ABB2BF;
  padding: 8px;
  gap: 10px;

  ${Fsz({fMax: 16, fMin: 14})}
  &:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    background: #C778DD;
  }

  span {
    color: #fff;
  }
`

const DecorMainImgBox = styled.div`
  position: absolute;
  top: 29%;
  left: 5%;
  z-index: 1;
`

export  const S={
    MainWrapper,
    MainTextBlock,
    MainTitle,
    MainDesc,
    MainImgBox,
    ImgLink,
    DecorMainImgBox,
}
