import { createRoot } from "react-dom/client";
import './Origin.css'

const Display = (props: {
    src: string
}) => {
    const onMask = () => {
        document.getElementById('portal')?.remove();
    }

    return (
        <div>
            <div className={'portal-display'}>
                <img src={props.src} alt="" className={'image-display'} />
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