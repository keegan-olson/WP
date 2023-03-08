export default {
    name: 'artist', 
    type: 'document', 
    title: 'Artist', 
    fields: [
        {
            name: 'artistName',
            title: 'Artist Name', 
            type: 'string'
        }, 
        {
            name: 'email',
            title: 'Email', 
            type: 'email' 
        },
        {
            name: 'about',
            title: 'About', 
            type: 'text' 
        },
        {
            name: 'profilePhoto', 
            title: 'Profile Photo', 
            type: 'image'
        }
    ]
}