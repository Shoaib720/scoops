
(function(p,l,o,w,i,n,g){
  if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
  p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
  };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
  n.src=w;g.parentNode.insertBefore(n,g)}
}(
  window,
  document,
  "script",
  "https://5f581b3d-5f33-4de6-8230-ff92441b1a67.app.try-snowplow.com/v3/try.js",
  "snowplow")
);


snowplow("newTracker", "try", "https://5f581b3d-5f33-4de6-8230-ff92441b1a67.app.try-snowplow.com", {
  appId: "try-snowplow", // you can specify your own app name here
  platform: "web",
  
  contexts: {
    webPage: true, // this sets a unique id for each page view
    performanceTiming: true // this captures performance metrics like load times
  }
});

// send first heartbeat after 10 seconds, and every 10 seconds thereafter
snowplow("enableActivityTracking", { minimumVisitLength: 10, heartbeatDelay: 10 });
snowplow("enableLinkClickTracking"); 
snowplow("trackPageView"); 
