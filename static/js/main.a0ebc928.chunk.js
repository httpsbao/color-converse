(this.webpackJsonptshsv=this.webpackJsonptshsv||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),h=(a(30),a(13)),c=a.n(h),i=a(17),o=a(4),u=a(11),v=a(7),d=a(5),g=a(20),b=a(19),f=(a(32),a(63));function p(e){return r.a.createElement("div",{style:e.style},r.a.createElement(f.a,{label:e.label,type:"number",value:e.value,onChange:e.change,variant:"outlined",style:{width:"110px"}}))}function x(e){return r.a.createElement("div",null,r.a.createElement(f.a,{label:"hex",type:"text",value:e.value,onChange:e.change,variant:"outlined",style:{width:"150px"}}))}var m=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var n;Object(u.a)(this,a),n=t.call(this,e);var r=["#5674c9","#25c9ab","#9969c9","#e6ee9c"],l=Math.floor(Math.random()*r.length);return n.state={rgb:[[153,105,201],[37,201,171],[153,105,201],[230,238,156]][l],hsv:[[270,.4776,.7882],[168.2209,.815,.7843],[270,.4776,.7882],[65.8537,.3445,.9333]][l],hex:r[l],rawHex:r[l]},n.handleInputChange=n.handleInputChange.bind(Object(d.a)(n)),n.handleRgbConverse=n.handleRgbConverse.bind(Object(d.a)(n)),n.handleHsvConverse=n.handleHsvConverse.bind(Object(d.a)(n)),n.func=n.func.bind(Object(d.a)(n)),n.handleHexInputChange=n.handleHexInputChange.bind(Object(d.a)(n)),n}return Object(v.a)(a,[{key:"handleInputChange",value:function(e,t,a){"rgb"===t?(this.state[t][a]=parseInt(e),this.setState(this.state),this.handleRgbConverse()):(this.state[t][a]=parseFloat(e),this.setState(this.state),this.handleHsvConverse())}},{key:"func",value:function(e){if(!e)return"00";var t={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},a="",n=Math.floor(e/16);return a+=n>9?t[n]:n+"",a+=(e-=16*n)>9?t[e]:e+""}},{key:"handleRgbConverse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgb",t=Object(o.a)(this.state.rgb,3),a=t[0],n=t[1],r=t[2];a<0||!a?a=0:a>255&&(a=255),n<0||!n?n=0:n>255&&(n=255),r<0||!r?r=0:r>255&&(r=255);var l="#";l+=this.func(a)+this.func(n)+this.func(r);var s=0,h=0,c=0;a/=255,n/=255,r/=255;var i=Math.max(a,n,r),u=Math.min(a,n,r),v=i-u;c=i,h=0===i?0:v/i,0===v?s=0:(a===i&&(s=(n-r)/v*60),n===i&&(s=60*((r-a)/v+2)),r===i&&(s=60*((a-n)/v+4))),s<0&&(s+=360);var d="";d="hex"===e?this.state.rawHex:l,this.setState({hsv:[parseFloat(s.toFixed(4)),parseFloat(h.toFixed(4)),parseFloat(c.toFixed(4))],hex:l,rawHex:d})}},{key:"handleHsvConverse",value:function(){var e=Object(o.a)(this.state.hsv,3),t=e[0],a=e[1],n=e[2];t<0||!t?t=0:t>360&&(t=360),a<0||!a?a=0:a>1&&(a=1),n<0||!n?n=0:n>1&&(n=1);var r=0,l=0,s=0,h=Math.floor(t/60%6),c=t/60-h,i=n*(1-a),u=n*(1-c*a),v=n*(1-(1-c)*a);switch(h){case 0:r=n,l=v,s=i;break;case 1:r=u,l=n,s=i;break;case 2:r=i,l=n,s=v;break;case 3:r=i,l=u,s=n;break;case 4:r=v,l=i,s=n;break;case 5:r=n,l=i,s=u}r=Math.floor(255*r),l=Math.floor(255*l),s=Math.floor(255*s);var d="#";d+=this.func(r)+this.func(l)+this.func(s),this.setState({rgb:[r,l,s],hex:d,rawHex:d})}},{key:"handleHexInputChange",value:function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,r,l,s,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t,this.setState({rawHex:a}),n=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,!(a=a.toLowerCase())||!n.test(a)){e.next=13;break}return e.next=7,this.setState({hex:a});case 7:if(r="",4===a.length)for(r+="#",l=1;l<4;l++)r+=a[l],r+=a[l];else r=a;for(s=1,h=0;s<7;s+=2,h++)this.state.rgb[h]=parseInt("0x"+r.slice(s,s+2));return e.next=12,this.setState(this.state);case 12:this.handleRgbConverse("hex");case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object(o.a)(this.state.rgb,3),a=t[0],n=t[1],l=t[2],s=Object(o.a)(this.state.hsv,3),h=s[0],c=s[1],i=s[2],u=this.state.hex,v=this.state.rawHex;return r.a.createElement("div",{className:"color",style:{backgroundColor:u}},r.a.createElement("div",{className:"bg",style:{backgroundColor:"white"}},r.a.createElement("h4",null,"RGB"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(p,{value:a,label:"r:[0,255]",change:function(t){e.handleInputChange(t.target.value,"rgb",0)}}),r.a.createElement(p,{value:n,label:"g:[0,255]",change:function(t){e.handleInputChange(t.target.value,"rgb",1)}}),r.a.createElement(p,{value:l,label:"b:[0,255]",change:function(t){e.handleInputChange(t.target.value,"rgb",2)}})),r.a.createElement("h4",null,"HSV"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(p,{value:h,label:"h:[0,360]",change:function(t){e.handleInputChange(t.target.value,"hsv",0)}}),r.a.createElement(p,{value:c,label:"s:[0,1]",change:function(t){e.handleInputChange(t.target.value,"hsv",1)}}),r.a.createElement(p,{value:i,label:"v:[0,1]",change:function(t){e.handleInputChange(t.target.value,"hsv",2)}})),r.a.createElement("h4",null,"HEX"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(x,{value:v,change:function(t){e.handleHexInputChange(t.target.value)}}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a0ebc928.chunk.js.map