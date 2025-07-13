import React from 'react';

const Leaderboard = ({ users }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">Current Rankings</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Points
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => {
              // Calculate progress bar width (assuming max points is 1000 for demo)
              const progressWidth = Math.min(100, (user.totalPoints / 1000) * 100);
              const isTop3 = index < 3;
              
              return (
                <tr 
                  key={user._id} 
                  className={`${isTop3 ? 'bg-blue-50' : 'hover:bg-gray-50'} transition-colors`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {user.rank === 1 && (
                        <span className="mr-2 text-yellow-500">🥇</span>
                      )}
                      {user.rank === 2 && (
                        <span className="mr-2 text-gray-400">🥈</span>
                      )}
                      {user.rank === 3 && (
                        <span className="mr-2 text-amber-600">🥉</span>
                      )}
                      <span className={`font-medium ${isTop3 ? 'text-blue-600' : 'text-gray-900'}`}>
                        {user.rank}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 h-10 w-10 flex items-center justify-center text-white font-bold">
                          {user.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">@{user.name.toLowerCase().replace(/\s+/g, '')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {user.totalPoints} pts
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          user.rank === 1 ? 'bg-yellow-500' : 
                          user.rank === 2 ? 'bg-gray-400' : 
                          user.rank === 3 ? 'bg-amber-500' : 'bg-blue-500'
                        }`} 
                        style={{ width: `${progressWidth}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">{users.length}</span> participants
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;