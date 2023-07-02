import { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Home.module.css";
const Home: NextPage = () => {
  return (
    <Layout
      background="home"
      className="pb-2.5 overflow-hidden"
    >
      <header className={`${styles.hero} h-full`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.half}>
            <h5 className="heading-5 text-blue">Welcome to the future of AI!</h5>
            <h1 className="heading-1 sm:mt-7 mt-5">Hehe</h1>
            <p className={`text-blue sm:mt-7 mt-5 ${styles.paragraph}`}>
            We are revolutionizing how people use artificial intelligence to foster development and innovation. 
            Prepare to go on a revolutionary adventure as we unleash the full power of AI technology to propel the future of the humanity to new heights! #TARS2K35
            </p>
          </div>
          <div className={`${styles.half} flex justify-end`}>
            <a href="https://tarsai.netlify.app/destination"
              className={`${styles.exploreBtn} after:grid
                                after:place-content-center`}
            ></a>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
