import { useAppContext } from '../AppContext';

export default function Footer() {
  const { i18n } = useAppContext();

  const date = new Date();

  return (
    <footer className="flex justify-between border-t mt-8 text-sm text-gray-300 pt-4">
      <div className="left">
        c.
        {' '}
        {date.getFullYear()}
        {' '}
        - Thomas Claireau (Design :
        {' '}
        <a href="https://linktr.ee/madewithjello" target="_blank" rel="noreferrer">Jason Mayfield Jr.</a>
        )
      </div>
      <div className="right cursor-pointer">
        {i18n.print}
      </div>
    </footer>
  );
}
