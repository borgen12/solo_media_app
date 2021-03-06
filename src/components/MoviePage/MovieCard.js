import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import shadows from '@material-ui/core/styles/shadows';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const styles = {
  card: {
    height: 400,
    width: 210,
    display: "inline-block",
    margin: 25,
    boxShadow: 3
    
  },
  media: {
    height: 300,
    width: 210
  },

}; 

class MovieCard extends Component {

  handleClick = () => {
    console.log('clicked card', this.props.movie.id);
    this.props.dispatch({type:'MOVIE_DETAILS', payload: this.props.movie.id})
    this.props.history.push('/details')
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} onClick={this.handleClick} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.props.movie.image_url}
            title={this.props.movie.title}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {this.props.movie.title}
            </Typography>
            <Typography component="p">
              {this.props.movie.year}
            </Typography> 
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default withRouter((connect(mapReduxStateToProps)(withStyles(styles)(MovieCard))));