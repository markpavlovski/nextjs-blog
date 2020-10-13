import { GraphQLClient } from "graphql-request";
export function request({ query, variables, preview }) {
    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer 9f323fabbef47e81b0c4901d06d7d8`
        }
    });
    return client.request(query, variables);
}