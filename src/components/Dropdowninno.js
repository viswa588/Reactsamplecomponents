import React from 'react';
import PropTypes from 'prop-types';
// import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';




class Dropdowninno extends React.Component {

  render() {
    const { name, defaultValue } = this.props;

    console.log('defaultValue', defaultValue);
    return (
      <Button color="danger">Danger!</Button>

    );
  }
}

Dropdowninno.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.bool
};

Dropdowninno.defaultProps = {
  name: 'Stranger'
  };

export default Dropdowninno;
