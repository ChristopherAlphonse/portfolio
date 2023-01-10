import React from "react";

function Resume() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      /*!\n * Base CSS for pdf2htmlEX\n * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com>\n * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE\n */\n      #sidebar {\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        width: 250px;\n        padding: 0;\n        margin: 0;\n        overflow: auto;\n      }\n      #page-container {\n        position: absolute;\n        top: 0;\n        left: 0;\n        margin: 0;\n        padding: 0;\n        border: 0;\n      }\n      @media screen {\n        #sidebar.opened + #page-container {\n          left: 250px;\n        }\n        #page-container {\n          bottom: 0;\n          right: 0;\n          overflow: auto;\n        }\n        .loading-indicator {\n          display: none;\n        }\n        .loading-indicator.active {\n          display: block;\n          position: absolute;\n          width: 64px;\n          height: 64px;\n          top: 50%;\n          left: 50%;\n          margin-top: -32px;\n          margin-left: -32px;\n        }\n        .loading-indicator img {\n          position: absolute;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n        }\n      }\n      @media print {\n        @page {\n          margin: 0;\n        }\n        html {\n          margin: 0;\n        }\n        body {\n          margin: 0;\n          -webkit-print-color-adjust: exact;\n        }\n        #sidebar {\n          display: none;\n        }\n        #page-container {\n          width: auto;\n          height: auto;\n          overflow: visible;\n          background-color: transparent;\n        }\n        .d {\n          display: none;\n        }\n      }\n      .pf {\n        position: relative;\n        background-color: white;\n        overflow: hidden;\n        margin: 0;\n        border: 0;\n      }\n      .pc {\n        position: absolute;\n        border: 0;\n        padding: 0;\n        margin: 0;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        display: block;\n        transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n        -webkit-transform-origin: 0 0;\n      }\n      .pc.opened {\n        display: block;\n      }\n      .bf {\n        position: absolute;\n        border: 0;\n        margin: 0;\n        top: 0;\n        bottom: 0;\n        width: 100%;\n        height: 100%;\n        -ms-user-select: none;\n        -moz-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n      }\n      .bi {\n        position: absolute;\n        border: 0;\n        margin: 0;\n        -ms-user-select: none;\n        -moz-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n      }\n      @media print {\n        .pf {\n          margin: 0;\n          box-shadow: none;\n          page-break-after: always;\n          page-break-inside: avoid;\n        }\n        @-moz-document url-prefix() {\n          .pf {\n            overflow: visible;\n            border: 1px solid #fff;\n          }\n          .pc {\n            overflow: visible;\n          }\n        }\n      }\n      .c {\n        position: absolute;\n        border: 0;\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n        display: block;\n      }\n      .t {\n        position: absolute;\n        white-space: pre;\n        font-size: 1px;\n        transform-origin: 0 100%;\n        -ms-transform-origin: 0 100%;\n        -webkit-transform-origin: 0 100%;\n        unicode-bidi: bidi-override;\n        -moz-font-feature-settings: "liga" 0;\n      }\n      .t:after {\n        content: "";\n      }\n      .t:before {\n        content: "";\n        display: inline-block;\n      }\n      .t span {\n        position: relative;\n        unicode-bidi: bidi-override;\n      }\n      ._ {\n        display: inline-block;\n        color: transparent;\n        z-index: -1;\n      }\n      ::selection {\n        background: rgba(127, 255, 255, 0.4);\n      }\n      ::-moz-selection {\n        background: rgba(127, 255, 255, 0.4);\n      }\n      .pi {\n        display: none;\n      }\n      .d {\n        position: absolute;\n        transform-origin: 0 100%;\n        -ms-transform-origin: 0 100%;\n        -webkit-transform-origin: 0 100%;\n      }\n      .it {\n        border: 0;\n        background-color: rgba(255, 255, 255, 0);\n      }\n      .ir:hover {\n        cursor: pointer;\n      }\n    ',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      /*!\n * Fancy styles for pdf2htmlEX\n * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com>\n * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE\n */\n      @keyframes fadein {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n      @-webkit-keyframes fadein {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n      @keyframes swing {\n        0 {\n          transform: rotate(0);\n        }\n        10% {\n          transform: rotate(0);\n        }\n        90% {\n          transform: rotate(720deg);\n        }\n        100% {\n          transform: rotate(720deg);\n        }\n      }\n      @-webkit-keyframes swing {\n        0 {\n          -webkit-transform: rotate(0);\n        }\n        10% {\n          -webkit-transform: rotate(0);\n        }\n        90% {\n          -webkit-transform: rotate(720deg);\n        }\n        100% {\n          -webkit-transform: rotate(720deg);\n        }\n      }\n      @media screen {\n        #sidebar {\n          background-color: #2f3236;\n          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+");\n        }\n        #outline {\n          font-family: Georgia, Times, "Times New Roman", serif;\n          font-size: 13px;\n          margin: 2em 1em;\n        }\n        #outline ul {\n          padding: 0;\n        }\n        #outline li {\n          list-style-type: none;\n          margin: 1em 0;\n        }\n        #outline li > ul {\n          margin-left: 1em;\n        }\n        #outline a,\n        #outline a:visited,\n        #outline a:hover,\n        #outline a:active {\n          line-height: 1.2;\n          color: #e8e8e8;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          text-decoration: none;\n          display: block;\n          overflow: hidden;\n          outline: 0;\n        }\n        #outline a:hover {\n          color: #0cf;\n        }\n        #page-container {\n          background-color: #9e9e9e;\n          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");\n          -webkit-transition: left 500ms;\n          transition: left 500ms;\n        }\n        .pf {\n          margin: 13px auto;\n          box-shadow: 1px 1px 3px 1px #333;\n          border-collapse: separate;\n        }\n        .pc.opened {\n          -webkit-animation: fadein 100ms;\n          animation: fadein 100ms;\n        }\n        .loading-indicator.active {\n          -webkit-animation: swing 1.5s ease-in-out 0.01s infinite alternate\n            none;\n          animation: swing 1.5s ease-in-out 0.01s infinite alternate none;\n        }\n        .checked {\n          background: no-repeat\n            url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC);\n        }\n      }\n    ',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      .ff0 {\n        font-family: sans-serif;\n        visibility: hidden;\n      }\n      @font-face {\n        font-family: ff1;\n        src: url("data:application/font-woff;base64,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")\n          format("woff");\n      }\n      .ff1 {\n        font-family: ff1;\n        line-height: 0.884277;\n        font-style: normal;\n        font-weight: normal;\n        visibility: visible;\n      }\n      @font-face {\n        font-family: ff2;\n        src: url("data:application/font-woff;base64,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")\n          format("woff");\n      }\n      .ff2 {\n        font-family: ff2;\n        line-height: 0.895996;\n        font-style: normal;\n        font-weight: normal;\n        visibility: visible;\n      }\n      .m0 {\n        transform: matrix(0.25, 0, 0, 0.25, 0, 0);\n        -ms-transform: matrix(0.25, 0, 0, 0.25, 0, 0);\n        -webkit-transform: matrix(0.25, 0, 0, 0.25, 0, 0);\n      }\n      .m1 {\n        transform: none;\n        -ms-transform: none;\n        -webkit-transform: none;\n      }\n      .v0 {\n        vertical-align: 0px;\n      }\n      .ls0 {\n        letter-spacing: 0px;\n      }\n      .sc_ {\n        text-shadow: none;\n      }\n      .sc0 {\n        text-shadow: -0.015em 0 transparent, 0 0.015em transparent,\n          0.015em 0 transparent, 0 -0.015em transparent;\n      }\n      @media screen and (-webkit-min-device-pixel-ratio: 0) {\n        .sc_ {\n          -webkit-text-stroke: 0px transparent;\n        }\n        .sc0 {\n          -webkit-text-stroke: 0.015em transparent;\n          text-shadow: none;\n        }\n      }\n      .ws0 {\n        word-spacing: -10.851563px;\n      }\n      .ws1 {\n        word-spacing: -9.042969px;\n      }\n      .ws5 {\n        word-spacing: -0.916428px;\n      }\n      .ws3 {\n        word-spacing: -0.011723px;\n      }\n      .ws8 {\n        word-spacing: 0px;\n      }\n      .ws2 {\n        word-spacing: 2.988262px;\n      }\n      .ws4 {\n        word-spacing: 5.988775px;\n      }\n      .ws6 {\n        word-spacing: 11.083573px;\n      }\n      .ws7 {\n        word-spacing: 11.992614px;\n      }\n      ._2 {\n        margin-left: -4.029174px;\n      }\n      ._1 {\n        margin-left: -2.69146px;\n      }\n      ._0 {\n        margin-left: -1.381353px;\n      }\n      ._5 {\n        width: 11.223906px;\n      }\n      ._3 {\n        width: 14.150286px;\n      }\n      ._4 {\n        width: 15.312029px;\n      }\n      ._6 {\n        width: 17.963998px;\n      }\n      .fc0 {\n        color: rgb(0, 0, 0);\n      }\n      .fs4 {\n        font-size: 38.000001px;\n      }\n      .fs1 {\n        font-size: 39.999999px;\n      }\n      .fs3 {\n        font-size: 44.000001px;\n      }\n      .fs2 {\n        font-size: 48px;\n      }\n      .fs0 {\n        font-size: 64.000002px;\n      }\n      .y0 {\n        bottom: -0.5px;\n      }\n      .y34 {\n        bottom: 64.67773px;\n      }\n      .y33 {\n        bottom: 76.27441px;\n      }\n      .y32 {\n        bottom: 88.246095px;\n      }\n      .y31 {\n        bottom: 101.29883px;\n      }\n      .y30 {\n        bottom: 112.89551px;\n      }\n      .y2f {\n        bottom: 124.867185px;\n      }\n      .y2e {\n        bottom: 137.91992px;\n      }\n      .y2d {\n        bottom: 149.5166px;\n      }\n      .y2c {\n        bottom: 161.488285px;\n      }\n      .y2b {\n        bottom: 177.416012px;\n      }\n      .y2a {\n        bottom: 198.314449px;\n      }\n      .y29 {\n        bottom: 210.771485px;\n      }\n      .y28 {\n        bottom: 224.199215px;\n      }\n      .y27 {\n        bottom: 240.126953px;\n      }\n      .y26 {\n        bottom: 261.025389px;\n      }\n      .y25 {\n        bottom: 273.232419px;\n      }\n      .y24 {\n        bottom: 285.439449px;\n      }\n      .y23 {\n        bottom: 297.646489px;\n      }\n      .y22 {\n        bottom: 312.603513px;\n      }\n      .y21 {\n        bottom: 333.501949px;\n      }\n      .y20 {\n        bottom: 345.708989px;\n      }\n      .y1f {\n        bottom: 358.166015px;\n      }\n      .y1e {\n        bottom: 371.343749px;\n      }\n      .y1d {\n        bottom: 383.800785px;\n      }\n      .y1c {\n        bottom: 399.728513px;\n      }\n      .y1b {\n        bottom: 420.626949px;\n      }\n      .y1a {\n        bottom: 432.833989px;\n      }\n      .y19 {\n        bottom: 445.041019px;\n      }\n      .y18 {\n        bottom: 457.248049px;\n      }\n      .y17 {\n        bottom: 469.455079px;\n      }\n      .y16 {\n        bottom: 481.662109px;\n      }\n      .y15 {\n        bottom: 494.119135px;\n      }\n      .y14 {\n        bottom: 519.503909px;\n      }\n      .y13 {\n        bottom: 531.710939px;\n      }\n      .y12 {\n        bottom: 543.917969px;\n      }\n      .y11 {\n        bottom: 556.124999px;\n      }\n      .y10 {\n        bottom: 568.332029px;\n      }\n      .yf {\n        bottom: 580.789065px;\n      }\n      .ye {\n        bottom: 606.173829px;\n      }\n      .yd {\n        bottom: 618.380859px;\n      }\n      .yc {\n        bottom: 630.587889px;\n      }\n      .yb {\n        bottom: 642.794919px;\n      }\n      .ya {\n        bottom: 655.001949px;\n      }\n      .y9 {\n        bottom: 667.458984px;\n      }\n      .y8 {\n        bottom: 683.386719px;\n      }\n      .y7 {\n        bottom: 704.285156px;\n      }\n      .y6 {\n        bottom: 716.492188px;\n      }\n      .y5 {\n        bottom: 728.699219px;\n      }\n      .y4 {\n        bottom: 740.90625px;\n      }\n      .y3 {\n        bottom: 755.863281px;\n      }\n      .y2 {\n        bottom: 776.761719px;\n      }\n      .y1 {\n        bottom: 790.468749px;\n      }\n      .h7 {\n        height: 27.275391px;\n      }\n      .h3 {\n        height: 28.710937px;\n      }\n      .h5 {\n        height: 31.066407px;\n      }\n      .h6 {\n        height: 31.582032px;\n      }\n      .h4 {\n        height: 33.890625px;\n      }\n      .h2 {\n        height: 45.187501px;\n      }\n      .h0 {\n        height: 842px;\n      }\n      .h1 {\n        height: 842.5px;\n      }\n      .w0 {\n        width: 596px;\n      }\n      .w1 {\n        width: 596.5px;\n      }\n      .x0 {\n        left: 0px;\n      }\n      .x3 {\n        left: 36px;\n      }\n      .x2 {\n        left: 94.298733px;\n      }\n      .x1 {\n        left: 224.995185px;\n      }\n      @media print {\n        .v0 {\n          vertical-align: 0pt;\n        }\n        .ls0 {\n          letter-spacing: 0pt;\n        }\n        .ws0 {\n          word-spacing: -14.46875pt;\n        }\n        .ws1 {\n          word-spacing: -12.057291pt;\n        }\n        .ws5 {\n          word-spacing: -1.221904pt;\n        }\n        .ws3 {\n          word-spacing: -0.01563pt;\n        }\n        .ws8 {\n          word-spacing: 0pt;\n        }\n        .ws2 {\n          word-spacing: 3.984349pt;\n        }\n        .ws4 {\n          word-spacing: 7.985034pt;\n        }\n        .ws6 {\n          word-spacing: 14.778097pt;\n        }\n        .ws7 {\n          word-spacing: 15.990152pt;\n        }\n        ._2 {\n          margin-left: -5.372232pt;\n        }\n        ._1 {\n          margin-left: -3.588613pt;\n        }\n        ._0 {\n          margin-left: -1.841804pt;\n        }\n        ._5 {\n          width: 14.965209pt;\n        }\n        ._3 {\n          width: 18.867048pt;\n        }\n        ._4 {\n          width: 20.416038pt;\n        }\n        ._6 {\n          width: 23.951998pt;\n        }\n        .fs4 {\n          font-size: 50.666668pt;\n        }\n        .fs1 {\n          font-size: 53.333332pt;\n        }\n        .fs3 {\n          font-size: 58.666668pt;\n        }\n        .fs2 {\n          font-size: 64pt;\n        }\n        .fs0 {\n          font-size: 85.333336pt;\n        }\n        .y0 {\n          bottom: -0.666667pt;\n        }\n        .y34 {\n          bottom: 86.236973pt;\n        }\n        .y33 {\n          bottom: 101.699213pt;\n        }\n        .y32 {\n          bottom: 117.66146pt;\n        }\n        .y31 {\n          bottom: 135.065107pt;\n        }\n        .y30 {\n          bottom: 150.527347pt;\n        }\n        .y2f {\n          bottom: 166.489581pt;\n        }\n        .y2e {\n          bottom: 183.893227pt;\n        }\n        .y2d {\n          bottom: 199.355467pt;\n        }\n        .y2c {\n          bottom: 215.317714pt;\n        }\n        .y2b {\n          bottom: 236.554683pt;\n        }\n        .y2a {\n          bottom: 264.419265pt;\n        }\n        .y29 {\n          bottom: 281.028647pt;\n        }\n        .y28 {\n          bottom: 298.932287pt;\n        }\n        .y27 {\n          bottom: 320.16927pt;\n        }\n        .y26 {\n          bottom: 348.033852pt;\n        }\n        .y25 {\n          bottom: 364.309892pt;\n        }\n        .y24 {\n          bottom: 380.585932pt;\n        }\n        .y23 {\n          bottom: 396.861985pt;\n        }\n        .y22 {\n          bottom: 416.804683pt;\n        }\n        .y21 {\n          bottom: 444.669265pt;\n        }\n        .y20 {\n          bottom: 460.945319pt;\n        }\n        .y1f {\n          bottom: 477.554687pt;\n        }\n        .y1e {\n          bottom: 495.124999pt;\n        }\n        .y1d {\n          bottom: 511.73438pt;\n        }\n        .y1c {\n          bottom: 532.97135pt;\n        }\n        .y1b {\n          bottom: 560.835932pt;\n        }\n        .y1a {\n          bottom: 577.111985pt;\n        }\n        .y19 {\n          bottom: 593.388025pt;\n        }\n        .y18 {\n          bottom: 609.664065pt;\n        }\n        .y17 {\n          bottom: 625.940105pt;\n        }\n        .y16 {\n          bottom: 642.216145pt;\n        }\n        .y15 {\n          bottom: 658.825514pt;\n        }\n        .y14 {\n          bottom: 692.671879pt;\n        }\n        .y13 {\n          bottom: 708.947919pt;\n        }\n        .y12 {\n          bottom: 725.223959pt;\n        }\n        .y11 {\n          bottom: 741.499999pt;\n        }\n        .y10 {\n          bottom: 757.776039pt;\n        }\n        .yf {\n          bottom: 774.385421pt;\n        }\n        .ye {\n          bottom: 808.231772pt;\n        }\n        .yd {\n          bottom: 824.507812pt;\n        }\n        .yc {\n          bottom: 840.783852pt;\n        }\n        .yb {\n          bottom: 857.059892pt;\n        }\n        .ya {\n          bottom: 873.335932pt;\n        }\n        .y9 {\n          bottom: 889.945312pt;\n        }\n        .y8 {\n          bottom: 911.182291pt;\n        }\n        .y7 {\n          bottom: 939.046875pt;\n        }\n        .y6 {\n          bottom: 955.322917pt;\n        }\n        .y5 {\n          bottom: 971.598959pt;\n        }\n        .y4 {\n          bottom: 987.875pt;\n        }\n        .y3 {\n          bottom: 1007.817709pt;\n        }\n        .y2 {\n          bottom: 1035.682292pt;\n        }\n        .y1 {\n          bottom: 1053.958333pt;\n        }\n        .h7 {\n          height: 36.367188pt;\n        }\n        .h3 {\n          height: 38.281249pt;\n        }\n        .h5 {\n          height: 41.421876pt;\n        }\n        .h6 {\n          height: 42.109376pt;\n        }\n        .h4 {\n          height: 45.1875pt;\n        }\n        .h2 {\n          height: 60.250002pt;\n        }\n        .h0 {\n          height: 1122.666667pt;\n        }\n        .h1 {\n          height: 1123.333333pt;\n        }\n        .w0 {\n          width: 794.666667pt;\n        }\n        .w1 {\n          width: 795.333333pt;\n        }\n        .x0 {\n          left: 0pt;\n        }\n        .x3 {\n          left: 48pt;\n        }\n        .x2 {\n          left: 125.731644pt;\n        }\n        .x1 {\n          left: 299.99358pt;\n        }\n      }\n    ',
        }}
      />
      <title />
      <div id="sidebar">
        <div id="outline" />
      </div>
      <div id="page-container">
        <div id="pf1" className="pf w0 h0" data-page-no={1}>
          <div className="pc pc1 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,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AACg/QAAANB+AAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA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ANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAgPYDAABA+wEAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAoP0AAADQfrDLvngAAAGjSURBVAAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAAaD8AAAC0HwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAAAA2g8AAADtBwAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACA9gMAAED7AQAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAACg/QAAANB+AAAA2g8AAADtBwAAgPYDAABA+wEAAKD9AAAA0H4AAABoPwAAALQfAACA9gMAAED7AQAAoP0AAADQfgAAAGg/AAAAtB8AAADaDwAAAO0HAACg/QAAANB+AAAAaD8AAAC0HwAAANoPAAAA7QcAAID2AwAAQPsBAABoPwAAALQfAAAA2g8AAADtBwAAwAY0TWMTAACAjRvtlSRJ/ctNk/wo/669dVaSk+6aRff52C7fc9kmu+PkV0nKaPn3793a1za5/5B8Hr9+Px3///mH3fPOx8mXkly2yUObHK6456Ikn3aSo/J6zZ/12/b9+SYlOe+umXTPe1lxz7dR8rNNJiW5a1b+529GKDvPm2dlygAAAABJRU5ErkJggg=="
            />
            <div className="t m0 x1 h2 y1 ff1 fs0 fc0 sc0 ls0 ws8">
              Christ
              <span className="_ _0" />
              opher Alphonse
            </div>
            <div className="t m0 x2 h3 y2 ff2 fs1 fc0 sc0 ls0 ws8">
              Boston, MA | Chris
              <span className="_ _0" />
              topher
              <span className="_ _0" />
              alphonse96@gmail.com | 7816005513 | ht
              <span className="_ _0" />
              tps://
              <span className="_ _0" />
              christopher
              <span className="_ _0" />
              alphonse.com
            </div>
            <div className="t m0 x3 h4 y3 ff1 fs2 fc0 sc0 ls0 ws0">SUMMARY</div>
            <div className="t m0 x3 h3 y4 ff2 fs1 fc0 sc0 ls0 ws8">
              Motiva
              <span className="_ _0" />
              ted softwar
              <span className="_ _0" />e developer with a backgr
              <span className="_ _0" />
              ound in pharmacy seeking an entry
              <span className="_ _0" />
              -level position where I c<span className="_ _0" />
              an utilize m<span className="_ _0" />y technical
            </div>
            <div className="t m0 x3 h3 y5 ff2 fs1 fc0 sc0 ls0 ws8">
              skills and problem-solving abilities in a f<span className="_ _0" />
              ast
              <span className="_ _0" />
              -paced en
              <span className="_ _0" />
              vironmen
              <span className="_ _0" />
              t. In my pre
              <span className="_ _0" />
              vious role as a pharmacy t<span className="_ _0" />
              echnician, I developed and
            </div>
            <div className="t m0 x3 h3 y6 ff2 fs1 fc0 sc0 ls0 ws8">
              implemented a ne
              <span className="_ _0" />w sys
              <span className="_ _0" />
              tem f<span className="_ _0" />
              or tracking and or
              <span className="_ _0" />
              dering medication, r<span className="_ _0" />
              esulting in a 25% increase in ef
              <span className="_ _0" />
              ficiency
              <span className="_ _1" />. Reliable and able t<span className="_ _0" />o
            </div>
            <div className="t m0 x3 h3 y7 ff2 fs1 fc0 sc0 ls0 ws8">
              support k<span className="_ _0" />
              ey initiativ
              <span className="_ _0" />
              es. Looking for a challenging r<span className="_ _0" />
              ole where I can mak
              <span className="_ _1" />e a positive impact and continue t<span className="_ _0" />
              o grow as a dev
              <span className="_ _0" />
              eloper
              <span className="_ _2" />.
            </div>
            <div className="t m0 x3 h4 y8 ff1 fs2 fc0 sc0 ls0">EXPERIENCE</div>
            <div className="t m0 x3 h5 y9 ff1 fs3 fc0 sc0 ls0 ws8">
              Full Stack Engineer | Pur
              <span className="_ _0" />e by Mel | Nov 2022 - Pr
              <span className="_ _0" />
              esent | Freelance
            </div>
            <div className="t m0 x3 h3 ya ff2 fs1 fc0 sc0 ls0 ws8">
              • Designed and built an e-commer
              <span className="_ _0" />
              ce platf
              <span className="_ _0" />
              orm using NextJS and T<span className="_ _1" />
              ypeScript to enhance the user experience and boos
              <span className="_ _0" />t sales.
            </div>
            <div className="t m0 x3 h3 yb ff2 fs1 fc0 sc0 ls0 ws8">
              • Utilized the Str
              <span className="_ _0" />
              ipe API to str
              <span className="_ _0" />
              eamline payment pr
              <span className="_ _0" />
              ocessing and reduce err
              <span className="_ _0" />
              ors b<span className="_ _0" />y 60% through cust
              <span className="_ _0" />
              om validations and Y<span className="_ _2" />
              arn
            </div>
            <div className="t m0 x3 h3 yc ff2 fs1 fc0 sc0 ls0 ws1">maintenance.</div>
            <div className="t m0 x3 h3 yd ff2 fs1 fc0 sc0 ls0 ws8">
              • Developed a RE
              <span className="_ _0" />
              STful API that managed user sessions, r<span className="_ _0" />
              outes, HTTPS reques
              <span className="_ _0" />
              ts, and error
              <span className="_ _0" />
              s, and performed thor
              <span className="_ _0" />
              ough tes
              <span className="_ _0" />
              ting and
            </div>
            <div className="t m0 x3 h3 ye ff2 fs1 fc0 sc0 ls0 ws8">
              debugging to ensure quality
              <span className="_ _2" />.
            </div>
            <div className="t m0 x3 h5 yf ff1 fs3 fc0 sc0 ls0 ws8">
              Softwar
              <span className="_ _0" />e Developer | CoinWhis
              <span className="_ _0" />
              tle | Aug 2022 - Oct 2022 | Freelance
            </div>
            <div className="t m0 x3 h3 y10 ff2 fs1 fc0 sc0 ls0 ws8">
              • Developed a sear
              <span className="_ _0" />
              chable archive of d<span className="_ _0" />
              epartment news r<span className="_ _0" />
              eleases using a variety of languag
              <span className="_ _0" />
              es, framew
              <span className="_ _0" />
              orks, and CMS including
            </div>
            <div className="t m0 x3 h3 y11 ff2 fs1 fc0 sc0 ls0 ws8">
              W<span className="_ _0" />
              agt
              <span className="_ _0" />
              ail, Python, Django, Ja
              <span className="_ _0" />
              vaScript, CSS, and SQLit
              <span className="_ _0" />
              e.
            </div>
            <div className="t m0 x3 h3 y12 ff2 fs1 fc0 sc0 ls0 ws8">
              • Utilized jQuery and RE
              <span className="_ _0" />
              STful routing t<span className="_ _0" />o creat
              <span className="_ _0" />e over 24 HTML temp
              <span className="_ _0" />
              lates, seamlessly int
              <span className="_ _0" />
              egra
              <span className="_ _0" />
              ting the front
              <span className="_ _1" />
              -end and back
              <span className="_ _0" />
              -end to
            </div>
            <div className="t m0 x3 h3 y13 ff2 fs1 fc0 sc0 ls0 ws8">
              provide an in
              <span className="_ _0" />
              tuitive user exper
              <span className="_ _0" />
              ience.
            </div>
            <div className="t m0 x3 h3 y14 ff2 fs1 fc0 sc0 ls0 ws8">
              • Improv
              <span className="_ _0" />
              ed navig
              <span className="_ _0" />
              ation and int
              <span className="_ _0" />
              eraction on the sit
              <span className="_ _0" />e by successfully int
              <span className="_ _0" />
              egra
              <span className="_ _0" />
              ting the front
              <span className="_ _1" />
              -end template with the back
              <span className="_ _1" />
              -end logic.
            </div>
            <div className="t m0 x3 h5 y15 ff1 fs3 fc0 sc0 ls0 ws8">
              Pa
              <span className="_ _0" />
              tient Support Advoc
              <span className="_ _0" />
              ate | Shields H<span className="_ _0" />
              ealth Solutions | Dec 2021 - Nov 2022 | Stough
              <span className="_ _0" />
              ton, MA
            </div>
            <div className="t m0 x3 h3 y16 ff2 fs1 fc0 sc0 ls0 ws8">
              • Achieved e<span className="_ _0" />
              xcepti
              <span className="_ _0" />
              onal patient satis
              <span className="_ _0" />
              faction as a P<span className="_ _0" />
              atient Suppor
              <span className="_ _0" />t Advocat
              <span className="_ _0" />e in a high-volume hospit
              <span className="_ _0" />
              al, routinely r<span className="_ _0" />
              esolving
            </div>
            <div className="t m0 x3 h3 y17 ff2 fs1 fc0 sc0 ls0 ws8">
              complaints and dif
              <span className="_ _0" />
              ficulties within a single call and driving a 50% decr
              <span className="_ _0" />
              ease in surgeries and a 15% incr
              <span className="_ _0" />
              ease in patient r<span className="_ _0" />
              etention.
            </div>
            <div className="t m0 x3 h3 y18 ff2 fs1 fc0 sc0 ls0 ws8">
              • W<span className="_ _1" />
              orked closely with leading insur
              <span className="_ _0" />
              ance companies including CVS Car
              <span className="_ _0" />
              emark, AETNA, Blue Cross Blue Shield, Optum, and Unit
              <span className="_ _0" />
              ed
            </div>
            <div className="t m0 x3 h3 y19 ff2 fs1 fc0 sc0 ls0 ws8">
              Healthcare t<span className="_ _0" />o inv
              <span className="_ _0" />
              estiga
              <span className="_ _0" />
              te and resolv
              <span className="_ _0" />e over 450 cases per mon
              <span className="_ _0" />
              th, improving pa
              <span className="_ _0" />
              tient outc
              <span className="_ _0" />
              omes.
            </div>
            <div className="t m0 x3 h3 y1a ff2 fs1 fc0 sc0 ls0 ws8">
              • Managed patien
              <span className="_ _0" />t cases, answer
              <span className="_ _0" />
              ed medical inquiries, and document
              <span className="_ _0" />
              ed patient/ph
              <span className="_ _0" />
              ysician int
              <span className="_ _0" />
              eractions thr
              <span className="_ _0" />
              ough phone and email
            </div>
            <div className="t m0 x3 h3 y1b ff2 fs1 fc0 sc0 ls0 ws8">
              communica
              <span className="_ _0" />
              tions, ensuring top-quality patien
              <span className="_ _0" />t care.
            </div>
            <div className="t m0 x3 h4 y1c ff1 fs2 fc0 sc0 ls0 ws0">
              EDUCA
              <span className="_ _2" />
              TION
            </div>
            <div className="t m0 x3 h5 y1d ff1 fs3 fc0 sc0 ls0 ws8">
              Honor
              <span className="_ _0" />
              ary High School Progr
              <span className="_ _0" />
              am, Gate
              <span className="_ _0" />
              wa
              <span className="_ _0" />y to College
            </div>
            <div className="t m0 x3 h3 y1e ff2 fs1 fc0 sc0 ls0 ws8">
              Massasoit Comm. College • Br
              <span className="_ _0" />
              ockton, MA • 2014
            </div>
            <div className="t m0 x3 h5 y1f ff1 fs3 fc0 sc0 ls0 ws8">
              Softwar
              <span className="_ _0" />e Engineering
            </div>
            <div className="t m0 x3 h3 y20 ff2 fs1 fc0 sc0 ls0 ws8">Coding Dojo • 2022</div>
            <div className="t m0 x3 h3 y21 ff2 fs1 fc0 sc0 ls0 ws8">
              Full-Stack Softw
              <span className="_ _0" />
              are Developmen
              <span className="_ _0" />t in the MERN Stack (MongoDB
              <span className="_ _0" />, Express, R<span className="_ _0" />
              eact, Node)
            </div>
            <div className="t m0 x3 h4 y22 ff1 fs2 fc0 sc0 ls0 ws0">
              COURSEW
              <span className="_ _0" />
              ORK
            </div>
            <div className="t m0 x3 h3 y23 ff2 fs1 fc0 sc0 ls0 ws2">
              Data<span className="_ _3"> </span>Structures<span className="_ _3"> </span>and
              <span className="_ _4"> </span>Algorithms<span className="_ _3"> </span>|
              <span className="_ _4"> </span>Software<span className="_"> </span>Dev
              <span className="_ _0" />
              elopment<span className="_"> </span>Fundament
              <span className="_ _0" />
              als<span className="_"> </span>|<span className="_"> </span>Intr
              <span className="_ _0" />
              oduction<span className="_"> </span>to<span className="_"> </span>Scrum,
              <span className="_"> </span>Agile,<span className="_"> </span>and
              <span className="_"> </span>Project<span className="_"> </span>Deliv
              <span className="_ _0" />
              ery<span className="_"> </span>|
            </div>
            <div className="t m0 x3 h3 y24 ff2 fs1 fc0 sc0 ls0 ws3">
              Model-View
              <span className="_ _0" />
              -Controller<span className="_ _5" />(MVC)<span className="_ _5"> </span>|
              <span className="_"> </span>Design<span className="_"> </span>Higher-Or
              <span className="_ _0" />
              der<span className="_"> </span>Components<span className="_"> </span>(HOC)
              <span className="_"> </span>|<span className="_"> </span>Continuous
              <span className="_"> </span>In
              <span className="_ _0" />
              tegr
              <span className="_ _0" />
              ation/Continuous<span className="_" />Deliv
              <span className="_ _0" />
              ery<span className="_"> </span>(CI/CD)<span className="_"> </span>|
            </div>
            <div className="t m0 x3 h3 y25 ff2 fs1 fc0 sc0 ls0 ws4">
              Asynchr
              <span className="_ _0" />
              onous<span className="_ _6"> </span>Jav
              <span className="_ _0" />
              aScript<span className="_ _6"> </span>and<span className="_ _6"> </span>XML
              <span className="_ _6"> </span>(AJAX)<span className="_"> </span>|
              <span className="_"> </span>Softwar
              <span className="_ _0" />e<span className="_"> </span>Development
              <span className="_"> </span>Lif
              <span className="_ _1" />e<span className="_"> </span>Cycle
              <span className="_" />(SDLC)<span className="_"> </span>|
              <span className="_"> </span>Crea
              <span className="_ _0" />
              te,<span className="_"> </span>Read,<span className="_"> </span>Upda
              <span className="_ _0" />
              te,<span className="_"> </span>Delet
              <span className="_ _0" />e<span className="_" />(CRUD)
            </div>
            <div className="t m0 x3 h3 y26 ff2 fs1 fc0 sc0 ls0 ws8">
              Opera
              <span className="_ _0" />
              tions | User Interf
              <span className="_ _0" />
              ace (UI) and User Experience (UX) Design
            </div>
            <div className="t m0 x3 h4 y27 ff1 fs2 fc0 sc0 ls0">SKILLS</div>
            <div className="t m0 x3 h5 y28 ff1 fs3 fc0 sc0 ls0 ws5">
              Languages:<span className="_"> </span>
              <span className="ff2 fs1 ws8">
                Ja
                <span className="_ _0" />
                vaScript, T<span className="_ _1" />
                ypeScript, HTML/CSS/Sass,<span className="_"> </span>MySQL, GraphqlLibr
                <span className="_ _0" />
                aries and
              </span>
            </div>
            <div className="t m0 x3 h5 y29 ff1 fs3 fc0 sc0 ls0 ws6">
              Fra
              <span className="_ _0" />
              meworks:<span className="_"> </span>
              <span className="ff2 fs1 ws7">
                T<span className="_ _2" />
                auriJS,<span className="_"> </span>React,<span className="_"> </span>Node.js,
                <span className="_"> </span>Expr
                <span className="_ _0" />
                ess,<span className="_ _6"> </span>T<span className="_ _1" />
                ailwind,<span className="_ _6"> </span>NextJS,<span className="_ _6"> </span>
                MongoDB
                <span className="_ _0" />,<span className="_ _6"> </span>SQLite,
                <span className="_ _6"> </span>Sock
                <span className="_ _1" />
                et.io,<span className="_ _6"> </span>Firebase,<span className="_ _6"> </span>
                Bootstr
                <span className="_ _1" />
                ap,<span className="_ _6"> </span>Framer
              </span>
            </div>
            <div className="t m0 x3 h3 y2a ff2 fs1 fc0 sc0 ls0 ws1">Motion</div>
            <div className="t m0 x3 h4 y2b ff1 fs2 fc0 sc0 ls0 ws0">
              PROJE
              <span className="_ _0" />
              CTS
            </div>
            <div className="t m0 x3 h6 y2c ff1 fs3 fc0 sc0 ls0 ws8">
              Azalais Dark<span className="_"> </span>
              <span className="ff2">- Link</span>
            </div>
            <div className="t m0 x3 h7 y2d ff2 fs4 fc0 sc0 ls0 ws8">
              • Creat
              <span className="_ _0" />
              ed a Visual Studio Code theme using Y<span className="_ _2" />o Code, XML, and JSON,
              and successfully deployed it t<span className="_ _0" />o the mark
              <span className="_ _0" />
              etplace using Azure.
            </div>
            <div className="t m0 x3 h7 y2e ff2 fs4 fc0 sc0 ls0 ws8">
              • Gathered <span className="_ _0" />a significant number of activ
              <span className="_ _0" />e users and recei
              <span className="_ _0" />
              ved positive f<span className="_ _0" />
              eedback on the theme's design and functionality
              <span className="_ _2" />.
            </div>
            <div className="t m0 x3 h6 y2f ff1 fs3 fc0 sc0 ls0 ws8">
              Noted - Landing pag
              <span className="_ _0" />e<span className="ff2">- Link</span>
            </div>
            <div className="t m0 x3 h7 y30 ff2 fs4 fc0 sc0 ls0 ws8">
              • Developed landing pag
              <span className="_ _0" />e with time-sensitive passw
              <span className="_ _0" />
              ord rese
              <span className="_ _0" />t featu
              <span className="_ _0" />
              re using JWT and bcrypt f<span className="_ _0" />
              or encryption
            </div>
            <div className="t m0 x3 h7 y31 ff2 fs4 fc0 sc0 ls0 ws8">
              • Creat
              <span className="_ _0" />
              ed user interf
              <span className="_ _0" />
              ace using T<span className="_ _2" />
              ailwind, T<span className="_ _0" />
              ypescript, and Fram
              <span className="_ _0" />
              er Motion
            </div>
            <div className="t m0 x3 h6 y32 ff1 fs3 fc0 sc0 ls0 ws8">
              Admin Dashboard - W<span className="_ _1" />
              eb App<span className="ff2">- Link</span>
            </div>
            <div className="t m0 x3 h7 y33 ff2 fs4 fc0 sc0 ls0 ws8">
              • Developed full s<span className="_ _0" />
              tack web applic
              <span className="_ _0" />
              ation using MERN st
              <span className="_ _0" />
              ack (MongoDB, Expr
              <span className="_ _0" />
              ess, React, and Node.js)
            </div>
            <div className="t m0 x3 h7 y34 ff2 fs4 fc0 sc0 ls0 ws8">
              • Implemented f<span className="_ _1" />
              eatures such as user authentic
              <span className="_ _0" />
              ation, dat
              <span className="_ _0" />a management, and in
              <span className="_ _0" />
              vent
              <span className="_ _0" />
              ory management to enhance functionalit
              <span className="_ _0" />y
            </div>
            <a className="l" href="https://github.com/ChristopherAlphonse/azalais-dark-">
              <div
                className="d m1"
                style={{
                  borderStyle: "none",
                  position: "absolute",
                  left: "36px",
                  bottom: "158.738281px",
                  width: "81.802597px",
                  height: "13.427739px",
                  backgroundColor: "rgba(255, 255, 255, 0.000001)",
                }}
              />
            </a>
            <a className="l" href="https://github.com/ChristopherAlphonse/Noted">
              <div
                className="d m1"
                style={{
                  borderStyle: "none",
                  position: "absolute",
                  left: "36px",
                  bottom: "122.117188px",
                  width: "120.479141px",
                  height: "13.427734px",
                  backgroundColor: "rgba(255, 255, 255, 0.000001)",
                }}
              />
            </a>
            <a className="l" href="https://github.com/ChristopherAlphonse/admindashboard">
              <div
                className="d m1"
                style={{
                  borderStyle: "none",
                  position: "absolute",
                  left: "36px",
                  bottom: "85.496094px",
                  width: "156.17673px",
                  height: "13.427734px",
                  backgroundColor: "rgba(255, 255, 255, 0.000001)",
                }}
              />
            </a>
          </div>
          <div
            className="pi"
            data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
          />
        </div>
      </div>
      <div className="loading-indicator">
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
}

export default Resume;
