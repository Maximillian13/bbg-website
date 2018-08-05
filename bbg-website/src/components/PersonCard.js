import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './PersonCard.css';
import kevinImg from "../assets/kevin.png"


const styles = 
{
  card: 
  {
    maxWidth: 400
  },
  media: 
  {
    height: 0,
    paddingTop: '100%'
  }
};

function SimpleMediaCard(props) 
{
  const { classes } = props;
  return (
    <div className="MainCard">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={kevinImg}
          title="Kevin Thomas from Bean Boy Games"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Kevin Thomas
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica fbdshk fbdhfksbd fhdsfbhsdjkfbhdjkfb dkhszlf 
            bfd kl lfbjdklf bsdjaklfbsdjkalfb djsklfbdjs klfbdjkl fbjdkla bsdjaklfbsdjkalfb
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = 
{
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);