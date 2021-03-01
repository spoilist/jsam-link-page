module.exports = {
    siteMetadata: {
        title: 'JSAM Link Page',
    },
    plugins: [
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-google-spreadsheets',
            options: {
                spreadsheetId: '103_VfM07hiIqODBf7_LrHYDKsp-luhOEj43YBo0KBp0',
                worksheetTitle: 'sheet1',
                typePrefix: 'GoogleSpreadsheet',
                apiKey: 'AIzaSyDPGCtDyd4Minlj7lc6NLF2rIZOlQLK02g',
            },
        },
    ],
};
