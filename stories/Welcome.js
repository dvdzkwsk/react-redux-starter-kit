import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to STORYBOOK</h1>
        <p>
          This is a UI component dev environment for your app.
        </p>
        <p>
          We've added some basic stories inside the <code style={styles.code}>src/stories</code> directory.
          <br/>
          A story is a single state of one or more UI components. You can have as many stories as you want.
          <br/>
          (Basically a story is like a visual test case.)
        </p>
        <p>
          See these sample <a style={styles.link} href='#' onClick={this.showApp.bind(this)}>stories</a> for a component called <code style={styles.code}>Button</code>.
        </p>
        <p>
          Just like that, you can add your own components as stories.
          <br />
          You can also edit those components and see changes right away.
          <br />
          (Try editing the <code style={styles.code}>Button</code> component
          located at <code style={styles.code}>src/stories/Button.js</code>.)
        </p>
        <p>
          This is just one thing you can do with Storybook.
          <br/>
          Have a look at the <a style={styles.link} href="https://github.com/kadirahq/react-storybook" target="_blank">React Storybook</a> repo for more information.
        </p>
      </div>
    );
  }
}
