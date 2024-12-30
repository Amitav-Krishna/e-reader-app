import React from 'react';
import { WebView } from 'react-native-webview';

const EpubReader = ({ uri }) => <WebView source={{ uri }} />;

export default EpubReader;

