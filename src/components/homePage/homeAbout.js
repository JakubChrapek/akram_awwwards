import React, { useState, useEffect } from 'react';
import { Container, Flex } from '../../styles/globalStyles';
import { HomeAboutSection, About, Services, AccordionHeader, AccordionIcon, AccordionContent } from '../../styles/homeStyles';
import { motion, useAnimation } from 'framer-motion';
import { useGlobalStateContext } from '../../context/globalContext';
import { useInView } from 'react-intersection-observer';


const accordionIds = [
  {
    id: 0,
    title: "Pre-Production",
    results: [
      "Creative Development",
      "Writing",
      "Creative Development",
      "Writing",
      "Storyboards",
      "Art Direction",
      "Creative Direction",
      "Location Scouting",
      "Casting",
    ],
  },
  {
    id: 1,
    title: "Video Production",
    results: [
      "Principle Photography",
      "Production Management",
      "Crew",
      "Dailies",
      "LTO-Archiving",
    ],
  },
  {
    id: 2,
    title: "Post-Production",
    results: [
      "Colour correction",
      "Offline editing",
      "Online editing",
      "VFX",
      "Animation and motion graphics",
      "Closed captioning and subtitles",
      "Descriptive video",
      "Dailies",
      "Quality control",
      "LTO Archiving",
    ],
  },
  {
    id: 3,
    title: "Audio Post-Production",
    results: [
      "We work with some amazing partners who provide:",
      "Sound Design",
      "SFX",
      "Music",
      "Sound Mix",
    ],
  },
]

const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0);
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView])


  return (
    <HomeAboutSection
      ref={aboutRef}
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
        <Flex alignTop>
          <About>
            <h2>
              Hey Guys! This is the first time I record my self in person :) I am working on fixing the lighting and quality of the video so bear with me. We will only improve!
            </h2>
            <p>
              Designers use Lorem Ipsum as a dummy text,
              something to cover the fact that content is
              missing from the design. “Lorem Ipsum” is
              followed by more Latin text, making it easy
              for users or other designers to ignore it and
              imagine something more familiar or relevant in
              its place.
            </p>
          </About>
          <Services>
            <h3>
              Services
            </h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>

        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);
  const { currentTheme } = useGlobalStateContext();

  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={() => onCursor('pointer')}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === 'dark' ? '#ffffff' : '#000000'
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: .2, ease: [.6, .05, -.01, .9] }}
          >
          </motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: .2, ease: [.6, .05, -.01, .9] }}
          >
          </motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key='content'
        animate={{ height: isOpen ? '100%' : '0' }}
        transition={{ duration: .8, ease: [.6, .05, -.01, .9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
