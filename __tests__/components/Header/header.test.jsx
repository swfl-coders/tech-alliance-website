import { expect, test, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../../../components/Header/Header'


afterEach(() => {
    global.innerWidth = 1024
    global.dispatchEvent(new Event('resize'))
  });

test('StandardMonitorImgDims', ()=>{
    var w = 500
    var h = 129
    render(<Header />)
    var img = screen.getAllByAltText('Alliance logo');
    expect(img[0]).toBeDefined()
    expect(img[0].width).toBe(w)
    expect(img[0].height).toBe(h)
})

test('IPhoneSEImgDims', ()=>{
    var w = 375
    var h = 100
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));
    render(<Header />)
    var img = screen.getAllByAltText('Alliance logo');
    expect(img[0]).toBeDefined()
    expect(img[0].width).toBe(w)
    expect(img[0].height).toBe(h)
})

test('IPhoneProImgDims', ()=>{
    var w = 400
    var h = 115
    global.innerWidth = 450;
    global.dispatchEvent(new Event('resize'));
    render(<Header />)
    var img = screen.getAllByAltText('Alliance logo');
    expect(img[0]).toBeDefined()
    expect(img[0].width).toBe(w)
    expect(img[0].height).toBe(h)
})
