const mongoose = require('mongoose');
const Album = require('./album');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  album: [Album]
});

const Artist = mongoose.models('artist', ArtistSchema);

module.exports = Artist;
