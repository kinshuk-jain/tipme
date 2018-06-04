import React, { Component } from 'react';
import { PostOrder } from '../../components';
import { BackHeader } from '../../../library/components';
import { INavigate } from '../../../../types/types';
import { data } from './data';

export class PostOrderScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { onBackClick } = navigation.state.params || {};
    return {
      header: <BackHeader onBackClick={onBackClick} />,
      title: 'Transfer',
    };
  };

  componentWillMount() {
    const { navigation } = this.props;
    // const params = navigation.getParam('unique');
    navigation.setParams({ onBackClick: this.onBackClick });
  }

  onBackClick = () => {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    const { navigation } = this.props;
    return <PostOrder data={data} navigation={navigation} />;
  }
}

PostOrderScreen.propTypes = {
  navigation: INavigate,
};
