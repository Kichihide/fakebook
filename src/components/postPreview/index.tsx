import * as React from 'react';
import { MarkdownRemarkFields } from 'types/graphql-types';

const styles = require('./index.module.scss');

type Props = {
    userName?: String;
    fields: MarkdownRemarkFields;
};

const PostPreview: React.FC<Props> = ({ userName, fields }) => (
    <article className={styles.postPreview}>
        {userName}
        {fields.slug}
    </article>
);

export default PostPreview;
