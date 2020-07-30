import React, { useEffect } from 'react';

// Scroll behaviour
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

// Styled Components
import { Container } from '../../styles/globalStyles';
import { HomeContentSection, Content } from '../../styles/homeStyles';

const HomeContent = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView])

  return (
    <HomeContentSection
      ref={contentRef}
      animate={animation}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: .6,
            ease: [.6, .05, -.01, .9],
          }
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Content>
          Analiza i diagnoza<br />Ocena bieżącej sytuacji, czyli analiza zebranych materiałów oraz wyciągnięcie wniosków z dotychczasowych działań to bardzo ważny etap naszej współpracy.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
