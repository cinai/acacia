import React from 'react';
import './Plataforma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Plataforma = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <div className="plataforma">
    <div className="plataforma-header">
     
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <div className="plataforma-proyecto">
            <span className="box">
              <FontAwesomeIcon icon={faChartLine} size="lg"></FontAwesomeIcon>
            </span>
            <h3>Predicción de demanda de insumos y medicamentos</h3>
          </div>
          <Tabs 
            value={value} 
            aria-label="simple tabs example" 
            indicatorColor="primary"
            onChange={handleChange} 
          >
            <Tab label="Dashboard" {...a11yProps(0)} />
            <Tab label="Datos" {...a11yProps(1)} />
            <Tab label="Modelos" {...a11yProps(2)} />
            <Tab label="Predicción" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </div>
    </div>
    <div className="plataforma-cuerpo">
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  </div>
  )}


export default Plataforma;