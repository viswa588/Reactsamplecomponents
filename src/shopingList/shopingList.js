import React from 'react';
import Textboxinno from '../components/Textboxinno';



class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">

        <div> <label className={this.props.labelName}>{this.props.Name}</label>


        <Textboxinno
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
