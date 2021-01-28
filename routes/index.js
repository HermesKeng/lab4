/*
 * GET home page.
 */

exports.view = function (req, res) {
  res.render("index", {
    projects: [
      {
        name: "Waiting in Line",
        image: "lorempixel.abstract.1.jpeg",
        id: "project1",
        url: "project/Waiting in Line",
      },
      {
        name: "Needfinding",
        image: "lorempixel.city.1.jpeg",
        id: "project2",
        url: "project/Needfinding",
      },
      {
        name: "Nice life",
        image: "lorempixel.city.2.jpeg",
        id: "project3",
        url: "project/Nice life",
      },
    ],
  });
};
