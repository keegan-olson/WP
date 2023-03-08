export default {
    name: 'artwork', 
    type: 'document', 
    title: 'Artwork', 
    fields: [
        {
            name: 'image',
            title: 'Image', 
            type: 'image'
        }, 
        {
            name: 'title', 
            title: 'Title', 
            type: 'string',
        },
        {
            name: 'altText',
            title: 'Alt Text', 
            type: 'string' 
        },
        {
            name: 'link',
            title: 'Product Shop Link', 
            type: 'string'
        }, 
        {
            name: 'artist', 
            title: 'Artist',
            type: 'reference',
            to: [{type: 'artist'}],
        }
    ]
}