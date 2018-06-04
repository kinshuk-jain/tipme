import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Header, CustomText } from '../../../common';

import { styles } from './backHeader.styles';
import { INavigate } from '../../../../types/types';

export class BackHeader extends PureComponent {
  backClickHandler = () => {
    const { onBackClick = () => ({}), navigation } = this.props;
    onBackClick();
    navigation.goBack();
  }

  render() {
    const { navigation, onBackClick, ...props } = this.props;
    return (
      <Header {...props}>
        <View style={styles.container}>
          <CustomText
            onPress={this.backClickHandler}
            wrapperStyle={styles.logo}
          >
            Back
          </CustomText>
          <CustomText wrapperStyle={styles.logo}>Logo</CustomText>
          <CustomText wrapperStyle={styles.settings}>Gear</CustomText>
        </View>
      </Header>
    );
  }
}

BackHeader.propTypes = {
  onBackClick: PropTypes.func,
  navigation: INavigate,
};
