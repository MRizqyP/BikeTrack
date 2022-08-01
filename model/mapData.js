const Images = [
  { image: require("../assets/banners/food-banner1.jpg") },
  { image: require("../assets/banners/food-banner2.jpg") },
  { image: require("../assets/banners/food-banner3.jpg") },
  { image: require("../assets/banners/food-banner4.jpg") },
];
import { icons, COLORS, SIZES, FONTS, images } from "../constants";

export const markers = [
  {
    coordinate: {
      latitude: -6.943791,
      longitude: 107.676456,
    },
    title: "Deddy Bike",
    description: "Service & Repair Bike",
    image: images.deddy1,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      latitude: -6.94244,
      longitude: 107.677249,
    },
    title: "DeBoseh Bike",
    description: "Bicycle Repair Shop",
    image: images.doseh1,
    rating: 5,
    reviews: 102,
  },
  {
    coordinate: {
      latitude: -6.942884,
      longitude: 107.679593,
    },
    title: "Bengkel sepeda pak arya",
    description: "Bicycle Repair Shop",
    image: images.doseh1,
    rating: 4,
    reviews: 52,
  },
  {
    coordinate: {
      latitude: -6.950477,
      longitude: 107.676596,
    },
    title: "BENGKEL SEPEDA #44 GARAGE",
    description: "Bicycle Repair Shop",
    image: images.doseh1,
    rating: 4,
    reviews: 52,
  },
  {
    coordinate: {
      latitude: -6.95699,
      longitude: 107.687034,
    },
    title: "Bengkel Sepedah Mulyadi Bii",
    description: "Bicycle Repair Shop",
    image: images.doseh1,
    rating: 4,
    reviews: 52,
  },
  {
    coordinate: {
      latitude: -6.964125,
      longitude: 107.675086,
    },
    title: "Bengkel Sepeda Cahaya Putra",
    description: "Bicycle Repair Shop",
    image: images.doseh1,
    rating: 4,
    reviews: 52,
  },
];

export const mapDarkStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

export const mapStandardStyle = [
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
