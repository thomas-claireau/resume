import Image from 'next/image';
import Link from 'next/link';

type Props = {
	className?: string;
}

export default function Languages({ className = '' }: Props) {
  return (
    <div className={`${className} flex gap-3 border-t mt-6 pt-4 cursor-pointer`}>
      <Link href="/" locale="fr">
        <a><Image src="/img/fr.png" width={28} height={20} /></a>
      </Link>
      <Link href="/en" locale="en">
        <a><Image src="/img/en.png" width={28} height={20} /></a>
      </Link>
    </div>
  );
}
