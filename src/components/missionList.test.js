import { render, screen } from "@testing-library/react"
import React from "react"
import MissionsList from "./MissionsList"

const missions = [
    {
        mission_name: 'Playtown',
        mission_id: '0F1N94H'
    },
    {
        mission_name: 'LayDown',
        mission_id: 'JP1D3Z4'
    }
]

test('missions list shows data when rerender with new missions data', () => {
    const { rerender } = render(<MissionsList errors=""  missions={[]}/> )
    let missionsObject = screen.queryAllByTestId('mission')
    expect(missionsObject).toHaveLength(0)

    rerender(<MissionsList errors=""  missions={missions}/> )
    missionsObject = screen.queryAllByTestId('mission')
    expect(missionsObject ).toHaveLength(2)
})  