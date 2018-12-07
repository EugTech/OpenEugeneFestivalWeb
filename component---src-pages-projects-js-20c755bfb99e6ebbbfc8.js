(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){"use strict";n.r(t);n(49);var a=n(7),o=n.n(a),r=n(0),i=n.n(r),s=n(143),l=n(149),c=n(162),u=function(e){return i.a.createElement("div",null,i.a.createElement("h3",{className:"projectName"},e["Project Name"]),i.a.createElement("ul",null,i.a.createElement("li",null,"Type of Project: ",e["Type of Project"]),i.a.createElement("li",null,"Stage of Project: ",e["What stage is your project in today?"]),i.a.createElement("li",null,"Description: ",e["Longer Description"])),i.a.createElement("hr",null))},d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=c.map(function(e,t){return i.a.createElement(u,e)});return i.a.createElement(l.a,null,i.a.createElement("h1",null,"Eugene Open Source Projects"),i.a.createElement("p",null,"We are looking for projects that collaborators can work on during the event. Maybe you have a project that is up and running but not open-sourced. We can help take you to the next level. Perhaps you have an idea for a project and would like to start it out by working in the open. We can get you started. Or maybe you have some data stuck in a flat file somewhere you’d like to see made available to the world or have a PI built. That works too! We’d love to build community connections between projects and contributors."),i.a.createElement("h3",{style:{textAlign:"center"}},"Fill in the ",i.a.createElement("a",{href:"https://goo.gl/forms/xQsoEPznuxRDdhNz2",target:"_blank",rel:"noopener noreferrer"},"project form here")),i.a.createElement("hr",null),i.a.createElement("h2",null,"Projects already on their way!"),e,i.a.createElement(s.Link,{to:"/"},"Go back to the homepage"))},t}(r.Component);t.default=d},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),s=n(142),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(144),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=o.a.createContext({}),m=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},146:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),s=n(48),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},147:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(145),o=n(0),r=n.n(o),i=n(4),s=n.n(i),l=n(150),c=n.n(l),u=n(143),d=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem",color:"white"}},r.a.createElement(u.Link,{to:e.to},e.children))},p=function(e){e.children;return r.a.createElement("div",null,r.a.createElement("ul",{style:{listStyle:"none",float:"right"}},r.a.createElement(d,{to:"/page-2/"},"Go to page 2"),r.a.createElement(d,{to:"/projects"},"Projects"),r.a.createElement(d,{to:"/sponsors"},"Sponsors"),r.a.createElement(d,{to:"/about"},"About")))},m=function(e){var t=e.siteTitle;return r.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem",display:"flex",flexWrap:"wrap",alignItems:"center"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))),r.a.createElement(p,null))},h=(n(147),function(e){var t=e.children;return r.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});h.propTypes={children:s.a.node.isRequired};t.a=h},162:function(e){e.exports=[{Timestamp:"11/1/2018 20:36:31","Project Name":"The Eugene Coding Initiative","Type of Project":"Open Source Software : Release your code using an OSS License","What are your needs?":"","What stage is your project in today?":"already open and available online","Link to GitHub or other Repo, Google docs, etc.":"","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Both Days","Email Address":"nikole@thatsupergirl.com","Shorter Description (the tweet version 140 chars)":"We're teaching kids to code in Lane County!","Longer Description":"We're teaching kids to code using fun, robots and more! Working with local partners, we're running educational coding programs for kids all ages.","Your Name":"Nikole Gipps","Your twitter account or GitHub handle":"websupergirl"},{Timestamp:"11/6/2018 9:51:14","Project Name":"Killer.App","Type of Project":"Open Source Software : Release your code using an OSS License, Open Data : You have APIs or raw data you would like accessible to more people","What are your needs?":"Looking for more collaborators","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"","Are you willing to demo it to a group?":"No","How do you plan on attending the conference?":"Both Days","Email Address":"joseph@eugeniuses.com","Shorter Description (the tweet version 140 chars)":"An open source, mobile enabled and fully adaptable game that uses Alternate Reality Gaming methods linked with elements of True Crime fandom and an escape room ethos. ","Longer Description":"and fully adaptable game that uses Alternate Reality Gaming methods linked with elements of True Crime fandom and an escape room ethos. ","Your Name":"Joseph M","Your twitter account or GitHub handle":"@eugeniusestech"},{Timestamp:"11/14/2018 1:38:53","Project Name":"Glass_Beatstation","Type of Project":"Open Source Software : Release your code using an OSS License","What are your needs?":"Looking for more collaborators, Learn how to open it up - tips., tools, and templates","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Both Days","Email Address":"alignwaivers@gmail.com","Shorter Description (the tweet version 140 chars)":"Loopstation, Sequencer, and instrument: A linux-based musical interface that uses python to control sooperlooper, jack transport, Hydrogen, and any other midi or osc instrumentation","Longer Description":"This is an evolving project oriented towards enabling anyone to make music intuitively on open source software: utilizing the modular nature of open source resources to be operated and formatted as the user desires. At this stage it is a beefed up loopstation, sequencer, and midi controller which  uses a Novation Launchpad as the physical interface, python and open sound control to facilitate communication,  hydrogen as drums, and uses Jack to synchronize and make audio/midi connections. It is intended to be used with a mic or other instruments if so desired","Your Name":"Athan Spathas","Your twitter account or GitHub handle":"alignwaivers"}]}}]);
//# sourceMappingURL=component---src-pages-projects-js-20c755bfb99e6ebbbfc8.js.map