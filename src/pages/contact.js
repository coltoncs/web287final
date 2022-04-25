import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
`;
const Control = styled.div`
  position: relative;
  width: 100%;
  margin: 10px auto;
`;
const ControlInput = styled.input`
  height: 35px;
  width: 100%;
  border: 3px solid black;
  border-radius: 5px;
  margin: 5px auto;
  padding: 0 5px;
  background-color: #fdd898;

  &:focus ~ label,
  &:not(:placeholder-shown)&:not(:focus) ~ label {
    top: -0.2rem;
    left: 0.2rem;
    font-size: 0.85rem;
  }
`;
const ControlText = styled.textarea`
  height: 150px;
  width: 100%;
  border: 3px solid black;
  border-radius: 5px;
  margin: 5px auto;
  padding: 10px 5px 10px;
  background-color: #fdd898;

  &:focus ~ label,
  &:not(:placeholder-shown)&:not(:focus) ~ label {
    top: -0.2rem;
    left: 0.2rem;
    font-size: 0.85rem;
  }
`;
const ControlLabel = styled.label`
  font-weight: 600;
  text-align: right;
  text-transform: uppercase;
  cursor: text;
  padding: 0 5px 0;
  position: absolute;
  left: 5px;
  top: 11px;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: #fdd898;
`;
const Submit = styled.input`
  border: 2px solid black;
  border-radius: 15px;
  padding: 15px;
  font-weight: 600;
  background-color: #fdd898;
  cursor: pointer;
`;
const ContactDetails = styled.div`
  text-align: center;
  font-weight: 600;
`;

const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
      <ContactForm id="contact_form">
        <Control>
          <ControlInput
            type="text"
            name="user_name"
            id="name"
            autoComplete="off"
            placeholder=" "
          />
          <ControlLabel htmlFor="name">
            Name
          </ControlLabel>
        </Control>
        <Control>
          <ControlInput
            type="email"
            name="user_email"
            id="email"
            autoComplete="off"
            placeholder=" "
          />
          <ControlLabel htmlFor="email">
            Email
          </ControlLabel>
        </Control>
        <Control>
          <ControlText
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder=" "
          ></ControlText>
          <ControlLabel htmlFor="message">
            Message
          </ControlLabel>
        </Control>
        <Submit type="submit" value="Submit" />
      </ContactForm>
      <ContactDetails>
        <p>ccsweeney@my.waketech.edu</p>
        <p>(919)885-6327</p>
      </ContactDetails>
    </main>
  );
};

export default Contact;
