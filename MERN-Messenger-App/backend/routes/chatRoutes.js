const express = require("express");
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//for accessing or creating the chat
router.route('/').post(protect, accessChat);

// //get all chats from database for that particular user
// router.route("/").get(protect, fetchChats);

// //for creation of groups
router.route('/group').post(protect, createGroupChat);

// //For renaming a group
router.route('/rename').put(protect, renameGroup);

// //For adding new person to a group 
 router.route('/addtogroup').put(protect, addToGroup);


// //For removing a group
 router.route('/removefromgroup').put(protect, removeFromGroup);

module.exports = router;










