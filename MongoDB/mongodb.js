require('../settings');
const mongoose = require('mongoose');

function connectGenBotdb() {
    mongoose.connect(MONGO_DB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Succes connect to GenBotdb ✅');
    });
};

module.exports.connectGenBotdb = connectGenBotDb;
