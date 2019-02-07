import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withStyles } from '@material-ui/core/styles';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import withRoot from '../withRoot';
import openpgp from 'openpgp';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Home extends React.Component {
  state = {
    open: false,
    publicKey: '',
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.genKey();
  };

  async genKey () {
    if (this.state.publicKey.length) {
      this.setState({
        open: true,
      });
      return;
    }
    var options = {
      userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
      // numBits: 4096,                                            // RSA key size
      numBits: 2048,                                            // RSA key size
      passphrase: 'super long and hard to guess secret'         // protects the private key
    };
    const key = await openpgp.generateKey(options);
    this.setState({
      open: true,
      publicKey: key.publicKeyArmored,
    });
    // var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
    // var pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
    // var revocationSignature = key.revocationSignature; // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
  };

  render() {
    const { classes } = this.props;
    const { open, publicKey } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>{publicKey}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'recents',
    };
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Router>
        <div>
          <BottomNavigation value={value} onChange={this.handleChange}>
            <BottomNavigationAction label="About" value="favorites" icon={<FavoriteIcon />} component={Link} to="/about" />
            <BottomNavigationAction label="Home" value="recents" icon={<RestoreIcon />} component={Link} to="/" />
            <BottomNavigationAction label="Topics" value="nearby" icon={<LocationOnIcon />} component={Link} to="/topics" />
          </BottomNavigation>

          <Route exact path={`${process.env.PUBLIC_URL}/`} render={(props) => <Home {...props} classes={classes} />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
          <Route path={`${process.env.PUBLIC_URL}/topics`} component={Topics} />
        </div>
      </Router>
    );
  }
}

export default withRoot(withStyles(styles)(BasicExample));
