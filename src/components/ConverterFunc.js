import { useState } from 'react';

export default function Converter() {
    const [hex, setHex] = useState({
        value: '#',
    })
    const handleSubmit = (e) => {
        e.peventDefault();
    }
    const handleChange = (e) => {
        let { value } = e.target
        if (value[0] !== '#') {
            value = '#' + value;
          }
        setHex(prevHex => ({...prevHex, value}))
    }
    const hexToRGBArray = (hex) => {
        if (hex.length === 7) {
            if (!hex.match('[A-Fa-f0-9]{6}')) {
                return 'Ошибка!'
            }
            return 'rgb(' + hex.match(/[A-Fa-f0-9]{2}/g).map((item, index) => index === 0 ? parseInt(item, 16) : ' ' + parseInt(item, 16)) + ')'
        }
    };
    const backColor = hexToRGBArray(hex.value) === 'Ошибка!' ? '#fa5741' : hexToRGBArray(hex.value)
    return (
        <div className="background-container" style={ {backgroundColor: backColor} }>
            <form className="form-hex" onSubmit={handleSubmit}>
                <input className="input-hex" name='hex' maxLength='7' value={hex.value} onChange={handleChange}>

                </input>
                <span className="convert-rgb">
                    {hexToRGBArray(hex.value)}
                </span>
            </form>
        </div>
    )
}