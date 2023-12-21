import React, { useEffect, useRef } from 'react';

const JotFormIFrame = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const updateIframeSrc = () => {
      let iframeParams = [];
      const srcBase = 'https://form.jotform.com/233452889744066';

      if (window.location.href.indexOf('?') > -1) {
        iframeParams = iframeParams.concat(
          window.location.href
            .substr(window.location.href.indexOf('?') + 1)
            .split('&'),
        );
      }
      iframeParams.push('isIframeEmbed=1');
      if (iframeRef.current) {
        iframeRef.current.src = srcBase + '?' + iframeParams.join('&');
      }
    };

    updateIframeSrc();

    const handleIFrameMessage = (e) => {
      if (typeof e.data === 'object') {
        return;
      }
      var args = e.data.split(':');
      var iframe;
      if (args.length > 2) {
        iframe = document.getElementById(
          'JotFormIFrame-' + args[args.length - 1],
        );
      } else {
        iframe = document.getElementById('JotFormIFrame');
      }
      if (!iframe) {
        return;
      }
      switch (args[0]) {
        case 'scrollIntoView':
          iframe.scrollIntoView();
          break;
        case 'setHeight':
          iframe.style.height = args[1] + 'px';
          break;
        case 'collapseErrorPage':
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + 'px';
          }
          break;
        case 'reloadPage':
          window.location.reload();
          break;
        case 'loadScript':
          var src = args[1];
          if (args.length > 3) {
            src = args[1] + ':' + args[2];
          }
          var script = document.createElement('script');
          script.src = src;
          script.type = 'text/javascript';
          document.body.appendChild(script);
          break;
        case 'exitFullscreen':
          if (window.document.exitFullscreen) window.document.exitFullscreen();
          else if (window.document.mozCancelFullScreen)
            window.document.mozCancelFullScreen();
          else if (window.document.webkitExitFullscreen)
            window.document.webkitExitFullscreen();
          else if (window.document.msExitFullscreen)
            window.document.msExitFullscreen();
          break;
      }
    };

    window.addEventListener('message', handleIFrameMessage, false);

    return () => {
      window.removeEventListener('message', handleIFrameMessage);
    };
  }, []);

  return (
    <div className="flex-grow">
      <iframe
        ref={iframeRef}
        id="JotFormIFrame-233452889744066"
        title="Contact-Us Recipe Finder"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency="true"
        allowFullScreen
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/233452889744066"
        frameBorder="0"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '539px',
          border: 'none',
        }}
        scrolling="no"
        className="site-main"
      ></iframe>
    </div>
  );
};

export default JotFormIFrame;
