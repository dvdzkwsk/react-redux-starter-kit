import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Counter from '../src/routes/Counter/components/Counter'
import HomeView from '../src/routes/Home/components/HomeView'
import Header from '../src/components/Header'

storiesOf('Counter', module)
    .add('Default', () => (
        <Counter />
    ));

storiesOf('Header', module)
    .add('Default', () => (
        <Header />
    ));

storiesOf('HomeView', module)
    .add('Default', () => (
        <HomeView />
    ));
