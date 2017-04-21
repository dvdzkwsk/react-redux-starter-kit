import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Header from '../src/components/Header';

storiesOf('Header', module)
    .add('Default', () => (
        <Header />
    ));
