import React, { Component, Fragment } from 'react'
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp'

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp
                    time="7.12"
                    title="Tutorial React JS Pemula - 1"
                    desc="100x ditonton. 1 hari yang lalu" />
            </Fragment>
        )
    }
}

export default YoutubeCompPage