import { useState } from 'react';

export const usePagination = (itemsPerPage, items) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    const page = Math.max(1, Math.min(pageNumber, maxPage));
    setCurrentPage(page);
  };

  return { currentItems, currentPage, maxPage, nextPage, prevPage, goToPage };
};
