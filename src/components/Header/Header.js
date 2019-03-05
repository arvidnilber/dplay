import React, { Component } from 'react';
import Search from '../Search/Search'
class Header extends Component {
  render () {
    return (
    <div className='header'>
		<ul>
			<li className="waves-effect waves-light left">
			    <a href="/p/p/post">dplay</a>
			</li>
      <li>
        <Search/>
      </li>
		</ul>
    </div>
    )
  }
}
export default Header; 