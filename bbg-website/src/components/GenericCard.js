import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './GenericCard.css';
import kevinImg from "../assets/kevin.png"

class GenericCard extends Component
{
  render()
  {
    return (
      <div className="MainCard">
        <Card className="Card">
          <a href="google.com" target="_blank">
          <CardMedia className="Media" image={kevinImg} title={this.props.name + " from Bean Boy Games"}/>
          </a>
          <CardContent>

            <Typography gutterBottom variant="headline" component="h2">
              {this.props.name}
            </Typography>

            <Typography component="p">
              {this.props.desc}
            </Typography>

          </CardContent>

        </Card>
      </div>
    )
  }
}

export default GenericCard;