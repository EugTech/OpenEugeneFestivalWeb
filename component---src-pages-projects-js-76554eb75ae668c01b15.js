(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,t,o){"use strict";o.r(t);o(33);var n=o(7),a=o.n(n),r=o(0),i=o.n(r),s=o(153),c=o(176),l=function(e){return i.a.createElement("div",null,i.a.createElement("h3",{className:"projectName"},e["Project Name"]),i.a.createElement("h4",null,"Created by: ",e["Your Name"]),i.a.createElement("ul",null,i.a.createElement("li",null,"Type of Project: ",e["Type of Project"]),i.a.createElement("li",null,"Stage of Project: ",e["What stage is your project in today?"]),i.a.createElement("li",null,"Description: ",e["Longer Description"])),i.a.createElement("hr",null))},u=function(){return i.a.createElement("table",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Current State of your project"),i.a.createElement("th",null,"Possible state after the event")),i.a.createElement("tr",null,i.a.createElement("td",null,"I have a great idea!"),i.a.createElement("td",null,"You have launched a project online with all the things folks need to collaborate with you!")),i.a.createElement("tr",null,i.a.createElement("td",null,"I have an open project on github but nobody is contributing."),i.a.createElement("td",null,"Now your project is welcoming and inviting to folks and you have issues for folks to work on.")),i.a.createElement("tr",null,i.a.createElement("td",null,"I have a project I’d like to share, but I’d like to keep my branding private for reasons."),i.a.createElement("td",null,"Now the guts of your project is open, but your branding is protected by a licenses that preserves control over your brand.")),i.a.createElement("tr",null,i.a.createElement("td",null,"I made a giant pong controller and now folks in Chattanooga want one, but I don’t want to build it or ship it to them"),i.a.createElement("td",null,"You've publish the plan on Instructables, add a creative commons license and they can build it themselves!")))},p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=c.map(function(e,t){return i.a.createElement(l,Object.assign({key:t},e))});return i.a.createElement(s.a,null,i.a.createElement("h2",{style:{textAlign:"center"}},"Eugene Open Source Projects"),i.a.createElement("hr",null),i.a.createElement("h3",{style:{textAlign:"center"}},"Bring you Project, We'll help you open it!"),i.a.createElement("h3",{style:{textAlign:"center"}},"Fill in the"," ",i.a.createElement("a",{href:"https://goo.gl/forms/xQsoEPznuxRDdhNz2",target:"_blank",rel:"noopener noreferrer"},"project form here")),i.a.createElement("p",null,"Bring your project and we'll help you open it! No matter the current state of your project, we can make it more open."," "),i.a.createElement("p",null,"What does “open” mean?",i.a.createElement("ol",null,i.a.createElement("li",null,"Easy to understand,"),i.a.createElement("li",null,"Easy to share, remix and build on, and,"),i.a.createElement("li",null,"Welcoming to all participants, from any background."))),i.a.createElement("p",null,"This applies to software projects, hardware projects, art projects, events and anything that you would like to work on with others locally and online. Here’s some examples"),i.a.createElement(u,null),i.a.createElement("h4",{style:{textAlign:"center"}},"No matter the state of your projects, we’d love to have you bring it to the event and we’ll move it along in the process of making it open source."),i.a.createElement("p",null," We are looking for projects that collaborators can work on during the event. Maybe you have a project that is up and running but not open-sourced. We can help take you to the next level. Perhaps you have an idea for a project and would like to start it out by working in the open. We can get you started. Or maybe you have some data stuck in a flat file somewhere you’d like to see made available to the world or have a API built. That works too! We’d love to build community connections between projects and contributors."),i.a.createElement("h3",{style:{textAlign:"center"}},"Fill in the"," ",i.a.createElement("a",{href:"https://goo.gl/forms/xQsoEPznuxRDdhNz2",target:"_blank",rel:"noopener noreferrer"},"project form here")),i.a.createElement("hr",null),i.a.createElement("h2",null,"Projects already on their way!"),e)},t}(r.Component);t.default=p},143:function(e,t,o){"use strict";o.r(t),o.d(t,"graphql",function(){return m}),o.d(t,"StaticQueryContext",function(){return d}),o.d(t,"StaticQuery",function(){return h});var n=o(0),a=o.n(n),r=o(4),i=o.n(r),s=o(142),c=o.n(s);o.d(t,"Link",function(){return c.a}),o.d(t,"withPrefix",function(){return s.withPrefix}),o.d(t,"navigate",function(){return s.navigate}),o.d(t,"push",function(){return s.push}),o.d(t,"replace",function(){return s.replace}),o.d(t,"navigateTo",function(){return s.navigateTo});var l=o(144),u=o.n(l);o.d(t,"PageRenderer",function(){return u.a});var p=o(32);o.d(t,"parsePath",function(){return p.a});var d=a.a.createContext({}),h=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,o){var n;e.exports=(n=o(147))&&n.default||n},145:function(e,t,o){e.exports=o.p+"static/logo_emeralds-297b7bdcee09709651d9619b7b0520db.png"},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Eugene Festival"}}}}},147:function(e,t,o){"use strict";o.r(t);o(33);var n=o(0),a=o.n(n),r=o(4),i=o.n(r),s=o(50),c=o(2),l=function(e){var t=e.location,o=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:o},o.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},148:function(e,t,o){e.exports=o.p+"static/OEF-press-bf7ec3c88f2d6fb25b63ac20c868d2cd.pdf"},149:function(e,t,o){e.exports=o.p+"static/gradient_pinkcubes-cd4bbb547388b23a4c950e07081c57f4.png"},150:function(e,t,o){e.exports=o.p+"static/EUG_TECH_switchlogo_ROUNDnameWHITE-64ec72b7e9c68d7a2b17ff7455f57754.png"},151:function(e,t,o){},152:function(e,t,o){e.exports=o.p+"static/OpenOregonWeb-a8049af222ea23776eea988f9f85761e.png"},153:function(e,t,o){"use strict";var n=o(146),a=o(0),r=o.n(a),i=o(4),s=o.n(i),c=o(154),l=o.n(c),u=o(143),p=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(u.Link,{to:e.to,activeStyle:{background:"#2b2b2b",color:"white"},style:{color:"#2b2b2b",textDecoration:"none"}},e.children))},d=function(e){e.children;return r.a.createElement("div",null,r.a.createElement("ul",{style:{listStyle:"none",margin:"auto"}},r.a.createElement(p,{to:"/"},"Home"),r.a.createElement(p,{to:"/projects"},"Projects"),r.a.createElement(p,{to:"/sessions"},"Sessions"),r.a.createElement(p,{to:"/schedule"},"Schedule"),r.a.createElement(p,{to:"/sponsors"},"Sponsors"),r.a.createElement(p,{to:"/media"},"Media"),r.a.createElement(p,{to:"/about"},"About"),r.a.createElement("a",{style:{color:"#2b2b2b",textDecoration:"none"},href:o(148)},"Press Release")))},h=o(149),m=o.n(h),g=o(145),f=o.n(g),y=function(e){var t=e.siteTitle;return r.a.createElement("div",{style:{background:"url("+m.a+")",backgroundSize:"cover",padding:"2rem",marginBottom:"1.45rem",textAlign:"center"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(u.Link,{to:"/",style:{color:"#2b2b2b",textDecoration:"none",fontSize:"4rem"}},t)),r.a.createElement("h3",null,"Presented By..."),r.a.createElement("img",{src:f.a,alt:"Logo"})),r.a.createElement(d,null))},b=o(155),w=o(156),E=o(150),v=o.n(E),k=function(){return r.a.createElement("div",{style:{background:"linear-gradient(to right, #00ff6d, #00faff)",margin:"0"}},r.a.createElement("div",{className:"socialMediaIcons",style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},r.a.createElement("img",{src:v.a,alt:"Eugene Tech Logo",style:{width:150,margin:"8px"}}),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/EugTech",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{icon:w.b})),r.a.createElement("a",{href:"https://twitter.com/EugTech",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{icon:w.d})),r.a.createElement("a",{href:"https://www.facebook.com/EugTech/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{icon:w.a})),r.a.createElement("a",{href:"https://www.instagram.com/eugtech/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(b.a,{icon:w.c}))),r.a.createElement("img",{src:"https://siliconshire.org/static/images/stamp_made_white.png",alt:"Made in the shire logo",style:{margin:0}})),r.a.createElement("div",{style:{textAlign:"center",paddingBottom:"1rem",background:"#68676788"}},r.a.createElement("a",{style:{color:"white"},href:"https://www.facebook.com/events/196679251226823/",target:"_blank",rel:"noopener noreferrer"},"Check out the facebook event!")))},S=(o(151),o(152)),j=o.n(S),T=function(e){var t=e.children;return r.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Information for Open Eugene Fest 2018"},{name:"keywords",content:"open source, programming, project, app, software, all the things, mozilla, mozfest, web, development"}]},r.a.createElement("meta",{property:"og:image",content:j.a}),r.a.createElement("html",{lang:"en"})),r.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),r.a.createElement(k,null))},data:n})};T.propTypes={children:s.a.node.isRequired};t.a=T},176:function(e){e.exports=[{Timestamp:"2018-11-14T09:38:53.084Z","Project Name":"Glass_Beatstation","Type of Project":"Open Source Software : Release your code using an OSS License","What are your needs?":"Looking for more collaborators, Learn how to open it up - tips., tools, and templates","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Both Days","Shorter Description (the tweet version 140 chars)":"Loopstation, Sequencer, and instrument: A linux-based musical interface that uses python to control sooperlooper, jack transport, Hydrogen, and any other midi or osc instrumentation","Longer Description":"This is an evolving project oriented towards enabling anyone to make music intuitively on open source software: utilizing the modular nature of open source resources to be operated and formatted as the user desires. At this stage it is a beefed up loopstation, sequencer, and midi controller which  uses a Novation Launchpad as the physical interface, python and open sound control to facilitate communication,  hydrogen as drums, and uses Jack to synchronize and make audio/midi connections. It is intended to be used with a mic or other instruments if so desired","Your Name":"Athan Spathas","Your twitter account or GitHub handle":"alignwaivers","Letter Sent":"Yes 12/4"},{Timestamp:"2018-11-20T17:24:47.138Z","Project Name":"SOAR - Stretching Our Actionable Reach","Type of Project":"Open Source Software : Release your code using an OSS License","What are your needs?":"Looking for more collaborators","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"https://docs.google.com/document/d/1p_GTEL19cl70n1lSOhNi18U4zL3TtEAMad1lSxdLF0Y/edit?usp=sharing","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Both Days","Shorter Description (the tweet version 140 chars)":"SOAR is a scalable mechanism for mapping human resources and needs within a metropolitan area and convening alliances comparable to the murmurations of hundreds of starlings that instantly change direction in response to very small stimuli.","Longer Description":"Vision: an online resource that is a self-maintaining, self-organizing and cooperative learning network of issue-focused groups, such that any social benefit organization could contact like-minded groups or individuals for an exchange of ideas, plans, resources, volunteers’ time & energy, meeting times and places, best practices, advocacy efforts, awareness of parallel projects, current project status and unmet needs.","Your Name":"EMERALD COMPASSIONATE ACTION NETWORK","Your twitter account or GitHub handle":"Slack: david.hazen @ Hack4Cause","Letter Sent":"Yes 12/5 "},{Timestamp:"2018-12-04T05:17:01.621Z","Project Name":"Smartdown","Type of Project":"Open Source Software : Release your code using an OSS License, Open Data : You have APIs or raw data you would like accessible to more people","What are your needs?":"Looking for more collaborators, Learn how to open it up - tips., tools, and templates","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"https://smartdown.io","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"","Shorter Description (the tweet version 140 chars)":"Smartdown for Explorable Explanations","Longer Description":"Smartdown is for 'splainin', whether that be via a blog post, an article, or an app. Smartdown extends the widely used Markdown syntax with reactive Cells and Playables, which enable authors to combine prose, images, technical content, and interactivity into an Explorable Explanation. The Smartdown Javascript library is designed to be easily embeddable into a variety of common web platforms. Smartdown acts as a scaffolding to encourage non-technical authors to share their expertise on the web without the use of excessive syntax.","Your Name":"Dan Keith","Your twitter account or GitHub handle":"gh: DoctorBud, twt: TheDoctorBud","Letter Sent":"Yes 12/5 "},{Timestamp:"2018-12-04T21:40:50.160Z","Project Name":"Open E-Board","Type of Project":"Open Hardware : Share your plans and instructions, Open Data : You have APIs or raw data you would like accessible to more people","What are your needs?":"Looking for more collaborators, Help selecting the appropriate license(es)","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Friday","Shorter Description (the tweet version 140 chars)":"3d printable E-Skateboard enclosure","Longer Description":"3d printable E-Skateboard enclosure: A Box for containing the batteries and electronics for an electric skateboard with modular battery cell design for easy swapping of dead 18650 cells","Your Name":"Jeronemo","Your twitter account or GitHub handle":"@c4p7_n3m0","Letter Sent":"Yes 12/5 "},{Timestamp:"2018-12-04T22:04:46.421Z","Project Name":"King Pong","Type of Project":"Open Source Software : Release your code using an OSS License, Open Hardware : Share your plans and instructions, Open Data : You have APIs or raw data you would like accessible to more people, Non-Tech : An Event or Class or other non software/hardware/data thing you'd like to share with the world","What are your needs?":"Looking for more collaborators","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"https://github.com/pramslam/OpenKingPong","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Both Days","Shorter Description (the tweet version 140 chars)":"Let's convert King Pong the event to a pop-up event that anyone can make anywhere around the world!","Longer Description":"Let's convert King Pong the event to a pop-up event that anyone can make anywhere around the world!","Your Name":"David Lo","Your twitter account or GitHub handle":"pramslam","Letter Sent":"Yes 12/5 "},{Timestamp:"2018-12-07T22:51:01.111Z","Project Name":"JUMP!","Type of Project":"Open Source Software : Release your code using an OSS License, Open Hardware : Share your plans and instructions","What are your needs?":"Looking for more collaborators","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"https://github.com/JeffESC/JUMP-","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Both Days","Shorter Description (the tweet version 140 chars)":"For Science Centers, a two cam system linked to a touch screen so that a visitor can record and replay their motion of jumping","Longer Description":"*Visitor steps onto jump plate\n*Touches screen to start recording\n*Two cams record a brief loop (5/10 seconds) tracking the jump motion and the height of the jump\n*Visitor can then replay/slow down the jump in replay to see how it compares with an inertial tracker\n*Recording erased when reset to record next attempt.","Your Name":"Jeff Franzen","Your twitter account or GitHub handle":"use email","Letter Sent":""},{Timestamp:"2018-12-07T23:03:54.906Z","Project Name":"Franzen","Type of Project":"Open Source Software : Release your code using an OSS License, Open Hardware : Share your plans and instructions","What are your needs?":"Looking for more collaborators","What stage is your project in today?":"Just an Idea at this point","Link to GitHub or other Repo, Google docs, etc.":"https://github.com/JeffESC/Speech-Pattern-Image.git","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Both Days","Shorter Description (the tweet version 140 chars)":"An exhibit that focuses on the visual patterns of speech.","Longer Description":"* Visitor selects a language and then a phrase.\n*Visitor then hears phrase and sees corresponding speech pattern\n*Visitor then tries to replicate phrase in a microphone and sees their corresponding speech pattern.\n*Visitor compares speech pattern and audio files\n*Visitor can then either reset and try again or select another audio file","Your Name":"Jeff","Your twitter account or GitHub handle":"JeffESC","Letter Sent":""},{Timestamp:"2018-12-07T23:14:33.535Z","Project Name":"Reaction Time","Type of Project":"Open Source Software : Release your code using an OSS License, Open Hardware : Share your plans and instructions","What are your needs?":"Looking for more collaborators","What stage is your project in today?":"Just an Idea at this point","Link to GitHub or other Repo, Google docs, etc.":"https://github.com/JeffESC/Reaction-Time.git","Are you willing to demo it to a group?":"Yes","How do you plan on attending the conference?":"Both Days","Shorter Description (the tweet version 140 chars)":"A competitive reaction time exhibit.","Longer Description":'*Up to three visitors can compete at this station\n*Visitors can select from three different stimuli- Sound, Flashing Light or Vibration\n*Visitors rest their hands on their respective START (vibration) plate and start the stimuli timer. When the stimuli is triggered three different counts start in hundredths of a second tracking each participant\n*Each clock stops when the respective visitor "reacts" and hits their respective STOP button',"Your Name":"Jeff Franzen","Your twitter account or GitHub handle":"JeffESC","Letter Sent":""},{Timestamp:"2018-12-10T18:19:06.575Z","Project Name":"EugCast","Type of Project":"Non-Tech : An Event or Class or other non software/hardware/data thing you'd like to share with the world","What are your needs?":"Help selecting the appropriate license(es), Learn how to open it up - tips., tools, and templates","What stage is your project in today?":"It's a working project, but not open yet","Link to GitHub or other Repo, Google docs, etc.":"","Are you willing to demo it to a group?":"","How do you plan on attending the conference?":"Both Days","Shorter Description (the tweet version 140 chars)":"Podcast focusing on peoples perspectives and experiences in Eugene. Past, present and future.","Longer Description":"EugCast is a podcast that we have been working on for about 5 months. We have about 8 interviews in the can and are now in the editing phase and would like to do some live edits during the event.","Your Name":"Kimberlee Noel Trim","Your twitter account or GitHub handle":"","Letter Sent":""}]}}]);
//# sourceMappingURL=component---src-pages-projects-js-76554eb75ae668c01b15.js.map