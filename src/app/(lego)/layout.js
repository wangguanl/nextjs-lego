import Layout from './_components/layout';
import LegoProvider from './_components/provider';
// import Store from './_components/store';

export default function LegoLayout({ children }) {
  return (
    // <Store>
    <LegoProvider>
      <Layout>{children}</Layout>
    </LegoProvider>
    // </Store>
  );
}
