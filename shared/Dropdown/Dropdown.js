import { useState } from 'react'

const Dropdown = props => {
    const { children, buttonName, buttonStyle, buttonTextStyle, containerStyle, src1, src2, imgStyle } = props

    const [content, setContent] = useState(null)
    const [image, setImage] = useState(<img src={src1} className={imgStyle} />)
    const [font, setFont] = useState(' font-normal')

    const clickHandler = () => {
        if (content == null) {
            setImage(<img src={src2} className={imgStyle} />)
            setContent(<div className={containerStyle}>{children}</div>)
            setFont(' font-medium')
        } else {
            setImage(<img src={src1} className={imgStyle} />)
            setFont(' font-normal')
            setContent(null)
        }
    }

    return (
        <>
            <button onClick={clickHandler} className={buttonStyle}>
                {image}
                <div className={buttonTextStyle + font}>{buttonName}</div>
            </button>
            {content}
        </>
    )
}

export default Dropdown
