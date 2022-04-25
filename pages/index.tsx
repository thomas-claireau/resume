import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Languages from '../components/Languages';

import { useAppContext } from '../AppContext';
import Button from '../components/Button';
import Box from '../components/Box';

export default function Home() {
  const [hostname, setHostname] = useState(null);
  const { i18n } = useAppContext();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostname(window.location.host);
    }
  }, []);

  return (
    <Container className="py-4" ref={componentRef}>
      <Header />

      <div className="flex flex-col gap-0 mt-8 md:flex-row md:gap-5 print:flex-row print:gap-5 print:mt-4">
        <main className="w-full min-w-[65%]">
          <div className="print:hidden">
            <h1 className="text-2xl font-normal">
              {i18n?.h1}
            </h1>
            <Languages className="flex md:hidden" />
          </div>
          <p className="text-lg mt-4">{i18n?.description}</p>
          <div className="buttons mt-6 flex flex-wrap gap-2 print:flex-col print:mt-3">
            <Button href="#" color="bg-[#88e7e2] print:text-[#88e7e2]" shadow="shadow-[0_2px_0_0_#5c9bfe]">
              <>
                <span className="print:hidden">{i18n?.buttons?.portfolio?.web}</span>
                <span className="hidden print:flex items-center gap-2">
                  <span className="mt-1">
                    💻
                  </span>
                  {`${hostname}${i18n?.buttons?.portfolio?.print}`}
                </span>
              </>
            </Button>
            <Button href={i18n?.buttons?.blog?.print} target="_blank" color="bg-[#ecbc87] print:text-[#ecbc87]" shadow="shadow-[0_2px_0_0_#df7700]">
              <>
                <span className="print:hidden">{i18n?.buttons?.blog?.web}</span>
                <span className="hidden print:flex items-center gap-2">
                  <span className="mt-1">
                    📚
                  </span>
                  {`${hostname}${i18n?.buttons?.blog?.print}`}
                </span>
              </>
            </Button>
          </div>

          <Box data={i18n?.projects} />
          <Box data={i18n?.formation} />
        </main>
        <aside className="w-full">
          <Box data={i18n?.skills} ul />
          <Box data={i18n?.tools} ul />
          <Box data={i18n?.interests} ul />

          <Languages className="hidden md:flex" />
        </aside>
      </div>

      <Footer handlePrint={handlePrint} />
    </Container>
  );
}
