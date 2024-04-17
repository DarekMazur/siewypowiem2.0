/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { StyledAvatar } from './Avatar.styles';

interface IAvatarProps {
  username: string;
  image: string;
}

const Avatar: FC<IAvatarProps> = ({ username, image }) => {
  return (
    <StyledAvatar
      src={image}
      alt={username}
      width={150}
      height={150}
      loading='lazy'
    />
  );
};

export default Avatar;
