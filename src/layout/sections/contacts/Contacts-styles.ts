import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const SectionContacts = styled.section`

  .contacts-wrapper {
    position: relative;
    @media screen and  (max-width: 660px){
      flex-wrap: wrap;
    }

    .points {
      top: 55%;
      left: -20.8%;
      z-index: -1;

    }
  }

`

const ContactsText = styled.div`
  color: ${Theme.colors.secondary};
  font-weight: 500;
`

const ContactsMessages = styled.div`
  //flex: 0 1 calc(50% - 8px);

`

const ContactsList = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Contact = styled.div`
  padding: 16px;
  border: 1px solid ${Theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-weight: 600;
  }

  a {
    display: flex;
    align-items: center;
    gap: 16px;

  }


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
    SectionContacts,
    ContactsText,
    ContactsMessages,
    ContactsList,
    Contact
}