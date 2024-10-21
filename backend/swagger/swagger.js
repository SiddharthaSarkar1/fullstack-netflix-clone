import swaggerAutogen from "swagger-autogen";

swaggerAutogen();

const doc = {
  info: {
    title: "Netflix Clone",
    description: "Netflix Clone App backend API's",
  },
  host: "localhost:5000/api/v1",
};

const outputFile = "./swagger-output.json";
const routes = [
  "../routes/auth.route.js",
  "../routes/movie.route.js",
  "../routes/tv.route.js",
  "../routes/search.route.js",
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
