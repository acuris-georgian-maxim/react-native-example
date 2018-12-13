// @flow

import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { config } from '../config';

const cache = new InMemoryCache({
    dataIdFromObject: object => object.key || null
});

const defaults = {
    list: {
        listIsVisible: true,
        __typename: 'list'
    },
    menu: {
        menuIsCollapsed: false,
        __typename: 'menu'
    }
};

const stateLink = withClientState({
    cache,
    defaults,
    resolvers: {
        Mutation: {
            /* eslint-disable */
            updateListVisibility: (_, { listIsVisible }, { cache }) => {
                /* eslint-enabled */
                const data = {
                    list: {
                        listIsVisible,
                        __typename: 'list'
                    }
                };

                cache.writeData({ data });
                return null;
            },
            updateMenuVisiblity: (_, { menuIsCollapsed }, { cache }) => {
                /* eslint-enabled */
                const data = {
                    menu: {
                        menuIsCollapsed,
                        __typename: 'menu'
                    }
                };

                cache.writeData({ data });
                return null;
            }
        }
    }
});

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([stateLink, new HttpLink({ uri: config.graphQlUrl })])
});

client.onResetStore(stateLink.writeDefaults);

export default client;
