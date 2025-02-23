import { code } from "framer-motion/client";

export const diamonds = [
  { id: 1, amount: '50 Diamond', price: 'Rp10.000' },
  { id: 2, amount: '100 Diamond', price: 'Rp20.000' },
  { id: 3, amount: '250 Diamond', price: 'Rp50.000' },
  { id: 4, amount: '500 Diamond', price: 'Rp100.000' },
  { id: 5, amount: '1000 Diamond', price: 'Rp200.000' },
  { id: 6, amount: '2000 Diamond', price: 'Rp400.000' },
];

export const Bannerimages = [
  {
    id: 1,
    src: 'assets/img/1.svg',
    alt: 'Website Offical RB GAMES',
  },
  {
    id: 2,
    src: 'assets/img/2.svg',
    alt: 'Gambar Lokal 2',
  },
  {
    id: 3,
    src: 'assets/img/3.svg',
    alt: 'Gambar Lokal 3',
  },
];

export const games = [
  {
    id: 1,
    name: 'Mobile Legends',
    image: 'assets/icon/ML-icon.jpg',
    description: 'Top up Diamond Mobile Legends sekarang juga!',
    code: 'Mobile Legend',
    isNew: true, // flag "New"
  },
  {
    id: 2,
    name: 'Free Fire',
    image: 'assets/icon/FF-icon.jpg', 
    description: 'Top up Diamond Free Fire untuk skin favoritmu!',
    code: 'Free Fire',
    isNew: true,
  },
  {
    id: 3,
    name: 'PUBG Mobile',
    image: 'assets/icon/PUBG-icon.jpg', 
    description: 'Top up UC PUBG Mobile untuk senjata keren!',
    code: 'PUBG Mobile',
    isNew: false
  },
  {
    id: 4,
    name: 'Genshin Impact',
    image: 'assets/icon/GI-icon.jpg', 
    description: 'Top up Genesis Crystal Genshin Impact sekarang!',
    isNew: false,
    code: 'Genshin Impact'
  },
];
