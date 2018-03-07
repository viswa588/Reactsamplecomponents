import React from 'react';
import PropTypes from 'prop-types';

class MultiTextboxinno extends React.Component {
  render() {
    const { name, defaultValue } = this.props;
    return (
        <textarea
           type="text"
           name={name}
           defaultValue={defaultValue}
           cols="40"
           rows="5"
        />
    );
  }
}

MultiTextboxinno.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string
};

MultiTextboxinno.defaultProps = {
  name: 'Stranger'
  };

export default MultiTextboxinno;
