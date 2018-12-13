// @flow

import React from 'react';

import { compose, graphql } from '../../graphql/apollo';
import { serverQueries, linkStateQueries } from '../../graphql/queries';

import HomeScreen from '../Home/HomeScreen';
import LoaderContainer from './LoaderContainer';

type Props = {
    dataQuery: Object,
    appStateQuery: Object
};

const HomeScreenContainer = ({ dataQuery, appStateQuery }: Props) => (
    <LoaderContainer loading={dataQuery.loading} error={dataQuery.error}>
        <HomeScreen
            data={dataQuery.transactions}
            visible={appStateQuery.list.listIsVisible}
        />
    </LoaderContainer>
);

export default compose(
    graphql(linkStateQueries.GET_LIST_VISIBILITY, {
        name: 'appStateQuery'
    }),
    graphql(serverQueries.GET_DATA, {
        name: 'dataQuery'
    })
)(HomeScreenContainer);
