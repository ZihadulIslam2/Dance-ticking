import React from 'react';

// Hardcoded data for existing classes
const existingClasses = {
  'NYC/NJ Group': [
    { id: 1, date: '2023-12-01', timeFrom: '18:00', timeTo: '19:30', price: 3000 },
    { id: 2, date: '2023-12-08', timeFrom: '18:00', timeTo: '19:30', price: 3000 },
  ],
  'Private': [
    { id: 3, date: '2023-12-02', timeFrom: '10:00', timeTo: '11:00', price: 5000 },
    { id: 4, date: '2023-12-09', timeFrom: '10:00', timeTo: '11:00', price: 5000 },
  ],
  'Online': [
    { id: 5, date: '2023-12-03', timeFrom: '20:00', timeTo: '21:30', price: 2000 },
    { id: 6, date: '2023-12-10', timeFrom: '20:00', timeTo: '21:30', price: 2000 },
  ],
};

function ExistingClasses() {
  const handleEdit = (classType, id) => {
    console.log(`Editing class of type ${classType} with id ${id}`);
  };

  const handleDelete = (classType, id) => {
    console.log(`Deleting class of type ${classType} with id ${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Existing Classes</h2>
      {Object.entries(existingClasses).map(([classType, classes]) => (
        <div key={classType} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{classType}</h3>
          <div className="bg-white shadow-md rounded overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Time</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {classes.map((cls) => (
                  <tr key={cls.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{cls.date}</td>
                    <td className="py-3 px-6 text-left">{`${cls.timeFrom} - ${cls.timeTo}`}</td>
                    <td className="py-3 px-6 text-left">${(cls.price / 100).toFixed(2)}</td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => handleEdit(classType, cls.id)}
                        className="text-blue-500 hover:text-blue-700 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(classType, cls.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExistingClasses;

