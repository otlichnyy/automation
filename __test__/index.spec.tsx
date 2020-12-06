import React from 'react'
import { render } from '@testing-library/react'
import Index from '../pages/index'

it('verical menu renders awesomely', () => {
  const { debug } = render(<Index />)
  debug()
})
