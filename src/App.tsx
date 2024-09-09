import { useState } from 'react';

import { tPage } from './types';

import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Main } from './components/Main';

function App() {
  const [page, setPage] = useState<tPage>('HOME');
  return (
    <div className="font-inter subpixel-antialiased h-screen xs:p-10 md:px-20 md:py-12 xl:py-16 bg-custom_black text-custom_cream ">
      <Layout>
        <Navbar page={page} setPage={setPage} />
        <div className="flex-grow">
          <Main page={page} />
        </div>
        <Footer page={page} setPage={setPage} />
      </Layout>
    </div>
  );
}

export default App;
