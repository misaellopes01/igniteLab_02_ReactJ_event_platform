import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4o1400o049301z78zy62s3f/master',
    cache: new InMemoryCache()
})