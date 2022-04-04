import { useRouter } from 'next/router';
import Image from 'next/image';

import Link from 'next/link';

import Button from './Button';

import en from '../locales/en';
import fr from '../locales/fr';

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (
    <header className="flex items-center justify-between pb-8 border-b-2 border-gray-100">
      <div className="left flex items-center gap-6">
        <Button color="bg-[#c3ace9]" shadow="shadow-[0_2px_0_0_#a439ff]" href="mailto:pro.thomas.claireau@gmail.com" target="blank">{t.contact}</Button>
        <Link href="/blog">
          <a className="text-gray-300" target="blank">Blog</a>
        </Link>
      </div>
      <div className="flex items-center relative gap-4">
        <div className="flex flex-col items-end">
          <h2 className="font-medium">Thomas Claireau</h2>
          <h3 className="font-light">{t.job}</h3>
        </div>

        <Image className="rounded-full" objectFit="cover" src="/img/me.jpg" layout="fixed" width={40} height={40} />
      </div>
    </header>
  );
}
