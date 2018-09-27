import React from 'react';
import PropTypes from 'prop-types';

export default function Servers(props) {
  const { serverList } = props;
  return (
    <div>
      <h2>Servers</h2>
      {serverList.map(server => (
        <div key={server._id}>{server.name}</div>
      ))}
    </div>
  );
}

Servers.propTypes = {
  serverList: PropTypes.arrayOf(PropTypes.object) // TODO: Define object shape
};

Servers.defaultProps = {
  serverList: [
    { name: 'Jimmy', _id: '38hiodsn' },
    { name: 'Randy', _id: 'dgas98yh3n2' },
    { name: 'Carl', _id: 'asg0hio2n3' }
  ]
};