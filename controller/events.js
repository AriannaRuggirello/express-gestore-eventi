

function index(req, res) {
    res.send('questa è la mia index page')
}

function store(req, res) {
    res.send('questa è la mia store page')
}

function update(req, res) {
    res.send('questa è la mia update page')
}

module.exports = {
    index,
    store,
    update
}
 