module.exports = {
    plugins:[
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        {
           resolve: 'gatsby-source-contentful',
           options: {
            spaceId: 'epmkvywtqjl5',
            accessToken: 'HGPhU8Q8wfQrlvKNZoom_P2hj60C-gwt8LLxUXf4p34'
           } 
        },
    ]
}