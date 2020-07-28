import React from 'react';
import projects from '../../../data/projects';

import Wrapper from '../../../components/wrapper';
import { ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const Ahm = ({ location }) => {
  const project = projects.find(p => p.slug === 'dsw');

  const logo = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={logo} />
      <Wrapper>
        <h3>Project</h3>
        <p>
          Helped maintain an ATG powered distributed front-end and backend to serve nearly 8 million visitors per month.
        </p>
        <ul className={styles.responsibilities}>
          <li>Establish and maintain best in-class web analytics across DSW.com</li>
          <li>Review existing tagging strategy, update and socialize the changes. Implement the associated code modifications.</li>
          <li>Partner with business stakeholders to interpret analytics needs, identify KPI’s and implementation requirements, monitoring results and delivering analytical findings.</li>
          <li>Solve for complex requirements, develop/refine the code and test tracking logic to support business requirements and scenarios for tracking.</li>
          <li>Keep up to date with web analytics trends and best practices.</li>
          <li>Collaboration on the definition of data contracts.</li>
          <li>Development of AngularJS application interfacing with ATG services</li>
          <li>Maintain marketing tech and front-end code for Point of Sale (POS), Kiosks and Associate devices.</li>
          <li>Maintenance of Spring and ATG based server-side Java code.</li>
          <li>Maintain and implement any code for Adobe recommendations, Site Catalyst or any product in the Adobe analytics (Omniture) family.</li>
          <li>Implementation, scoping and support for the introduction of Tag Management System into the code base.</li>
          <li>Implementing the data layer for all possible marketing pixel requirements.</li>
          <li>Follow TDD, write, extend and maintain tests in JUnit, Jasmine, CasperJS depending on code base.</li>
          <li>Help maintain and debug any issues with build tools or middleware like NodeJS, Gulp and Grunt.</li>
          <li>Help set up testing harness for end to end tests and units test for AngularJS Code Base.</li>
          <li>Scope out and help POC the migration of all Analytics and pixel related code to Angular.</li>
          <li>Mock out Drupal Based Blog and prepare VM for performant Drupal build and changes.</li>
          <li>Helped debug and test in JRuby for various analytics solutions.</li>
        </ul>
      </Wrapper>
    </ProjectPage>
  );
};

export default Ahm;
