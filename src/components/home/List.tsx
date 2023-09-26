import PhotoAlbum from "react-photo-album";
import display from "../photo/Origin";
import './List.css'

export const HomeList = () => {
    const photos = [
        {
            src: '/examples/1.JPG',
            width: 4672,
            height: 3115,
            href: ''
        },
        {
            src: '/examples/2.JPG',
            width: 6255,
            height: 4170,
            href: ''
        },
        {
            src: '/examples/3.JPG',
            width: 4417,
            height: 6625,
            href: ''
        },
        {
            src: '/examples/4.JPG',
            width: 7008,
            height: 4672,
            href: ''
        },
        {
            src: '/examples/5.JPG',
            width: 6332,
            height: 4221,
            href: ''
        },
        {
            src: '/examples/6.JPG',
            width: 3677,
            height: 5515,
            href: ''
        }
    ]

    const onClick = (index: number) => {
        display(photos[index].src)
    }

    return (
        <div>
            <PhotoAlbum photos={photos} layout="masonry" spacing={0} padding={2}
                columns={5} onClick={({ index }) => {
                    onClick(index)
                }} componentsProps={(_containerWidth) => ({
                    imageProps: { style: { borderRadius: 10, boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)' } },
                })}></PhotoAlbum>
        </div>
    );
}