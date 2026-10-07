import { render, screen } from '@testing-library/react'

import Home from '../app/page'

describe('Home Component', () => {
  it('deve renderizar o título principal', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Bora começar o BabyMonitor/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
