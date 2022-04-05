import Image from 'next/image';
import Link from 'next/link';

export default function Languages() {
  return (
    <div className="flex gap-3 border-t mt-6 pt-4 cursor-pointer">
      <Link href="/" locale="fr">
        <a><Image src="/img/fr.png" width={28} height={20} /></a>
      </Link>
      <Link href="/en" locale="en">
        <a><Image src="/img/en.png" width={28} height={20} /></a>
      </Link>
    </div>
  );
}
