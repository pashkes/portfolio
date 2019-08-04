import React from "react";

export default function HTML(props) {
  return (
    <html data-body-class="no-js" {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
    <script dangerouslySetInnerHTML={{
      __html: `
            window.addEventListener('DOMContentLoaded', function() {
                document.querySelector('html').setAttribute('data-body-class', 'js')
            });
            `
    }}/>
    </body>
    </html>
  )
}
