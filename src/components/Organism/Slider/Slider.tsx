'use client';

import Link from 'next/link';
import { IArticleTypes } from '@/utils/data/types';
import slugify from 'slugify';
import defaultCover from '@/assets/dafault.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  SlideWrapper,
  SliderButton,
  SliderImage,
  SliderNavigationButton,
  StyledSlider,
} from './Slider.styles';

const CustomSlider = ({
  stickyPosts,
}: {
  stickyPosts: Array<IArticleTypes>;
}) => {
  const carousel = useRef<AliceCarousel>(null);

  const items = stickyPosts?.map((article) => (
    <div key={article.id} style={{ height: '500px' }}>
      <SliderImage
        src={
          article.attributes.cover.data
            ? article.attributes.cover.data.attributes.url
            : defaultCover.src
        }
        alt={article.attributes.title}
        fill
      />
      <SlideWrapper
        style={{
          textAlign: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '1',
        }}
      >
        <h3>{article.attributes.title}</h3>
        <p>{article.attributes.description}</p>
        <Link
          href={`/article/${slugify(article.attributes.title, { lower: true })}`}
        >
          <SliderButton type='button'>Idź do artukułu</SliderButton>
        </Link>
      </SlideWrapper>
    </div>
  ));

  return (
    <>
      {stickyPosts ? (
        <StyledSlider>
          <SliderNavigationButton
            type='button'
            onClick={(e) => carousel?.current?.slidePrev(e)}
            $isLeft
          >
            <FontAwesomeIcon icon={['fas', 'chevron-left']} />
          </SliderNavigationButton>
          <AliceCarousel
            autoPlay
            autoPlayStrategy='none'
            autoPlayInterval={4000}
            animationDuration={1000}
            animationType='slide'
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
            ref={carousel}
          />
          <SliderNavigationButton
            type='button'
            onClick={(e) => carousel?.current?.slideNext(e)}
          >
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
          </SliderNavigationButton>
        </StyledSlider>
      ) : null}
    </>
  );
};

export default CustomSlider;
