import * as React from 'react';
import {connect} from 'react-redux';
import * as pluralize from 'pluralize';
import {Link} from "react-router-dom";

import {OffersRestriction, ClassName, AppRoute} from '../../consts';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from "../review-form/review-form";
import Map from '../map/map';
import Header from '../header/header';
import PlaceList from "../place-list/place-list";
import {getNearbyOffers, getReviews, getIsError, getIsSending} from '../../reducers/data/selector';
import {Operation as DataOperation} from '../../reducers/data/data';
import withReview from "../../hoc/with-review/with-review";
import {
  Coordinate,
  Coordinates,
  Location,
  Offer,
  Reviews,
} from "../../types";

type nearbyProperties = { location: Location; offers: Offer };

interface Props {
  offer: Offer;
  location: { cityCoordinates: Coordinates };
  onRentalCardHover: (coordinate: Coordinate) => void;
  activeCardCoordinates: number[];
  nearbyOffers: Array<nearbyProperties>;
  reviews: Reviews;
  userEmail?: string;
  onLoadOfferData: (id: number) => void;
  onReviewPost(
    id: number,
    {comment: review, rating}: { comment: string; rating: number }
  ): Promise<void>;
  isSending: boolean;
  isError: boolean;
  onBookmarkClick: (id: number, status: number | boolean) => void;
  onUserEmailClick: () => void;
}

const ReviewFormWrapped = withReview(ReviewForm);

class Property extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this.getNearbyOffersCoordinates = this.getNearbyOffersCoordinates.bind(this);
  }

  componentDidMount() {
    this.props.onLoadOfferData(this.props.offer.id);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.offer.id !== prevProps.offer.id) {
      window.scrollTo(0, 0);
      this.props.onLoadOfferData(this.props.offer.id);
    }
  }

  private getNearbyOffersCoordinates() {
    const nearestOffers = this.props.nearbyOffers.map((offer) => offer.offers[0]);

    return [
      [
        this.props.offer.coordinates.latitude,
        this.props.offer.coordinates.longitude,
      ],
      ...nearestOffers
        .map((offer) => offer.coordinates)
        .map((coordinate) => [coordinate.latitude, coordinate.longitude]),
    ];
  }

  render() {
    const {
      location,
      offer: {
        id,
        rentalHost: {hostName, hostAvatar, isSuper},
        coordinates,
        rentalTitle,
        rentalImages,
        rentalPrice,
        rentalRating,
        rentalType,
        isPremium,
        isBookmark,
        rentalDescription,
        rentalRoomsQuantity,
        rentalMaxGuestsQuantity,
        rentalFeatures,
      },
      onRentalCardHover,
      activeCardCoordinates,
      nearbyOffers,
      reviews,
      userEmail,
      isSending,
      isError,
      onReviewPost,
      onBookmarkClick,
      onUserEmailClick,
    } = this.props;

    const ratingPercent =
      (Math.round(rentalRating) * 100) / OffersRestriction.MAX_RATING;

    const nearestOffers = nearbyOffers.map((offer) => offer.offers[0]);

    const nearestOffersCoordinates = this.getNearbyOffersCoordinates();

    return (
      <div className="page">
        <Header userEmail={userEmail} onUserEmailClick={onUserEmailClick} />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {rentalImages
                  .map((image, i) => {
                    return (
                      <div key={i + image} className="property__image-wrapper">
                        <img
                          className="property__image"
                          src={image}
                          alt="Photo studio"
                        />
                      </div>
                    );
                  })
                  .slice(0, OffersRestriction.MAX_IMAGES_QUANTITY)}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{rentalTitle}</h1>

                  {
                    userEmail ? (
                      <button
                        className={`property__bookmark-button button ${
                          isBookmark ? `property__bookmark-button--active` : ``
                        }`}
                        type="button"
                        onClick={() => {
                          onBookmarkClick(id, isBookmark ? 0 : 1);
                        }}
                      >
                        <svg
                          className="property__bookmark-icon"
                          width="31"
                          height="33"
                        >
                          <use xlinkHref="#icon-bookmark"/>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    ) : (
                      <Link to={AppRoute.LOGIN}>
                        <button
                          className={`property__bookmark-button button ${
                            isBookmark ? `property__bookmark-button--active` : ``
                          }`}
                          type="button"
                          onClick={() => {
                            onBookmarkClick(id, isBookmark ? 0 : 1);
                          }}
                        >
                          <svg
                            className="property__bookmark-icon"
                            width="31"
                            height="33"
                          >
                            <use xlinkHref="#icon-bookmark"/>
                          </svg>
                          <span className="visually-hidden">To bookmarks</span>
                        </button>
                      </Link>
                    )
                  }
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${ratingPercent}%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rentalRating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {rentalType}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {rentalRoomsQuantity}
                    {pluralize(` Bedroom`, rentalRoomsQuantity)}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {rentalMaxGuestsQuantity}
                    {` `}
                    {pluralize(` adult`, rentalMaxGuestsQuantity)}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{rentalPrice}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {rentalFeatures.map((feature, i) => {
                      return (
                        <li key={i + feature} className="property__inside-item">
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={`property__avatar-wrapper user__avatar-wrapper
                    ${isSuper ? `property__avatar-wrapper--pro` : ``}`}
                    >
                      <img
                        className="property__avatar user__avatar"
                        src={hostAvatar}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{hostName}</span>
                  </div>
                  <div className="property__description">
                    {rentalDescription.map((description, i) => {
                      return (
                        <p key={i + description} className="property__text">
                          {description}
                        </p>
                      );
                    })}
                  </div>
                </div>

                <ReviewsList reviews={reviews}>
                  {userEmail && (
                    <ReviewFormWrapped
                      onReviewSubmit={onReviewPost}
                      id={id}
                      isSending={isSending}
                      isError={isError}
                    />
                  )}
                </ReviewsList>

              </div>
            </div>
            <section
              className="property__map map"
              style={{width: `80%`, margin: `0 auto 50px auto`}}
            >
              <Map
                location={location}
                offersCoordinates={nearestOffersCoordinates}
                activeCoordinates={[
                  coordinates.latitude,
                  coordinates.longitude,
                ]}
                activeCardCoordinates={activeCardCoordinates}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <PlaceList
                  rentalCardList={nearestOffers}
                  onRentalCardHover={onRentalCardHover}
                  onBookmarkClick={onBookmarkClick}
                  pageClass={ClassName.NEAR_PLACES}
                  userEmail={userEmail}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  nearbyOffers: getNearbyOffers(state),
  isSending: getIsSending(state),
  isError: getIsError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOfferData(id) {
    dispatch(DataOperation.getReviews(id));
    dispatch(DataOperation.getNearbyOffers(id));
  },
  onReviewPost(id, review) {
    const postReviewPromise = dispatch(DataOperation.postReview(id, review));
    dispatch(DataOperation.getReviews(id));
    return postReviewPromise;
  },
  onBookmarkClick(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(id, status));
  },
  onUserEmailClick() {
    dispatch(DataOperation.loadFavorites());
  },
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
