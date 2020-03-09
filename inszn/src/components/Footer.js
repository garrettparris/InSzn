import React, { Component } from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
class MyFooter extends React.Component{
    
    render() {
        const style = {
            height: ""
        }
        return(
            <div style={style}>
                <Footer
                    style= {style}
                columns={[
                    {
                    icon: (
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                    ),
                    title: '语雀',
                    url: 'https://yuque.com',
                    description: '知识创作与分享工具',
                    openExternal: true,
                },
                ]}
                bottom="Made with ❤️ by Garrett Parris"
            />,
            </div>
        );
    }
}
export default MyFooter