import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-boost';
 
import 'dotenv/config';
 
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  },
});
