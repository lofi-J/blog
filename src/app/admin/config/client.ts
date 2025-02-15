import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_END_POINT,
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
  cache: new InMemoryCache(),
});

export default client;
