(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t);a(34);var n=a(7),r=a.n(n),l=a(0),c=a.n(l),i=a(160),o=a(187),s=(a(169),a(170),function(e){return c.a.createElement("a",{href:e.link},c.a.createElement("h3",null,e.name),c.a.createElement("p",null,new Date(e.date).toDateString()),c.a.createElement("img",{src:e.ImageURL,alt:e.name,style:{height:"200px"}}),c.a.createElement("hr",null))}),m=(a(35),function(e){var t=e.link.replace(/youtu.be/,"youtube.com/embed");return console.log(t),c.a.createElement("iframe",{title:e.name,width:"500",height:"300",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},c.a.createElement("hr",null))}),u=function(e){return c.a.createElement("a",{href:e.link},c.a.createElement("h3",null,e.name),c.a.createElement("p",null,new Date(e.date).toDateString()),c.a.createElement("img",{src:e.ImageURL,alt:e.name}),c.a.createElement("hr",null))},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=o.filter(function(e){return"article"===e.type}).map(function(e,t){return c.a.createElement(s,Object.assign({key:t},e))}),t=o.filter(function(e){return"video"===e.type}).map(function(e,t){return c.a.createElement(m,Object.assign({key:t},e))}),a=o.filter(function(e){return"audio"===e.type}).map(function(e,t){return c.a.createElement(u,Object.assign({key:t},e))});return c.a.createElement(i.a,null,c.a.createElement("h2",null,"Check out some media surrounding Open Eugene!"),c.a.createElement("hr",null),c.a.createElement("h3",null,"Articles"),e,c.a.createElement("hr",null),c.a.createElement("h3",null,"Videos"),t,c.a.createElement("hr",null),c.a.createElement("h3",null,"Audio"),a,c.a.createElement("hr",null))},t}(l.Component);t.default=d},152:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(33),o=a.n(i);a.d(t,"a",function(){return o.a});a(153);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},156:function(e){e.exports={data:{logo:{childImageSharp:{id:"323517be-a054-5db8-bc87-36011dd0fa07",fixed:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='266' height='100'%3e%3cpath d='M131 36v20h7l7-1c0-1-1-2-5-2-5 0-6-1-6-3 0-3 0-3 5-3l5-1c0-2-1-2-5-2-5 0-5 0-5-2 0-3 0-3 5-3 9-1 7-3-1-3h-7m18 0l-1 10c0 10 0 10 2 10s2 0 2-6v-7l3 7c3 8 5 8 8-1l3-6v6c0 6 0 7 2 7 2-1 2-20 0-20s-3 2-5 7l-4 7-4-7c-2-6-5-9-6-7m25 10v10h7l7-1c0-2-1-2-5-2-5 0-6 0-5-4 0-2 1-2 5-2l4-1c0-2-1-2-4-2-5 0-5 0-5-2 0-3 0-3 5-3 4 0 5 0 5-2l-7-1h-7v10m18-10a666 666 0 0 0 1 20c2 0 2-1 2-8v-9h4c5 0 6 3 1 6l-3 1 3 5 6 5c3 0 3-1-1-5l-3-4 3-2c5-5 2-9-7-9h-6m25 0l-8 20c2 1 4-2 7-8l3-8 4 8c2 6 4 8 5 8 3 0 3 1-2-11-5-9-7-11-9-9m31 0v20h7c5-1 7-1 9-3 4-6 1-17-5-17a2023 2023 0 0 1-11 0m4 10v7h4c4-1 6-3 6-8s-1-6-6-6h-4v7M47 62l-2 7-2 6-2 5-2 6-3 6h6c6 0 7 0 7 2s-1 2-12 2c-12 0-13 0-13-2s1-2 6-2h5l-2-4c-3-5-4-6-2-5 2 0 1-1-2-5l-1-5-2-6-3-5-4 5-2 6-1 5-2 4c1 1 0 2-1 5l-3 5h5c6 0 6 0 6 3v2H11L1 98a605 605 0 0 0 90-1c-9 0-9-1-9-2 0-2 0-3 5-3 6 0 6 0 3-5l-2-4-1-5-2-5c1-1-4-11-5-11s-6 10-5 11l-2 4-1 5-2 5c-3 5-3 5 3 5 4 0 6 1 6 2l-1 2H65c-11 0-12 0-12-2s1-2 7-2c7 0 7 0 3-6-2-4-3-5-2-6l-2-6c-2-4-3-5-1-5 1 0-5-12-7-13l-4 6' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",width:266,height:100,src:"/static/297b7bdcee09709651d9619b7b0520db/fe75f/logo_emeralds.png",srcSet:"/static/297b7bdcee09709651d9619b7b0520db/fe75f/logo_emeralds.png 1x",srcWebp:"/static/297b7bdcee09709651d9619b7b0520db/7efe8/logo_emeralds.webp",srcSetWebp:"/static/297b7bdcee09709651d9619b7b0520db/7efe8/logo_emeralds.webp 1x"}}}}}},157:function(e,t,a){e.exports=a.p+"static/gradient_pinkcubes-cd4bbb547388b23a4c950e07081c57f4.png"},158:function(e,t,a){e.exports=a.p+"static/EUG_TECH_switchlogo_ROUNDnameWHITE-64ec72b7e9c68d7a2b17ff7455f57754.png"},159:function(e,t,a){e.exports=a.p+"static/OpenOregonWeb-a8049af222ea23776eea988f9f85761e.png"},160:function(e,t,a){"use strict";var n=a(154),r=a(0),l=a.n(r),c=a(4),i=a.n(c),o=a(162),s=a.n(o),m=a(152),u=(a(163),a(156)),d=a(161),p=a.n(d),g=function(e){return l.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},l.a.createElement(m.a,{to:e.to,activeStyle:{background:"#2b2b2b",color:"white"},style:{color:"#2b2b2b",textDecoration:"none"}},e.children))},h=function(e){e.children;return l.a.createElement("div",null,l.a.createElement("ul",{style:{listStyle:"none",margin:"auto"}},l.a.createElement(g,{to:"/"},"Home"),l.a.createElement(g,{to:"/projects"},"Projects"),l.a.createElement(g,{to:"/sessions"},"Sessions"),l.a.createElement(g,{to:"/schedule"},"Schedule"),l.a.createElement(g,{to:"/sponsors"},"Sponsors"),l.a.createElement(g,{to:"/media"},"Media"),l.a.createElement(g,{to:"/about"},"About")))},f=a(157),b=a.n(f),E=function(e){var t=e.siteTitle,a=u.data;return l.a.createElement("div",{style:{background:"url("+b.a+")",backgroundSize:"cover",padding:"2rem",marginBottom:"1.45rem",textAlign:"center"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(m.a,{to:"/",style:{color:"#2b2b2b",textDecoration:"none",fontSize:"4rem"}},t)),l.a.createElement("h3",null,"Presented By..."),l.a.createElement(p.a,{fixed:a.logo.childImageSharp.fixed,alt:"Emerald Broadband Title Sponsor",critical:!0})),l.a.createElement(h,null))},y=a(164),v=a(165),w=a(158),k=a.n(w),x=function(){return l.a.createElement("div",{style:{background:"linear-gradient(to right, #00ff6d, #00faff)",margin:"0"}},l.a.createElement("div",{className:"socialMediaIcons",style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},l.a.createElement("img",{src:k.a,alt:"Eugene Tech Logo",style:{width:150,margin:"8px"}}),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/EugTech",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(y.a,{icon:v.b})),l.a.createElement("a",{href:"https://twitter.com/EugTech",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(y.a,{icon:v.d})),l.a.createElement("a",{href:"https://www.facebook.com/EugTech/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(y.a,{icon:v.a})),l.a.createElement("a",{href:"https://www.instagram.com/eugtech/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(y.a,{icon:v.c}))),l.a.createElement("img",{src:"https://siliconshire.org/static/images/stamp_made_white.png",alt:"Made in the shire logo",style:{margin:0}})),l.a.createElement("div",{style:{textAlign:"center",paddingBottom:"1rem",background:"#68676788"}},l.a.createElement("a",{style:{color:"white"},href:"https://www.facebook.com/events/196679251226823/",target:"_blank",rel:"noopener noreferrer"},"Check out the facebook event!")))},S=(a(166),a(159)),T=a.n(S),I=function(e){var t=e.children;return l.a.createElement(m.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Information for Open Eugene Fest 2018"},{name:"keywords",content:"open source, programming, project, app, software, all the things, mozilla, mozfest, web, development"}]},l.a.createElement("meta",{property:"og:image",content:T.a}),l.a.createElement("html",{lang:"en"})),l.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),l.a.createElement(x,null))},data:n})};I.propTypes={children:i.a.node.isRequired};t.a=I},169:function(e,t,a){var n=a(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},170:function(e,t,a){"use strict";a(172)("link",function(e){return function(t){return e(this,"a","href",t)}})},187:function(e){e.exports=[{date:"2018-11-23T08:00:00.000Z",type:"article",name:"MozFest leads to Open Eugene Festival",ImageURL:"https://cdn-images-1.medium.com/max/2000/1*AjYufUtbZJFvP7hs0EpZNg.png",link:"https://medium.com/@nohorse/mozfest-leads-to-open-eugene-festival-d8b43396023e"},{date:"2018-11-27T08:00:00.000Z",type:"article",name:"Mozilla Interview: Open Eugene Festival | Open Leaders 6",ImageURL:"https://cdn-images-1.medium.com/max/1600/0*ZFSkc7bHFmjS32Sw",link:"https://medium.com/mozilla-festival/open-eugene-festival-open-leaders-6-8424251dde97"},{date:"2018-11-28T08:00:00.000Z",type:"video",name:"OpenEugene Fest Intro",ImageURL:"",link:"https://youtu.be/PZojOfxjPPg"},{date:"2018-12-10T08:00:00.000Z",type:"audio",name:"La E-Kiss Episode where Open Fest is mentioned at 27:37",ImageURL:"https://mixlr-assets.s3.amazonaws.com/users/b759c6d5c2ebcfb758b23921eb1bc3fd/thumb.jpeg?1456687495",link:"http://mixlr.com/la-e-kiss/showreel/la-e-kiss-on-mixlr-801/?fbclid=IwAR2uhb7wUWyHvtIwpe08QlB_6GC4FAc9dJefOEtyv49or50b7AsL6tcGYiM"},{date:"2018-12-10T08:00:00.000Z",type:"video",name:"Open Eugene Festival Intro in Spanish",ImageURL:"",link:"https://youtu.be/xsluofCHmTQ"}]}}]);
//# sourceMappingURL=component---src-pages-media-js-0a41ce7386a54395dc1a.js.map