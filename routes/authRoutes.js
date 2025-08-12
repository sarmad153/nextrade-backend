const express = require("express");
const { registerUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);

// Temporary test route
router.get("/test", (req, res) => {
    res.send("Auth route is working!");
});

module.exports = router;
