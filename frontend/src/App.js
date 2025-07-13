import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserSelection from './components/UserSelection';
import Leaderboard from './components/Leaderboard';
import AddUserForm from './components/AddUserForm';
import HistoryModal from './components/HistoryModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './index.css'; // Assuming you have some global styles

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleClaimPoints = async () => {
    if (!selectedUserId) return;
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/${selectedUserId}/claim`
      );
      fetchUsers();
      toast.success(`Awarded ${response.data.points} points to ${response.data.user.name}`);
    } catch (error) {
      console.error('Error claiming points:', error);
    }
  };

  const handleAddUser = async (name) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, { name });
      setShowAddUser(false);
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/history`);
      setHistory(response.data);
      setShowHistory(true);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Leaderboard System
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Track and reward your team's achievements
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <UserSelection
            users={users}
            selectedUserId={selectedUserId}
            onSelectUser={setSelectedUserId}
            onClaimPoints={handleClaimPoints}
            onShowAddUser={() => setShowAddUser(true)}
            onShowHistory={fetchHistory}
          />
        </div>
        
        {showAddUser && (
          <AddUserForm
            onAddUser={handleAddUser}
            onCancel={() => setShowAddUser(false)}
          />
        )}
        
        {showHistory && (
          <HistoryModal
            history={history}
            onClose={() => setShowHistory(false)}
          />
        )}
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <Leaderboard users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;