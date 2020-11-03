import React from 'react'
import './index.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={require('../../assets/images/logo.png')} className="logo" alt="" />

                <div className="search">
                    <input type="text" placeholder="搜索" />
                </div>

                <button className="download" type="button">
                    立即下载
                </button>
            </div>
        )
    }
}
