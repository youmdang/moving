import SearchICon from '@/icons/searchIcon.svg';
import Logo from '@/images/Logo.svg';
import DropdownIcon from '@/icons/dropdownIcon.svg';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isTransparent, setIsTransparent] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY <= 50);
    };
    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleFocus = () => {
    inputRef.current?.focus();
  };



  return (
<motion.div
      animate={{
        backgroundColor: isTransparent ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.8)',
      }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full"
    >
      <header className="mx-40 my-[26.75px] flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <div className="mr-10 flex items-center">
            <span className="mr-4 text-white">장르</span>
            <DropdownIcon />
          </div>
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
