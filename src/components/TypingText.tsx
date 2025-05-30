'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [' Cloud Security Engineer', ' Cybersecurity Enthusiast' , ' Career Consultant', ' Tech Blogger', ' Freelancer', ' Traineer'];

export default function TypingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    if (!deleting && subIndex < currentWord.length) {
      setTimeout(() => {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
      }, 100);
    } else if (deleting && subIndex > 0) {
      setTimeout(() => {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      }, 50);
    } else if (!deleting && subIndex === currentWord.length) {
      setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
  }, [subIndex, deleting]);

  return (
    <div className="text-2xl font-semibold">
      <span className="text-white">I'm a</span>
      <motion.span
        key={text}
        className="text-[#7CFC00]"
        // initial={{ opacity: 0.5 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.3 }}
      >
        {text}
        <span className="blinking-cursor">|</span>
      </motion.span>
    </div>
  );
}
