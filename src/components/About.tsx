import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          
I'm a data engineer with 11+ years of experience, based in Pune, India.
I started my career writing PL/SQL and T-SQL for banking systems back in 2013. Back then it was mostly stored procedures, database maintenance, and moving data from one system to another. Nothing fancy — just making sure the data was clean, reliable, and where it needed to be.
Over the years, the tools changed. The problems got bigger. And I kept learning.
Today I work at AppDirect as a Senior Data Engineer where I spend most of my time building and optimizing data pipelines, designing data warehouses, and making sure the right data reaches the right people at the right time.
My current stack:
Databricks · Snowflake · DBT · Airflow · IICS · Python · MongoDB · SQL Server · Oracle · MySQL · PostgreSQL
I've also been spending time learning about AI and LLMs — understanding how large language models work, how vector databases fit into modern data architectures, and how data engineering practices are evolving to support AI-powered applications. It's an exciting space and I want to stay ahead of it, not catch up to it.
Some things I've done that I'm proud of:
— Moved an entire data infrastructure to the cloud and brought costs down by 35%
— Cut ETL processing time in half by rebuilding pipelines the right way using DBT and Airflow
— Set up automated data quality checks using DBT tests that the whole team now relies on
— Designed data warehouses using Star and Snowflake Schema that scaled with the business
Outside of the technical stuff, I genuinely enjoy the puzzle side of data work — figuring out why a pipeline broke at 2am, or why two numbers that should match don't. That kind of thing keeps me sharp.
I've worked across investment banking (BNP Paribas), e-commerce (AppDirect), travel tech (ATPI), and core banking (Trust Systems) — so I've seen how different industries think about and handle data very differently.
If you're working on something interesting in the data space — or just want to talk shop — feel free to reach out.
📩 vikram.lekhrajani@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;
