import React from 'react';
import './BarraLateral.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUsers, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import acacia  from '../../../acacia_light.png';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const BarraLateral = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="barra">
      <div id="logo-empresa">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 22">
          <path fill="ghostwhite" d="M12.8 16.68a2.05 2.05 0 1 1-1.97-2.05l-2.08-3.35H7.37a2.05 2.05 0 1 1-.07-.87h1.93l3.07 4.92c.31.36.5.83.5 1.35m0-11.36c0 1.14-.91 2.05-2.04 2.05h-.06l1.76 2.6H11.4l-2.5-3.7.03-.02a2.05 2.05 0 1 1 3.88-.93m7.8 10V11a4.32 4.32 0 0 0-5.85-4.05 4.33 4.33 0 0 0-4-5.95 4.32 4.32 0 0 0-4.01 5.9A4.3 4.3 0 0 0 1.04 11a4.32 4.32 0 0 0 5.7 4.1 4.32 4.32 0 1 0 8.02-.05 4.24 4.24 0 0 0 2.68.12V12.7a2.05 2.05 0 1 1 .9-1.7v.02h-.01v4.3h2.28z"/>
          <g fill="ghostwhite">
            <path d="M31.28 12.38h-2.73l1.4-4.27h.03l1.3 4.27zm4.69 4.39l-4.2-10.91H28.2l-4.15 10.91h2.96l.86-2.33h4.1l.8 2.33h3.2zM36.71 5.04h2.82v11.73h-2.82zM46.69 11.92h-3.13c.06-.94.55-1.7 1.56-1.7 1.13 0 1.57.76 1.57 1.7m2.53 1.6V13c0-2.42-1.1-4.56-4.11-4.56-2.54 0-4.36 1.56-4.36 4.25s2.05 4.27 4.73 4.27c1.05 0 2.08-.16 2.99-.52v-1.98a5.3 5.3 0 0 1-2.49.62c-1.37 0-2.23-.44-2.4-1.56h5.64zM50.21 16.77h2.82v-3.44c0-1.75.6-2.55 1.6-2.55.79 0 1.12.69 1.12 1.61v4.38h2.81v-3.44c0-1.75.6-2.55 1.6-2.55.8 0 1.12.7 1.12 1.61v4.38h2.82v-4.8c0-2.2-.53-3.53-2.88-3.53-1.16 0-2.23.47-2.9 1.56-.43-1.06-1.39-1.56-2.54-1.56-1.28 0-2.41.51-2.97 1.68h-.03v-1.5H50.2v8.15zM70.5 13.16c0 .95-.66 1.92-1.73 1.92-.65 0-1.15-.33-1.15-.89 0-.78.75-1.08 1.7-1.08.42 0 .83.03 1.19.05m2.78 3.61a9.83 9.83 0 0 1-.15-1.92V11.8c0-2.48-1.8-3.38-3.88-3.38-1.2 0-2.25.18-3.25.58l.04 1.91a5.29 5.29 0 0 1 2.6-.6c1.02 0 1.84.29 1.86 1.4-.36-.06-.86-.11-1.31-.11-1.5 0-4.2.3-4.2 2.78 0 1.77 1.43 2.57 3.04 2.57 1.16 0 1.94-.46 2.58-1.47h.03c0 .42.04.84.06 1.28h2.58zM74.46 16.77h2.82v-3.44c0-1.75.59-2.55 1.75-2.55.76 0 1.3.52 1.3 2.05v3.94h2.8v-5.08c0-1.69-.89-3.26-3.1-3.26-1.28 0-2.41.52-2.98 1.7h-.03v-1.5h-2.56v8.14zM89.57 13.16c0 .95-.67 1.92-1.73 1.92-.65 0-1.15-.33-1.15-.89 0-.78.75-1.08 1.7-1.08.42 0 .82.03 1.18.05m2.79 3.61a9.83 9.83 0 0 1-.16-1.92V11.8c0-2.48-1.8-3.38-3.88-3.38-1.2 0-2.25.18-3.25.58l.05 1.91a5.28 5.28 0 0 1 2.6-.6c1.02 0 1.85.29 1.85 1.4-.35-.06-.85-.11-1.31-.11-1.5 0-4.2.3-4.2 2.78 0 1.77 1.43 2.57 3.04 2.57 1.16 0 1.94-.46 2.58-1.47h.03c0 .42.05.84.07 1.28h2.58zM90.23 6.49h-.91l.48-.92.43.92zm1.58.94L90.4 5.09h-1.2l-1.39 2.34h1l.28-.5h1.37l.28.5h1.07zM84.85 6.9c-.27.07-.6.13-.91.13-.72 0-1.23-.28-1.23-.74 0-.44.45-.76 1.15-.76.33 0 .64.06.95.17l.08-.5a5.7 5.7 0 0 0-1.08-.13c-1.21 0-2.1.4-2.1 1.22 0 .89 1.13 1.2 2.1 1.2.5 0 .8-.05 1.08-.1l-.04-.48zM76.65 5.11h.97v2.34h-.97zM68.9 7.45h.9l-.04-1.6h.01l1.28 1.6h1.21V5.11h-.89l.02 1.59h-.01l-1.24-1.59H68.9zM63.74 5.11h.98v2.34h-.98zM57.41 7.45h2.48v-.46h-1.51V5.11h-.97zM53.32 6.9c-.27.07-.6.13-.91.13-.71 0-1.22-.28-1.22-.74 0-.44.45-.76 1.14-.76.34 0 .64.06.95.17l.08-.5c-.35-.08-.7-.13-1.08-.13-1.2 0-2.1.4-2.1 1.22 0 .89 1.13 1.2 2.1 1.2.5 0 .81-.05 1.09-.1l-.05-.48z"/>
          </g>
          <g fill="ghostwhite">
            <path d="M98.55 14.95c0 .8-.57 1.38-1.3 1.38-.7 0-1.29-.58-1.29-1.38 0-.8.58-1.38 1.3-1.38.71 0 1.3.58 1.3 1.38m.4 0a1.71 1.71 0 1 0-3.42 0 1.71 1.71 0 0 0 3.43 0"/>
            <path d="M97.28 14.8h-.32v-.55h.32c.19 0 .4.04.4.26 0 .26-.19.3-.4.3m.25.25c.32-.03.5-.18.5-.52 0-.4-.25-.57-.71-.57h-.72v1.95h.36v-.84h.22l.5.84h.37l-.52-.86z"/>
          </g>
        </svg>
        <p></p>
      </div>
      <div id="barra_lista">
        <div className="link-seccion">
          <p>Clínica Alemana</p>
          <IconButton 
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            size="small"
          >
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </IconButton >
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}> <FontAwesomeIcon icon={faFolderPlus} size="lg" />Nuevo proyecto</MenuItem>
                    <MenuItem onClick={handleClose}> <FontAwesomeIcon icon={faUsers} size="lg" />Invitar personas</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
        <div className="lista-proyectos">
          <div className="proyecto">
            <span className="box"></span>
            <p>Predicción de demanda de insumos y medicamentos</p>
          </div>
        </div>
      </div>
      <div id="logo-acacia">
        <img src={acacia} alt="Acacia" />
        <span>
        </span>       
      </div>
    </div>
    )}


export default BarraLateral;