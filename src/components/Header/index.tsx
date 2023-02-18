import { Image } from 'native-base';
import { Header as HeaderStyles } from './styles';

function Header() {
  return (
    <HeaderStyles>
      <Image
        alt="Logo Q2 Bank"
        source={require('../../assets/icons/q2-logo.png')}
      />
    </HeaderStyles>
  );
}

export { Header };
