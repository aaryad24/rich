import React from 'react';
import PropTypes from 'prop-types';

const UserSelection = ({ 
  users = [], 
  selectedUserId, 
  onSelectUser, 
  onClaimPoints,
  onShowAddUser,
  onShowHistory
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={selectedUserId}
          onChange={(e) => onSelectUser(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
        >
          <option value="">Select a user</option>
          {Array.isArray(users) && users.map(user => (
            <option key={user._id} value={user._id}>
              {user.name} (Current: {user.totalPoints} pts)
            </option>
          ))}
        </select>

        <button
          onClick={onClaimPoints}
          disabled={!selectedUserId}
          className={`px-6 py-2 rounded-lg font-medium text-white shadow-sm transition-all ${!selectedUserId ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}`}
        >
          Claim Points
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onShowAddUser}
          className="flex-1 px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm transition-all"
        >
          Add New User
        </button>

        <button
          onClick={onShowHistory}
          className="flex-1 px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-sm transition-all"
        >
          View History
        </button>
      </div>
    </div>
  );
};


UserSelection.propTypes = {
  users: PropTypes.array,
  selectedUserId: PropTypes.string,
  onSelectUser: PropTypes.func.isRequired,
  onClaimPoints: PropTypes.func.isRequired,
  onShowAddUser: PropTypes.func.isRequired,
  onShowHistory: PropTypes.func.isRequired
};

UserSelection.defaultProps = {
  users: []
};

export default UserSelection;