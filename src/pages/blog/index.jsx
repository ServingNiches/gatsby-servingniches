import React from 'react';
import Meta from '../../components/meta';
import Contact from '../../components/contact';
import { ProjectPanel } from '../../components/project';
import Wrapper from '../../components/wrapper';

import blogPosts from '../../data/blogPosts';

import styles from './styles.module.css';
import Fullscreen from "../../components/fullscreen";

const Blog = ({ location }) => (
  <div>
    <Meta title="Blog" description="Web applications, static websites and mobile apps built built by or collaboratively with Anup Vasudevan." location={location} />
      <Fullscreen>
          <h3>Blog Coming Soon</h3>
      </Fullscreen>
    {/*{blogPosts.map(project => <ProjectPanel project={project} key={project.slug} />)}*/}

  </div>
);

export default Blog;
