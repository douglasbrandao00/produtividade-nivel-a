const setupApp = require('./src/app');

const port = 3000

setupApp.listen(port, () => console.log(`app is runnig on port: ${port}`))

setupApp.get('/', (req, res) => res.send('hahahahah'))
