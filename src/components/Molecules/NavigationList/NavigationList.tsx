import NavigationListItem from './NavigationListItem/NavigationListItem';
import { StyledNavigationList } from './NavigationList.styles';

const navList = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Item',
    url: '/item',
  },
];

const NavigationList = ({
  color,
}: {
  color?:
    | 'white'
    | 'grey'
    | 'transparentGrey'
    | 'orange'
    | 'black'
    | 'blue'
    | 'brown'
    | 'red'
    | 'glassBgr'
    | 'glassShadow';
}) => {
  return (
    <StyledNavigationList>
      {navList.map((item) => (
        <NavigationListItem
          key={item.name}
          name={item.name}
          url={item.url}
          color={color}
        />
      ))}
    </StyledNavigationList>
  );
};

export default NavigationList;
