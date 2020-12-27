import React from 'react';
import { Link } from 'gatsby';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import Wrapper from '../../components/wrapper';

import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>About</h1>
          <p>
            Hi there. I’m a software developer based out of Boston, MA. The work I do, these days, revolves mostly
            around peta-byte scale distributed systems. Occasional freelancing and technical blogging have both
            given me a good reason to try and keep up with the various spaces discussed here.
          </p>

          <p>
            My focus for the past 7 years has been on consulting and building software at brands like Directv, DSW,
            T-Mobile, Houghton Mifflin Harcourt, Wellington Management, Thesys CAT (a subsidiary of Thesys Tech
            formerly known as Tradeworx, Inc.) . Prior to that I used to do freelance web development and work at a
            small business called Eagle Stationery Est. based out of the United Arab Emirates.
          </p>

          <p>
            Serving Niches focuses on Software Engineering, the more technical aspects of Online Marketing,
            Niche Marketing, Analytics, Fintech, Blockchain and occasionally AI and its various subsets.
          </p>

          <p>
            If you have a project in mind,&nbsp;
            <Link to="/contact">get in touch</Link>
            .
          </p>
        </section>
        <br />
        <br />
        <section className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Programming Languages</h4>
            <p>Java, Scala, Python, PHP, Ruby, HTML5, CSS3, Javascript, Typescript, R, SQL, C++, Erlang, Elixir</p>
            <h4>Frameworks/Libraries</h4>
            <p>Spring, Ruby On Rails, Node.js, jQuery, Angular, React, Laravel, Flask, Sinatra, Django, Cement, NodeJS, MeteorJS, Phoenix, Apache Spark, Hadoop, Kafka, Elasticsearch, Kibana, Keras, Tensorflow</p>
            <h4>Databases</h4>
            <p>MySQL, SQLServer, SQlite3, MongoDB, S3, AWS DynamoDB, GAE datastores, PostgreSQL/PostGIS, Azure Blob, Hive, AWS Athena</p>
            <h4>Web Analytics Tools</h4>
            <p>Adobe (Omniture) SiteCatalyst, Discover 3, Google Analytics, Segment, Fiddler, Firebug, Charles, Wireshark, Piwik</p>
            <h4>Other</h4>
            <p>Ethereum ( Solidity, Embark, Truffle.js ), StatTools, @RISK, Unreal Engine 4</p>
          </div>
        </section>
      </div>

      {/* */}

    </Wrapper>
  </ContentPage>
);

export default About;
