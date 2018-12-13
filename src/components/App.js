// @flow

import React from 'react';

import { ApolloProvider, client } from '../graphql/apollo';

import HomeScreenContainer from './HOC/HomeScreenContainer';

const App = () => (
    <ApolloProvider client={client}>
        <HomeScreenContainer />
    </ApolloProvider>
);

export default App;
