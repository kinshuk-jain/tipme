import React, { PureComponent } from 'react';
import {
  Modal,
  Picker,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { CustomText } from '../../common';
import { styles } from './picker.styles';
import { IStyle, ISelectItems } from '../../../types/types';

function getSelectedItem({ items, value }) {
  if (!value) {
    return items[0];
  }
  return items.find(item => item.value === value) || items[0];
}

export class PickerSelect extends PureComponent {
  state = {
    selectedItem: getSelectedItem(this.props),
    showPicker: false,
    animationType: undefined,
  };

  onUpArrow = () => {
    this.togglePicker();
    setTimeout(() => {
      this.props.onUpArrow();
    });
  }

  onDownArrow = () => {
    this.togglePicker();
    setTimeout(() => {
      this.props.onDownArrow();
    });
  }

  onValueChange = (value, index) => {
    const { onValueChange, items } = this.props;
    onValueChange(value, index);
    this.setState({
      selectedItem: items[index],
    });
  }

  togglePicker = (animate = false) => {
    const { enabled = true, animationType } = this.props;
    const { showPicker } = this.state;
    if (enabled) {
      // if (!showPicker && this.inputRef) {
      //   this.inputRef.focus();
      //   this.inputRef.blur();
      // }
      this.setState({
        animationType: animate ? animationType : undefined,
        showPicker: !showPicker,
      });
    }
  }

  iosPressHandler = () => this.togglePicker(true);

  renderChevron(style, callback) {
    const method = this.props[callback];
    return (
      <TouchableOpacity
        activeOpacity={method ? 0.5 : 1}
        onPress={method ? this[callback] : null}
      >
        <View
          style={[
            styles.chevron,
            style,
            method
              ? styles.chevronActive
              : {},
          ]}
        />
      </TouchableOpacity>
    );
  }

  renderDoneBar() {
    const { modalViewMiddle, doneText } = this.props;
    return (
      <View style={[styles.modalViewMiddle, modalViewMiddle]}>
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 15 }}>
          {this.renderChevron(styles.chevronUp, 'onUpArrow')}
          <View style={{ marginHorizontal: 10 }} />
          {this.renderChevron(styles.chevronDown, 'onDownArrow')}
        </View>
        <TouchableWithoutFeedback
          onPress={() => this.togglePicker(true)}
          hitSlop={{ top: 2, right: 2, bottom: 2, left: 2 }}
        >
          <CustomText textStyle={styles.done}>{doneText}</CustomText>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  renderIcon = () => (this.props.hideIcon ? null : <View style={styles.icon} />);

  renderTextInput() {
    return (
      <View pointerEvents="box-only" style={styles.textInputView}>
        <TextInput
          style={[
            !this.props.hideIcon ? styles.extraRightPadding : '',
          ]}
          value={this.state.selectedItem.label}
          ref={(ref) => { this.inputRef = ref; }}
        />
        {this.renderIcon()}
      </View>
    );
  }

  renderPickerItems = () =>
    this.props.items.map(item => (<Picker.Item {...item} key={item.label} />));

  renderIOS() {
    const { style, modalViewBottom } = this.props;
    const { showPicker, animationType, selectedItem } = this.state;
    return (
      <View style={[styles.viewContainer, style]}>
        <TouchableWithoutFeedback onPress={this.iosPressHandler}>
          {this.renderTextInput()}
        </TouchableWithoutFeedback>
        <Modal
          visible={showPicker}
          transparent
          animationType={animationType}
          supportedOrientations={['portrait', 'landscape']}
        >
          <TouchableOpacity style={styles.modalViewTop} onPress={this.iosPressHandler} />
          {this.renderDoneBar()}
          <View style={[styles.modalViewBottom, modalViewBottom]}>
            <Picker onValueChange={this.onValueChange} selectedValue={selectedItem.value}>
              {this.renderPickerItems()}
            </Picker>
          </View>
        </Modal>
      </View>
    );
  }

  renderAndroid() {
    const { style, underlineStyle, pickerStyle, ...props } = this.props;
    return (
      <View style={[styles.viewContainer, style]}>
        <Picker
          {...props}
          style={pickerStyle}
          onValueChange={this.onValueChange}
          selectedValue={this.state.selectedItem.value}
        >
          {this.renderPickerItems()}
        </Picker>
        <View style={[styles.underline, underlineStyle]} />
      </View>
    );
  }

  render() {
    return Platform.OS === 'ios' ? this.renderIOS() : this.renderAndroid();
  }
}

PickerSelect.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  items: ISelectItems,
  hideIcon: PropTypes.bool,
  enabled: PropTypes.bool,
  value: PropTypes.any,
  style: IStyle,
  underlineStyle: IStyle,
  pickerStyle: IStyle,
  modalViewBottom: IStyle,
  modalViewMiddle: IStyle,
  animationType: PropTypes.string,
  onUpArrow: PropTypes.func,
  onDownArrow: PropTypes.func,
  doneText: PropTypes.string,
};

PickerSelect.defaultProps = {
  hideIcon: false,
  value: undefined,
  style: undefined,
  enabled: true,
  animationType: 'slide',
  onUpArrow: null,
  onDownArrow: null,
  doneText: 'Done',
};
