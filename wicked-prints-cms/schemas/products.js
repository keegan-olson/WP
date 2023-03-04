export default {
    name: 'product', 
    type: 'document', 
    title: 'Product', 
    fields: [
        {
            name: 'product_name',
            type: 'string', 
            title: 'Product Name'
        }, 
        {
            name: 'description', 
            type: 'string', 
            title: 'Product Description'
        }, 

        {
            name: 'slug', 
            title: 'Slug', 
            type: 'slug', 
            options: {
                source: 'product_name'
            }
        },
        {
            name: 'price', 
            title: 'Price', 
            type: 'number'
        }, 
        {
            name: 'image',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }

        }, 
    ]

}