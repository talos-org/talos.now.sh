import React from 'react';

// Import reset
// FIXME: This is important. Gatsby seems to be ignoring
// anything but font imports in `global.css`, which seems
// very odd
// TODO: Reproduce this, and then, if need be, open an issue on
// Gatsby
import '../styles/reset.css';

import Head from '../components/Head';
import Upcoming from '../components/upcoming/index';
import Nav from '../components/nav/index';

const UpcomingPage = () => (
  <div>
    <Head />
    <Nav />
    <Upcoming />
  </div>
);

export default UpcomingPage;
