import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
      >
        Anterior
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;
