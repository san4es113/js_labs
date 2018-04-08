import React,{Component} from 'react';
import './Layout.css';
import MenuItem from '../../components/MenuItem/MenuItem';

class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuItems:[
        {name: 'Devices'},
        {name: 'Map'}
      ],
      activeMenuItem: ''
    }
  }
  onMenuItemClick = name => {
    this.setState({
      activeMenuItem: name
    });
  }

  render(){
    return (
      <div className="Layout">
        <aside>
          <ul>
            {this.state.menuItems.map( item => {
              return <li>
                <MenuItem 
                  key = {item.name}
                  name = {item.name} 
                  isActive = {item.name === this.state.activeMenuItem}
                  clicked = {() => this.onMenuItemClick(item.name)} 
                  />
              </li>
            })}
          </ul>
        </aside>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
export default Layout;