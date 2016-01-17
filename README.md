React Redux Starter Kit with Localization
==========================================

Based on [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit).

Fork with React Intl plugin for Localization

## Development

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/davezuko/react-redux-starter-kit.git
$ cd react-redux-starter-kit
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```

### I18n support

All messages in this website are localized and rendered using `react-intl@2.0`.

There is also a [babel plugin](https://github.com/yahoo/babel-plugin-react-intl) to extract all the default messages into `./_translations/lib` to be provided to translators.

```bash
$ npm run build:i18n
```

You can also run a script to extract all those translations as key-value.

<<<<<<< HEAD
```bash
$ npm run build:i18n:langs
```


#### Thanks

- [Emmenko react redux example](https://github.com/emmenko/redux-react-router-async-example) for the integration of React Intl.

