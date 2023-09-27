import PhotoAlbum from "react-photo-album";
import display from "../photo/Origin";
import './List.css'
import { useEffect, useState } from "react";

const API_URL = 'http://106.54.221.36:8190'

class ItemList {
    src: string = ''
    width: number = 0
    height: number = 0
}

export const HomeList = () => {
    const [photoList, setPhotoList] = useState<ItemList[]>([])

    useEffect(() => {
        fetch(API_URL + '/list')
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < res.length; i++) {
                    res[i].src = API_URL + res[i].src
                }
                setPhotoList(res)
            })
    }, [])

    const onClick = (index: number) => {
        const src = photoList[index].src.replace('preview', 'origin')
        display(src)
    }

    return (
        <div>
            <PhotoAlbum photos={photoList} layout="masonry" spacing={6} padding={0}
                columns={5} onClick={({ index }) => {
                    onClick(index)
                }} componentsProps={(_containerWidth) => ({
                    imageProps: { loading: 'lazy', style: { borderRadius: 10, boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)' } },
                })}></PhotoAlbum>
        </div>
    );
}