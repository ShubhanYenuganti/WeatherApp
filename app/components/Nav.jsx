var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className = "topnav">
      <a className = "a1">
        <IndexLink to="/">Get Weather</IndexLink>
      </a>
      <a className = "a2">
        <Link to="/about">About</Link>
      </a>
    </div>
  );
}

module.exports = Nav;
