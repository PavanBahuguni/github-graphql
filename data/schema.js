const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql');
const axios = require('axios');

const userInfo = new GraphQLObjectType({
    name: 'userInfo',
    description: 'Github user information',
    fields: () => ({
        login: {type: GraphQLString},
        id: {type: GraphQLInt},
        avatar_url: {type: GraphQLString},
        state_admin: {type: GraphQLBoolean},
        public_repos: {type: GraphQLInt},
        followers: {type: GraphQLInt},
        following: { type: GraphQLInt },
        following_url: {
            type: GraphQLString,
            resolve: (obj) => {
                const brackIndex = obj.following_url.indexOf('{');
                return obj.following_url.slice(0, brackIndex);
            }
        }
    })
})
const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Testing graphql',
    fields: () => ({
        user: {
            type: userInfo,
            description: 'Github user API data with enhanced and additional data',
            args: {
                username: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: `The GitHub user login you want information on`,
                }
            },
            resolve: (_, {username}) => {
                const url = `https://api.github.com/users/${username}`
                return axios.get(url)
                    .then((response) => {
                        return response.data;
                    })
            }
        }
    })
});

const schema = new GraphQLSchema({query});

module.exports = schema;