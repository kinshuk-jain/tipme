import React, { PureComponent } from 'react';
import { ScrollView, View, TextInput, Clipboard } from 'react-native';
import PropTypes from 'prop-types';
import {
  IconButton,
  HorizontalRule,
} from '../../../library/components';
import { CustomText, Footer } from '../../../common';

import { styles } from './postOrder.styles';
// import { INavigate } from '../../../../types/types';

export class PostOrder extends PureComponent {
  clipboardCopy = () => {
    Clipboard.setString(this.props.data.transactionUrl.url);
    // eslint-disable-next-line
    alert('Copied to Clipboard!');
  }

  render() {
    const { /* navigation, */ data } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          <CustomText wrapperStyle={styles.centerContent}>{data.message.noKeyText}</CustomText>
          <IconButton text={data.addButtonData.text} />
          <HorizontalRule style={styles.horizontalRule} text={'OR'} />
          <CustomText wrapperStyle={styles.centerContent}>{data.message.redirectText}</CustomText>
          <View style={[styles.centerContent, styles.urlbox]}>
            <TextInput
              style={styles.textInput}
              value={data.transactionUrl.url}
              editable={false}
            />
            <CustomText onPress={this.clipboardCopy}>Copy</CustomText>
          </View>
          <CustomText wrapperStyle={styles.centerContent}>{data.message.metamask}</CustomText>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

PostOrder.propTypes = {
  // navigation: INavigate,
  data: PropTypes.object,
};
