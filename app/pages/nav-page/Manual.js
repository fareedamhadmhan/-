import React from 'react';
import WebView from 'react-native-webview';

export default class manualScreen extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%84%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88' }}
                style={{
                    flex: 1,
                    backgroundColor: '#66B2FF'
                }}
            />
        );
    }
}