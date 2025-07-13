import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faCrown } from '@fortawesome/free-solid-svg-icons';

export const UserAvatars = ({ users }) => {
  return (
    <div className="relative h-64 w-full mb-20">
      {/* Podium Base */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-t-xl shadow-2xl flex justify-around items-end">
        {/* 2nd place podium */}
        <div className="w-1/4 h-24 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-lg shadow-md flex justify-center items-start pt-2">
          <span className="text-gray-700 font-bold">2nd</span>
        </div>
        
        {/* 1st place podium */}
        <div className="w-1/4 h-32 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-t-lg shadow-lg flex justify-center items-start pt-2">
          <span className="text-yellow-700 font-bold">1st</span>
        </div>
        
        {/* 3rd place podium */}
        <div className="w-1/4 h-20 bg-gradient-to-b from-amber-200 to-amber-300 rounded-t-lg shadow-sm flex justify-center items-start pt-2">
          <span className="text-amber-700 font-bold">3rd</span>
        </div>
      </div>

      {/* Gold Medal (1st place) */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <div className="relative">
            <FontAwesomeIcon 
              icon={faCrown} 
              className="text-5xl text-yellow-400 absolute -top-8 -left-8 transform rotate-12" 
            />
            <div className="relative bg-white rounded-full p-3 shadow-xl ring-4 ring-yellow-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-2xl">
                {users[0]?.name.charAt(0)}
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-white font-bold text-xl bg-blue-900/80 px-4 py-1 rounded-full">
              {users[0]?.name}
            </div>
            <div className="text-yellow-300 font-extrabold text-2xl mt-1">
              {users[0]?.totalPoints} pts
            </div>
          </div>
        </div>
      </div>

      {/* Silver Medal (2nd place) */}
      <div className="absolute top-16 left-1/4 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-2 shadow-lg ring-2 ring-gray-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white font-bold text-xl">
              {users[1]?.name.charAt(0)}
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="text-white font-semibold bg-blue-900/80 px-3 py-1 rounded-full text-sm">
              {users[1]?.name}
            </div>
            <div className="text-gray-200 font-bold text-lg mt-1">
              {users[1]?.totalPoints} pts
            </div>
          </div>
        </div>
      </div>

      {/* Bronze Medal (3rd place) */}
      <div className="absolute top-16 left-3/4 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-2 shadow-lg ring-2 ring-amber-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-xl">
              {users[2]?.name.charAt(0)}
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="text-white font-semibold bg-blue-900/80 px-3 py-1 rounded-full text-sm">
              {users[2]?.name}
            </div>
            <div className="text-amber-200 font-bold text-lg mt-1">
              {users[2]?.totalPoints} pts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};