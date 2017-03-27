var React = require('react');
var {NavLink} = require('react-router-dom');

var Nav = React.createClass({ 
    onSearch: function(e) {
        e.preventDefault();
        alert('Dewww I love you <3');
    },
    
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">{'I love my Tanya :) <3'}</li>
                        <li>
                            <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Mwah</NavLink>
                        </li>
                        <li>
                           <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Lovsies</NavLink>
                        </li>
                        <li>
                           <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Good Wife Examples</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-middle">
                   <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="submit" className="button" value="Click meeeee"/></li>
                        </ul>
                    </form>                   
                </div>
            </div>
        );
    }
});

module.exports = Nav;