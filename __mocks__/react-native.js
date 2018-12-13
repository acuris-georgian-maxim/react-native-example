const reactNative = require('react-native');

jest.mock('StyleSheet', () => ({
    create: jest.fn()
}));

jest.mock('AppState', () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
}));

jest.mock('NetInfo', () => ({
    isConnected: {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
    }
}));

jest.mock('ActionSheetIOS', () => ({
    showShareActionSheetWithOptions: jest.fn()
}));

jest.mock('Linking', () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn()
}));

jest.mock('Keyboard', () => ({
    dismiss: jest.fn(),
    addListener: jest.fn(() => ({ remove: jest.fn() }))
}));

jest.mock('LayoutAnimation', () => ({
    easeInEaseOut: jest.fn()
}));

jest.mock('Platform', () => ({
    OS: 'ios',
    select: selectable => selectable.ios
}));

jest.mock('AsyncStorage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn()
}));

jest.mock('BackHandler', () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
}));

jest.mock('Alert', () => ({
    alert: jest.fn()
}));

module.exports = reactNative;
