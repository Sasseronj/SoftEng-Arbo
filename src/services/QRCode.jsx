import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

function QRCode({ text, size = 256 }) {
    return (
        <QRCodeSVG
            value={text}
            size={size}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"H"}
            marginSize={10}
            imageSettings={{
                src: "images/usp.svg",
                x: undefined,
                y: undefined,
                height: 40,
                width: 100,
                excavate: true,
            }}
        />
    )
}

export default QRCode
