import SearchICon from '@/icons/searchIcon.svg';
import Logo from '@/images/Logo.svg';
import DropdownIcon from '@/icons/dropdownIcon.svg';
import { useRef } from 'react';

export default function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="fixed top-0 w-full">
      <header className="mx-40 my-9 flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <div className="mr-10 flex items-center">
            <span className="mr-4">장르</span>
            <DropdownIcon />
          </div>
          <div className="flex h-9 w-[360px] items-center justify-between rounded-lg bg-[#404040] px-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="영화 제목을 입력해 주세요."
              className="w-full bg-transparent focus:outline-none"
            />
            <span className="relative cursor-pointer">
              <SearchICon onClick={handleFocus} />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
