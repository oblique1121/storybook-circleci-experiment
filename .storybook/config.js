import {configure} from '@storybook/react'
import React from 'react'


function loadStories() {
  const stories = require.context('../src/', true, /__stories__\/.*\.stories\.tsx?$/)
  stories.keys().forEach((filename) => {
    stories(filename)
  })
}

configure(loadStories, module)
