import Avatar from '@/components/Atoms/Avatar/Avatar';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import { data } from '@/utils/data';
import { StyledHomeAbout } from './HomeAbout.styles';

const HomeAbout = () => {
  return (
    <StyledHomeAbout>
      <h2>About</h2>
      <Avatar username={data.username} image={data.avatar} />
      <Handwritting>{data.username}</Handwritting>
      <p>{data.bio}</p>
    </StyledHomeAbout>
  );
};

export default HomeAbout;
