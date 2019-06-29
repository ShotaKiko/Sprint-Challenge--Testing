
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Witcher III: The Wild Hunt', genre:'RPG', releaseYear: 2015},
        {title: 'For Honor', genre:'Figthing', releaseYear: 2017},
        {title: 'Legend of Dragoon', genre:'RPG', releaseYear: 1999}
      ]);
    });
};
