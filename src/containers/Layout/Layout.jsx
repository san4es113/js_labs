import React,{Component} from 'react';
import { connect } from 'react-redux';
import './Layout.css';
import MenuItem from '../../components/MenuItem/MenuItem';
import { logout } from '../../store/actions/auth';

class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuItems:[
        {
          name: 'Devices',
          path: '/devices'
        },
        {
          name: 'Map',
          path: '/device-map'
        }
      ],
      activeMenuItem: 'Devices'
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
        <header>
          <img src="" style={{width:'40px',height:'40px'}}/>
          <button onClick={this.props.logout} className = "logout-btn">Log out</button>
        </header>
        <div className = "header-bottom">
          <aside>
            <ul>
              {this.state.menuItems.map(item => {
                return <li key = {item.name}>
                  <MenuItem
                    name = {item.name}
                    path = {item.path}
                    isActive = {item.name === this.state.activeMenuItem}
                    clicked = {() => this.onMenuItemClick(item.name)} 
                  />
                </li>
              })}
            </ul>
          </aside>
        <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Layout);