import SearchICon from '@/icons/searchIcon.svg';
import Logo from '@/images/Logo.svg';
import DropdownIcon from '@/icons/dropdownIcon.svg';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpensDropDown, setIsOpenDropDown] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY <= 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleDropdown = () => {
    setIsOpenDropDown(!isOpensDropDown);
  };

  const handleLogo = () => {
    router.push('/');
  };

  return (
    <motion.div
      animate={{
        backgroundColor: isTransparent
          ? 'rgba(0, 0, 0, 0)'
          : 'rgba(0, 0, 0, 0.8)',
      }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full"
    >
      <header className="mx-40 my-[26.75px] flex items-center justify-between">
        <button onClick={handleLogo}>
          <Logo />
        </button>
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleDropdown}
            className=" relative mr-10 flex items-center"
          >
            <span className=" mr-4 text-white">장르</span>
            <DropdownIcon />
            <div
              className={clsx(
                'absolute top-[35px] flex h-auto w-40 flex-col rounded-xl bg-[#121212]',
                {
                  hidden: isOpensDropDown === false,
                  block: isOpensDropDown === true,
                }
              )}
            >
              <span className="block rounded-lg p-2 hover:bg-gray">액션</span>
              <span className="block rounded-lg p-2 hover:bg-gray">로멘스</span>
              <span className="block rounded-lg p-2 hover:bg-gray">SF</span>
              <span className="block rounded-lg p-2 hover:bg-gray">판타지</span>
            </div>
          </button>
          <div className="flex h-9 w-[360px] items-center justify-between rounded-lg bg-[#404040] px-4 opacity-50">
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
    </motion.div>
  );
}
