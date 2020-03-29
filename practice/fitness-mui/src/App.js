import React, { Fragment } from 'react';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Exercises from './components/exercises';

export default class extends React.Component {
  render() {
    return <Fragment>
      <Header />
      <Exercises />
      <Footer />
    </Fragment>
  }
}                                                                                                                                                                                                                     

