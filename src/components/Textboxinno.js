import React from 'react';
import PropTypes from 'prop-types';

class Textboxinno extends React.Component {
  render() {
    const { name, defaultValue } = this.props;
    return (
        <input
           type="text"
           name={name}
           defaultValue={defaultValue}
        />
    );
  }
}

Textboxinno.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string
};

Textboxinno.defaultProps = {
  name: 'Stranger'
  };

export default Textboxinno;
