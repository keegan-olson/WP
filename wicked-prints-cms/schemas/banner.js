export default {
    name: 'banner', 
    type: 'document', 
    title: 'Banner', 
    fields: [
        {
            name: 'image',
            title: 'Image', 
            type: 'image'
        }, 
        {
            name: 'altText',
            title: 'Alt Text', 
            type: 'string' 
        },
        {
            name: 'link',
            title: 'Link', 
            type: 'string'
        }, 
        {
            name: 'buttonText', 
            title: 'Button Text', 
            type: 'string'
        }, 
        {
            name: 'fieldAssignment', 
            title: 'FieldID',
            type: 'string',
            options: {
                list: [
                    {title: 'Banner-1', value: 'banner1'}, 
                    {title: 'Banner-2', value: 'banner2'}, 
                    {title: 'Banner-3', value: 'banner3'}
                ]
            }
        }
    ]
}