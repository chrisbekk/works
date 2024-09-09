import { FaArrowLeft } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { tPage } from '../types';

type NavbarProps = { page: string; setPage: (newPage: tPage) => void };

export const Navbar = ({ page, setPage }: NavbarProps) => {
  return (
    <div
      className={`w-full flex ${page === 'HOME' ? 'justify-end' : 'justify-between'} px-3 xs:px-10 py-3 lg:py-10`}
    >
      {page !== 'HOME' && (
        <button
          onClick={() => setPage('HOME')}
          className="flex items-center gap-2 xs:gap-3 text-2xl xs:text-3xl font-thin z-50 hover:cursor-pointer hover:text-neutral-300 transition-all"
        >
          <FaArrowLeft /> back
        </button>
      )}
      <div className="flex gap-3 xs:gap-10 items-center z-50">
        <a href="https://github.com/chrisbekk" target="_blank">
          <FaGithub className="text-2xl xs:text-3xl" />
        </a>
      </div>
    </div>
  );
};
