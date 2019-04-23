import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

const MovieCard = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.movie.image_url}
          title={props.movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movie.title}
          </Typography>
          <Typography component="p">
            {props.movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default (connect(mapReduxStateToProps)(withStyles(styles)(MovieCard)));