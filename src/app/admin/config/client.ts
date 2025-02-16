import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const createApolloClient = async () => {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;

  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_END_POINT,
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
