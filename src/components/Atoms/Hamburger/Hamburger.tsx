import { FC } from 'react';
import { HamburgerWrapper } from './Hamburger.styles';

interface IHamburgerProps {
  handleClick: () => void;
  isOpen: boolean;
}

const Hamburger: FC<IHamburgerProps> = ({ handleClick, isOpen }) => {
  return (
    <HamburgerWrapper onClick={handleClick} $isOpen={isOpen}>
      <span />
      <span />
      <span />
    </HamburgerWrapper>
  );
};

export default Hamburger;
