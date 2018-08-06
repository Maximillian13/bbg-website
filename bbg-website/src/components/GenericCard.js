import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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