import React from 'react';

// Import reset
// FIXME: This is inportant. Gatsby seems to be ignoring
// anything but font imports in `global.css`, which seems
// very odd
// TODO: Reproduce this, and then, if need be, open an issue on
// Gatsby
import '../styles/reset.css';

import Head from '../components/Head';
import Landing from '../components/Landing';

const IndexPage = () => (
  <div>
    <Head />
    <Landing />
  </div>
);

export default IndexPage;
