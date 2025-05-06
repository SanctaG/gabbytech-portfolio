import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaBriefcase,  FaGlobe } from 'react-icons/fa';
import themes from './themes';


const HeaderContainer = styled(motion.header)`
  background: #0984e3;
  color: white;
  padding: 1.8rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding-top: 30px;

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    margin-top: 110px; 
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 70px;
    h1 {
      font-size: 1.5rem;
      margin-top: 50px;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const Container = styled(motion.div)`
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: 350px 1fr;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  position: relative;
  padding-top: 0;
  min-height: 100vh;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled(motion.div)`
  background: ${props => props.theme.sidebarBg};
  padding: 1rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: relative;
    height: auto;
    padding: 1.5rem;
  }
`;

const MainContent = styled.div`
  padding: 3rem;
  background: ${props => props.theme.background};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;


const ProfileImage = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 5px;
  left: 45%;
  transform: translateX(-50%);
  z-index: 101;
  box-shadow: 0 6px 15px rgba(225, 237, 241, 0.86);
  border: 5px solid #0984e3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    top: 5px;
    left: 36%;
  }
`;

const Name = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #0984e3;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #636e72;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const BioInfo = styled.div`
  margin-bottom: 2rem;
  p {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    color: ${props => props.theme.bioText};

    svg {
      margin-right: 0.5rem;
      color: ${props => props.theme.primary};
    }

    a {
      color: ${props => props.theme.primary};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ProjectsList = styled.div`
  h3 {
    font-family: 'Playfair Display', serif;
    color: #0984e3;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
`;

const ProjectItem = styled(motion.div)`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  background: ${props => props.theme.cardBg};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => 
      props.themeName === 'light' ? '#e9ecef' : '#3d3d3d'};
    transform: translateX(5px);
  }

  h4 {
    margin: 0;
    color: ${props => props.theme.projectText};
    font-weight: 500;
  }

  span {
    font-size: 0.8rem;
    color: ${props => props.theme.projectYear};
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: ${props => props.theme.cardBg};
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
`;


const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #0984e3;
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    bottom: 0;
    left: 0;
    background: #00cec9;
  }
`;

const FooterContainer = styled(motion.footer)`
  background: #0984e3;
  color: white;
  padding: 1.5rem 3rem;
  margin-top: 2rem;
  border-radius: 15px 15px 0 0;
  text-align: center;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: ${props => props.theme.cardBg};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${props => props.theme.primary};

  h3 {
    color: ${props => props.theme.text};
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: ${props => props.theme.text};
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;

    span {
      background: ${props => props.theme.skillBg};
      color: ${props => props.theme.skillText};
      padding: 0.3rem 0.6rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
  }
`;

const ThemeToggle = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${props => props.theme.primary};
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <Section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </Section>
  );
};

const Icon = ({ name }) => {
  const icons = {
    work: <FaBriefcase />,
    location: <FaMapMarkerAlt />,
    email: <FaEnvelope />,
    github: <FaGithub />,
    twitter: <FaTwitter />,
    globe: <FaGlobe />
  };

  return icons[name] || null;
};

export default function Portfolio({ theme, setTheme }) {
   
    const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('portfolio-theme', newTheme);
      return newTheme;
    });
  };

  const currentTheme = themes[theme] || themes.light;


  const projects = [
    {
      title: "Multi-Dimensional Calculator",
      description: "A comprehensive calculator that computes volumes, areas, perimeters of shapes, and performs quadratic and statistical calculations.",
      tags: ["JavaScript", "HTML", "CSS"],
      year: "2024"
    },
    {
      title: "Snake Game",
      description: "Classic snake game built with vanilla JavaScript, featuring score tracking and increasing difficulty.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      year: "2024"
    },
    {
      title: "CakeBook App",
      description: "React Native mobile application for cake and event booking, designed for a small business.",
      tags: ["React Native", "JavaScript", "Firebase"],
      year: "2025 (In Progress)"
    },
    {
      title: "Edenites Academy",
      description: "E-learning platform built with React, featuring course management and user progress tracking.",
      tags: ["React", "Styled Components", "Node.js"],
      year: "2025 (In Development)"
    }
  ];

  return (
    <div style={{ backgroundColor: currentTheme.background, color: currentTheme.text }}>
      <>
        <HeaderContainer
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProfileImage
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img src="IMG_8399.jpeg" alt="Gabriel Chikwendu Nwofoke" />
            </ProfileImage>
            <h1>My Journey into the Tech World</h1>
            <p>From <span style={{fontStyle: 'italic'}}>Socrates</span> to <span style={{fontWeight: '600'}}>
              Syntax</span> — a thinker's journey through code
            </p>
            <p>Where <span style={{fontStyle: 'italic'}}>philosophia</span> meets 
              <span style={{fontWeight: '600'}}> technologia</span>
            </p>
        </HeaderContainer>

        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Sidebar>
            <ProfileHeader>
              
              <Name>Gabriel Chikwendu Nwofoke</Name>
              <Title>Frontend Developer | Lifelong Learner</Title>
            </ProfileHeader>

            <BioInfo>
              <p>
                <Icon name="work" />
                Freelance Developer
              </p>
              <p>
                <Icon name="work" />
                Specializes in Web Development
              </p>
              <p>
                <Icon name="location" />
                Lagos, Nigeria
              </p>
              <p>
                <Icon name="email" />
                sanctagab@gmail.com
              </p>
              <p>
                <Icon name="twitter" />
                <a href="https://x.com/gabby_tech001" target="_blank" rel="noopener noreferrer">
                  x.com/gabby_tech001
                </a>
              </p>
              <p>
                <Icon name="github" />
                <a href="https://github.com/sanctagee" target="_blank" rel="noopener noreferrer">
                  github.com/sanctagee
                </a>
              </p>
              <p>
                <Icon name="globe" />
                <a href="https://gabbytech-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                  gabbytech-portfolio.vercel.app
                </a>
              </p>
            </BioInfo>

            <ProjectsList>
              <h3>Projects</h3>
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  themeName={theme}
                >
                  <h4>{project.title}</h4>
                  <span>{project.year}</span>
                </ProjectItem>
              ))}
            </ProjectsList>
          </Sidebar>

          <MainContent>
            <AnimatedSection>
              <SectionTitle>About Me</SectionTitle>
              <p>
                I'm a passionate frontend developer with a deep love for continuous learning and thoughtful problem-solving. My
                background in philosophy and theology helps me approach coding with clarity, logic, and creativity.
              </p>
              <p>
                I'm currently studying at BYU–Pathway Worldwide and actively applying my skills in real-world projects. Outside of tech,
                I'm a volleyball player and advocate for purposeful growth.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <SectionTitle>Skills</SectionTitle>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Styled Components', 'Git & GitHub', 'React Native', 'Node.js'].map((skill, index) => (
                  <motion.span
                    key={index}
                    style={{
                      background: currentTheme.skillBg,
                      color: currentTheme.skillText,
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionTitle>Featured Projects</SectionTitle>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </ProjectCard>
              ))}
            </AnimatedSection>

            <AnimatedSection>
              <SectionTitle>Education</SectionTitle>
              <ProjectCard>
                <h3>BYU–Pathway Worldwide</h3>
                <p>Currently pursuing a degree in Software Development</p>
              </ProjectCard>
            </AnimatedSection>
          </MainContent>
        
        </Container>

        <ThemeToggle 
          onClick={toggleTheme}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          theme={currentTheme}
        >
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </ThemeToggle>

        <FooterContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          >
          &copy; {new Date().getFullYear()} GabbyTech. All rights reserved.
        </FooterContainer>
      </>
    </div>
  );
}




