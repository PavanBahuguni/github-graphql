const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./data/schema');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});