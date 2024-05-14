/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {WalletSdk} from '@circle-fin/w3s-pw-react-native-sdk';
import React from 'react';
import {Button, SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  const _setBiometricsPin = async () => {
    try {
      await WalletSdk.init({
        endpoint: 'https://api.circle.com/v1/w3s/',
        appId: 'com.berify.pw',
        settingsManagement: {
          enableBiometricsPin: false,
          disableConfirmationUI: false,
        },
      });
    } catch (e) {
      // @ts-ignore
      console.log(e);
      return;
    }
  };
  return (
    <SafeAreaView>
      <Button title="test" onPress={_setBiometricsPin} />
    </SafeAreaView>
  );
}

export default App;
