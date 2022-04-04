import { useRouter } from 'next/router';
import {
  createContext, useContext, useEffect, useState,
} from 'react';

import en from './locales/en';
import fr from './locales/fr';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const router = useRouter();
  const { locale } = router;
  const [state, setState] = useState([]);

  useEffect(() => setState({
    i18n: locale === 'fr' ? fr : en,
  }), [locale]);

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

// context consumer hook
const useAppContext = () => {
  // get the context
  const context = useContext(AppContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useAppContext was used outside of its Provider');
  }

  return context;
};

export { useAppContext, AppContextProvider };
