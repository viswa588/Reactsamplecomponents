import React from 'react';
import Dropdowninno from '../components/Dropdowninno';



class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">

        <div> <label className={this.props.labelName}>{this.props.Name}</label>


        <Dropdowninno
          name={this.props.name}
          defaultValue
          // readOnly={this.props.editable}
                    />
       </div>

      </div>
    );
  }
}

export default ShoppingList;
