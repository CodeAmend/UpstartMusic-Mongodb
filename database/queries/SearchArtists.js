const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  const searchQuery = {};

  if (criteria.age) {
     searchQuery.age = { $gt: criteria.age.min, $lt: criteria.age.max };
  }
  if (criteria.yearsActive) {
    searchQuery.yearsActive = { $gt: criteria.yearsActive.min, $lt: criteria.yearsActive.max };
  }

  return Artist
    .find(searchQuery)
    .sort(sortProperty: 1)
    .limit(limit)
    .skip(offset)
    .then((artists) => {
      return {
        all: artists,
        count: artists.length,
        offset,
        limit
      };
    });
};
