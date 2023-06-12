import { Title, UnderTitle, HomeLink, Section } from './Home.styled';

import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoaggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Title>PhoneBook</Title>

      {!isLoaggedIn ? (
        <UnderTitle>
          Please
          <HomeLink to="/register">SignUp</HomeLink>
          or
          <HomeLink to="/login">Log in</HomeLink>
          to be able to use your PhoneBook
        </UnderTitle>
      ) : (
        <UnderTitle>
          Go to the tab
          <HomeLink to="/contacts">Contacts</HomeLink>
          and manage your contacts
        </UnderTitle>
      )}
    </Section>
  );
}
