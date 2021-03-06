import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import { Helmet } from 'react-helmet';

import { Layout } from '../components/index';
import { htmlToReact, safePrefix } from '../utils';

export default class Post extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <Helmet>
          <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.excerpt')}></meta>
          <meta property="og:description" content={_.get(this.props, 'pageContext.frontmatter.excerpt')} />
          <meta property="og:image" content={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))}></meta>
          <meta property="og:title" content={_.get(this.props, 'pageContext.frontmatter.title')} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:creator" content="@DBredvick"></meta>
          <meta name="twitter:image" content={`https://drewb.tech${safePrefix(_.get(this.props, 'pageContext.frontmatter.twitter_image'))}`}></meta>
        </Helmet>
        <article className="post post-full">
          <header className="post-header">
            <div className="post-meta">
              <time className="published"
                datetime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%A, %B %e, %Y')}</time>
            </div>
            <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
          </header>
          {_.get(this.props, 'pageContext.frontmatter.subtitle') &&
            <div className="post-subtitle">
              {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
            </div>
          }
          {_.get(this.props, 'pageContext.frontmatter.content_img_path') &&
            <div className="post-thumbnail">
              <img className="thumbnail" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
            </div>
          }
          <div className="post-content">
            {htmlToReact(_.get(this.props, 'pageContext.html'))}
          </div>
        </article>
      </Layout >
    );
  }
}
