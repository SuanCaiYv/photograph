import PhotoAlbum from "react-photo-album";

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
        }
    ]

    return (
        <div>
            <PhotoAlbum photos={photos} layout="rows" renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                <a href={photo.href} style={wrapperStyle} target="_blank" rel="noreferrer noopener">
                    {renderDefaultPhoto({ wrapped: true })}
                </a>
            )} spacing={10} padding={15} columns={1}></PhotoAlbum>
        </div>
    );
}