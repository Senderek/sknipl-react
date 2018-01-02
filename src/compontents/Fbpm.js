import React from 'react';

/*global FB*/


class Fbpm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //states
        };
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            //SDK loaded, initialize it
            FB.init({
                appId: 'your-app-id',
                xfbml: true,
                version: 'v2.6'
            });
            //JS SDK initialized, now you can use it
            FB.XFBML.parse();
        };
        var srcStr = '';

        switch (this.props.curLang) {
            case 'pl':
                srcStr = '//connect.facebook.net/pl_PL/sdk.js';
                break;
            default:
                srcStr = '//connect.facebook.net/en_US/sdk.js';
                break;
        }

        //load the JavaScript SDK
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;

            js.src = srcStr;
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }


    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Fbpm;

