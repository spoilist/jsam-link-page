import * as React from 'react';
import { graphql } from 'gatsby';

// styles
const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};

// markup
const IndexPage = ({ data }) => {
    const links = data.allGoogleSheet1Sheet.nodes;

    return (
        <main style={pageStyles}>
            <title>JSA Montreal | Link page</title>
            <h1 style={headingStyles}>Welcome to JSA Montreal's social platforms</h1>
            {links.map((link) => (
                <div key={link.id}>
                    <h2>{link.title}</h2>
                    <p>{link.category}</p>
                    <p>{link.url}</p>
                </div>
            ))}
        </main>
    );
};

export default IndexPage;
export const query = graphql`
    {
        allGoogleSheet1Sheet {
            nodes {
                url
                title
                id
                category
            }
        }
    }
`;
