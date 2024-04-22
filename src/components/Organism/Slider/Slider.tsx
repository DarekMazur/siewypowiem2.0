'use client';

import { useGetStickyArticlesQuery } from '@/store';
import Link from 'next/link';
import 'react-animated-slider/build/horizontal.css';
import {
  SlideWrapper,
  SliderButton,
  SliderImage,
  StyledSlider,
} from './Slider.styles';

const CustomSlider = () => {
  const { data: stickyPosts } = useGetStickyArticlesQuery();

  return (
    <>
      {stickyPosts ? (
        <StyledSlider autoplay={3000}>
          {stickyPosts?.data.map((article) => (
            <div key={article.id}>
              <SliderImage
                src={article.attributes.cover.data.attributes.url}
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
                <Link href='/'>
                  <SliderButton type='button'>Go to article</SliderButton>
                </Link>
              </SlideWrapper>
            </div>
          ))}
        </StyledSlider>
      ) : null}
    </>
  );
};

export default CustomSlider;
