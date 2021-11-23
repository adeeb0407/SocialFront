import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch } from 'react-redux';

import socialFront from '../components/docs/socialFront.png'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {Link, useHistory, useLocation} from 'react-router-dom'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({type : 'LOGOUT'})
    history.push('/login')
    setUser(null)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(()=> {
    setUser(JSON.parse(localStorage.getItem('profile')))
    const token = user?.token
  },[location])

  console.log(user)


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor: '#3C6EC4 '}}>
        <Toolbar>
        <Link to ='/'>
        <img src = {socialFront} alt='logo' height="50vh"/>
        </Link>
          <Typography variant="h5" noWrap sx={{ flexGrow: 1 }} component="div">
            &emsp;SocialFront
          </Typography>
          {user != null && <Link to = '/profile'>
        <Avatar alt="Remy Sharp" src={user?.userData.imageUrl} sx={{ width: 35, height: 35 }}/>
        </Link> }
        <Typography variant="h7" noWrap  component="div" className = 'userName'>
            &emsp;{user?.userData.name}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home'].map((text, index) => (
            <Link to ='/'>
            <ListItem button key={index} >
              <ListItemIcon>
                <HomeIcon style= {{color : '#47bcd4'}} sx={{width : 30, height: 30}}/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
          {['Profile'].map((text, index) => (
            <Link to = '/profile'>
            <ListItem button key={index}>
              <ListItemIcon>
               <AccountCircleIcon style= {{color : '#0F0600'}} sx={{width : 30, height: 30}}/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
          {['Create Post'].map((text, index) => (
            <Link to ='/createpost'>
            <ListItem button key={index}>
              <ListItemIcon>
                <AddBoxIcon style= {{color : '#74CD26'}} sx={{width : 30, height: 30}}/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
          {/* {['Inbox'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
        <List>
          {user !== null ? ['Logout'].map((text, index) => (
            <Link to = '/login'>
            <ListItem button key={index} onClick = {logout}>
              <ListItemIcon>
               <ExitToAppIcon style= {{color : '#CD2626'}} sx={{width : 30, height: 30}}/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          )) :['LogIn'].map((text, index) => (
            <Link to = '/login'>
            <ListItem button key={index} >
              <ListItemIcon>
               <LoginIcon style= {{color : '#B8BB09'}} sx={{width : 30, height: 30}}/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          )) }
        </List>
      </Drawer>
    </Box>
  );
}
