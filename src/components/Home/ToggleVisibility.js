// @flow

import React, { Component } from 'react';
import { Button } from 'react-native';

import { graphql } from '../../graphql/apollo';
import { linkStateQueries } from '../../graphql/queries';

type State = {
    visible: boolean
};

type Props = {
    mutate: any
};

export class ToggleVisibility extends Component<Props, State> {
    state = {
        visible: true
    };

    onPress = (visible: boolean) => {
        this.props
            .mutate({ variables: { listIsVisible: visible } })
            .then(res => {
                if (res) {
                    this.setState({ visible });
                }
            });
    };

    render() {
        return (
            <Button
                color="#841584"
                onPress={() => this.onPress(!this.state.visible)}
                title={this.state.visible ? 'Hide list' : 'Show list'}
            />
        );
    }
}

const ToggleVisibilityWithMutation = graphql(
    linkStateQueries.updateListVisibility
)(ToggleVisibility);

export default ToggleVisibilityWithMutation;
