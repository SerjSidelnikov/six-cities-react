import {City, RentalType} from './consts';
import {getOffersByCity, getUniqueCities} from './utils';
import {Offer} from "./types";

export const USER_EMAIL = `someEmail@mail.su`;

export const doNothing = () => {
  //  do nothing
};

export const RentalFeature = {
  WIFI: `Wi-Fi`,
  PARKING: `Parking`,
  HEATING: `Heating`,
  KITCHEN: `Kitchen`,
  CABLETV: `Cable TV`,
  DISHWASHER: `Dishwasher`,
  WASHINGMACHINE: `Waching machine`,
  DRYER: `Dryer`,
};

export const OFFER_FEATURES = Object.values(RentalFeature);

export const ALL_OFFERS = [
  {
    location: {
      city: City.AMSTERDAM,
      cityCoordinates: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 0,
        coordinates: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 10,
          city: City.AMSTERDAM,
        },
        rentalHost: {
          id: 0,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Beautiful & luxurious apartment at great location`,
        rentalImages: [
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 120,
        rentalRating: 3.4,
        rentalType: RentalType.APARTMENT,
        isPremium: true,
        isBookmark: true,
        rentalDescription: [
          `A bright and charming apartment with 1 bedroom, located close to Museum Square in one of the most cosmopolitan and vibrant districts of Amsterdam "de PIJP".`,
          `Perfect for short holidays, business trips.`,
        ],
        rentalRoomsQuantity: 3,
        rentalMaxGuestsQuantity: 3,
        rentalFeatures: [RentalFeature.DRYER, RentalFeature.WASHINGMACHINE],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.AMSTERDAM,
      cityCoordinates: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 1,
        coordinates: {
          latitude: 52.369553943508,
          longitude: 4.85309666406198,
          zoom: 10,
          city: City.AMSTERDAM,
        },
        rentalHost: {
          id: 1,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Wood and stone place`,
        rentalImages: [
          `img/apartment-02.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 80,
        rentalRating: 4.1,
        rentalType: RentalType.HOTEL,
        isPremium: false,
        isBookmark: true,
        rentalDescription: [
          `This package is special opportunity to connect accommodation in a traditional Dutch cottage located in a birch forest, taste the local food, and snowshoeing/hiking experience.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.CABLETV,
          RentalFeature.KITCHEN,
          RentalFeature.KITCHEN,
        ],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 1,
            name: `Mary`,
            avatar: `img/avatar-angelina.jpg`,
            rating: 5,
            date: new Date(2020, 2, 15),
            text: `The building is in between the beach and metro station, 5 mins walking distance to both; 5 stops away from the Gothic Quarter by metro.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.AMSTERDAM,
      cityCoordinates: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 2,
        coordinates: {
          latitude: 52.3909553943508,
          longitude: 4.929309666406198,
          zoom: 10,
          city: City.AMSTERDAM,
        },
        rentalHost: {
          id: 2,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Stylish and cozy place`,
        rentalImages: [
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 132,
        rentalRating: 4.75,
        rentalType: RentalType.HOUSE,
        isPremium: true,
        isBookmark: false,
        rentalDescription: [
          `Spacious apartment situated in the city centre (oud-West) of Amsterdam.`,
          `Walking distance to the Jordaan, Museum Quarter, Anne Frank house and Leidseplein.`,
          `Supermarket right on the corner.`,
        ],
        rentalRoomsQuantity: 4,
        rentalMaxGuestsQuantity: 7,
        rentalFeatures: OFFER_FEATURES,
        reviews: [
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.AMSTERDAM,
      cityCoordinates: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 3,
        coordinates: {
          latitude: 52.3809553943508,
          longitude: 4.939309666406198,
          zoom: 10,
          city: City.AMSTERDAM,
        },
        rentalHost: {
          id: 3,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Excellent location and free parking`,
        rentalImages: [
          `img/room.jpg`,
          `img/room-small.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 180,
        rentalRating: 4.5,
        rentalType: RentalType.APARTMENT,
        isPremium: false,
        isBookmark: false,
        rentalDescription: [
          `The studio apartments at Wittenberg have been carefully-designed to embrace and enhance the building’s timeless authentic features, whilst incorporating striking yet traditional Dutch interiors.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 4,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.PARKING,
        ],
        reviews: [],
      },
    ],
  },
  {
    location: {
      city: City.PARIS,
      cityCoordinates: {
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 0,
        coordinates: {
          latitude: 48.84729076736546,
          longitude: 2.3435702650921173,
          zoom: 10,
          city: City.PARIS,
        },
        rentalHost: {
          id: 0,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Beautiful & luxurious apartment at great location`,
        rentalImages: [
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 120,
        rentalRating: 3.4,
        rentalType: RentalType.APARTMENT,
        isPremium: true,
        isBookmark: true,
        rentalDescription: [
          `A bright and charming apartment with 1 bedroom, located close to Museum Square in one of the most cosmopolitan and vibrant districts of Amsterdam "de PIJP".`,
          `Perfect for short holidays, business trips.`,
        ],
        rentalRoomsQuantity: 3,
        rentalMaxGuestsQuantity: 3,
        rentalFeatures: [RentalFeature.DRYER, RentalFeature.WASHINGMACHINE],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.PARIS,
      cityCoordinates: {
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 1,
        coordinates: {
          latitude: 48.86105445652469,
          longitude: 2.353425297919433,
          zom: 10,
          city: City.PARIS,
        },
        rentalHost: {
          id: 1,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Wood and stone place`,
        rentalImages: [
          `img/apartment-02.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 80,
        rentalRating: 4.1,
        rentalType: RentalType.HOTEL,
        isPremium: false,
        isBookmark: true,
        rentalDescription: [
          `This package is special opportunity to connect accommodation in a traditional Dutch cottage located in a birch forest, taste the local food, and snowshoeing/hiking experience.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.CABLETV,
          RentalFeature.KITCHEN,
          RentalFeature.KITCHEN,
        ],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 1,
            name: `Mary`,
            avatar: `img/avatar-angelina.jpg`,
            rating: 5,
            date: new Date(2020, 2, 15),
            text: `The building is in between the beach and metro station, 5 mins walking distance to both; 5 stops away from the Gothic Quarter by metro.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.PARIS,
      cityCoordinates: {
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 12,
        city: City.PARIS,
      },
    },
    offers: [
      {
        id: 2,
        coordinates: {
          latitude: 48.851740683032126,
          longitude: 2.355683531887018,
          zoom: 10,
        },
        rentalHost: {
          id: 2,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Stylish and cozy place`,
        rentalImages: [
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 132,
        rentalRating: 4.75,
        rentalType: RentalType.HOUSE,
        isPremium: true,
        isBookmark: false,
        rentalDescription: [
          `Spacious apartment situated in the city centre (oud-West) of Amsterdam.`,
          `Walking distance to the Jordaan, Museum Quarter, Anne Frank house and Leidseplein.`,
          `Supermarket right on the corner.`,
        ],
        rentalRoomsQuantity: 4,
        rentalMaxGuestsQuantity: 7,
        rentalFeatures: OFFER_FEATURES,
        reviews: [
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.PARIS,
      cityCoordinates: {
        latitude: 48.85341,
        longitude: 2.3488,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 3,
        coordinates: {
          latitude: 48.84448831418782,
          longitude: 2.3495837700876474,
          zoom: 10,
          city: City.PARIS,
        },
        rentalHost: {
          id: 3,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Excellent location and free parking`,
        rentalImages: [
          `img/room.jpg`,
          `img/room-small.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 180,
        rentalRating: 4.5,
        rentalType: RentalType.APARTMENT,
        isPremium: false,
        isBookmark: false,
        rentalDescription: [
          `The studio apartments at Wittenberg have been carefully-designed to embrace and enhance the building’s timeless authentic features, whilst incorporating striking yet traditional Dutch interiors.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 4,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.PARKING,
        ],
        reviews: [],
      },
    ],
  },
  {
    location: {
      city: City.COLOGNE,
      cityCoordinates: {
        latitude: 50.93333,
        longitude: 6.95,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 0,
        coordinates: {
          latitude: 50.93648019581346,
          longitude: 6.942350261681368,
          zoom: 10,
          city: City.COLOGNE,
        },
        rentalHost: {
          id: 0,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Beautiful & luxurious apartment at great location`,
        rentalImages: [
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 120,
        rentalRating: 3.4,
        rentalType: RentalType.APARTMENT,
        isPremium: true,
        isBookmark: true,
        rentalDescription: [
          `A bright and charming apartment with 1 bedroom, located close to Museum Square in one of the most cosmopolitan and vibrant districts of Amsterdam "de PIJP".`,
          `Perfect for short holidays, business trips.`,
        ],
        rentalRoomsQuantity: 3,
        rentalMaxGuestsQuantity: 3,
        rentalFeatures: [RentalFeature.DRYER, RentalFeature.WASHINGMACHINE],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.COLOGNE,
      cityCoordinates: {
        latitude: 50.93333,
        longitude: 6.95,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 1,
        coordinates: {
          latitude: 50.93813790167537,
          longitude: 6.944528103396974,
          zoom: 10,
          city: City.COLOGNE,
        },
        rentalHost: {
          id: 1,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Wood and stone place`,
        rentalImages: [
          `img/apartment-02.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 80,
        rentalRating: 4.1,
        rentalType: RentalType.HOTEL,
        isPremium: false,
        isBookmark: true,
        rentalDescription: [
          `This package is special opportunity to connect accommodation in a traditional Dutch cottage located in a birch forest, taste the local food, and snowshoeing/hiking experience.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.CABLETV,
          RentalFeature.KITCHEN,
          RentalFeature.KITCHEN,
        ],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 1,
            name: `Mary`,
            avatar: `img/avatar-angelina.jpg`,
            rating: 5,
            date: new Date(2020, 2, 15),
            text: `The building is in between the beach and metro station, 5 mins walking distance to both; 5 stops away from the Gothic Quarter by metro.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.COLOGNE,
      cityCoordinates: {
        latitude: 50.93333,
        longitude: 6.95,
        zoom: 12,
        city: City.COLOGNE,
      },
    },
    offers: [
      {
        id: 2,
        coordinates: {
          latitude: 50.93216655007104,
          longitude: 6.943741256017487,
          zoom: 10,
          city: City.COLOGNE,
        },
        rentalHost: {
          id: 2,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Stylish and cozy place`,
        rentalImages: [
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 132,
        rentalRating: 4.75,
        rentalType: RentalType.HOUSE,
        isPremium: true,
        isBookmark: false,
        rentalDescription: [
          `Spacious apartment situated in the city centre (oud-West) of Amsterdam.`,
          `Walking distance to the Jordaan, Museum Quarter, Anne Frank house and Leidseplein.`,
          `Supermarket right on the corner.`,
        ],
        rentalRoomsQuantity: 4,
        rentalMaxGuestsQuantity: 7,
        rentalFeatures: OFFER_FEATURES,
        reviews: [
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.COLOGNE,
      cityCoordinates: {
        latitude: 50.93333,
        longitude: 6.95,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 3,
        coordinates: {
          latitude: 50.9388574304378,
          longitude: 6.955421491548595,
          zoom: 10,
          city: City.COLOGNE,
        },
        rentalHost: {
          id: 3,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Excellent location and free parking`,
        rentalImages: [
          `img/room.jpg`,
          `img/room-small.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 180,
        rentalRating: 4.5,
        rentalType: RentalType.APARTMENT,
        isPremium: false,
        isBookmark: false,
        rentalDescription: [
          `The studio apartments at Wittenberg have been carefully-designed to embrace and enhance the building’s timeless authentic features, whilst incorporating striking yet traditional Dutch interiors.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 4,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.PARKING,
        ],
        reviews: [],
      },
    ],
  },
  {
    location: {
      city: City.BRUSSELS,
      cityCoordinates: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 0,
        coordinates: {
          latitude: 50.83285722617625,
          longitude: 4.355064366628517,
          zoom: 10,
          city: City.BRUSSELS,
        },
        rentalHost: {
          id: 0,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Beautiful & luxurious apartment at great location`,
        rentalImages: [
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 120,
        rentalRating: 3.4,
        rentalType: RentalType.APARTMENT,
        isPremium: true,
        isBookmark: true,
        rentalDescription: [
          `A bright and charming apartment with 1 bedroom, located close to Museum Square in one of the most cosmopolitan and vibrant districts of Amsterdam "de PIJP".`,
          `Perfect for short holidays, business trips.`,
        ],
        rentalRoomsQuantity: 3,
        rentalMaxGuestsQuantity: 3,
        rentalFeatures: [RentalFeature.DRYER, RentalFeature.WASHINGMACHINE],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.BRUSSELS,
      cityCoordinates: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 1,
        coordinates: {
          latitude: 50.855291836593814,
          longitude: 4.347456531940739,
          zoom: 10,
          city: City.BRUSSELS,
        },
        rentalHost: {
          id: 1,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Wood and stone place`,
        rentalImages: [
          `img/apartment-02.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 80,
        rentalRating: 4.1,
        rentalType: RentalType.HOTEL,
        isPremium: false,
        isBookmark: true,
        rentalDescription: [
          `This package is special opportunity to connect accommodation in a traditional Dutch cottage located in a birch forest, taste the local food, and snowshoeing/hiking experience.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.CABLETV,
          RentalFeature.KITCHEN,
          RentalFeature.KITCHEN,
        ],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 1,
            name: `Mary`,
            avatar: `img/avatar-angelina.jpg`,
            rating: 5,
            date: new Date(2020, 2, 15),
            text: `The building is in between the beach and metro station, 5 mins walking distance to both; 5 stops away from the Gothic Quarter by metro.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.BRUSSELS,
      cityCoordinates: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 2,
        coordinates: {
          latitude: 50.848518467982196,
          longitude: 4.350871923489649,
          zoom: 10,
          city: City.BRUSSELS,
        },
        rentalHost: {
          id: 2,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Stylish and cozy place`,
        rentalImages: [
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 132,
        rentalRating: 4.75,
        rentalType: RentalType.HOUSE,
        isPremium: true,
        isBookmark: false,
        rentalDescription: [
          `Spacious apartment situated in the city centre (oud-West) of Amsterdam.`,
          `Walking distance to the Jordaan, Museum Quarter, Anne Frank house and Leidseplein.`,
          `Supermarket right on the corner.`,
        ],
        rentalRoomsQuantity: 4,
        rentalMaxGuestsQuantity: 7,
        rentalFeatures: OFFER_FEATURES,
        reviews: [
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.BRUSSELS,
      cityCoordinates: {
        latitude: 50.85045,
        longitude: 4.34878,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 3,
        coordinates: {
          latitude: 50.85889370871327,
          longitude: 4.34938756297568,
          zoom: 10,
          city: City.BRUSSELS,
        },
        rentalHost: {
          id: 3,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Excellent location and free parking`,
        rentalImages: [
          `img/room.jpg`,
          `img/room-small.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 180,
        rentalRating: 4.5,
        rentalType: RentalType.APARTMENT,
        isPremium: false,
        isBookmark: false,
        rentalDescription: [
          `The studio apartments at Wittenberg have been carefully-designed to embrace and enhance the building’s timeless authentic features, whilst incorporating striking yet traditional Dutch interiors.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 4,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.PARKING,
        ],
        reviews: [],
      },
    ],
  },
  {
    location: {
      city: City.HAMBURG,
      cityCoordinates: {
        latitude: 53.57532,
        longitude: 10.01534,
        zoom: 10,
      },
    },
    offers: [
      {
        id: 0,
        coordinates: {
          latitude: 53.5753005338843,
          longitude: 10.015979224991606,
          zoom: 10,
          city: City.HAMBURG,
        },
        rentalHost: {
          id: 0,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Beautiful & luxurious apartment at great location`,
        rentalImages: [
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 120,
        rentalRating: 3.4,
        rentalType: RentalType.APARTMENT,
        isPremium: true,
        isBookmark: true,
        rentalDescription: [
          `A bright and charming apartment with 1 bedroom, located close to Museum Square in one of the most cosmopolitan and vibrant districts of Amsterdam "de PIJP".`,
          `Perfect for short holidays, business trips.`,
        ],
        rentalRoomsQuantity: 3,
        rentalMaxGuestsQuantity: 3,
        rentalFeatures: [RentalFeature.DRYER, RentalFeature.WASHINGMACHINE],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.HAMBURG,
      cityCoordinates: {
        latitude: 53.57532,
        longitude: 10.01534,
        zoom: 10,
      },
    },
    offers: [
      {
        id: 1,
        coordinates: {
          latitude: 53.578755238304936,
          longitude: 10.01224799128481,
          zoom: 10,
          city: City.HAMBURG,
        },
        rentalHost: {
          id: 1,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Wood and stone place`,
        rentalImages: [
          `img/apartment-02.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 80,
        rentalRating: 4.1,
        rentalType: RentalType.HOTEL,
        isPremium: false,
        isBookmark: true,
        rentalDescription: [
          `This package is special opportunity to connect accommodation in a traditional Dutch cottage located in a birch forest, taste the local food, and snowshoeing/hiking experience.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.CABLETV,
          RentalFeature.KITCHEN,
          RentalFeature.KITCHEN,
        ],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 1,
            name: `Mary`,
            avatar: `img/avatar-angelina.jpg`,
            rating: 5,
            date: new Date(2020, 2, 15),
            text: `The building is in between the beach and metro station, 5 mins walking distance to both; 5 stops away from the Gothic Quarter by metro.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.HAMBURG,
      cityCoordinates: {
        latitude: 53.57532,
        longitude: 10.01534,
        zoom: 10,
      },
    },
    offers: [
      {
        id: 2,
        coordinates: {
          latitude: 53.582470294110216,
          longitude: 10.01264598635923,
          zoom: 10,
          city: City.HAMBURG,
        },
        rentalHost: {
          id: 2,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Stylish and cozy place`,
        rentalImages: [
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 132,
        rentalRating: 4.75,
        rentalType: RentalType.HOUSE,
        isPremium: true,
        isBookmark: false,
        rentalDescription: [
          `Spacious apartment situated in the city centre (oud-West) of Amsterdam.`,
          `Walking distance to the Jordaan, Museum Quarter, Anne Frank house and Leidseplein.`,
          `Supermarket right on the corner.`,
        ],
        rentalRoomsQuantity: 4,
        rentalMaxGuestsQuantity: 7,
        rentalFeatures: OFFER_FEATURES,
        reviews: [
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.HAMBURG,
      cityCoordinates: {
        latitude: 53.57532,
        longitude: 10.01534,
        zoom: 10,
      },
    },
    offers: [
      {
        id: 3,
        coordinates: {
          latitude: 53.56668677413273,
          longitude: 10.01887378071594,
          zoom: 10,
          city: City.HAMBURG,
        },
        rentalHost: {
          id: 3,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Excellent location and free parking`,
        rentalImages: [
          `img/room.jpg`,
          `img/room-small.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 180,
        rentalRating: 4.5,
        rentalType: RentalType.APARTMENT,
        isPremium: false,
        isBookmark: false,
        rentalDescription: [
          `The studio apartments at Wittenberg have been carefully-designed to embrace and enhance the building’s timeless authentic features, whilst incorporating striking yet traditional Dutch interiors.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 4,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.PARKING,
        ],
        reviews: [],
      },
    ],
  },
  {
    location: {
      city: City.DUSSELDORF,
      cityCoordinates: {
        latitude: 51.22172,
        longitude: 6.77616,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 0,
        coordinates: {
          latitude: 51.225446719407095,
          longitude: 6.770537831659981,
          zoom: 10,
          city: City.HAMBURG,
        },
        rentalHost: {
          id: 0,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Beautiful & luxurious apartment at great location`,
        rentalImages: [
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 120,
        rentalRating: 3.4,
        rentalType: RentalType.APARTMENT,
        isPremium: true,
        isBookmark: true,
        rentalDescription: [
          `A bright and charming apartment with 1 bedroom, located close to Museum Square in one of the most cosmopolitan and vibrant districts of Amsterdam "de PIJP".`,
          `Perfect for short holidays, business trips.`,
        ],
        rentalRoomsQuantity: 3,
        rentalMaxGuestsQuantity: 3,
        rentalFeatures: [RentalFeature.DRYER, RentalFeature.WASHINGMACHINE],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.DUSSELDORF,
      cityCoordinates: {
        latitude: 51.22172,
        longitude: 6.77616,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 1,
        coordinates: {
          latitude: 51.222726767966954,
          longitude: 6.780774794092512,
          zoom: 10,
          city: City.HAMBURG,
        },
        rentalHost: {
          id: 1,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Wood and stone place`,
        rentalImages: [
          `img/apartment-02.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 80,
        rentalRating: 4.1,
        rentalType: RentalType.HOTEL,
        isPremium: false,
        isBookmark: true,
        rentalDescription: [
          `This package is special opportunity to connect accommodation in a traditional Dutch cottage located in a birch forest, taste the local food, and snowshoeing/hiking experience.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.CABLETV,
          RentalFeature.KITCHEN,
          RentalFeature.KITCHEN,
        ],
        reviews: [
          {
            id: 0,
            name: `Adam`,
            avatar: `img/avatar-max.jpg`,
            rating: 4,
            date: new Date(2020, 0, 12),
            text: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
          },
          {
            id: 1,
            name: `Mary`,
            avatar: `img/avatar-angelina.jpg`,
            rating: 5,
            date: new Date(2020, 2, 15),
            text: `The building is in between the beach and metro station, 5 mins walking distance to both; 5 stops away from the Gothic Quarter by metro.`,
          },
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.DUSSELDORF,
      cityCoordinates: {
        latitude: 51.22172,
        longitude: 6.77616,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 2,
        coordinates: {
          latitude: 51.213949205873114,
          longitude: 6.780531756137994,
          zoom: 10,
          city: City.DUSSELDORF,
        },
        rentalHost: {
          id: 2,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Stylish and cozy place`,
        rentalImages: [
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 132,
        rentalRating: 4.75,
        rentalType: RentalType.HOUSE,
        isPremium: true,
        isBookmark: false,
        rentalDescription: [
          `Spacious apartment situated in the city centre (oud-West) of Amsterdam.`,
          `Walking distance to the Jordaan, Museum Quarter, Anne Frank house and Leidseplein.`,
          `Supermarket right on the corner.`,
        ],
        rentalRoomsQuantity: 4,
        rentalMaxGuestsQuantity: 7,
        rentalFeatures: OFFER_FEATURES,
        reviews: [
          {
            id: 2,
            name: `Alex`,
            avatar: `img/avatar.svg`,
            rating: 5,
            date: new Date(2020, 1, 28),
            text: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
          },
        ],
      },
    ],
  },
  {
    location: {
      city: City.DUSSELDORF,
      cityCoordinates: {
        latitude: 51.22172,
        longitude: 6.77616,
        zoom: 12,
      },
    },
    offers: [
      {
        id: 3,
        coordinates: {
          latitude: 51.21624789556441,
          longitude: 6.780427787972119,
          zoom: 10,
          city: City.DUSSELDORF,
        },
        rentalHost: {
          id: 3,
          hostName: `Max`,
          hostAvatar: `img/avatar-max.jpg`,
          isSuper: false,
        },
        rentalTitle: `Excellent location and free parking`,
        rentalImages: [
          `img/room.jpg`,
          `img/room-small.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-02.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-small-03.jpg`,
          `img/apartment-small-04.jpg`,
        ],
        rentalPrice: 180,
        rentalRating: 4.5,
        rentalType: RentalType.APARTMENT,
        isPremium: false,
        isBookmark: false,
        rentalDescription: [
          `The studio apartments at Wittenberg have been carefully-designed to embrace and enhance the building’s timeless authentic features, whilst incorporating striking yet traditional Dutch interiors.`,
        ],
        rentalRoomsQuantity: 2,
        rentalMaxGuestsQuantity: 4,
        rentalFeatures: [
          RentalFeature.DRYER,
          RentalFeature.WASHINGMACHINE,
          RentalFeature.PARKING,
        ],
        reviews: [],
      },
    ],
  },
];

export const REVIEWS = [
  {
    id: 0,
    user: {
      id: 0,
      name: `Adam`,
      avatar: `img/avatar-max.jpg`,
      isPro: true,
    },
    rating: 4,
    date: new Date(2020, 0, 12),
    comment: `Easy Check In: Management did extra mile, and allowed me to check in several hours before. Cleaning of my unit was swiftly organized, and properly introduced.`,
  },
  {
    id: 1,
    user: {
      id: 1,
      name: `Mary`,
      avatar: `img/avatar-angelina.jpg`,
      isPro: false,
    },
    rating: 5,
    date: new Date(2020, 2, 15),
    comment: `The building is in between the beach and metro station, 5 mins walking distance to both; 5 stops away from the Gothic Quarter by metro.`,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: `Alex`,
      avatar: `img/avatar.svg`,
      isPro: true,
    },
    rating: 5,
    date: new Date(2020, 1, 28),
    comment: `We need a quick place to stay for the night and rented the same day. Was nice and clean. Had parking available for 15€ for the night. Was a little noisy but it ended by 11pm and we were able to get a decent night sleep. Had everything we needed.`,
  },
];

export const OFFERS_COORDINATES = [
  [52.3809553943508, 4.939309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
];

export const CITIES = getUniqueCities(ALL_OFFERS);

export const COLOGNE_OFFERS = getOffersByCity(CITIES[2], ALL_OFFERS);

export const FavoriteOffer: Offer = {
  id: 1,
  coordinates: {
    latitude: 53.528341000000005,
    longitude: 10.018654000000002,
    zoom: 16,
    city: `Hamburg`,
  },
  rentalHost: {
    id: 25,
    hostName: `Angelina`,
    hostAvatar: `img/avatar-angelina.jpg`,
    isSuper: true,
  },
  rentalTitle: `Nice, cozy, warm big bed apartment`,
  rentalImages: [
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
    `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
  ],
  rentalPrice: 212,
  rentalRating: 4.7,
  rentalType: `Room`,
  isPremium: false,
  isBookmark: true,
  rentalDescription: [
    `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
  ],
  rentalRoomsQuantity: 1,
  rentalMaxGuestsQuantity: 2,
  rentalFeatures: [
    `Breakfast`,
    `Air conditioning`,
    `Laptop friendly workspace`,
    `Washer`,
  ],
};

export const OFFERS_WITHOUT_BOOKMARK = [
  {
    location: {
      city: `Hamburg`,
      cityCoordinates: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    offers: [
      {
        id: 1,
        coordinates: {
          latitude: 53.528341000000005,
          longitude: 10.018654000000002,
          zoom: 16,
          city: `Hamburg`,
        },
        rentalHost: {
          id: 25,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Nice, cozy, warm big bed apartment`,
        rentalImages: [
          `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
          `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
        ],
        rentalPrice: 212,
        rentalRating: 4.7,
        rentalType: `Room`,
        isPremium: false,
        isBookmark: false,
        rentalDescription: [
          `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        ],
        rentalRoomsQuantity: 1,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          `Breakfast`,
          `Air conditioning`,
          `Laptop friendly workspace`,
          `Washer`,
        ],
      },
    ],
  },
];

export const OFFERS_WITH_BOOKMARK = [
  {
    location: {
      city: `Hamburg`,
      cityCoordinates: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    offers: [
      {
        id: 1,
        coordinates: {
          latitude: 53.528341000000005,
          longitude: 10.018654000000002,
          zoom: 16,
          city: `Hamburg`,
        },
        rentalHost: {
          id: 25,
          hostName: `Angelina`,
          hostAvatar: `img/avatar-angelina.jpg`,
          isSuper: true,
        },
        rentalTitle: `Nice, cozy, warm big bed apartment`,
        rentalImages: [
          `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
          `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
        ],
        rentalPrice: 212,
        rentalRating: 4.7,
        rentalType: `Room`,
        isPremium: false,
        isBookmark: true,
        rentalDescription: [
          `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        ],
        rentalRoomsQuantity: 1,
        rentalMaxGuestsQuantity: 2,
        rentalFeatures: [
          `Breakfast`,
          `Air conditioning`,
          `Laptop friendly workspace`,
          `Washer`,
        ],
      },
    ],
  },
];

export const FAVORITE_RESPONSE = [
  {
    "city": {
      "name": `Hamburg`,
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13,
      },
    },
    "preview_image": `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
    "images": [
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
    ],
    "title": `Nice, cozy, warm big bed apartment`,
    "is_favorite": true,
    "is_premium": false,
    "rating": 4.7,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 2,
    "price": 212,
    "goods": [`Breakfast`, `Air conditioning`, `Laptop friendly workspace`, `Washer`],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "avatar_url": `img/avatar-angelina.jpg`,
      "is_pro": true,
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    "location": {
      "latitude": 53.528341000000005,
      "longitude": 10.018654000000002,
      "zoom": 16,
    },
    "id": 1,
  },
];

export const FAVORITES_PAYLOAD = [
  {
    id: 1,
    coordinates: {
      city: `Hamburg`,
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16,
    },
    rentalHost: {
      id: 25,
      hostName: `Angelina`,
      hostAvatar: `img/avatar-angelina.jpg`,
      isSuper: true,
    },
    rentalTitle: `Nice, cozy, warm big bed apartment`,
    rentalImages: [
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
      `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
    ],
    rentalPrice: 212,
    rentalRating: 4.7,
    rentalType: `Room`,
    isPremium: false,
    isBookmark: true,
    rentalDescription: [
      `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    ],
    rentalRoomsQuantity: 1,
    rentalMaxGuestsQuantity: 2,
    rentalFeatures: [
      `Breakfast`,
      `Air conditioning`,
      `Laptop friendly workspace`,
      `Washer`,
    ],
  },
];

export const REVIEWS_RESPONSE = [{
  "id": 15,
  "user": {
    "id": 11,
    "name": `Inna`,
    "avatar_url": `img/avatar-inna.jpg`,
    "is_pro": true,
  },
  "rating": 4,
  "date": new Date(2020, 0, 12),
  "comment": `Nice, cozy, warm big bed apartment`,
}];

export const OFFERS = getOffersByCity(City.AMSTERDAM, ALL_OFFERS);
