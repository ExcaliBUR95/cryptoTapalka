import Tapalka from "./tapalka/page";
import { redirect } from 'next/navigation'


export default function Home() {
  
  return (
    <main className="flex justify-center items-center h-screen">
      {redirect('/tapalka')}
    </main>
  );
}


// todo: пересмотр общего лаяута, не трогая корневой
// import { ReactElement, ReactNode } from "react";
// import { NextPage } from "next";
// import { AppProps } from "next/app";
// import Layout from "./shared/layout/ui/Layout";

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// export default function Home({ Component, pageProps }: AppPropsWithLayout) {
//   const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

//   return (
//     <main className="flex justify-center items-center h-screen">
//       {getLayout(
//         <>
//           <Component {...pageProps} />
//         </>
//       )}
//     </main>
//   );
// }
