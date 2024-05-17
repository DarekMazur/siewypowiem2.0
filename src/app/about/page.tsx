import AboutView from '@/components/Views/AboutView/AboutView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O mnie',
};

const About = () => {
  return <AboutView />;
};

export default About;
