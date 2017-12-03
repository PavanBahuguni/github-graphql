# github-graphql
An express graphql endpoint for Github using express-graphql and graphql.

Application is hosted at https://github-graphql.herokuapp.com which exposes a GraphiQL interface.

Or you can clone the repo and run npm i or yarn in the directory and see the above GraphiQL interface at http://localhost:3000

Sample graphql query
```
{
  user(username: "PavanBahuguni") {
    id,
    login,
    avatar_url,
    public_repos,
    followers,
    following,
    state_admin,
    users_following {
      id
      login
      avatar_url
    }
  }
}
```
Output of the above graphql query would look like this
![Alt text](demo.png?raw=true "Graphql query results")
