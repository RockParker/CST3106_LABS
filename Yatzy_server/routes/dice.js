const express = require ('express');
const router = express.Router();

router.get('/roll-dices', (req, res) => {
    let ret = [];

    for(let i = 0; i < 5; i++)
    {
        ret.push( Math.floor(Math.random() * 6) + 1 );
    }
    res.setHeader('Access-Control-Allow-Origin', '*'); // fixes something call corp ??
    res.send(ret);
})


module.exports = router;