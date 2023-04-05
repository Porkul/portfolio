import { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";
import Project from "../project/ProjectCard";
import '../project/projectCard.css'
import "./portfolio.css";

import {
  frontEndPortfolio,
  webPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "web",
      title: "Apps",
    },
    {
      id: "frontend",
      title: "Front-End",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "frontend":
        setData(frontEndPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <>
      <section className="portfolio" id="portfolio">
      <h5 className='title' data-title="My recent"> Works</h5>
        <ul>
          {/* "active ? portfolioList active" : "portfolioList" */}
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="portfolio__container">
          {/* className="item" */}
          {data.map((data) => (
              <Project key={data.id} img={data.img}  title={data.title} desc={data.description} tools={data.tools} link={data.link}/>
          ))}
        </div>
      </section>
    </>
  );
}