import Loading from './Loading.Component'

import { render, screen } from '@testing-library/react'

describe('App', () => {
    test('Should render without crash', async () => {
        render(<Loading />)
    })
    const loader = screen.getByTestId('loader');
    expect(loader).not.toBeNull()
})