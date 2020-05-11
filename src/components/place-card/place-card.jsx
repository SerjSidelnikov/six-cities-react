import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import {MAX_RATING, OFFER_TYPES} from "../../consts";

const PlaceCard = ({offer, onHeaderClick, onMouseEnter, onMouseLeave}) => {
  const {
    id,
    rentalTitle,
    rentalImages,
    rentalPrice,
    rentalRating,
    rentalType,
    isPremium,
    isBookmark,
  } = offer;

  const ratingPercent = (Math.round(rentalRating) * 100) / MAX_RATING;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onMouseEnter(offer)}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={rentalImages[0]}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{rentalPrice}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            className={`place-card__bookmark-button ${isBookmark ? `place-card__bookmark-button--active` : ``} button`}
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercent}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name" onClick={() => onHeaderClick(id)}>
          <Link to={`/property/${id}`}>{rentalTitle}</Link>
        </h2>
        <p className="place-card__type">{rentalType}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rentalHost: PropTypes.shape({
      hostAvatar: PropTypes.string.isRequired,
      hostName: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
    rentalTitle: PropTypes.string.isRequired,
    rentalImages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    rentalPrice: PropTypes.number.isRequired,
    rentalRating: PropTypes.number.isRequired,
    rentalType: PropTypes.oneOf(OFFER_TYPES).isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    rentalDescription: PropTypes.string.isRequired,
    rentalRoomsQuantity: PropTypes.number.isRequired,
    rentalMaxGuestsQuantity: PropTypes.number.isRequired,
    rentalFeatures: PropTypes.array.isRequired,
  }).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default PlaceCard;
