const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Testing graphql',
    fields: () => ({
        hello: {
            type: GraphQLString,
            description: 'Accepts a name so you can be nice ans say hi',
            args: {
                name: {type: GraphQLString}
            },
            resolve: (_, args) => {
                return `Hello, ${args.name}`
            }
        },
        luckyNumber: {
            type: GraphQLInt,
            description: 'A lucky number',
            resolve: () => {
                console.log('number');
                return 88;
            }
        }
    })
});

const schema = new GraphQLSchema({query});

module.exports = schema;