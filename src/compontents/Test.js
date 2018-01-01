import React from 'react';
/*global FB*/
export default {
    componentDidMount() {
        window.fbAsyncInit = function() {
            FB.init({
                appId            : 'your-app-id',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v2.11'
            });
            FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
            }.bind(this))
        }.bind(this)
    },

    componentWillMount() {
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },

    render()
    {
        <div class="fb-page" data-href="https://www.facebook.com/skni.kod/" data-tabs="timeline"
             data-small-header="true" data-adapt-container-width="true" data-hide-cover="false"
             data-show-facepile="false">
            <blockquote cite="https://www.facebook.com/skni.kod/" class="fb-xfbml-parse-ignore"><a
                href="https://www.facebook.com/skni.kod/">SKNI KOD &amp; Rzeszowska Grupa .NET</a></blockquote>
        </div>
    }
}