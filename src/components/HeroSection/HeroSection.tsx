import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroSection = () => {
  const handleClick = () => {
    const headerElement = document.querySelector('header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;

    return window.scrollTo(0, headerHeight);
  };

  return (
    <section style={{ position: 'relative', zIndex: '1' }}>
      <p>Dolor Sit Amet</p>
      <FontAwesomeIcon
        role='button'
        icon={['fas', 'chevron-down']}
        onClick={handleClick}
      />
    </section>
  );
};

export default HeroSection;
