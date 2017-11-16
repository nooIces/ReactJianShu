import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { Breadcrumb, Icon } from 'antd';

const breadcrumbNameMap = {
    '/book': 'Book',
    '/code': 'Code'
};

const Breadnavigation = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const url_cn = url.split('/');
    return (
        <Breadcrumb.Item key={url}>
            <Link to={url}>
                {url_cn[url_cn.length - 1]}
            </Link>
        </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <Breadcrumb>
            {breadcrumbItems}
        </Breadcrumb>
    );
});

export default Breadnavigation;
