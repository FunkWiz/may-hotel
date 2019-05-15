import React from 'react';
import { Link } from 'react-router-dom';

const PageHeading = ({ title, icon, links }) => {
    return (
        <div className="page-heading">
            <div className="page-heading-top">
                <span className="page-heading-title"><img src={icon} />{title}</span>
            </div>
            <div className="page-heading-bottom">
                <PageLinkList list={links} />
            </div>
        </div>
    )
}


const PageLinkList = ({ list }) => (
    <ul className="page-link-list">
        {list.map((item, idx) => <PageLinkItem key={idx} {...item} />)}
    </ul>
)

const PageLinkItem = ({ title, targetUrl }) => (
    <li className="page-link-item">
        <Link to={targetUrl}>
            {title}
        </Link>
    </li>
)