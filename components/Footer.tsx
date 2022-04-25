import { useAppContext } from '../AppContext';

export default function Footer({ handlePrint }) {
  const { i18n } = useAppContext();

  const date = new Date();

  return (
    <footer className="flex flex-col items-center gap-3 justify-between border-t mt-8 text-sm text-gray-300 pt-4 md:flex-row md:gap-0 text-center print:hidden">
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
      <div className="right cursor-pointer hover:underline" onClick={handlePrint} aria-hidden>
        {i18n?.print}
      </div>
    </footer>
  );
}
