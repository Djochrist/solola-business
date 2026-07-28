import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { PageBanner } from '@/components/PageBanner';
import { Boutique } from '@/components/Boutique';
import { Presentation } from '@/components/Presentation';
import { Footer } from '@/components/Footer';

export type Page = 'boutique' | 'presentation';

function App() {
  const [page, setPage] = useState<Page>('boutique');

  return (
    <div className="min-h-screen w-full bg-[#f0f2f5]">
      <Navbar page={page} setPage={setPage} />
      {page === 'boutique' ? (
        <>
          <PageBanner />
          <Boutique setPage={setPage} />
        </>
      ) : (
        <Presentation />
      )}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
