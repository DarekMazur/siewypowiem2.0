import Avatar from '@/components/Atoms/Avatar/Avatar';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import { data } from '@/utils/data';

const HomeAbout = () => {
  return (
    <aside
      style={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2>About</h2>
      <Avatar username={data.username} image={data.avatar} />
      <Handwritting>{data.username}</Handwritting>
      <p>{data.bio}</p>
    </aside>
  );
};

export default HomeAbout;
