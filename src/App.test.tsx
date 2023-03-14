/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { App, WrappedApp } from './App'

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<WrappedApp />)
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('hello world')
  })
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-route']}>
        <App />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found')
  })
})
