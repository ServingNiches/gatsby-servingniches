import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/index';
import Wrapper from '../components/wrapper';
import Fullscreen from '../components/fullscreen';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
        <Wrapper>
          <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
