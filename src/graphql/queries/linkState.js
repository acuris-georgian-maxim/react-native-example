// @flow

import gql from 'graphql-tag';

// Used by web/nav, web/header and web/root
const GET_MENU_VISIBILITY = gql`
    {
        menu @client {
            menuIsCollapsed
        }
    }
`;

const updateMenuVisiblity = gql`
    mutation updateMenuVisiblity($menuIsCollapsed: boolean!) {
        updateMenuVisiblity(menuIsCollapsed: $menuIsCollapsed) @client
    }
`;

// Used by native
const GET_LIST_VISIBILITY = gql`
    {
        list @client {
            listIsVisible
        }
    }
`;

const updateListVisibility = gql`
    mutation updateListVisibility($listIsVisible: boolean!) {
        updateListVisibility(listIsVisible: $listIsVisible) @client
    }
`;

export default {
    GET_LIST_VISIBILITY,
    GET_MENU_VISIBILITY,
    updateListVisibility,
    updateMenuVisiblity
};
