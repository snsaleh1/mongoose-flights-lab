const Flight = require('../models/flight');
const router = express.Router();
const destinationsCtrl = require("../controllers/destinations.js");

router.post('flights/:id/destinations', destinationsCtrl.create);

