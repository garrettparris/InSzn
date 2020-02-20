var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next)
{
    // router.get('/', async (req, res) => {
    //     try {
      
    //     } catch (err) {
      
    //     }
    //   })
    var month = req.params.id;
    res.send(month);
});

module.exports = router;