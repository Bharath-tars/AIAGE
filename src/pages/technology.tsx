import { NextPage } from "next";
import { ReactElement, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from "../components/Layout";
import PrimaryPageTitle from "../components/PrimaryPageTitle";
import range from "../utils/range";
import styles from "../styles/pages/Technology.module.css";
import Image from "next/image";
import useBreakpoint from "../hooks/useBreakpoint";
import breakpoints from "../utils/breakpoints";
import PreloadImage from "../components/PreloadImage";

const Technology: NextPage = () => {
  const isBreakpointLg = useBreakpoint(breakpoints.lg);
  return (
    <Layout background="technology">
      <PrimaryPageTitle className="!max-w-[1290px] mr-0 !px-4">
        <span className="number">3</span>
        TECH PROJECTS TILL DATE
      </PrimaryPageTitle>
      {techs.map((tech, i) =>
        isBreakpointLg ? (
          <PreloadImage src={tech.images.portrait} key={i} />
        ) : (
          <PreloadImage src={tech.images.landscape} key={i} />
        )
      )}
      <TechnologyItem />
    </Layout>
  );
};

export default Technology;

const TechnologyItem = () => {
  const [index, setIndex] = useState(0);
  const tech = techs[index];

  return (
    <div
      className={`${styles.container} flex justify-between lg:flex-row flex-col
                        items-stretch text-white lg:text-left text-center`}
    >
      <div className="lg:flex justify-between mt-[2.125rem] sm:mt-14 lg:mt-0">
        <div
          className="flex lg:flex-col justify-between lg:h-[18.2625rem] xl:mr-20
                         lg:mr-12 w-[9.5rem] sm:w-[13.125rem] lg:w-fit lg:mx-0 mx-auto"
        >
          {range(techs.length).map((i) => (
            <div
              className={`${styles.circle} ${index == i ? "active" : ""}`}
              onClick={() => {
                setIndex(i);
              }}
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="lg:mt-0 sm:mt-11 mt-[1.625rem] lg:px-0 px-3">
          <Animation id={index}>
            <div>
              <h3 className="nav-font text-blue">TARS ALKALI-I</h3>
              <h1 className={`${styles.heading} heading-3 uppercase`}>
                {tech.name}
              </h1>
              <p className={`${styles.paragraph} text-blue mx-auto lg:mx-0`}>
                {tech.description}
              </p>
              <p className={`${styles.git} text-blue mx-auto lg:mx-0`}>
              <a href={tech.repo}  target="_blank" rel="noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                              </svg>
               </a>
              </p>
              <br></br>
            </div>
          </Animation>
        </div>
      </div>
      <div className="lg:order-none -order-1">
        <Animation id={index}>
          <div className={`${styles.image} relative lg:max-w-[42.5vw]`}>
            <Image
              src={
                useBreakpoint(breakpoints.lg)
                  ? tech.images.portrait
                  : tech.images.landscape
              }
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={tech.name}
            />
          </div>
        </Animation>
      </div>
    </div>
  );
};

// <Data> //
const techs = [
  {
    name: "DealBuddy",
    images: {
      portrait: "/images/technology/image-price-portrait.png",
      landscape: "/images/technology/image-price-landscape.png",
    },
    description:
      "Track and predict E-Commerce prices like never before with our tech solution. Powered by Selenium WebDriver for accurate price tracking and machine learning algorithms for future price prediction, our tool revolutionizes how you shop on E-Commerce markets. Stay updated with real-time price fluctuations, analyze historical data for trends, and make data-driven decisions. ",
    repo: "https://github.com/Bharath-tars/Amazon_Automatic_Price_Notifier",
  },
  {
    name: "EmoSenseAI",
    images: {
      portrait: "/images/technology/image-sentiment-portrait.png",
      landscape: "/images/technology/image-sentiment-landscape.png",
    },
    description:
      "Sentiment analysis using Azure Cognitive Services enables automatic identification and classification of emotions in text data, providing insights and recomendations for better decision-making. The purpose of sentiment analysis is to identify the sentiment or polarity of the text, it is a common use case for customer feedback analysis, and market research.",
      repo: "https://github.com/Bharath-tars/Azure-Cognitive-Services_Sentiment-Analysis",
    },
  {
    name: "DeepTumor",
    images: {
      portrait: "/images/technology/image-deep-portrait.png",
      landscape: "/images/technology/image-deep-landscape.png",
    },
    description:
      "This project will be an important tool for healthcareprofessionals to improve the diagnosis and treatment of brain tumors. The high accuracy and efficiency of our deep learning model will ensure that patients receive timely and accurate information, leading to better patient outcomes.",
    repo: "https://github.com/Bharath-tars/DeepTumor",
    },
];
// </Data> //

// <Animations> //
const Animation = ({
  id,
  children,
  className,
}: {
  id: number;
  children: ReactElement;
  className?: string;
}) => {
  return (
    <TransitionGroup className={className || ""}>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.animEnter,
          enterActive: styles.animEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// <Animations> //
