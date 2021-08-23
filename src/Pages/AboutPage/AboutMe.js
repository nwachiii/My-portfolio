import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

import abt1 from "../../assets/imgs/about1.jpeg";
import abt2 from "../../assets/imgs/about2.jpg";
import abt3 from "../../assets/imgs/about3.jpeg";
import abt4 from "../../assets/imgs/about4.jpg";
import abt6 from "../../assets/imgs/about6.jpg";
import { Heading } from "@chakra-ui/react";
// import { Flex } from "@chakra-ui/react";

// All Tools, Skills, information a recruiter would love to see

function AboutMe() {
  return (
    <div className="sections-wrap">
      <div className="section">
        <motion.div
          whileHover={{ scale: 0.9 }}
          className="image-wrap"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        >
          <img className="img" src={abt6} alt="" />
        </motion.div>
        <div className="text-wrap">
          <Heading mb={3} as="h4" color="teal.600">
            About Me
          </Heading>

          <p>
            Hi there! I'm Emmanuel. I'm a huge proponent for breaking goals down
            into tiny bits, and that's why I love to write code in a
            modularized, maintainable and scalable pattern.
          </p>
          <br />
          <p>
            My first experience with programming was inspired by my mentor -
            Ohans Emmanuel. I had just gained admission to the University and so
            he encouraged me to learn to code. He was kind enough to teach me
            the rudiments of JavaScript and walk me through Freecodecamp.
          </p>
        </div>
      </div>

      <div className="section sectionEven">
        <motion.div
          whileHover={{ scale: 0.9 }}
          className="image-wrap"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        >
          <img className="img" src={abt3} alt="" />
        </motion.div>
        <div className="text-wrap">
          {/* <Heading mb={3} as="h4" color="teal.600">
            Skill Set
          </Heading> */}
          <i>
            <p>
              About a year later, I took a Java course in the University which
              focused on data structures and algorithms. I scored 74% and 90%
              respectively for two semesters which was a major boost to my
              confidence and improved my understanding of core programming
              concepts.
            </p>
            <br />
            <p>
              It occured to me: I had developed a vital skill to speak & write
              the computer's language; a skill with the potential to solve real
              life problems. So, I went back to finish up the curriculum & get
              the freecodecamp's frontend certification.
            </p>
          </i>
        </div>
      </div>

      <div className="section">
        <motion.div
          whileHover={{ scale: 0.9 }}
          className="image-wrap"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        >
          <img className="img" src={abt2} alt="" />
        </motion.div>
        <div className="text-wrap">
          <Heading mb={3} as="h4" color="teal.600">
            More...
          </Heading>
          <p>
            Since then, I have been honing my skills and staying up to date with
            industry trends, updates & new frontend technologies.
            <br />I gratuated from the Hotels.ng 11-week intensive remote
            bootcamp in 2020, after which I learnt React and that got me a
            six-months contract for a junior frontend role. That's basically how
            my journey began. Details of my work history can be seen in my
            resume.
          </p>
        </div>
      </div>

      <div className="section sectionEven">
        <motion.div
          whileHover={{ scale: 0.9 }}
          className="image-wrap"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        >
          <img className="img" src={abt1} alt="" />
        </motion.div>
        <div className="text-wrap">
          <Heading mb={3} as="h4" color="teal.600">
            Skill Set
          </Heading>
          <i>
            <p>
              (work in progress) I am specializing in Modularized React
              development and currently learning to write units and integration
              tests.I spend my time experimenting and researching frontend tools
              and technologies. I have professional work experience building
              user-interfaces and web applications, from scratch to deployment
              utilizing ReactJS, Redux, JavaScript ES6+, HTML5, CSS3, Chakra-UI,
              Material-UI, and other technologies.
            </p>
          </i>
        </div>
      </div>
      <div className="section">
        <motion.div
          whileHover={{ scale: 0.9 }}
          className="image-wrap"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        >
          <img className="img" src={abt4} alt="" />
        </motion.div>
        <div className="text-wrap">
          <Heading mb={3} as="h4" color="teal.600">
            Interests & Hobbies
          </Heading>

          <p>
            {/* check for "qualities of great leaders" Mention leadership roles and what they taught you*/}
            {/* Mention volunteering experience and what they taught you */}
            (work in progress) - Leadership(empathy, initiatives, team synergy,
            delegation) and Volunteer experience:
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
