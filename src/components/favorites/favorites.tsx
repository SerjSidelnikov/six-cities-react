import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../header/header';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {AppRoute} from '../../consts';
import FavoriteItem from '../favorite-item/favorite-item';
import {getFavorites} from '../../reducers/data/selector';
import {Operation as DataOperation} from '../../reducers/data/data';
import {Coordinate, FavoriteOffers} from "../../types";

interface Props {
  userEmail?: string;
  favorites: FavoriteOffers;
  onFavoritesLoad: () => void;
  onBookmarkClick: (id: number, status: boolean) => void;
  onRentalCardHover: (coordinate: Coordinate) => void;
}

class Favorites extends React.PureComponent<Props, null> {
  componentDidMount() {
    this.props.onFavoritesLoad();
  }

  render() {
    const {
      userEmail,
      favorites,
      onFavoritesLoad,
      onBookmarkClick,
      onRentalCardHover,
    } = this.props;

    return (
      <div className="page">
        <Header userEmail={userEmail} onUserEmailClick={onFavoritesLoad} />

        {favorites.length > 0 ? (
          <>
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>

                  <ul className="favorites__list">
                    {favorites.map((favoritesItem, index) => (
                      <FavoriteItem
                        key={index + favoritesItem.city}
                        favoriteCity={favoritesItem.city}
                        favoriteOffers={favoritesItem.offers}
                        onBookmarkClick={onBookmarkClick}
                        onRentalCardHover={onRentalCardHover}
                        userEmail={userEmail}
                      />
                    ))}
                  </ul>
                </section>
              </div>
            </main>
            <footer className="footer container">
              <Link to={AppRoute.ROOT} className="footer__logo-link">
                <img
                  className="footer__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="64"
                  height="33"
                />
              </Link>
            </footer>
          </>
        ) : (
          <FavoritesEmpty />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoritesLoad() {
    dispatch(DataOperation.loadFavorites());
  },
  onBookmarkClick(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(id, status));
  },
});

export {FavoriteOffers};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
