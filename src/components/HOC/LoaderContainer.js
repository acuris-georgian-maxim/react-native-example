// @flow
import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import { Colours, Metrics } from '../../styles';

const Styles = StyleSheet.create({
    container: {
        flex: Metrics.defaultMetrics.defaultFlex,
        paddingTop: Metrics.defaultMetrics.paddingTop,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.background
    }
});

type Props = {
    loading: boolean,
    error: any,
    children: any
};

const LoaderContainer = (props: Props) => {
    if (props.loading) {
        return (
            <View style={Styles.container}>
                <ActivityIndicator />
                <Text>loading your data</Text>
            </View>
        );
    }

    if (props.error) {
        return (
            <View style={Styles.container}>
                <Text>:( data fetching error</Text>
            </View>
        );
    }

    return props.children;
};

export default LoaderContainer;
