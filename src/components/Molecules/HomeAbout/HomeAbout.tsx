import Avatar from '@/components/Atoms/Avatar/Avatar';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import { data } from '@/utils/data';
import { StyledHomeAbout } from './HomeAbout.styles';

const HomeAbout = () => {
  return (
    <StyledHomeAbout>
      <h2>About</h2>
      <div>
        <Avatar username={data.username} image={data.avatar} />
        <div>
          <Handwritting>{data.username}</Handwritting>
          <p>{data.bio}</p>
        </div>
      </div>
    </StyledHomeAbout>
  );
};

export default HomeAbout;
