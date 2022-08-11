import { createClient, useQuery } from 'urql';

export const ClientGraphQL = createClient({
    url: 'https://api.spacex.land/graphql/',
});

const RocketQuery = `
    query ($id: ID!){
        rocket(id: $id) {
            id
            name
            type
            height {
                meters
            }
            diameter {
                meters
            }
        }
    }
`;
interface IRocketId {
    id: string
}

interface IRocket {
    diameter: {
        meters: number;
    };
    height: {
        meters: number;
    };
    id: IRocketId;
    name: string;
    type: string;
}

interface IRocketOutput {
    data?: {
        rocket: IRocket | undefined,
    },
    fetching?: boolean,
    error?: any | undefined,
}

export const Rocket = ( {id} : IRocketId ): IRocketOutput => {
    const [result] = useQuery({
        query: RocketQuery,
        variables: { id },
        pause: !id,
    });
    return result;
};
