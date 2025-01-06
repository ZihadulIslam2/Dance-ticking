// import React, { useState } from 'react';
// import AddClassForm from './AddClassForm';
// import ExistingClasses from './ExistingClasses';

// function ClassManagement() {
//   const [showAddForm, setShowAddForm] = useState(false);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Class Management</h1>
//       <div className="mb-8">
//         <button
//           onClick={() => setShowAddForm(!showAddForm)}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           {showAddForm ? 'Hide Add Class Form' : 'Add Class'}
//         </button>
//       </div>
//       {showAddForm && <AddClassForm />}
//       <ExistingClasses />
//     </div>
//   );
// }

// export default ClassManagement;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddClassForm from './AddClassForm';
import ExistingClasses from './ExistingClasses';
import NewsletterForm from './NewsletterForm';

function ClassManagement() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out');
    navigate('/admin');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Class Management</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
      <div className="mb-8 space-x-4">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showAddForm ? 'Hide Add Class Form' : 'Add Class'}
        </button>
        <button
          onClick={() => setShowNewsletterForm(!showNewsletterForm)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {showNewsletterForm ? 'Hide Newsletter Form' : 'Send Newsletter'}
        </button>
      </div>
      {showAddForm && <AddClassForm />}
      {showNewsletterForm && <NewsletterForm />}
      <ExistingClasses />
    </div>
  );
}

export default ClassManagement;

