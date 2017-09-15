import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

class SettingsMenu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <DropdownMenu triggerType="text" trigger="Marker color" className="dmenu">
      <p className="corner_yellow" style={{cursor: 'pointer'}}></p>
      <p className="corner_red" style={{cursor: 'pointer'}}></p>
      <p className="corner_blue" style={{cursor: 'pointer'}}></p>
      <p className="corner_green" style={{cursor: 'pointer'}}></p>
      <p className="corner_black" style={{cursor: 'pointer'}}></p>


      </DropdownMenu>
    );
  }
}

export default SettingsMenu;
