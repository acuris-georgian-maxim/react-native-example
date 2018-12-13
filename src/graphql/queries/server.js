// @flow

import gql from 'graphql-tag';

const ITEM_FRAGMENT = {
    vessel: gql`
        fragment itemFragment on Item {
            id
            location
            type
        }
    `
};

const GET_DATA = gql`
    query item {
        transactions {
            id
            title
            date
            item {
                ...itemFragment
            }
        }
    }
    ${ITEM_FRAGMENT.vessel}
`;

export default {
    GET_DATA
};
