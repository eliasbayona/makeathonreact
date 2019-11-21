import React, {useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {DropzoneArea} from 'material-ui-dropzone'
import ReactMapGl from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

import logo from './logo.svg';
import './css/css.css';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function App() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [localized, toggleLocalizedMode] = React.useState(false)
  const [satelite, toggleSateliteMode] = React.useState(true)
  const [analytics, toggleAnalyticsMode] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [files, changeFiles] = React.useState([]);
  const [viewport, setViewport] = React.useState({
    latitude:-24.6600,
    longitude:25.9031,
    width:'100vw',
    height:'100vh',
    zoom:12
  })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 const handleToggleLocalizedMode = () => {
    toggleLocalizedMode(true);
    toggleAnalyticsMode(false)
    toggleSateliteMode(false)
 };

 const handleToggleAnalyticsMode = () => {
  toggleLocalizedMode(false);
  toggleAnalyticsMode(true)
  toggleSateliteMode(false)
 }

 const handleToggleSateliteMode = () => {
  toggleLocalizedMode(false);
  toggleAnalyticsMode(false)
  toggleSateliteMode(true)
 }
  return (
    <ReactMapGl {...viewport} 
     mapboxApiAccessToken="pk.eyJ1IjoidWJjaWN0IiwiYSI6ImNrMzhpMWk5MjA5NTQzbnJ0bnpybHo0ZHkifQ.QoKHB9zLuz-vFjMUHIkNig"
     mapStyle="mapbox://styles/ubcict/ck38kuqw301l11cpkjwy3d1jo"
     onViewportChange={ viewport => {
       setViewport(viewport);
     }}
     >
      <React.Fragment>
          <CssBaseline />
          
          <Container maxWidth="xl" className="map">
            <Card className={classes.card} style={{'position':'absolute','marginTop':'2rem', 'background': '#171616de'}}> 
            <CardHeader style={{'textAlign':'center'}}
          
                subheader="Meta Data"
            />
            
              <IconButton className={classes.iconButton} aria-label="menu">
        
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search for location"
                inputProps={{ 'aria-label': 'search for location' }}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>

              <CardContent>
                <Typography className="lcolor" variant="body2" color="white" component="p">
                  Location:
                </Typography>
                <Typography className="data_color"  variant="body2" color="white" component="p">
                  Gaborone
                </Typography>
                <Typography className="lcolor" variant="body2" color="white" component="p">
                  Focus Area:
                </Typography>
                <Typography className="data_color"  variant="body2" color="white" component="p">
                -24.6600 N
                </Typography>
                <Typography className="data_color"  variant="body2" color="white" component="p">
                25.9031 W
                </Typography>
                <Typography className="lcolor" variant="body2" color="white" component="p">
                  Date & Time:
                </Typography>
                <Typography className="data_color" variant="body2" color="white" component="p">
                21 NOV 2019 
                </Typography>
              </CardContent>
            </Card>
            <div style={{'position':'absolute', 'top':'4rem', 'right':'2rem', 'display': 'inline-grid'}}>
              <Fab onClick={() => toggleSateliteMode()}  style={{'margin':'.5rem'}} size="small" color="secondary" aria-label="add" className={classes.margin}>
                  <LayersOutlinedIcon />
              </Fab>
              <Fab onClick={handleClickOpen} style={{'margin':'.5rem'}} size="small" color="secondary" aria-label="add" className={classes.margin}>
                  <AirplanemodeActiveOutlinedIcon />
              </Fab>
              <Fab onClick={() => handleToggleAnalyticsMode()} style={{'margin':'.5rem'}} size="small" color="secondary" aria-label="add" className={classes.margin}>
                  <BubbleChartOutlinedIcon />
              </Fab>
            </div>
            <Dialog
            maxWidth ="md"
            fullWidth={true}
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
              Use localized data
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send updates
                occasionally.
              </DialogContentText>
              <DropzoneArea 
                onChange={changeFiles.bind(this)}
              />
            </DialogContent>
            
          </Dialog>
            
          </Container>
        </React.Fragment>
    </ReactMapGl>
    
  );
}

export default App;
