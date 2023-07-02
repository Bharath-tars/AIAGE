import { Fragment, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/pages/Destinations.module.css";
import PrimaryPageTitle from "../components/PrimaryPageTitle";
import PreloadImage from "../components/PreloadImage";
import Image from "next/image";

const Destinations: NextPage = () => {
  return (
    <Layout className={`text-white pb-2.5`} background="destination">
      <PrimaryPageTitle className={styles.title}>
        <span className="number">1</span>
        LOOK AT OUR MOJOS
      </PrimaryPageTitle>
      <Destination />
    </Layout>
  );
};

export default Destinations;

const Destination = () => {
  const [index, setIndex] = useState(0);
  const destination = destinations[index];

  return (
    <div
      className={`${styles.container} flex mx-auto lg:flex-row flex-col
                  lg:text-left text-center`}
    >
      <div className={`${styles.half}`}>
        <ImageAnim index={index}>
          <figure className={`${styles.image} relative h-full`}>
            <Image
              src={destination.images.webp}
              layout="fill"
              objectFit="contain"
              objectPosition="left center"
              alt={destination.name}
            />
          </figure>
        </ImageAnim>
      </div>
      <div className={`${styles.half}`}>
        <div>
          <ul
            className={`${styles.menu} flex justify-between nav-font text-blue
                        lg:m-0 mx-auto`}
          >
            {destinations.map((item, i) => (
              <Fragment key={i}>
                <PreloadImage src={item.images.webp} />
                <li
                  className={`${styles.menuItem} ${
                    i === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  {item.name}
                </li>
              </Fragment>
            ))}
          </ul>
          <TextAnim index={index}>
            <div>
              <p className="heading-2">{destination.name.toUpperCase()}</p>
              <p className="text-blue sm:mt-5 mt-3 sm:mb-12 mb-7">
                {destination.description}
              </p>
            </div>
          </TextAnim>
          <hr className="border-white border-opacity-25" />
          <TextAnim index={index}>
            <div className="sm:flex my-7 sm:space-y-0 space-y-7">
              <div className="flex-grow space-y-3.5">
                <h4 className="subheading-2 text-blue">AVG. SUCCESS</h4>
                <h3 className="subheading-1">{destination.distance}</h3>
              </div>
              <div className="flex-grow space-y-3.5">
                <h4 className="subheading-2 text-blue">Est. ACCURACY</h4>
                <h3 className="subheading-1">{destination.travel}</h3>
              </div>
            </div>
          </TextAnim>
        </div>
      </div>
    </div>
  );
};

// <Animations> //
const ImageAnim = ({
  children,
  index,
}: {
  children: React.ReactElement;
  index: number;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={600}
        key={index}
        classNames={{
          enter: styles.imageAnimEnter,
          enterActive: styles.imageAnimEnterActive,
          exit: "!hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
const TextAnim = ({
  children,
  index,
}: {
  children: React.ReactElement;
  index: number;
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={600}
        key={index}
        classNames={{
          enter: styles.textAnimEnter,
          enterActive: styles.textAnimEnterActive,
          exit: "!hidden",
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
// </Animations> //

// <Data> //
const destinations = [
  {
    name: "Innovate",
    images: {
      png: "/images/destination/image-inno.jpg",
      webp: "/images/destination/image-inno.webp",
    },
    description:
      "At TARS, we thrive on innovation. We continuously push boundaries, exploring new horizons and technologies to develop groundbreaking AI solutions. Our passion for innovation fuels our drive to create transformative AI experiences that unlock unprecedented opportunities for our clients.",
    distance: "78%",
    travel: "99.9%",
  },
  {
    name: "Colab",
    images: {
      png: "/images/destination/image-vate.png",
      webp: "/images/destination/image-vate.webp",
    },
    description:
      "Collaboration lies at the heart of everything we do. We believe that the best outcomes are achieved through diverse perspectives and collective intelligence. By fostering a culture of collaboration, we forge strong partnerships with our clients, working together to co-create tailored AI solutions that meet their unique needs.",
    distance: "91%",
    travel: "95%",
  },
  {
    name: "Grow",
    images: {
      png: "/images/destination/image-growth.png",
      webp: "/images/destination/image-growth.webp",
    },
    description:
      "We empower businesses to harness the true potential of AI. Our user-friendly interfaces and intuitive platforms enable organizations of all sizes to adopt and integrate AI seamlessly. Through education and support, we empower individuals and teams to become AI-enabled, driving their own success in the digital landscape.",
    distance: "72%",
    travel: "99.9%",
  },
  {
    name: "Social",
    images: {
      png: "/images/destination/image-social.png",
      webp: "/images/destination/image-social.webp",
    },
    description:
      "We are driven by a deep commitment to create a positive social impact. Our AI solutions are designed to address pressing global challenges, such as healthcare, education, sustainability, and social justice. By leveraging AI for the greater good, we strive to contribute to a more equitable and sustainable future for all.",
    distance: "50%",
    travel: "100%",
  },
];
// </Data> //
