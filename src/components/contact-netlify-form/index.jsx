import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const ContactNetlifyForm = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'Messages make the world go round.'}</h1>
    <p className={styles.email}>
      Reach out and say hello.
      <br />
    </p>

    <form name="serving-niches-form" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="contact-form">
      <p className="hidden" style={{ display: 'None' }}>
        <label>
Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>
      <p>
        <label>Email:</label>
        <input className="form-control" type="text" name="name" />
      </p>
      <p>
        <label>Message:</label>
        <textarea className="form-control textarea" name="message" />
      </p>
      <button className="square-button form-control" type="submit">Send</button>
    </form>

    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/servingniches/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/anupvasudevan">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/thechronicler/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default ContactNetlifyForm;
