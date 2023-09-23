import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLoader from '@/components/Loader/PageLoader';
import Layout from '@/layout/Layout';
import { Toaster } from 'react-hot-toast';

function App() {
  const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));
  const Landing = lazy(() => import('@/pages/Landing'));
  const Contact = lazy(() => import('@/pages/Contact/Contact'));
  const Register = lazy(() => import('@/pages/Auth/Register'));

  return (
    <div className=''>
      <Toaster />
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
