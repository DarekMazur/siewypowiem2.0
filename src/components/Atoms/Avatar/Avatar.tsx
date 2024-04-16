/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

interface IAvatarProps {
  username: string;
  image: string;
}

const Avatar: FC<IAvatarProps> = ({ username, image }) => {
  return (
    <img
      src={image}
      alt={username}
      style={{
        width: '150px',
        borderRadius: '50%',
        margin: '2rem 0 0',
      }}
    />
  );
};

export default Avatar;
