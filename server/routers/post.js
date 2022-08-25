const express = require("express")
let router = express.Router()

router.post("/getarticle", require("../controller/post").getarticle)
router.post("/getarticletag", require("../controller/post").getarticletag)
router.post("/publish", require("../controller/post").publish)





module.exports = router