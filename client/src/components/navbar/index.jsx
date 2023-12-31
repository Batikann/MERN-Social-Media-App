import { useState } from 'react'
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from '@mui/material'

import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setMode, setLogout } from '@/state'
import { useNavigate } from 'react-router-dom'
import FlexBetween from '@/components/FlexBetween'

export const Navbar = () => {
  const [isMobileMenuToggle, setIsMenuToggle] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const mode = useSelector((state) => state.mode)
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)')
  const theme = useTheme()
  const neutralLight = theme.palette.neutral.light
  const dark = theme.palette.neutral.dark
  const background = theme.palette.background.default
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.background.alt

  // const fullName = `${user.firstName} ${user.lastName}`
  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem ,2.25rem)"
          color="primary"
          onClick={() => navigate('/home')}
          sx={{}}
        >
          Sociopedia
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search.." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode(!mode))}>
            {mode === 'light' ? (
              <LightMode sx={{ color: dark, fontSize: '25px' }} />
            ) : (
              <DarkMode sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: '25px' }} />
          <Notifications sx={{ fontSize: '25px' }} />
          <Help sx={{ fontSize: '25px' }} />
          <FormControl variant="standard" value="Emir Batıkab Uçar">
            <Select
              value="Emir Batıkan Uçar"
              sx={{
                backgroundColor: neutralLight,
                width: '150px',
                borderRadius: '0.25rem',
                p: '0.25rem 1rem',
              }}
              input={<InputBase />}
            >
              <MenuItem value="Emir Batıkan Uçar">
                <Typography>Emir Batıkan Uçar</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMenuToggle(!isMobileMenuToggle)}>
          <Menu />
        </IconButton>
      )}
      {/* MOBILE NAV*/}
      {!isNonMobileScreens && isMobileMenuToggle && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton onClick={() => setIsMenuToggle(!isMobileMenuToggle)}>
              <Close />
            </IconButton>
          </Box>
          {/*MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column-reverse"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode(!mode))}
              sx={{ fontSize: '25px' }}
            >
              {mode === 'light' ? (
                <LightMode sx={{ color: dark, fontSize: '25px' }} />
              ) : (
                <DarkMode sx={{ fontSize: '25px' }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: '25px' }} />
            <Notifications sx={{ fontSize: '25px' }} />
            <Help sx={{ fontSize: '25px' }} />
            <FormControl variant="standard" value="Emir Batıkab Uçar">
              <Select
                value="Emir Batıkan Uçar"
                sx={{
                  backgroundColor: neutralLight,
                  width: '150px',
                  borderRadius: '0.25rem',
                  p: '0.25rem 1rem',
                }}
                input={<InputBase />}
              >
                <MenuItem value="Emir Batıkan Uçar">
                  <Typography>Emir Batıkan Uçar</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  )
}
