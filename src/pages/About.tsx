import { Icon } from "@iconify/react";

import Layout from "../components/Layout";
import SkillIcon from "../components/SkillIcon";
import { data } from "../data";
import "../styles/pages/About.scss";

function About() {
  return (
    <main className="about bg-light dark:bg-dark">
      <section className="skills">
        <h1 className="text-dark dark:text-light">Skills</h1>
        <Layout className="flex">
          {data.map((item) => (
            <SkillIcon
              key={item.name}
              name={item.name}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          ))}
        </Layout>
      </section>

      <section className="education">
        <h1 className="text-dark dark:text-light">Education</h1>
        <Layout>
          <div className="diploma bg-[#bbb9b9]">
            <h3 className="text-dark">Silver Oak University</h3>
            <p className="text-orange-800">2021-2024</p>
            <p className="text-dark">B.tech in Civil Engineering</p>
          </div>
          <div className="bachelor bg-[#bbb9b9]">
            <h3 className="text-dark">Government Polytechnic</h3>
            <p className="text-orange-800">2018-2021</p>
            <p className="text-dark">Diploma in Civil Engineering</p>
          </div>
        </Layout>
      </section>

      <section className="certification">
        <h1 className="text-dark dark:text-light">Courses</h1>
        <Layout>
          <div className="web-development bg-[#bbb9b9]">
            <h3 className="text-dark">full stack web development</h3>
            <p className="text-dark">
              From:
              <span> pw skills</span>
            </p>
            <p className="text-orange-800">Jan/2023-Oct/2023</p>
            <a
              href="https://learn.pwskills.com/certificate/24687944-841d-4296-8d62-bb6afd5dd816"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-end items-center gap-[2px] underline text-blue-800"
            >
              Certificate <Icon icon="uil:external-link-alt" />
            </a>
          </div>
        </Layout>
      </section>
    </main>
  );
}

export default About;
