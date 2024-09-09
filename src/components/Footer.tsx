import { FaArrowRight } from 'react-icons/fa';

import { tPage } from '../types';

type FooterProps = { page: tPage; setPage: (newPage: tPage) => void };

export const Footer = ({ page, setPage }: FooterProps) => {
  return (
    <div className="flex justify-end pr-4 pb-4">
      {page !== 'PROJECTS' && (
        <button
          onClick={() => setPage('PROJECTS')}
          className="flex z-50 items-center gap-3 text-3xl p-2 font-thin hover:cursor-pointer hover:text-neutral-300 transition-all"
        >
          <p>projects</p>

          <FaArrowRight />
        </button>
      )}
    </div>
  );
};
