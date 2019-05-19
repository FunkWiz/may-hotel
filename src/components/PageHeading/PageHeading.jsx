import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './PageHeading.scss';
import classNames from 'classnames';

const PageHeading = ({ title, icon, links }) => {
    return (
        <div className="page-heading">
            <div className="page-heading-top">
                <span className="page-heading-title">
                    <span>{title}</span>
                    <img src={icon} className="site-icon page-heading-top-icon" alt={title} />
                </span>
            </div>
            <div className="page-heading-bottom">
                <PageLinkList list={links} />
            </div>
        </div>
    )
}


const _pageLinkList = ({ list, routing }) => (
    <ul className="page-link-list">
        {list.map((item, idx) => {
            const isSelected = window.location.href.includes(item.path);
            return <PageLinkItem key={idx} {...item} selected={isSelected} />;
        })}
    </ul>
)
const PageLinkList = withRouter(_pageLinkList);

const PageLinkItem = ({ title, path, selected }) => (
    <li className={classNames("page-link-item", { "selected": selected })}>
        <Link to={path}>
            {title}
        </Link>
    </li>
)



export default PageHeading;