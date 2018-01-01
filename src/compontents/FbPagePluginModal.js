import React, {Component} from 'react';
import {localize} from "react-localize-redux/lib/index";


class FbPagePluginModal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return
        <div className="fb-page"
             data-href="https://www.facebook.com/skni.kod/"
             data-tabs="timeline"
             data-width="500"
             data-height="400"
             data-small-header="true"
             data-adapt-container-width="true"
             data-hide-cover="false"
             data-show-facepile="false">
            <blockquote className="fb-xfbml-parse-ignore"/>
        </div>
    }
    //componentDidMount() {
        //document.addEventListener('fb_init', e => FB.XFBML.parse());
    //}
}
export default FbPagePluginModal;
