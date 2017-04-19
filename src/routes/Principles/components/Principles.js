import React from 'react'
import PropTypes from 'prop-types'

export const Principles = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Principles</h2>
    <section id="anchors">
        <h4>Anchors</h4>
        <ol>
            <li>Hrefs to external URLs should open the page in a new tab</li>
            <li>Anchor text should always be descriptive e.g. <a href="#">read our terms</a> instead of: read our terms <a href="#">here</a></li>
        </ol>
    </section>

    <section id="urls">
        <h4>URLs</h4>
        <ol>
            <li>All URLs should be lowercase</li>
            <li>Links to external sites should always open in a new tab</li>
            <li>URLs should be descriptive and hyphenated between words</li>
        </ol>
    </section>

    <section id="forms">
        <h4>Forms</h4>
        <ol>
            <li>Form submit buttons should always visible</li>
            <li>Submitting a form should trigger form validation</li>
            <li>Submit buttons should get disabled during a submit</li>
            <li>Submit button text should be appended with "..." during submit e.g. "Update preferences" to "Updating preferences..."</li>
            <li>Button text should be descriptive e.g. "Update password" instead of "Save"</li>
            <li>Undo changes buttons should only be visible once changes have been made</li>
            <li>Validation error messages should appear when invalid fields gets blurred</li>
            <li>Labels should be positioned above the input field</li>
            <li>Required fields should have a <small>(required)</small> in their label</li>
            <li>Input fields should have placeholders</li>
            <li>Label "for", input "id" and "name" attributes should all have indentical values</li>
            <li>Forms should have a "novalidate" attribute so that the browser validation is disabled</li>
            <li>Validation error messages should be coloured red</li>
            <li>Form element should always have action and method attributes</li>
        </ol>
    </section>
  </div>
)

Principles.propTypes = {
  principles     : PropTypes.number.isRequired,
  doubleAsync : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}

export default Principles
