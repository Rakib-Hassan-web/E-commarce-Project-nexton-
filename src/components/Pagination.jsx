import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  return (
    <div className="mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
      {/* Prev */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <FaArrowLeft className="text-sm" />
        <span className="hidden sm:inline text-sm">Prev</span>
      </button>

      {/* Page Numbers */}
      <div className="flex flex-wrap justify-center gap-2">
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-2 text-sm font-medium border rounded-lg transition-all duration-200 ${
              currentPage === num
                ? "bg-gray-700 text-white border-gray-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200 ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        <span className="hidden sm:inline text-sm">Next</span>
        <FaArrowRight className="text-sm" />
      </button>
    </div>
  );
};
