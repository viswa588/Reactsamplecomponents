import React from 'react';
import PropTypes from 'prop-types';

class CheckBoxinno extends React.Component {
  render() {
    const { name, defaultValue } = this.props;
    return (
        <input
           type="radio"
           name={name}
           value={defaultValue}
           checked={defaultValue}
        />
    );
  }
}

CheckBoxinno.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.bool
};

CheckBoxinno.defaultProps = {
  name: 'Stranger',
  defaultValue: false
  };

export default CheckBoxinno;
