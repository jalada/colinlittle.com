import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import {
  Hero,
  HeroBody
} from 'bloomer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Colin Little" />
    <Hero isFullHeight isColor="primary">

      <HeroBody>{children()}</HeroBody>

    </Hero>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
