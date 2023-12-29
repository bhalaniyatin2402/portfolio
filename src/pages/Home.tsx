import Layout from "../components/Layout";
import MernStackImage from "../../public/mern_stack.png";
import Resume from "../../public/my-resume.pdf";
import "../styles/pages/Home.scss";

function Home() {
  return (
    <main className="bg-light dark:bg-dark">
      <Layout>
        <section className="left">
          <img src={MernStackImage} alt="" />
        </section>
        <section className="right">
          <h1 className="text-dark dark:text-light">Hi There,</h1>
          <h1 className="text-dark dark:text-light">
            I'm
            <span>Bhalani yatin</span>
          </h1>
          <div className="buttons">
            <a
              href={Resume}
              download
              className="btn text-light dark:text-dark bg-dark dark:bg-light bottom-1 hover:border-light"
            >
              Resume
            </a>
            <a href="mailto:kano24022@gmail.com" className="underline">
              contact
            </a>
          </div>
        </section>
      </Layout>
    </main>
  );
}

export default Home;
