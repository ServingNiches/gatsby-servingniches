import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';


const images = {
  desktop: [
    { src: require('./img/collection-listing.jpg'), description: 'Life with Bird collection listing' },
    { src: require('./img/home.jpg'), description: 'Life with Bird home' },
    { src: require('./img/product-listing.jpg'), description: 'Life with Bird product listing' },
    { src: require('./img/product.jpg'), description: 'Life with Bird product' },
    { src: require('./img/store-listing.jpg'), description: 'Life with Bird store listing' },
  ],
  mobile: [
    { src: require('./img/mobile-product-listing.jpg'), description: 'Life with Bird product listing mobile' },
    { src: require('./img/mobile-product.jpg'), description: 'Life with Bird product mobile' },
    { src: require('./img/mobile-cart.jpg'), description: 'Life with Bird cart mobile' },
  ],
};

const TMobile = ({ location }) => {
  const project = projects.find(p => p.slug === 't-mobile');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <Wrapper>
        <h3>Project</h3>
        <p>The work involved building a Python based GIS pipeline to process vendor files and visualize results using Mapbox.</p>

        <ul>
          <li>Developed highly performant ETL application to generate consumable vector based, highly detailed mbtiles.</li>
          <li>Build integration to Apache Spark based pipeline using Pyspark/ Scala api.</li>
          <li>Help architect and build out performant data pipeline from Postgres/PostGIS server to GeoJSON using GDAL and OGR libraries.</li>
          <li>Build out MVC application using Django and bootstrap to manage vendors and process large KML and Shape files.</li>
          <li>Code using RabbitMQ (Erlang), Celery and Redis for distributing tasks and parallel processing.</li>
          <li>Build out an intermediate mbtiles rendering interface for admin to check generated vendor files and tiles.</li>
          <li>Implement PostGIS workflow to help make sensor geospatial data consumable.</li>
        </ul>
      </Wrapper>
    </ProjectPage>
  );
};

export default TMobile;
