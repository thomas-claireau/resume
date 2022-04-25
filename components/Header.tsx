import Image from 'next/image';

import Link from 'next/link';

import Button from './Button';

import { useAppContext } from '../AppContext';
import { useWindowSize } from '../hooks';

export default function Header() {
  const { i18n } = useAppContext();

  const { width } = useWindowSize();

  return (
    <header className="flex items-center justify-between pb-8 border-b border-gray-100">
      <div className="left flex items-center gap-3 sm:gap-6">
        <Button color="bg-[#c3ace9] print:text-[#c3ace9]" shadow="shadow-[0_2px_0_0_#a439ff]" href="mailto:pro.thomas.claireau@gmail.com" target="blank">
          {width >= 640 ? (
            <>
              <span className="print:hidden">{i18n?.contact.web}</span>
              <a href={i18n?.contact.print} className="hidden print:flex items-center gap-2">
                <span className="mt-1">
                  💌
                </span>
                {i18n?.contact.print}
              </a>
            </>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}

        </Button>
        <Link href="https://www.linkedin.com/in/thomas-claireau/recent-activity/shares/">
          <a className="text-gray-300 print:hidden" target="blank">Blog</a>
        </Link>
      </div>
      <div className="flex items-center relative gap-4">
        <div className="flex flex-col items-end">
          <h2 className="font-medium">Thomas Claireau</h2>
          <h3 className="font-light text-sm sm:text-base">{i18n?.job}</h3>
        </div>

        <div className="relative w-[60px] h-[60px] hidden mini:flex items-center print:w-[80px] print:h-[80px]">
          <Image className="rounded-full" objectFit="cover" src="/img/me.jpg" layout="fill" />
        </div>
      </div>
    </header>
  );
}
