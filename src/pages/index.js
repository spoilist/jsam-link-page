import * as React from 'react';
import { graphql } from 'gatsby';
import styles from './index.module.css';

// markup
const IndexPage = ({ data }) => {
    const links = data.allGoogleSheet1Sheet.nodes;
    const categorizedLinks = groupByCategory(links);

    return (
        <main className={styles.Page}>
            <title>JSA Montreal | Link page</title>
            <h2 className={styles.Heading}>Welcome to JSA Montreal's social platforms</h2>
            <div className={styles.LinkBlocks}>
                {Object.keys(categorizedLinks).map((category) => (
                    <div key={category} className={styles.LinkBlock}>
                        <h3 className={styles.CategoryTitle}>{category}</h3>
                        {categorizedLinks[category].map((linkObject) => (
                            <a
                                key={linkObject.id}
                                href={linkObject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.Link}
                            >
                                {linkObject.title}
                            </a>
                        ))}
                    </div>
                ))}
                {/* {links.map((link) => (
                    <div key={link.id} className={styles.LinkBlock}>
                        <p>{link.category}</p>
                        <a href={link.url} target="_blank" className={styles.Link}>
                            {link.title}
                        </a>
                    </div>
                ))} */}
            </div>
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

const groupByCategory = (linkArray) => {
    let categorizedObject = {};
    linkArray.forEach((linkElement) => {
        const { category, ...displayedInfo } = linkElement;

        if (category in categorizedObject) {
            categorizedObject[category].push(displayedInfo);
        } else {
            categorizedObject[category] = [displayedInfo];
        }
    });
    return categorizedObject;
};
