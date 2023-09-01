import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Container} from "../../components/container/Container";

const FooterStyled = styled.footer`
  border-top: 1px solid ${Theme.colors.secondary};
  margin-top: 145px;

  ${Container} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding-bottom: 48px;
  flex-wrap: wrap;
  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`

const FooterCopy = styled.div`
  text-align: center;
  color: ${Theme.colors.secondary};
`

const FooterDescBox = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 500px) {
    align-items: center;
    p{
      text-align: center;
    }
  }
`

const FooterDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  color: ${Theme.colors.secondary};
  
`
const FooterMediaBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    align-items: center;
  }
`

const FooterMedia = styled.div`

  font-size: 24px;
  font-weight: 500;
  margin-bottom: 12px;

`
const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    fill: ${Theme.colors.secondary};
    transition: 0.3s;
    flex: 0 0 32px;
    justify-self: center;

    &:hover {
      fill: ${Theme.colors.primary};
    }

  }
`

export const S = {
    FooterStyled,
    FooterBox,
    FooterCopy,
    FooterDescBox,
    FooterDesc,
    FooterMediaBox,
    FooterMedia,
    FooterSocials
}