import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  label: {
    textTransform: 'none',
  },
  drawer: {
    width: 250,
  },
});

function appBarLabel(label: string) {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <Toolbar sx={{ height: '12rem' }} sm={3}>
      <IconButton
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
            width: '3.5rem',
            height: '3.5rem',
            marginLeft: 0.5,
          },
        }}
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon
          sx={{
            display: { width: '3.5rem', height: '3.5rem' },
          }}
        />
      </IconButton>
      <Box component="div" sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
        <Typography
          className={classes.label}
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            whiteSpace: 'normal',
            fontSize: { sm: '2rem', md: '3rem' },
          }}
        >
          {label}
        </Typography>
      </Box>
      <Tooltip title={label} placement="left" arrow>
        <Box
          component="img"
          sx={{
            borderRadius: '50%',
            width: 100,
            height: 100,
            paddingTop: 2,
            paddingBottom: 2,
            paddingRight: 2,
            paddingLeft: 2,
            cursor: 'pointer',
            position: 'absolute',
            right: '0.75rem',
          }}
          id="um-logo"
          src="https://utopiamusic.com/logo.png"
          alt="Utopia Music Logo"
        ></Box>
      </Tooltip>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List className={classes.drawer}>
          <ListItem button>
            <ListItemText primary={label} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Services" />
          </ListItem>
        </List>
      </Drawer>
    </Toolbar>
  );
}

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {appBarLabel('Utopia Country Highlighter')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
