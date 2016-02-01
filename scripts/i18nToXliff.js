import fs from 'fs'
import { sync as globSync } from 'glob'
import { sync as mkdirpSync } from 'mkdirp'
import * as i18n from '../src/i18n'

const MESSAGES_PATTERN = './_translations/**/*.json'
const LANG_DIR = './_translations/lang/'
// Ensure output folder exists
mkdirpSync(LANG_DIR)

console.log('langDoc:' + JSON.stringify(i18n))

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(MESSAGES_PATTERN)
.map(filename => fs.readFileSync(filename, 'utf8'))
.map(file => JSON.parse(file))
.reduce((collection, descriptors) => {
  descriptors.forEach(({ id, defaultMessage, description }) => {
    if (collection.hasOwnProperty(id)) {
      throw new Error(`Duplicate message id: ${id}`)
    }

    collection[id] = { defaultMessage, description }
  })
  return collection
}, {})

// Sort keys by name
const messageKeys = Object.keys(defaultMessages)
messageKeys.sort()
defaultMessages = messageKeys.reduce((acc, key) => {
  acc[key] = defaultMessages[key]
  return acc
}, {})

// Build the XLIFF document for the available languages
i18n.en = messageKeys.reduce((acc, key) => {
  acc[key] = defaultMessages[key].defaultMessage
  return acc
}, {})
Object.keys(i18n).forEach(lang => {
  const langDoc = i18n[lang]
  const units = buildUnits(defaultMessages, langDoc)

  fs.writeFileSync(`${LANG_DIR}${lang}.xml`, buildXliffDocument(lang, units))
})

function buildUnits (source, target) {
  console.log('source:' + source)
  console.log('target:' + target)
  return Object.keys(source).map(key => {
    const sourceMessage = source[key]
    const targetMessage = target[key]

    return buildXliffUnit(key,
      sourceMessage.description, sourceMessage.defaultMessage,
      targetMessage, targetMessage ? 'translated' : undefined)
  })
}

function buildXliffUnit (id, note, source, target, state = 'initial') {
  return `
<unit id="${id}">
  <notes>
    <note>${note || ''}</note>
  </notes>
  <segment state="${state}">
    <source><![CDATA[${source}]]></source>
    <target><![CDATA[${target || ''}]]></target>
  </segment>
</unit>
  `
}

function buildXliffDocument (lang, units) {
/*eslint-disable max-len*/
  return `
<xliff xmlns="urn:oasis:names:tc:xliff:document:2.0" version="2.0" srcLang="en" trgLang="${lang}">
  <file id="f1">
    ${units.join('')}
 </file>
</xliff>
  `
/* eslint-enable max-len */
}
