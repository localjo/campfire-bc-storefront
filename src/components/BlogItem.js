import React from 'react';
import { Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogItem extends React.Component {
  render() {
    const post = this.props.post;
    const columnWidth = this.props.columnWidth
      ? this.props.columnWidth
      : 'is-6';

    return (
      <div className={`is-parent column is-offset-2 is-8`} key={post.id}>
        <article
          className={`blog-list-item is-child ${
            post.frontmatter.featuredpost ? 'is-featured' : ''
          }`}
        >
          <header>
            {post.frontmatter.featuredimage ? (
              <div className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.title}`,
                  }}
                />
              </div>
            ) : null}
            <p className="post-meta">
              <Link className="title is-spaced is-size-4" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span className="subtitle is-size-5 is-block">
                {post.frontmatter.date}
              </span>
            </p>
          </header>
          <p>
            {post.excerpt}
            <br />
            <br />
            <Link className="btn" to={post.fields.slug}>
              Keep Reading →
            </Link>
          </p>
        </article>
      </div>
    );
  }
}

export default BlogItem;
