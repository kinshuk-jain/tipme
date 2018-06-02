import React, { Component } from 'react';
import { PostOrder } from '../../components';
import { INavigate } from '../../../../types/types';
import { data } from './data';

export class PostOrderScreen extends Component {
  render() {
    const { navigation } = this.props;
    return <PostOrder data={data} navigation={navigation} />;
  }
}

PostOrderScreen.propTypes = {
  navigation: INavigate,
};
