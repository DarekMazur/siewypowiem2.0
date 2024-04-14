import Title from '@/components/Atoms/Title/Title';
import NavigationList from '@/components/Molecules/NavigationList/NavigationList';
import SocialMenu from '@/components/Molecules/SocialMenu/SocialMenu';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div>
        <Title title='Sie Wypowiem' author='Jillian' tag='h2' />
        <nav>
          <NavigationList />
          <SocialMenu />
        </nav>
        <div>&copy; 2024</div>
        <div>
          <p>
            by <Link href='https://nerdistry.pl'>Nerdistry</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
