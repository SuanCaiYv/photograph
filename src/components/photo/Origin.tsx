import { createRoot } from "react-dom/client";
import './Origin.css'
import exifr from "exifr";
import axios from "axios";
import { useState } from "react";

const decimalToFraction = (decimal: number): string => {
    if (decimal < 0 || decimal > 1) {
        throw new Error('Decimal must be between 0 and 1');
    }

    const tolerance = 1.0E-6;

    let h1 = 1;
    let h2 = 0;
    let k1 = 0;
    let k2 = 1;
    let b = decimal;

    do {
        const a = Math.floor(b);
        let aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);

    return `${h1}/${k1}`;
}

const Display = (props: {
    src: string
}) => {
    const onMask = () => {
        document.getElementById('portal')?.remove();
    }

    const [camera, setCamera] = useState<string>('')
    const [lens, setLens] = useState<string>('')
    const [focalLength, setFocalLength] = useState<string>('')
    const [aperture, setAperture] = useState<string>('')
    const [exposure, setExposure] = useState<string>('')
    const [iso, setIso] = useState<string>('')
    const [time, setTime] = useState<string>('')

    axios.get(props.src, { responseType: 'blob' }).then(res => {
        exifr.parse(res.data).then(exif => {
            setCamera(exif?.Make + ' ' + exif?.Model)
            setLens(exif?.LensModel)
            setFocalLength(exif?.FocalLength + 'mm')
            setAperture('f/' + exif?.FNumber)
            setExposure(decimalToFraction(exif?.ExposureTime) + 's')
            setIso(exif?.ISO)
            setTime(exif?.CreateDate.toISOString().slice(0, 19).replace('T', ' '))
        })
    })

    return (
        <div>
            <div className={'portal-display'}>
                <img src={props.src} alt="" className={'image-display'} />
                <div className={'exif'}>
                    {camera} {lens} {focalLength}
                </div>
                <div className={'exif'}>
                    {aperture} {exposure} ISO: {iso}
                </div>
                <div className={'exif'}>
                    {time}
                </div>
            </div>
            <div className={'portal-mask'} onClick={onMask}></div>
        </div>
    )
}

const display = (src: string) => {
    let node = document.createElement('div')
    node.setAttribute('id', 'portal')
    document.getElementById('app')?.appendChild(node)
    let component = <Display src={src} />
    createRoot(node).render(component)
}

export default display