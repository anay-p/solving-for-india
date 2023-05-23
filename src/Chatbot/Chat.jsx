import React,{Component} from 'react'

export class Chat extends Component {
     componentDidMount(){
      
      (function(d, m){
          var kommunicateSettings = 
              {"appId":"324ae969fbb1704740a42bf3662f2fe75","popupWidget":true,"automaticChatOpenOnNavigation":true,
               "onInit":function(){
                var css = ".chat-popup-widget-container{background-color: red!important;}";
                Kommunicate.customizeWidgetCss(css);
              }
            };
          var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
          s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
          var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
          window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
  /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
   
    }
render(){
  return (
    <div>
      
    </div>
  )
}
}

export default Chat
