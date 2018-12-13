// @flow

import React, { Component } from 'react';
import { Text, View, StyleSheet, VirtualizedList } from 'react-native';

import { Colours, Metrics } from '../../styles';
import ToggleVisibility from './ToggleVisibility';

const Styles = StyleSheet.create({
    container: {
        flex: Metrics.defaultMetrics.defaultFlex,
        paddingTop: Metrics.defaultMetrics.paddingTop,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colours.background
    },
    content: {
        flex: Metrics.defaultMetrics.defaultFlex,
        width: '100%'
    },
    listRow: {
        minHeight: Metrics.defaultMetrics.rowHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Metrics.defaultMetrics.padding,
        paddingLeft: Metrics.defaultMetrics.paddingHorizontal,
        paddingRight: Metrics.defaultMetrics.paddingHorizontal,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colours.border,
        backgroundColor: Colours.white
    },
    listHeader: {
        minHeight: Metrics.defaultMetrics.rowHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Metrics.defaultMetrics.padding,
        paddingLeft: Metrics.defaultMetrics.paddingHorizontal,
        paddingRight: Metrics.defaultMetrics.paddingHorizontal,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colours.border,
        backgroundColor: Colours.background
    },
    first: {
        flex: Metrics.defaultMetrics.defaultFlex,
        color: Colours.greyText
    },
    second: {
        flex: Metrics.defaultMetrics.defaultFlex
    },
    third: {
        flex: Metrics.defaultMetrics.defaultFlex
    },
    fourth: {
        flex: Metrics.defaultMetrics.defaultFlex,
        color: Colours.blue
    },
    placeholer: {
        textAlign: 'center'
    }
});

type Props = {
    data: Object,
    visible: string
};

type State = {};

export class HomeScreen extends Component<Props, State> {
    renderItem = (element: Object) => (
        <View key={`list_{element.item.id}`} style={Styles.listRow}>
            <Text style={Styles.first}>{element.item.title}</Text>
            <Text style={Styles.second}>{element.item.item.location}</Text>
            <Text style={Styles.third}>{element.item.item.type}</Text>
            <Text style={Styles.fourth}>{element.item.date}</Text>
        </View>
    );

    renderHeader = () => (
        <View style={Styles.listHeader}>
            <Text style={Styles.first}>Item</Text>
            <Text style={Styles.second}>Location</Text>
            <Text style={Styles.third}>Action</Text>
            <Text style={Styles.fourth}>Date</Text>
        </View>
    );

    render() {
        const renderList =
            this.props.data &&
            Object.keys(this.props.data).length &&
            this.props.data.length > 0 &&
            this.props.visible;

        const renderPlaceholer =
            this.props.data &&
            Object.keys(this.props.data).length &&
            this.props.data.length === 0;

        return (
            <View style={Styles.container}>
                <View style={Styles.content}>
                    {!renderPlaceholer ? <ToggleVisibility /> : null}

                    {renderList ? (
                        <VirtualizedList
                            getItemCount={data => data.length}
                            getItem={(data, index) => data[index]}
                            keyExtractor={(item, index) =>
                                `list_${index}_${item.value}`
                            }
                            renderItem={item => this.renderItem(item)}
                            data={this.props.data}
                            initialNumToRender={25}
                            windowSize={21}
                            ListHeaderComponent={() => this.renderHeader()}
                        />
                    ) : null}

                    {!this.props.visible ? (
                        <Text style={Styles.placeholer}>
                            The list is currently hidden!
                        </Text>
                    ) : null}

                    {renderPlaceholer ? (
                        <Text style={Styles.placeholer}>No elements :(</Text>
                    ) : null}
                </View>
            </View>
        );
    }
}
export default HomeScreen;
