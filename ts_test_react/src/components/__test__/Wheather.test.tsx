import React from 'react'
import ReactDOM from 'react-dom'

import Wheather from "../Wheather"

import { getQueriesForElement } from "@testing-library/dom"
import { render,fireEvent } from "@testing-library/react"

const expected=true
const actual = true



test ('render test With Render',()=>{
   ;
    const {getByText} =render(<Wheather />)
    expect(getByText('Wheather app')).not.toBeUndefined()
    
})

test ('Jest-dom test With',()=>{
    const root = document.createElement('div');
    ReactDOM.render(<Wheather />,root);
    const {getByText} = getQueriesForElement(root)
    expect(getByText('Wheather app')).not.toBeUndefined()
    
})


test ('should  react test',()=>{
    const root = document.createElement('div');
    ReactDOM.render(<Wheather />,root);
    expect(root.querySelector('h1')?.textContent).toBe('Wheather app')
    
})


test('should test dummy function',()=>{
     expect(actual).toBe(expected)
})



test('should add todo',()=>{
    const {getByText,} = render(<Wheather/>)
    
    fireEvent.click(getByText('add'))

    expect(getByText('Wheather app')).not.toBeUndefined()
})