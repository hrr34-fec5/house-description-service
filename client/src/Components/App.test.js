import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';
import Overview from './overview.jsx';
import BelowReviews from './belowReviews.jsx';

describe('Overview', () => {
  it('App should render correctly', () => {
    const component = shallow(<App/>);

    expect(component).toMatchSnapshot();
  });

  it('Overview should render correctly', () => {
    const component = shallow(<Overview/>);
    expect(component).toMatchSnapshot();
  });

  it('BelowReviews should render correctly', () => {
    const component = shallow(<BelowReviews/>);
    expect(component).toMatchSnapshot();
  });
});
/*
write tests be done by the end of the day simple tests
(test 70% of my lines of code.)
start working on proxy servers thursdays don't over complicate it.
look at the example and see what I am suppose to do in terms of a proxy server for this project
deploy on Friday with AWS.
final touches and conversations saturday and group video.
*/