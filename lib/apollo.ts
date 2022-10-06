import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri = `${
  process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_API_ROOT
}/api/query`

const apolloClient = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  credentials: 'include'
})

export default apolloClient
