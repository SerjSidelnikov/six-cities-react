import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';

import Main from "../main/main";
import Property from '../property/property';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: -1,
    };

    this._handleHeaderClick = this._handleHeaderClick.bind(this);
  }

  render() {
    const {rentalOffers, rentalOfferCount} = this.props;

    return (
      <Switch>
        <Route exact path="/">
          <Main
            rentalOffers={rentalOffers}
            rentalOfferCount={rentalOfferCount}
            onHeaderClick={this._handleHeaderClick}
          />
        </Route>
        <Route exact path="/property/:id" render={
          ({match}) => this._renderPropertyScreen(match.params.id)}
        />
      </Switch>
    );
  }

  _handleHeaderClick(id) {
    this.setState({
      value: id,
    });
  }

  _renderPropertyScreen(id) {
    const offer = this.props.rentalOffers.find((property) => property.id === +id);

    return offer ? <Property offer={offer}/> : <Redirect to="/"/>;
  }
}

App.propTypes = {
  rentalOfferCount: PropTypes.number.isRequired,
  rentalOffers: PropTypes.array.isRequired,
};

export default App;
