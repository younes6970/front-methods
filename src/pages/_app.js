import Layout from "../component/layout/Layout";
import "../styles/_main.scss"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
