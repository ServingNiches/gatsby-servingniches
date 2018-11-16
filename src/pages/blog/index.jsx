import React from 'react';
import Meta from '../../components/meta';
import Contact from '../../components/contact';
import { ProjectPanel } from '../../components/project';
import Wrapper from '../../components/wrapper';

import blogPosts from '../../data/blogPosts';

import styles from './styles.module.css';

const Blog = ({ location }) => (
  <div>
    <Meta title="Blog" description="Web applications, static websites and mobile apps built built by or collaboratively with Oliver Benns." location={location} />

    {blogPosts.map(project => <ProjectPanel project={project} key={project.slug} />)}

  </div>
);

export default Blog;
