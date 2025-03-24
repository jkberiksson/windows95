import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Toast from './components/Toast';
import ShopProvider from './components/ShopProvider';

export const metadata = {
    title: 'TEKR | Shop',
};

export default function ShopLayout({ children }) {
    return (
        <ShopProvider>
            <div className='min-h-[100dvh] bg-black text-white font-inconsolata text-xs font-thin'>
                <div className='max-w-7xl mx-auto py-2 px-6'>
                    <Header />
                    <div className='my-12'>{children}</div>
                    <Toast ToastContainer={ToastContainer} />
                </div>
            </div>
        </ShopProvider>
    );
}
