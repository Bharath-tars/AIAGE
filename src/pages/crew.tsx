import { NextPage } from "next";
import { ReactElement, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import range from "../utils/range";
import Layout from "../components/Layout";
import PrimaryPageTitle from "../components/PrimaryPageTitle";
import styles from "../styles/pages/Crews.module.css";
import Image from "next/image";
import useBreakpoint from "../hooks/useBreakpoint";
import breakpoints from "../utils/breakpoints";
import PreloadImage from "../components/PreloadImage";
const Crew: NextPage = () => {
  return (
    <Layout
      background="crew"
      className="lg:text-left text-center pb-2.5 sm:pb-0
                 lg:pb-2.5 overflow-y-hidden relative"
    >
      <PrimaryPageTitle>
        <span className="number">2</span>
        MEET THE CREATOR
      </PrimaryPageTitle>
      {crew.map((member, i) => (
        <PreloadImage src={member.images.webp} key={i} />
      ))}
      <CrewMember />
    </Layout>
  );
};

export default Crew;

const CrewMember = () => {
  const [index, setIndex] = useState(0);
  const member = crew[index];

  return (
    <div
      className={`${styles.container} mx-auto uppercase flex max-h-full
                  lg:flex-row flex-col justify-between items-stretch`}
    >
      <div className="flex flex-col">
        <div className={styles.textCon}>
          <TextTransition id={index}>
            <div>
              <h2 className="heading-4 text-white text-opacity-50">
                {member.role}
              </h2>
              <h1 className={`heading-3 text-white ${styles.heading}`}>
                {member.name}
              </h1>
              <p className={`${styles.paragraph} ${styles[member.cls]}`}>
                {member.bio}
              </p>
              <p className={`${styles.paragraph} ${styles[member.cls]}`}>
                    <tr className={styles.socialLinks}>
                    &nbsp;                          &nbsp;
                          &nbsp;                          &nbsp;
                          &nbsp;
                          &nbsp;                          &nbsp;
                          &nbsp;                          &nbsp;
                          &nbsp;
                          &nbsp;                          &nbsp;
                          &nbsp;                          &nbsp;
                          &nbsp;
                         <th>
                            <a href="https://twitter.com/pheonixreaperr" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </a>  
                          </th>
                          &nbsp;                          &nbsp;
                          &nbsp;                          &nbsp;
                          &nbsp;
                          

                          <th>
                          
                            <a href="https://www.github.com/bharath-tars" target="_blank" rel="noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                              </svg>
                            </a>
                          </th>
                          &nbsp;                          &nbsp;
                          &nbsp;                          &nbsp;
                          &nbsp;



                          <th>
                            <a href="https://b4rpro.netlify.app" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>                    

                            </a>
                          </th>
                          &nbsp;                          &nbsp;
                          &nbsp;                          &nbsp;
                          &nbsp;



                          <th>
                            <a href="https://www.linkedin.com/in/bharath-s-81b4bb1a4/" target="_blank" rel="noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="icons" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                              </svg>
                            </a>                      
                          </th>
                    </tr>
                  </p>
            </div>
          </TextTransition>
        </div>
        <div
          className={`${styles.circles} flex justify-between lg:mx-0 mx-auto
                      sm:order-none -order-1 sm:my-0 my-8`}
        >
          {range(crew.length).map((i) => (
            <button
              onClick={() => {
                setIndex(i);
              }}
              key={i}
              className={i === index ? "active" : undefined}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex-grow sm:order-none -order-1 h-full">
        <ImageTransition
          id={index}
          className={`${styles.imageCon} ${styles[member.cls]}`}
        >
          <figure className={`${styles.image} relative`}>
            <Image
              src={member.images.webp}
              layout="fill"
              objectFit="contain"
              objectPosition={useBreakpoint(breakpoints.lg) ? "left" : "center"}
              alt={member.name}
            />
          </figure>
        </ImageTransition>
      </div>
    </div>
  );
};

// <Animation> //
const ImageTransition = ({
  id,
  children,
  className,
}: {
  id: number;
  children: ReactElement;
  className?: string;
}) => {
  return (
    <TransitionGroup className={className}>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.imageAnimEnter,
          enterActive: styles.imageAnimEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

const TextTransition = ({
  id,
  children,
}: {
  id: number;
  children: ReactElement;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={id}
        timeout={600}
        classNames={{
          enter: styles.textAnimEnter,
          enterActive: styles.textAnimEnterActive,
          exit: "hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// </Animation> //

// <Types> //
interface ICrewMember {
  cls: string;
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

// </Types> //

// <Data> //
const crew: ICrewMember[] = [
  {
    cls: "thelunatic",
    name: "Sudarsanam Bharath",
    images: {
      png: "/images/crew/ready-me1.png",
      webp: "/images/crew/ready-me1.webp",
    },
    role: "FOUNDER & CEO",
    bio:
      "Sudarsanam Bharath is a technology entrepreneur and an AI/ML undergraduate based in Hyderabad, India. With a diverse skill set and extensive experience in various domains, including web development, UI/UX design, API development and deployment, Google Cloud, DevOps, machine learning, and neural networks, Bharath has emerged as a dynamite.",
  },
];
// </Data> //
