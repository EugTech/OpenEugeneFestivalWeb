(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,n){"use strict";n.r(t);n(34),n(49);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(156),c=n(178),l=function(e){return i.a.createElement("div",null,i.a.createElement("h3",{className:"programName"},e["Program Name"]),i.a.createElement("ul",null,i.a.createElement("li",null,"Presenter: ",e["Your Name"]),i.a.createElement("li",null,"Description: ",e["Longer Description"])),i.a.createElement("hr",null))},u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c.map(function(e,t){return i.a.createElement(l,Object.assign({key:t},e))});return i.a.createElement(s.a,null,i.a.createElement("h3",{style:{textAlign:"center"}},"Present a Session!"),i.a.createElement("p",null,"Do you have a case study to talk about, or plans to provide open-data? Can teach a class on using Github pages, or lead a workshop on inclusiveness. These are all examples of programming we’d love to make part of the event."),i.a.createElement("h3",{style:{textAlign:"center"}},"Fill in the"," ",i.a.createElement("a",{href:"https://goo.gl/forms/tg0Il8VadaCCdMSJ2",target:"_blank",rel:"noopener noreferrer"},"programming form here")),i.a.createElement("h2",{style:{textAlign:"center"}},"Presentations to look forward to!"),e,i.a.createElement("hr",null))},t}(o.Component);t.default=u},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(143),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(145),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},146:function(e,t,n){e.exports=n.p+"static/logo_emeralds-297b7bdcee09709651d9619b7b0520db.png"},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},148:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(48),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,n){e.exports=n.p+"static/OEF-press-bf7ec3c88f2d6fb25b63ac20c868d2cd.pdf"},150:function(e,t,n){e.exports=n.p+"static/gradient_pinkcubes-cd4bbb547388b23a4c950e07081c57f4.png"},151:function(e,t,n){e.exports=n.p+"static/EUG_TECH_switchlogo_ROUNDnameWHITE-64ec72b7e9c68d7a2b17ff7455f57754.png"},152:function(e,t,n){},155:function(e,t,n){e.exports=n.p+"static/OpenOregonWeb-a8049af222ea23776eea988f9f85761e.png"},156:function(e,t,n){"use strict";var a=n(147),r=n(0),o=n.n(r),i=n(4),s=n.n(i),c=n(157),l=n.n(c),u=n(144),p=function(e){return o.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},o.a.createElement(u.Link,{to:e.to,activeStyle:{background:"#2b2b2b",color:"white"},style:{color:"#2b2b2b",textDecoration:"none"}},e.children))},m=function(e){e.children;return o.a.createElement("div",null,o.a.createElement("ul",{style:{listStyle:"none",margin:"auto"}},o.a.createElement(p,{to:"/"},"Home"),o.a.createElement(p,{to:"/projects"},"Projects"),o.a.createElement(p,{to:"/sessions"},"Sessions"),o.a.createElement(p,{to:"/schedule"},"Schedule"),o.a.createElement(p,{to:"/sponsors"},"Sponsors"),o.a.createElement(p,{to:"/about"},"About"),o.a.createElement("a",{style:{color:"#2b2b2b",textDecoration:"none"},href:n(149)},"Press Release")))},d=n(150),h=n.n(d),g=n(146),f=n.n(g),b=function(e){var t=e.siteTitle;return o.a.createElement("div",{style:{background:"url("+h.a+")",backgroundSize:"cover",padding:"2rem",marginBottom:"1.45rem",textAlign:"center"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(u.Link,{to:"/",style:{color:"#2b2b2b",textDecoration:"none",fontSize:"4rem"}},t)),o.a.createElement("h3",null,"Presented By..."),o.a.createElement("img",{src:f.a,alt:"Logo"})),o.a.createElement(m,null))},y=n(158),w=n(159),v=n(151),k=n.n(v),E=function(){return o.a.createElement("div",{style:{background:"linear-gradient(to right, #00ff6d, #00faff)",margin:"0"}},o.a.createElement("div",{className:"socialMediaIcons",style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},o.a.createElement("img",{src:k.a,alt:"Eugene Tech Logo",style:{width:150,margin:"8px"}}),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/EugTech",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(y.a,{icon:w.b})),o.a.createElement("a",{href:"https://twitter.com/EugTech",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(y.a,{icon:w.d})),o.a.createElement("a",{href:"https://www.facebook.com/EugTech/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(y.a,{icon:w.a})),o.a.createElement("a",{href:"https://www.instagram.com/eugtech/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(y.a,{icon:w.c}))),o.a.createElement("img",{src:"https://siliconshire.org/static/images/stamp_made_white.png",alt:"Made in the shire logo",style:{margin:0}})),o.a.createElement("div",{style:{textAlign:"center",paddingBottom:"1rem",background:"#68676788"}},o.a.createElement("a",{style:{color:"white"},href:"https://www.facebook.com/events/196679251226823/",target:"_blank",rel:"noopener noreferrer"},"Check out the facebook event!")))},T=(n(152),n(155)),S=n.n(T),L=function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Information for Open Eugene Fest 2018"},{name:"keywords",content:"open source, programming, project, app, software, all the things, mozilla, mozfest, web, development"}]},o.a.createElement("meta",{property:"og:image",content:S.a}),o.a.createElement("html",{lang:"en"})),o.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),o.a.createElement(E,null))},data:a})};L.propTypes={children:s.a.node.isRequired};t.a=L},178:function(e){e.exports=[{Timestamp:"2018-11-16T21:52:44.772Z","Your Name":"Nate Otto","Program Name":"Recognizing Contributions with Open Badges","Shorter Description (the tweet version 140 chars)":"Learn how to use Open Badges to give and get recognition for all the important work that goes into open software and open data! ","Longer Description":"We often forget to give recognition for the time and effort that community members put into our open projects. That's true across open source and open data initiatives as well as local community efforts for learning and community building. Open Badges are a great tools to provide recognition, and Open Pathways give your community members understanding of what activities are valuable and open to their participation as well as the ability to share their accomplishments with potential employers and collaborators. Learn how to use Open Badges to recognize what's important in your open community, and earn a badge for yourself for participating at Open Eugene Festival.","Link to slide deck or repo":"https://github.com/concentricsky/badgr-server","Your Twitter or GitHub handle":"https://twitter.com/ottonomy https://github.com/ottonomy","Link to speakers public profile (linked-in, Medium, or...)":"","Second speakers public profile (linked-in, Medium, or...)":"","Type of program":"","Venue Preference":"","Send Letter":"Yes 12/5"},{Timestamp:"2018-11-21T20:44:00.849Z","Your Name":"Nikole Gipps","Program Name":"Open Sourcing Education","Shorter Description (the tweet version 140 chars)":"Learn why we should open-source education and how you can get involved in The Eugene Coding Initiative","Longer Description":"Education currently works on a very pay-to-play model - the schools that have the most resources can afford to purchase expensive curriculum programs and the highest-grossing curriculum companies gain the influential means to continue that cycle. The gap between the haves and the have-nots is growing wider every day, while the diversity in education dies off. We need to reduce the barriers to CS education and level the playing field. We'll talk about how to open up your education platforms, create equitable education that is available to all, and what we're doing in Lane County to teach kids how to code.","Link to slide deck or repo":"https://github.com/codeeug","Your Twitter or GitHub handle":"https://twitter.com/websupergirl","Link to speakers public profile (linked-in, Medium, or...)":"https://www.linkedin.com/in/nhgnikole/","Second speakers public profile (linked-in, Medium, or...)":"","Type of program":"Talk","Venue Preference":"Large Open Area:  More the merrier and maybe we'll even break into groups","Send Letter":"Yes 12/5"},{Timestamp:"2018-12-06T22:11:16.478Z","Your Name":"Anthony Casson","Program Name":"Designing Open Source Programs with Empathy Mapping","Shorter Description (the tweet version 140 chars)":"Learn how to design an Open Source company program by using empathy mapping to move past organizational hurdles.","Longer Description":"Launching an Open Source program is no easy task at an organization with little or no open culture established. Much of the difficulty comes from organizational leaders pushing back. Understanding what they care about and what their priorities are gives any new idea a better chance to thrive. This workshop will help you identify key personnel and their motivations/goals to better prepare an Open Source program pitch and approach through Empathy Mapping.","Link to slide deck or repo":"","Your Twitter or GitHub handle":"@ascasson","Link to speakers public profile (linked-in, Medium, or...)":"https://www.linkedin.com/in/ascasson/","Second speakers public profile (linked-in, Medium, or...)":"","Type of program":"Workshop","Venue Preference":"Large Open Area:  More the merrier and maybe we'll even break into groups","Send Letter":""},{Timestamp:"2018-12-07T22:01:36.881Z","Your Name":"Emily Farthing","Program Name":"A View From the Top: A brief perspective into life, culture and innovation in a favela in Rio de Janeiro","Shorter Description (the tweet version 140 chars)":"Be transported to the top of a Brazilian favela in Rio de Janeiro to learn how local entrepreneurs are mixing with international digital nomads to accelerate local favela-based businesses. Adam Newman the CEO of Favela Inc. and Nova Era Co-Living will introduce business owners from Rio's favelas and learn how technology and social impact has been expanding the possibilities in Rio's forgotten neighborhoods.  Presentation will conclude with dynamic samba school performance overlooking Rio de Janeiro from Vidigal favela. ","Longer Description":"Favela Inc. incubates and accelerates favela-based ecosystems by empowering and educating local entrepreneurs, and organizations into the change-makers of tomorrow. We seek to fortify favela communities and their citizens, by providing them access to the skills, resources, financing, and partners they need, promoting socio-economic development, autonomy and sustainability while removing the inherent limitations caused by widespread economic exclusion, poverty, and violence. Sustainable business creation can save lives. We are doing it, you can be a part. ","Link to slide deck or repo":"https://docs.google.com/presentation/d/1egcCtqTDYPiX228NdnPI1SWbhHRFrVcHzFNzBMVHDKI/edit?usp=sharing","Your Twitter or GitHub handle":"","Link to speakers public profile (linked-in, Medium, or...)":"https://www.linkedin.com/in/thenetworkingnewman/","Second speakers public profile (linked-in, Medium, or...)":"https://www.facebook.com/isis.maria2","Type of program":"Demo","Venue Preference":"Large Open Area:  More the merrier and maybe we'll even break into groups","Send Letter":""}]}}]);
//# sourceMappingURL=component---src-pages-sessions-js-af7b9699714dce61fc3f.js.map