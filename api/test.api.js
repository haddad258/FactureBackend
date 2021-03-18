const app = require('../index');

app.get('/', async (req, res) => {
    res.json(await app.db.table('newtable'));
});