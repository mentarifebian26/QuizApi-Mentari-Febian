const jobsheetController = require('../controllers/jobsheet'); 
const router = require('express'). Router();

router.post('/one', jobsheetController.submitone);
router.post('/many', jobsheetController.submitMany);
module.exports = router;