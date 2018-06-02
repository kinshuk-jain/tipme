import React, { PureComponent } from 'react';
import { ScrollView, View, TextInput, Clipboard } from 'react-native';
import {
  AddButton,
  HorizontalRule,
  BackHeader,
} from '../../../library/components';
import { CustomText, Footer } from '../../../common';

import { styles } from './postOrder.styles';
import { addButtonData, message, transactionUrl } from './data';

export class PostOrderScreen extends PureComponent {
  clipboardCopy = () => {
    Clipboard.setString(transactionUrl.url);
    // eslint-disable-next-line
    alert('Copied to Clipboard!');
  }

  render() {
    return (
      <View style={styles.container}>
        <BackHeader />
        <ScrollView style={styles.scroller}>
          <CustomText wrapperStyle={styles.centerContent}>{message.noKeyText}</CustomText>
          <AddButton text={addButtonData.text} />
          <HorizontalRule style={styles.horizontalRule} text={'OR'} />
          <CustomText wrapperStyle={styles.centerContent}>{message.redirectText}</CustomText>
          <View style={[styles.centerContent, styles.urlbox]}>
            <TextInput
              style={styles.textInput}
              value={transactionUrl.url}
              editable={false}
            />
            <CustomText onPress={this.clipboardCopy}>Copy</CustomText>
          </View>
          <CustomText wrapperStyle={styles.centerContent}>{message.metamask}</CustomText>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
