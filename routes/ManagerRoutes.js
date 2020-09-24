const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

router.post('/addManager', managerController.add_Manager);
router.get('/getAll',managerController.getAll_Managers);
router.get('/getManager/:id',managerController.get_Manager_By_Id);
router.delete('/deleteManager/:id',managerController.delete_Manager);

module.exports = router;