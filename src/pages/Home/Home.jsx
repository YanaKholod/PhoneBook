import { Title, UnderTitle, HomeLink, Section } from './Home.styled';

import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoaggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Title>PhoneBook</Title>

      {!isLoaggedIn ? (
        <UnderTitle>
          <HomeLink to="/register">SignUp</HomeLink>
          <HomeLink to="/login">Log in</HomeLink>
        </UnderTitle>
      ) : (
        <UnderTitle>
          <HomeLink to="/contacts">Contacts</HomeLink>
        </UnderTitle>
      )}
    </Section>
  );
}
