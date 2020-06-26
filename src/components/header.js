import React, { useEffect } from 'react'
import { Link } from 'gatsby'
// styled components
import { HeaderNav } from '../styles/headerStyles';
import { Container, Flex } from '../styles/globalStyles';
import { Logo, Menu } from '../styles/headerStyles';
// Context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

const Header = ({ onCursor }) => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
    }
  }

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [.6, .05, -.01, .9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={() => onCursor()}
          >
            <Link to="/">FURR</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={() => onCursor('hovered')}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
