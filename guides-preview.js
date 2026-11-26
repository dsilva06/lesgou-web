/* Lesgou traveler guides: the approved local-only teaser, isolated from the landing page. */
(() => {
  'use strict';
  if(customElements.get('lesgou-guides-preview'))return;
  const template="<style>\n\n*{box-sizing:border-box}.guides-root{margin:0;background:var(--night);color:var(--text);font-family:Manrope,Arial,sans-serif;-webkit-font-smoothing:antialiased}button{font:inherit;color:inherit;cursor:pointer}button:disabled{cursor:default;opacity:.4}button:focus-visible,a:focus-visible{outline:2px solid var(--hi);outline-offset:4px}button{touch-action:manipulation}a{color:inherit}.symbols{position:absolute;width:0;height:0;overflow:hidden}.icon{width:19px;height:19px;stroke:currentColor;stroke-width:1.7;fill:none;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}.wrap{max-width:1200px;margin:0 auto;padding:0 24px}.site-bar{height:78px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}.logo{width:113px;display:block}.site-right{display:flex;align-items:center;gap:18px}.demo-label{font-size:10px;font-weight:750;letter-spacing:.12em;color:var(--muted)}.lang{width:39px;height:39px;border:1px solid var(--line2);border-radius:50%;background:none;font-size:12px;font-weight:800}.hero{padding:32px 0 26px;text-align:center}.eyebrow{margin:0 0 10px;color:var(--hi);font-size:11px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.hero h2{font-size:clamp(32px,4vw,49px);line-height:1.13;letter-spacing:-.055em;margin:0;font-weight:800}.hero h2 span{color:var(--teal)}.hero p{margin:14px auto 0;color:var(--soft);font-size:16px;line-height:1.6;max-width:760px}.community-app{background:#0d1b25;border:1px solid var(--line2);border-radius:25px;box-shadow:0 30px 95px -45px rgba(0,0,0,.9);overflow:hidden}.app-topbar{display:flex;align-items:center;gap:22px;justify-content:space-between;min-height:63px;padding:0 20px;border-bottom:1px solid var(--line);background:rgba(18,39,51,.55)}.app-brand{display:flex;align-items:center;gap:9px;font-size:16px;font-weight:800;letter-spacing:-.025em}.app-brand .icon{color:var(--teal)}.app-tabs{display:flex;align-items:center;gap:4px;background:#081721;border:1px solid var(--line);padding:4px;border-radius:99px}.app-tabs button{border:0;background:transparent;color:var(--muted);border-radius:99px;padding:7px 18px;font-size:12px;font-weight:750;transition:background .22s,color .22s}.app-tabs button[aria-pressed=true]{background:#224237;color:#77e0c6}.app-account{display:flex;align-items:center;gap:8px;background:none;border:0;font-size:11px;color:var(--soft);padding:0}.app-grid{display:grid;grid-template-columns:147px minmax(0,1fr) 305px;gap:20px;padding:21px}.app-sidebar{min-width:0;padding-right:1px}.person{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;font-size:12px;font-weight:850;flex-shrink:0;color:#172b3e;border:2px solid rgba(255,255,255,.13);background:#a6b4fc}.person.diego{background:#f5a220;color:#162530}.person.maria{background:#adb5ff}.self-card{border:1px solid var(--line);border-radius:16px;display:flex;align-items:center;gap:10px;width:100%;padding:13px 11px;text-align:left;background:#122733}.self-card>span:last-child{display:flex;flex-direction:column;gap:2px}.self-card small{font-size:10px;color:var(--muted)}.self-card b{font-size:13px}.following-count{font-size:10px;color:var(--hi);margin-top:3px}.sidebar-label{font-size:9px;font-weight:800;letter-spacing:.1em;color:var(--muted);margin:24px 0 11px}.sidebar-empty{font-size:11px;line-height:1.8;color:var(--muted);margin:0 2px}.traveler-row{display:flex;align-items:center;gap:9px;border:0;background:transparent;width:100%;padding:6px 1px;text-align:left}.traveler-row>span:nth-child(2){display:flex;flex:1;flex-direction:column;gap:3px}.traveler-row b{font-size:12px}.traveler-row small{font-size:10px;color:var(--muted)}.traveler-row>.icon{height:13px;width:13px;color:var(--teal)}.community-note{margin-top:37px;border-top:1px solid var(--line);padding-top:17px}.community-note>.icon{color:var(--teal);margin-bottom:8px}.community-note b{display:block;font-size:12px;line-height:1.6}.community-note p{font-size:11px;color:var(--muted);line-height:1.8;margin:7px 0 0}.feed-column{min-width:0;max-width:480px;width:100%;margin:0 auto}.feed-intro{display:flex;align-items:flex-start;flex-direction:column;gap:7px;margin:0 2px 16px}.feed-intro h3{font-size:15px;letter-spacing:-.025em;margin:0}.feed-intro>span{font-size:9px;letter-spacing:.1em;color:var(--muted)}.trip-post{background:#142a37;border:1px solid var(--line2);border-radius:18px;overflow:hidden}.post-author{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 13px}.author-link{display:flex;align-items:center;gap:9px;text-align:left;border:0;background:transparent;padding:0}.author-link>span:last-child{display:flex;flex-direction:column;gap:2px}.author-link b{font-size:13px}.author-link small{font-size:10px;color:var(--muted)}.follow{border:1px solid rgba(47,191,166,.3);border-radius:99px;background:rgba(47,191,166,.06);color:var(--hi);font-size:11px;font-weight:800;min-height:32px;padding:6px 14px;display:inline-flex;align-items:center;justify-content:center;gap:5px;white-space:nowrap;transition:background .25s,border-color .25s}.follow:hover{background:rgba(47,191,166,.16);border-color:var(--teal)}.follow .icon{height:12px;width:12px}.follow.is-following{background:rgba(47,191,166,.14)}.post-cover{display:block;position:relative;width:100%;height:208px;padding:0;background:var(--deep);border:0;text-align:left;overflow:hidden}.post-cover:after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,18,26,.12) 15%,rgba(5,18,26,.04) 30%,rgba(5,18,26,.91))}.post-cover img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 58%;transition:transform .7s cubic-bezier(.2,.8,.2,1)}.post-cover:hover img{transform:scale(1.03)}.cover-place{position:absolute;left:15px;top:13px;z-index:1;display:flex;align-items:center;gap:5px;font-size:10px;font-weight:700;padding:6px 9px;border:1px solid rgba(255,255,255,.16);border-radius:99px;background:rgba(8,20,28,.47);backdrop-filter:blur(12px)}.cover-place .icon{height:12px;width:12px}.post-cover-title{position:absolute;left:17px;bottom:18px;right:54px;font-size:25px;letter-spacing:-.045em;font-weight:800;z-index:1;line-height:1.15}.cover-days{position:absolute;right:13px;bottom:19px;z-index:1;font-size:10px;color:var(--soft)}.post-content{padding:12px 15px 14px}.post-content>p{font-size:12px;color:var(--soft);line-height:1.75;margin:0 0 14px}.post-facts{display:flex;gap:10px;align-items:center;padding-bottom:13px;border-bottom:1px solid var(--line);font-size:10px;color:var(--soft)}.post-facts>span{display:flex;align-items:center;gap:5px;white-space:nowrap}.post-facts .icon{width:13px;height:13px;color:var(--teal)}.post-facts .post-price{margin-left:auto;color:var(--text);font-size:14px;font-weight:800;gap:4px}.post-price small{font-size:9px;color:var(--muted);font-weight:500}.post-actions{display:flex;align-items:center;gap:8px;padding-top:13px}.save-guide{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;border:1px solid var(--line2);background:none;color:var(--soft)}.save-guide[aria-pressed=true]{color:var(--teal);border-color:rgba(47,191,166,.35)}.save-guide .icon{width:16px;height:16px}.view-trip{display:flex;align-items:center;justify-content:center;gap:8px;min-height:36px;flex:1;border:1px solid rgba(47,191,166,.3);border-radius:11px;background:rgba(47,191,166,.08);font-size:12px;font-weight:800;color:var(--hi)}.view-trip .icon{height:15px;width:15px}.feed-caption{display:flex;align-items:center;justify-content:center;gap:6px;color:var(--muted);font-size:10px;line-height:1.5;padding:13px 5px 0}.feed-caption .icon{height:13px;width:13px}.guide-panel{position:relative;align-self:start;min-width:0;background:linear-gradient(145deg,#193340,#112630);border:1px solid rgba(47,191,166,.2);border-radius:19px;padding:19px 18px 14px;scroll-margin-top:20px;outline:none}.detail-eyebrow{font-size:9px;font-weight:800;letter-spacing:.12em;color:var(--hi)}.detail-head h3{font-size:24px;letter-spacing:-.045em;line-height:1.2;margin:8px 0 7px}.detail-head p{font-size:12px;color:var(--soft);line-height:1.6;margin:0}.guide-credit{display:flex;align-items:center;gap:7px;padding:12px 0 15px;margin-bottom:3px;border-bottom:1px solid var(--line);font-size:10px;color:var(--muted)}.guide-credit .person{width:24px;height:24px;font-size:9px;border:1px solid rgba(255,255,255,.15)}.guide-credit b{font-weight:700;color:var(--soft)}.icon-button{display:grid;place-items:center;border:0;background:none;color:var(--teal);margin-left:auto;padding:4px}.icon-button .icon{width:15px;height:15px}.itinerary-preview{padding-top:10px}.day-stop{position:relative;display:flex;align-items:flex-start;gap:10px;padding:0 0 18px}.day-stop:not(:last-child):before{content:\"\";position:absolute;width:1px;left:11px;top:21px;bottom:0;background:rgba(47,191,166,.25)}.stop-node{display:grid;place-items:center;width:24px;height:24px;flex-shrink:0;background:#183c42;border:1px solid rgba(47,191,166,.3);border-radius:50%;color:var(--hi);font-size:10px;font-weight:800;z-index:1}.day-stop>div{display:flex;flex-direction:column;gap:5px;flex:1}.day-stop small{font-size:8px;letter-spacing:.08em;color:var(--muted);font-weight:800}.day-stop b{font-size:12px;line-height:1.4}.day-stop>div>span{display:flex;gap:5px;align-items:center;font-size:10px;color:var(--muted);line-height:1.5}.day-stop .icon{width:12px;height:12px;color:var(--teal)}.detail-budget{border-top:1px solid var(--line);padding-top:12px;margin-top:0}.detail-budget>span{font-size:10px;color:var(--muted)}.detail-budget>div{display:flex;align-items:baseline;gap:6px;margin-top:3px}.detail-budget b{font-size:28px;letter-spacing:-.04em}.detail-budget small{font-size:10px;color:var(--soft)}.detail-budget p{font-size:10px;color:var(--muted);margin:4px 0 13px}.primary{display:flex;justify-content:center;align-items:center;gap:8px;width:100%;min-height:43px;padding:9px 10px;background:var(--teal);border:1px solid rgba(95,214,193,.4);border-radius:99px;color:#07262a;font-size:12px;font-weight:850;transition:background .2s,transform .2s}.primary:hover{background:#48cdb4}.primary:active{transform:scale(.98)}.primary .icon{width:15px;height:15px}.detail-foot{text-align:center;font-size:9px;color:var(--muted);line-height:1.7;margin:9px 0 0}.mock-footer{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:14px 2px 24px;font-size:10px;color:var(--muted)}.mock-footer button{border:0;background:none;color:var(--soft);font-size:10px;padding:4px}.mock-footer a{margin-left:12px;text-decoration:none;color:var(--muted)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.back-link{background:none;border:0;color:var(--hi);font-size:10px;font-weight:700;padding:0;margin-bottom:2px}.booking-place{display:flex;align-items:center;gap:10px;margin:15px 0;padding-bottom:14px;border-bottom:1px solid var(--line)}.booking-place img{width:59px;height:59px;object-fit:cover;border-radius:11px}.booking-place>div{display:flex;flex-direction:column;gap:4px}.booking-place b{font-size:14px}.booking-place small{font-size:10px;color:var(--soft)}.booking-place span{font-size:9px;color:var(--muted)}.setting-row{display:flex;align-items:center;justify-content:space-between;gap:10px}.group-setting{padding:0 0 15px;border-bottom:1px solid var(--line)}.travelers-info{flex:1;min-width:0;padding-right:5px}.travelers-info>label{display:block;font-size:12px;font-weight:750;margin-bottom:9px}.group-avatars{height:26px;position:relative;max-width:100%;isolation:isolate}.group-avatars span{position:absolute;top:0;left:0;display:grid;place-items:center;width:26px;height:26px;min-width:0;padding:0;border-radius:50%;color:#142630;background:var(--avatar-color);box-shadow:0 0 0 2px #16303b;font-size:9px;font-weight:850;transform-origin:center;transition:left 430ms cubic-bezier(.25,.1,.25,1);backface-visibility:hidden}.home-stepper{display:flex;align-items:center;gap:3px;flex-shrink:0;background:rgba(0,0,0,.14);border:1px solid var(--line);border-radius:99px;padding:3px}.home-stepper button{display:grid;place-items:center;width:29px;height:29px;padding:0;border:0;border-radius:50%;background:#1d3947;color:var(--soft)}.home-stepper button.plus{background:var(--teal);color:#09292e}.home-stepper .icon{height:13px;width:13px}.home-stepper output{width:20px;text-align:center;font-size:13px;font-weight:800}.date-field{position:relative;padding:14px 0}.date-field>label{display:block;font-size:12px;font-weight:750;margin-bottom:8px}.date-trigger{display:flex;align-items:center;gap:8px;width:100%;min-height:39px;padding:9px 12px;text-align:left;font-size:12px;font-weight:700;background:#102733;border:1px solid var(--line2);border-radius:11px}.date-trigger>.icon:first-child{height:15px;width:15px;color:var(--teal)}.date-trigger>.icon:last-child{height:13px;width:13px;color:var(--muted);margin-left:auto}.same-trip-services{display:flex;flex-direction:column;gap:9px;padding:12px 0;border-top:1px solid var(--line)}.same-trip-services>span{display:flex;gap:6px;align-items:center;font-size:10px;color:var(--soft);line-height:1.5}.same-trip-services .icon{height:14px;width:14px;color:var(--teal)}.booking-budget{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:1px 0 15px;padding:12px;border:1px solid rgba(47,191,166,.18);border-radius:12px;background:rgba(47,191,166,.045)}.booking-budget>span{display:flex;flex-direction:column;gap:6px;font-size:9px;color:var(--muted)}.booking-budget>span:last-child{border-left:1px solid var(--line);padding-left:12px}.booking-budget b{font-size:18px;white-space:nowrap;color:var(--text);letter-spacing:-.035em;font-variant-numeric:tabular-nums}.booking-budget>span:last-child b{color:var(--hi)}.booking-notice{display:flex;align-items:flex-start;gap:9px;font-size:11px;line-height:1.7;color:var(--soft);padding:12px;border:1px solid rgba(47,191,166,.25);border-radius:12px;background:rgba(47,191,166,.06)}.booking-notice .icon{width:16px;height:16px;color:var(--teal);margin-top:2px}.profile-view{text-align:center;padding:0 0 4px}.profile-view .profile-avatar{width:72px;height:72px;font-size:25px;margin:22px auto 12px}.profile-view h3{font-size:28px;letter-spacing:-.04em;margin:0 0 7px}.profile-view>p{font-size:12px;line-height:1.8;color:var(--soft);margin:0 0 16px}.profile-view .large{min-height:37px;font-size:12px;padding-left:23px;padding-right:23px}.profile-divider{height:1px;background:var(--line);margin:22px 0}.profile-view h3{font-size:12px;text-align:left;margin:0 0 12px}.mini-trip{display:flex;width:100%;gap:10px;align-items:center;border:1px solid var(--line2);border-radius:13px;background:#102630;padding:9px;text-align:left}.mini-trip img{width:57px;height:57px;object-fit:cover;border-radius:9px}.mini-trip>span{display:flex;flex-direction:column;gap:6px}.mini-trip b{font-size:12px;line-height:1.5}.mini-trip small{font-size:9px;color:var(--muted)}.profile-stat{display:flex;justify-content:center;align-items:center;gap:7px;color:var(--soft);font-size:12px}.profile-stat>b{color:var(--hi);font-size:21px}.own-guide-note{display:flex;align-items:flex-start;gap:8px;text-align:left;font-size:11px;line-height:1.8;color:var(--muted);border-top:1px solid var(--line);padding-top:19px;margin-top:21px}.own-guide-note .icon{color:var(--teal);height:17px;width:17px;margin-top:3px}.feed-empty{min-height:460px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px 20px;border:1px dashed var(--line2);border-radius:18px}.feed-empty>.person{height:55px;width:55px;font-size:18px;margin-bottom:20px}.feed-empty h3{font-size:23px;letter-spacing:-.035em;line-height:1.3;margin:0 0 12px}.feed-empty p{color:var(--soft);font-size:13px;line-height:1.8;margin:0 0 19px}.text-button{border:0;background:none;color:var(--soft);font-size:11px;padding:14px 0 0}\n/* The same Lesgou calendar, fitted to the guide sheet. */\n.calendar-panel{position:absolute;left:-12px;right:-12px;top:calc(100% - 4px);z-index:50;padding:13px;border:1px solid rgba(47,191,166,.3);border-radius:17px;background:linear-gradient(145deg,#183541,#0d202b);box-shadow:0 20px 48px rgba(0,0,0,.7)}.calendar-heading{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:13px}.calendar-heading>b{font-size:12px;text-transform:capitalize}.calendar-nav{display:flex;gap:4px}.calendar-nav button{display:grid;place-items:center;border:1px solid var(--line2);background:#152e3b;width:29px;height:29px;border-radius:9px}.calendar-nav .icon{width:13px;height:13px}.calendar-weekdays,.calendar-week{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.calendar-weekdays>span{text-align:center;color:var(--muted);font-size:9px;padding-bottom:8px}.calendar-week>[role=gridcell]{min-width:0}.calendar-day{height:32px;width:100%;border:1px solid transparent;border-radius:9px;background:none;font-size:11px;font-weight:700;color:var(--text);padding:0}.calendar-day:hover:not(:disabled){background:rgba(47,191,166,.1);border-color:rgba(47,191,166,.3)}[aria-selected=true]>.calendar-day{background:var(--teal);color:#09282a}.calendar-day[aria-current=date]{border-color:var(--teal)}.calendar-day:disabled{opacity:.25}.calendar-foot{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:6px;border-top:1px solid var(--line);padding-top:10px;margin-top:9px}.calendar-selection{display:flex;align-items:center;gap:5px;width:100%;font-size:11px;color:var(--soft);margin-bottom:4px}.calendar-selection .icon{width:13px;height:13px;color:var(--teal)}.calendar-foot button{padding:7px 10px;border:1px solid var(--line2);border-radius:99px;font-size:10px;font-weight:800;background:none}.calendar-foot .calendar-apply{background:var(--teal);border-color:var(--teal);color:#09282a}\n.site-bar{height:64px}.hero{padding-top:24px;padding-bottom:20px}.hero h2{font-size:clamp(32px,3.6vw,45px)}.hero p{margin-top:12px}.app-grid{padding:18px 21px}.app-topbar{min-height:56px}.day-stop{padding-bottom:14px}.guide-credit{padding-top:10px;padding-bottom:11px}.calendar-panel{top:auto;bottom:calc(100% - 12px)}\n@media(min-width:1400px){.app-grid{grid-template-columns:160px minmax(0,1fr) 320px;gap:25px;padding:22px 25px}}\n@media(max-width:1050px){.app-grid{grid-template-columns:minmax(0,1fr) 310px;gap:18px;padding:20px}.app-sidebar{display:none}.feed-column{max-width:480px}.hero h2{font-size:43px}}\n@media(max-width:700px){.wrap{padding:0 16px}.site-bar{height:64px}.logo{width:103px}.demo-label{font-size:8px;letter-spacing:.08em}.site-right{gap:11px}.lang{height:34px;width:34px}.hero{padding:28px 0 24px;text-align:left}.hero h2{font-size:35px;max-width:420px}.hero h2 span{display:block}.hero p{font-size:14px;line-height:1.8;margin-top:13px}.eyebrow{font-size:10px}.community-app{border-radius:21px}.app-topbar{padding:12px;gap:10px;flex-wrap:wrap;min-height:0}.app-brand{font-size:14px;gap:7px}.app-brand .icon{height:17px;width:17px}.app-account{margin-left:auto}.app-account>span:first-child{display:none}.app-account .person{height:29px;width:29px;font-size:10px}.app-tabs{order:3;width:100%;justify-content:center;margin-top:3px}.app-tabs button{width:50%;font-size:12px;padding:8px 12px}.app-grid{grid-template-columns:minmax(0,1fr);padding:14px;gap:22px}.feed-column{max-width:none}.feed-intro{margin-bottom:13px}.feed-intro h3{font-size:14px}.feed-intro>span{font-size:8px}.post-cover{height:218px}.post-cover-title{font-size:25px}.post-author{padding:11px}.post-content{padding:12px}.post-content>p{font-size:12px}.post-facts{gap:7px;font-size:9px}.post-facts .post-price{font-size:13px}.post-price small{font-size:8px}.post-actions{padding-top:12px}.feed-caption{font-size:9px}.guide-panel{padding:19px 18px 15px;border-radius:17px}.detail-head h3{font-size:26px}.detail-head p{font-size:13px}.detail-eyebrow{font-size:10px}.day-stop b{font-size:14px}.day-stop small{font-size:9px}.day-stop>div>span{font-size:12px}.day-stop{padding-bottom:22px}.itinerary-preview{padding-top:14px}.guide-credit{font-size:12px;padding-bottom:17px;margin-top:2px}.detail-budget>span{font-size:11px}.detail-budget b{font-size:31px}.detail-budget small,.detail-budget p{font-size:11px}.primary{min-height:47px;font-size:13px}.detail-foot{font-size:10px}.mock-footer{font-size:9px;line-height:1.7;align-items:flex-start}.mock-footer>div:last-child{display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0}.mock-footer a{font-size:8px;margin:0}.mock-footer button{font-size:9px}.home-stepper button{width:33px;height:33px}.home-stepper output{font-size:14px}.travelers-info>label,.date-field>label{font-size:13px}.date-trigger{min-height:44px;font-size:13px}.same-trip-services>span{font-size:11px}.booking-budget>span{font-size:10px}.booking-budget b{font-size:21px}.calendar-day{height:38px;font-size:12px}.calendar-heading>b{font-size:13px}.calendar-nav button{width:33px;height:33px}.calendar-weekdays>span{font-size:10px}.calendar-foot button{font-size:11px;min-height:36px}}\n@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}.group-avatars span,.primary,.post-cover img,.follow,.app-tabs button{transition:none}}\n\n/* One screen. One action. The next moment is revealed after the last exits. */\n.guides-root{min-height:100svh}\n.site-bar{height:64px;border:0}\n.hero{padding:24px 0 18px;text-align:center}\n.eyebrow{font-size:9px;letter-spacing:.15em;color:var(--muted);margin-bottom:12px}\n.hero h2{font-size:clamp(36px,3.7vw,49px);line-height:1.08;letter-spacing:-.055em;font-weight:800;margin:0 auto;max-width:920px}\n.hero h2 span{display:block;color:var(--teal)}\n.hero p{font-size:14px;line-height:1.65;color:var(--soft);max-width:650px;min-height:24px;margin:13px auto 0}\n.sequence-wrap{max-width:440px;margin:0 auto}\n.sequence-progress{display:flex;justify-content:center;gap:26px;list-style:none;padding:0;margin:0 0 18px}\n.sequence-progress li{position:relative;font-size:10px;font-weight:700;letter-spacing:.01em;color:#5d7783;padding-top:10px;transition:color .35s}\n.sequence-progress li:before{content:\"\";height:2px;border-radius:99px;background:rgba(221,242,238,.1);position:absolute;top:0;left:0;right:0;transition:background .35s}\n.sequence-progress li[aria-current=step]{color:var(--hi)}\n.sequence-progress li[aria-current=step]:before{background:var(--teal)}\n.screen-shell{position:relative;border-radius:26px;isolation:isolate}\n.sequence-stage{outline:none}\n.preview-page{width:100%;transform-origin:50% 35%;will-change:transform,opacity,filter}\n.discovery-page{border:1px solid var(--line2);border-radius:26px;background:linear-gradient(155deg,#17313e,#10232d);overflow:hidden;box-shadow:0 24px 75px -32px rgba(0,0,0,.75)}\n.screen-appbar{display:flex;align-items:center;justify-content:space-between;padding:10px 15px;border-bottom:1px solid var(--line);background:rgba(8,20,28,.2)}\n.screen-appbar>span{display:flex;align-items:center;gap:7px;font-size:11px;font-weight:750;color:var(--soft)}\n.screen-appbar>span>.icon{width:15px;height:15px;color:var(--teal)}\n.screen-account{display:grid;place-items:center;border:0;background:none;padding:0;border-radius:50%}\n.screen-account .person{height:27px;width:27px;font-size:9px;border-width:1px}\n.feed-intro,.feed-caption{display:none}\n.trip-post{border:0;box-shadow:none;border-radius:0;background:transparent}\n.post-author{padding:13px 16px}\n.author-link .person{width:34px;height:34px}\n.author-link b{font-size:13px}.author-link small{font-size:10px}\n.follow{font-size:11px;min-height:32px;background:rgba(47,191,166,.045)}\n.post-cover{height:222px}\n.post-cover-title{font-size:28px;left:17px;bottom:19px;right:54px}\n.cover-place{font-size:10px;top:14px;left:15px}\n.cover-days{font-size:10px;bottom:21px}\n.post-content{padding:13px 17px 16px}\n.post-content>p{font-size:12px;line-height:1.7;margin:0 0 13px}\n.post-facts{font-size:10px;gap:12px;padding-bottom:13px}\n.post-facts .post-price{font-size:16px;display:block}.post-price small{font-size:9px}\n.post-actions{padding-top:13px;gap:9px}\n.view-trip{min-height:40px;border-radius:99px;font-size:12px;font-weight:800;color:#09272b;background:var(--teal);border:1px solid rgba(95,214,193,.3)}\n.view-trip:hover{background:#48cdb4;color:#09272b}\n.save-guide{height:39px;width:39px;border-radius:12px}\n.screen-card{padding:19px 23px 19px;background:linear-gradient(150deg,#183440,#10242f);border:1px solid rgba(221,242,238,.13);border-radius:26px;box-shadow:0 24px 75px -32px rgba(0,0,0,.75)}\n.screen-topline{display:flex;justify-content:space-between;align-items:center;gap:13px;margin-bottom:17px;min-height:25px}\n.screen-topline>span{font-size:9px;letter-spacing:.09em;color:var(--muted);font-weight:750}\n.screen-back{border:0;background:none;padding:4px 0;font-size:11px;color:var(--soft);font-weight:650;min-height:26px;text-align:left}\n.screen-back:hover{color:var(--hi)}\n.screen-card>h3{font-size:27px;letter-spacing:-.045em;line-height:1.15;margin:0 0 15px}\n.screen-guide-author{display:flex;align-items:center;gap:8px;padding-bottom:16px;border-bottom:1px solid var(--line);font-size:11px;color:var(--soft)}\n.screen-guide-author .person{height:27px;width:27px;font-size:9px}\n.screen-guide-author .follow{margin-left:auto;font-size:10px;min-height:29px;padding:5px 12px}\n.screen-route{padding-top:17px}\n.screen-route>div{position:relative;display:flex;align-items:flex-start;gap:13px;padding:0 0 18px}\n.screen-route>div:not(:last-child):before{content:\"\";position:absolute;left:9px;top:22px;bottom:2px;width:1px;background:rgba(47,191,166,.2)}\n.screen-route>div>.icon{height:19px;width:19px;color:var(--teal);margin-top:12px;z-index:1;background:#15303c}\n.screen-route>div>div{display:flex;flex-direction:column;gap:5px;min-width:0}\n.screen-route small{font-size:9px;letter-spacing:.1em;font-weight:750;color:var(--muted)}\n.screen-route b{font-size:14px;font-weight:750;line-height:1.4}\n.screen-route span{font-size:11px;line-height:1.5;color:var(--muted)}\n.screen-guide-budget{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 0 15px;border-top:1px solid var(--line)}\n.screen-guide-budget>div{display:flex;flex-direction:column;gap:4px}\n.screen-guide-budget small{font-size:10px;color:var(--muted)}\n.screen-guide-budget b{font-size:30px;letter-spacing:-.04em;white-space:nowrap}\n.screen-guide-budget b>.ticker-currency{font-size:14px;letter-spacing:0}\n.screen-guide-budget>span{display:flex;flex-direction:column;gap:5px;text-align:right;align-items:flex-end;font-size:13px;font-weight:700;color:var(--soft)}\n.screen-guide-budget>span>.ticker-currency{font-size:inherit}\n.screen-guide-budget>span>small{font-size:10px;font-weight:500}\n.screen-guide-budget>span>b{display:block;font-size:13px;font-weight:700;letter-spacing:0}\n.screen-guide-budget>span>b>.ticker-currency{font-size:12px}\n.primary{font-size:13px;min-height:44px}\n.inspiration-button{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;min-height:35px;padding:9px 0 0;border:0;background:none;color:var(--soft);font-size:11px;font-weight:650}\n.inspiration-button .icon{height:14px;width:14px}\n.inspiration-button:hover,.inspiration-button.is-saved{color:var(--hi)}\n.booking-context{display:flex;align-items:center;gap:12px;padding-bottom:15px;border-bottom:1px solid var(--line)}\n.booking-context>img{width:51px;height:51px;object-fit:cover;border-radius:12px}\n.booking-context>div{display:flex;flex-direction:column;gap:5px}\n.booking-context h3{font-size:25px;letter-spacing:-.04em;margin:0;line-height:1.2}\n.booking-context small{font-size:11px;color:var(--muted)}\n.booking-screen .group-setting{padding-top:16px;padding-bottom:15px}\n.travelers-info>label{font-size:13px}\n.home-stepper button{height:33px;width:33px}\n.home-stepper output{font-size:15px}\n.date-field{padding-top:14px;padding-bottom:14px}\n.date-field>label{font-size:13px}\n.date-trigger{font-size:13px;min-height:42px}\n.same-trip-services{padding:11px 0;gap:9px}\n.same-trip-services>span{font-size:11px;line-height:1.5}\n.booking-budget{padding:12px 14px;margin-top:0;margin-bottom:15px;gap:18px}\n.booking-budget>span{font-size:10px;gap:7px}\n.booking-budget b{font-size:25px}\n.booking-budget b>.ticker-currency{font-size:.62em}\n.booking-budget>span:last-child{padding-left:16px}\n.detail-foot{font-size:10px;line-height:1.7}\n.booking-notice{font-size:12px;line-height:1.7}\n.teaser-reserve .reserve-label{display:block}\n.teaser-reserve:disabled{opacity:1;background:#214b47;color:var(--hi);border-color:rgba(47,191,166,.2)}\n.profile-screen>.screen-back{margin-bottom:9px}\n.profile-screen .profile-view{padding:0 0 4px}\n.profile-view .profile-avatar{margin-top:12px}\n.profile-view h3{font-size:28px}\n.profile-view>p{font-size:13px}\n.profile-view .large{font-size:12px}\n.mini-trip{padding:11px}\n.mini-trip b{font-size:13px}.mini-trip small{font-size:10px}\n.profile-stat{font-size:12px}.profile-stat>b{font-size:25px}\n.own-guide-note{font-size:12px}\n.mock-footer{max-width:740px;margin:0 auto;padding-top:22px;padding-bottom:23px;font-size:9px;line-height:1.6}\n.mock-footer button,.mock-footer a{font-size:9px}\n@media(max-width:700px){.wrap{padding:0 17px}.site-bar{height:62px}.hero{padding:21px 0 18px;text-align:center}.hero h2{font-size:clamp(30px,7.8vw,39px);line-height:1.1}.hero p{font-size:13px;line-height:1.75;max-width:310px;margin-top:12px;min-height:43px}.eyebrow{font-size:9px;margin-bottom:11px}.sequence-progress{gap:24px;margin-bottom:15px}.sequence-progress li{font-size:9px}.screen-shell{border-radius:24px}.discovery-page,.screen-card{border-radius:24px}.screen-appbar{padding:9px 13px}.post-author{padding:12px 13px}.post-cover{height:226px}.post-cover-title{font-size:27px;max-width:245px;left:15px;bottom:18px}.cover-days{font-size:9px;bottom:21px}.post-content{padding:13px 14px 15px}.post-content>p{font-size:11px}.post-facts{gap:9px;font-size:9px}.post-facts .post-price{font-size:15px}.post-price small{font-size:8px}.screen-card{padding:17px 19px 17px}.screen-card>h3{font-size:25px;margin-bottom:14px}.screen-topline{margin-bottom:15px;gap:10px}.screen-topline>span{font-size:8px}.screen-back{font-size:10px}.screen-route{padding-top:16px}.screen-route>div{gap:11px;padding-bottom:17px}.screen-route b{font-size:13px}.screen-route span{font-size:10px}.screen-guide-budget{padding:13px 0 15px}.screen-guide-budget b{font-size:27px}.screen-guide-budget>span{font-size:12px}.screen-guide-budget>span>small{font-size:9px}.screen-guide-author{font-size:10px;gap:6px}.screen-guide-author .follow{font-size:9px;padding:5px 10px}.booking-budget{gap:10px;padding:12px}.booking-budget b{font-size:23px}.booking-budget>span:last-child{padding-left:11px}.booking-context h3{font-size:24px}.booking-context small{font-size:10px}.booking-screen .group-setting{padding-top:15px}.same-trip-services>span{font-size:10px}.mock-footer{font-size:8px;padding-top:17px;align-items:flex-start}.mock-footer>span{max-width:240px}.mock-footer button,.mock-footer a{font-size:8px}.inspiration-button{font-size:10px}.date-trigger{min-height:43px}.calendar-panel{left:-8px;right:-8px}.calendar-day{min-height:37px}.preview-page{will-change:auto}}\n@media(prefers-reduced-motion:reduce){.sequence-progress li,.sequence-progress li:before{transition:none}.preview-page{will-change:auto}}\n\n/* Reusable rolling digits. Nodes survive rendering so changes stay continuous. */\n.number-ticker{display:inline-flex;align-items:baseline;vertical-align:baseline;font-variant-numeric:tabular-nums;line-height:1.1;white-space:nowrap}\n.ticker-visual{display:inline-flex;align-items:baseline;vertical-align:baseline;line-height:1.1;height:1.1em;overflow:hidden}\n.ticker-digit{display:inline-block;position:relative;vertical-align:baseline;width:.63em;height:1.1em;overflow:hidden;flex-shrink:0}\n.ticker-track{display:flex;flex-direction:column;align-items:center;width:100%;will-change:transform}\n.ticker-track>span{display:block;width:100%;height:1.1em;line-height:1.1em;text-align:center;flex-shrink:0}\n.ticker-separator{display:inline-block;height:1.1em;line-height:1.1em;width:.28em;flex-shrink:0}\n.post-facts .post-price{display:block}.post-price>.ticker-currency{font-size:.75em}.post-price>small{margin-left:3px}\n.detail-budget>div{display:block}.detail-budget>div>small{margin-left:4px}\n.following-count .number-ticker{margin-right:2px}.profile-stat .number-ticker{font-size:inherit}\n.home-stepper output{display:flex;align-items:center;justify-content:center;min-width:20px;width:auto;padding:0 2px}\n.same-trip-services>span>.number-ticker{margin-right:-2px}\n\n\n/* Immediate input, continuous depth and soft colour gradients. */\n.group-avatars span{\n  background:var(--avatar-color);\n  background:radial-gradient(circle at 28% 21%,rgba(255,255,255,var(--avatar-glow,.32)) 0%,rgba(255,255,255,0) 60%),linear-gradient(145deg,color-mix(in srgb,var(--avatar-color) 88%,white),var(--avatar-color) 56%,color-mix(in srgb,var(--avatar-color) 89%,#17323b));\n  box-shadow:0 0 0 1.7px #16303b,0 2px 5px rgba(0,0,0,.14);\n  transition:left 220ms cubic-bezier(.2,.8,.2,1);\n}\n.home-stepper button{background:linear-gradient(145deg,#294b5b,#193542);background-size:180% 180%;background-position:50% 50%;transition:filter 140ms ease}\n.home-stepper button.plus{background:linear-gradient(145deg,#70ddc6,#35c7ad 55%,#24a48f);background-size:180% 180%;background-position:50% 50%;box-shadow:inset 0 1px 0 rgba(255,255,255,.18)}\n.home-stepper button:active{filter:brightness(1.13)}\n.visual-booking .booking-context{border-bottom:0;padding-bottom:0;margin-bottom:16px}\n.visual-booking .booking-context h3{font-size:24px}\n.visual-booking .booking-context small{font-size:11px}\n.visual-booking .booking-budget{padding:15px;margin:0 0 4px;background:linear-gradient(130deg,rgba(47,191,166,.11),rgba(13,33,43,.45));border-color:rgba(95,214,193,.22);border-radius:16px;gap:15px}\n.visual-booking .booking-budget>span{font-size:11px;gap:8px}\n.visual-booking .booking-budget b{font-size:29px}\n.visual-booking .booking-budget>span:last-child b{font-size:26px}\n.visual-booking .group-setting{padding-top:16px;padding-bottom:14px}\n.visual-booking .date-field{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:13px 0;border-bottom:1px solid var(--line)}\n.visual-booking .date-field>label{font-size:13px;margin:0}\n.visual-booking .date-trigger{width:auto;min-width:165px;min-height:42px;padding:9px 11px}\n.booking-service-list{display:flex;flex-direction:column;gap:8px;padding:13px 0 15px}\n.booking-service{display:flex;align-items:center;gap:10px;padding:12px 11px;border:1px solid var(--line);background:linear-gradient(140deg,rgba(20,48,61,.65),rgba(8,25,35,.4));border-radius:14px}\n.service-symbol{width:30px;height:30px;border:1px solid rgba(47,191,166,.1);border-radius:9px;display:grid;place-items:center;color:var(--teal);background:rgba(47,191,166,.06);flex-shrink:0}\n.service-symbol .icon{width:16px;height:16px}\n.booking-service>div{min-width:0;flex:1;display:flex;flex-direction:column;gap:5px}\n.booking-service b{font-size:12px;line-height:1.4}\n.booking-service small{display:flex;align-items:center;gap:4px;font-size:10px;line-height:1.5;color:var(--muted)}\n.booking-service>strong{font-size:13px;letter-spacing:-.02em;white-space:nowrap}\n.booking-service>strong>.ticker-currency{font-size:10px}\n.booking-fit-note{display:flex;align-items:flex-start;gap:7px;margin:-3px 0 14px;padding:9px 10px;border-radius:10px;background:rgba(47,191,166,.05);color:var(--hi);font-size:10px;line-height:1.6}\n.booking-fit-note .icon{width:14px;height:14px;margin-top:1px}\n@media(max-width:700px){\n .visual-booking .booking-context h3{font-size:22px}.visual-booking .booking-context small{font-size:10px}\n .visual-booking .booking-budget{padding:13px 12px;gap:10px}.visual-booking .booking-budget b{font-size:27px}.visual-booking .booking-budget>span:last-child b{font-size:23px}.visual-booking .booking-budget>span{font-size:10px}\n .visual-booking .date-field>label{font-size:12px}.visual-booking .date-trigger{min-width:157px;font-size:12px}\n .booking-service{gap:8px;padding:11px 9px}.service-symbol{width:27px;height:27px}.booking-service b{font-size:11px}.booking-service small{font-size:9px}.booking-service>strong{font-size:12px}.booking-service>strong>.ticker-currency{font-size:9px}\n}\n@media(prefers-reduced-motion:reduce){.group-avatars span,.home-stepper button{transition:none}}\n\n\n\n/* Three meaningful moments: discover a trip, glimpse its guide, book it. */\n.quiet-guide-screen .guide-glimpse{display:grid;gap:22px;padding:28px 0 30px;color:var(--soft)}\n.guide-glimpse>div{display:flex;align-items:center;gap:14px;font-size:16px;line-height:1.5}\n.guide-glimpse .icon{color:var(--teal);height:22px;width:22px;flex-shrink:0}\n.glimpse-price{display:flex;align-items:baseline;flex-wrap:wrap;gap:10px;margin-bottom:23px}\n.glimpse-price b{font-size:28px;letter-spacing:-.04em}.glimpse-price>span{font-size:13px;color:var(--muted)}\n.glimpse-price .ticker-currency{font-size:.6em}\n.quiet-guide-screen .primary,.coherent-booking .primary{font-size:16px;min-height:48px}\n.coherent-booking{padding:22px 25px 24px}\n.coherent-booking .screen-topline{margin-bottom:22px}.coherent-booking .screen-back{font-size:14px;min-height:30px}\n.coherent-booking .screen-topline>span{font-size:11px;letter-spacing:.07em}\n.coherent-booking .booking-context{border:0;padding:0;margin-bottom:24px;gap:14px}\n.coherent-booking .booking-context img{width:60px;height:60px;border-radius:14px}\n.coherent-booking .booking-context h3{font-size:28px;letter-spacing:-.04em}\n.coherent-booking .booking-context small{font-size:13px;line-height:1.5}\n.coherent-booking .booking-choices{margin:0 0 23px}\n.coherent-booking .date-field{padding:0 0 20px;border-bottom:1px solid var(--line)}\n.coherent-booking .date-field>label{font-size:14px;margin-bottom:10px}\n.coherent-booking .date-trigger{width:100%;min-height:47px;border-radius:12px;font-size:15px;padding:10px 13px}\n.coherent-booking .group-setting{padding:20px 0 0;gap:15px;align-items:center}\n.coherent-booking .travelers-info>label{font-size:14px;margin-bottom:10px}\n.coherent-booking .group-avatars{height:28px}\n.coherent-booking .group-avatars span{width:28px;height:28px;font-size:10px}\n.coherent-booking .home-stepper{padding:4px;gap:5px}\n.coherent-booking .home-stepper button{width:38px;height:38px}\n.coherent-booking .home-stepper .icon{height:15px;width:15px}\n.coherent-booking .home-stepper output{font-size:23px;min-width:29px;line-height:1.1}\n.coherent-booking .booking-budget{border:1px solid rgba(95,214,193,.18);border-radius:15px;background:rgba(47,191,166,.045);margin:0 0 22px;padding:16px 14px;gap:12px}\n.coherent-booking .booking-budget>span{font-size:13px;gap:9px}\n.coherent-booking .booking-budget b{font-size:28px;line-height:1.15}\n.coherent-booking .booking-budget>span:last-child b{font-size:28px}\n.coherent-booking .booking-budget>span:last-child{padding-left:14px}\n.coherent-booking .booking-budget .ticker-currency{font-size:.53em}\n.coherent-booking .teaser-reserve:disabled{font-size:14px}\n.coherent-booking .calendar-panel{top:auto;bottom:calc(100% - 39px);left:0;right:0;padding:12px;border-radius:16px}\n.coherent-booking .calendar-heading b{font-size:15px}.coherent-booking .calendar-day{min-height:34px;height:34px;font-size:14px}\n.coherent-booking .calendar-weekdays span{font-size:12px}.coherent-booking .calendar-foot button{font-size:12px}\n@media(max-width:700px){\n .coherent-booking{padding:19px 21px 22px}.coherent-booking .screen-topline>span{font-size:10px}\n .coherent-booking .screen-back{font-size:13px}.coherent-booking .booking-context small{font-size:12px}\n .coherent-booking .booking-budget{padding:14px 11px;gap:9px}.coherent-booking .booking-budget>span{font-size:12px}\n .coherent-booking .booking-budget b,.coherent-booking .booking-budget>span:last-child b{font-size:25px}\n .coherent-booking .booking-budget>span:last-child{padding-left:11px}\n .coherent-booking .home-stepper{gap:3px}.coherent-booking .home-stepper button{width:35px;height:35px}\n}\n\n\n/* A quiet, tactile reservation finish in Lesgou turquoise. */\n.coherent-booking.reservation-screen{display:flex;flex-direction:column;background:radial-gradient(ellipse at 50% 43%,rgba(47,191,166,.07),transparent 63%),linear-gradient(150deg,#183440,#10242f)}\n.reservation-screen .screen-topline{position:relative;z-index:3;flex-shrink:0}\n.reservation-confirmation{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:21px 0 51px;isolation:isolate}\n.reservation-mark{position:relative;height:112px;width:112px;margin:0 0 31px;flex-shrink:0}\n.confirmation-surface{position:absolute;inset:0;background:rgba(47,191,166,.065);border:1px solid rgba(47,191,166,.12);border-radius:50%;will-change:transform,background;z-index:0}\n.receipt-halo{position:absolute;inset:-31px;background:radial-gradient(circle,rgba(47,191,166,.24),rgba(47,191,166,.035) 50%,transparent 72%);border-radius:50%;opacity:0;z-index:-1;pointer-events:none}\n.receipt-symbol{position:relative;display:block;width:112px;height:112px;overflow:visible;color:#58d7bc;opacity:0}\n.receipt-track{stroke:rgba(95,214,193,.13);stroke-width:2.4}\n.receipt-ring{stroke:currentColor;stroke-width:2.8;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;transform:rotate(-90deg);transform-origin:56px 56px}\n.receipt-check{stroke:currentColor;stroke-width:4.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1}\n.receipt-title{font-size:39px;line-height:1.1;letter-spacing:-.045em;font-weight:700;margin:0 0 12px;opacity:0}\n.receipt-subtitle{font-size:17px;line-height:1.45;color:var(--soft);margin:0;opacity:0}\n.receipt-meta{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:12px;margin-top:29px;padding-top:21px;border-top:1px solid rgba(202,232,232,.1);color:var(--muted);font-size:13px;opacity:0}\n.receipt-meta>span{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}\n.receipt-meta .icon{width:14px;height:14px;color:#62bcae}.receipt-meta>i{width:3px;height:3px;border-radius:50%;background:rgba(202,232,232,.35)}\n.is-revealing .receipt-symbol{animation:receipt-symbol-in 480ms cubic-bezier(.16,1,.3,1) 160ms both}\n.is-revealing .receipt-ring{animation:receipt-ring-draw 420ms cubic-bezier(.45,0,.2,1) 160ms both}\n.is-revealing .receipt-check{animation:receipt-check-draw 260ms cubic-bezier(.4,0,.2,1) 540ms both}\n.is-revealing .receipt-halo{animation:receipt-halo-bloom 900ms cubic-bezier(.16,1,.3,1) 420ms both}\n.is-revealing .receipt-title{animation:receipt-copy-in 400ms cubic-bezier(.16,1,.3,1) 700ms both}\n.is-revealing .receipt-subtitle{animation:receipt-copy-in 400ms cubic-bezier(.16,1,.3,1) 780ms both}\n.is-revealing .receipt-meta{animation:receipt-copy-in 400ms cubic-bezier(.16,1,.3,1) 850ms both}\n.is-complete .receipt-symbol,.is-complete .receipt-title,.is-complete .receipt-subtitle,.is-complete .receipt-meta{opacity:1;transform:none}\n.is-complete .receipt-ring,.is-complete .receipt-check{stroke-dashoffset:0}.is-complete .receipt-halo{opacity:.2}\n@keyframes receipt-symbol-in{0%{opacity:0;transform:scale(.86)}65%{opacity:1;transform:scale(1.035)}100%{opacity:1;transform:scale(1)}}\n@keyframes receipt-ring-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}\n@keyframes receipt-check-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}\n@keyframes receipt-halo-bloom{0%{opacity:0;transform:scale(.7)}42%{opacity:.8;transform:scale(1.08)}100%{opacity:.2;transform:scale(1)}}\n@keyframes receipt-copy-in{from{opacity:0;transform:translateY(9px);filter:blur(3px)}to{opacity:1;transform:translateY(0);filter:blur(0)}}\n@media(max-width:700px){.reservation-confirmation{padding-bottom:40px}.receipt-title{font-size:35px}.receipt-subtitle{font-size:16px}.receipt-meta{gap:9px;font-size:13px}.reservation-mark{margin-bottom:28px}}\n@media(prefers-reduced-motion:reduce){.reservation-confirmation *{animation:none!important}.reservation-confirmation .receipt-symbol,.reservation-confirmation .receipt-title,.reservation-confirmation .receipt-subtitle,.reservation-confirmation .receipt-meta{opacity:1;transform:none}.reservation-confirmation .receipt-ring,.reservation-confirmation .receipt-check{stroke-dashoffset:0}.reservation-confirmation .receipt-halo{opacity:.2}}\n\n\n/* Capacity guidance is a hint, with no inventory or extra decisions. */\n.capacity-advice{overflow:hidden;display:flow-root;contain:layout}\n.capacity-advice[hidden]{display:none!important}\n.capacity-advice-.guides-root{display:grid;gap:12px;margin-bottom:20px;padding:13px 14px;border:1px solid rgba(245,162,32,.16);border-radius:14px;background:linear-gradient(135deg,rgba(245,162,32,.055),rgba(47,191,166,.025))}\n.capacity-item{display:flex;align-items:flex-start;gap:10px}\n.capacity-item>.icon{height:18px;width:18px;color:#e7b368;margin-top:2px}\n.capacity-item p{margin:0;color:var(--soft);font-size:13px;line-height:1.65}\n.capacity-item b{font-weight:650;color:var(--text)}\n.capacity-item+.capacity-item{padding-top:11px;border-top:1px solid rgba(202,232,232,.08)}\n@media(max-width:700px){.capacity-advice-.guides-root{padding:12px;gap:10px}.capacity-item{gap:9px}.capacity-item p{font-size:13px;line-height:1.6}}\n@media(prefers-reduced-motion:reduce){.capacity-advice,.capacity-item{animation:none!important;transition:none!important}}\n\n\n/* The date opens from its calendar icon as a fluid Lesgou bubble. */\n.coherent-booking .date-trigger{min-height:53px;padding:7px 10px;gap:11px;border-radius:16px;background:linear-gradient(120deg,#12303d,#102733);transition:border-color 180ms,box-shadow 180ms}\n.date-icon-well{display:grid;place-items:center;width:33px;height:33px;flex-shrink:0;border-radius:11px;background:linear-gradient(145deg,rgba(95,214,193,.19),rgba(47,191,166,.06));box-shadow:inset 0 0 0 1px rgba(95,214,193,.12);color:var(--hi);transition:border-radius 220ms,background 220ms}\n.date-icon-well>.icon{height:18px;width:18px}\n.coherent-booking .date-trigger[aria-expanded=\"true\"]{border-color:rgba(95,214,193,.5);box-shadow:0 0 0 3px rgba(47,191,166,.045)}\n.date-trigger[aria-expanded=\"true\"] .date-icon-well{border-radius:50%;background:rgba(47,191,166,.19)}\n.coherent-booking .calendar-panel.calendar-blob{isolation:isolate;overflow:hidden;padding:16px;border-radius:24px;border:1px solid rgba(95,214,193,.27);background:radial-gradient(ellipse at 8% 0,rgba(47,191,166,.13),transparent 58%),linear-gradient(145deg,#1b3a46,#102631);box-shadow:0 22px 60px rgba(0,0,0,.6),inset 0 1px 0 rgba(202,232,232,.07);will-change:transform,border-radius;transform-origin:27px calc(100% + 12px)}\n.calendar-blob::before{content:\"\";position:absolute;inset:-90px -60px auto auto;width:180px;height:160px;border-radius:54% 46% 63% 37% / 42% 59% 41% 58%;background:rgba(47,191,166,.065);filter:blur(15px);z-index:-1;pointer-events:none}\n.coherent-booking .calendar-blob .calendar-heading{margin-bottom:8px}.coherent-booking .calendar-blob .calendar-heading b{font-size:15px}\n.coherent-booking .calendar-blob .calendar-nav button{border-radius:12px;width:33px;height:33px}\n.coherent-booking .calendar-blob .calendar-day{border-radius:12px;min-height:35px;height:35px;font-size:14px}\n.coherent-booking .calendar-blob [aria-selected=\"true\"] .calendar-day{border-radius:12px;background:linear-gradient(145deg,#59d7be,#2fbfa6);box-shadow:0 3px 12px rgba(47,191,166,.15)}\n.coherent-booking .calendar-blob .calendar-foot{margin-top:12px;padding-top:12px}\n@media(max-width:700px){.coherent-booking .calendar-panel.calendar-blob{padding:13px;border-radius:24px}.coherent-booking .calendar-blob .calendar-day{min-height:34px;height:34px}}\n@media(prefers-reduced-motion:reduce){.date-icon-well,.coherent-booking .date-trigger{transition:none}.coherent-booking .calendar-panel.calendar-blob{will-change:auto}}\n\n\n/* A short day-by-day glimpse; flat colour for the traveler dots. */\n.guide-itinerary{list-style:none;margin:0;padding:25px 0 26px}\n.guide-itinerary>li{position:relative;display:flex;gap:13px;padding:0 0 23px;align-items:flex-start}\n.guide-itinerary>li:last-child{padding-bottom:0}\n.guide-itinerary>li:not(:last-child)::after{content:\"\";position:absolute;left:14px;top:33px;bottom:6px;width:1px;background:rgba(95,214,193,.17)}\n.guide-day-icon{display:grid;place-items:center;position:relative;z-index:1;flex-shrink:0;height:29px;width:29px;border:1px solid rgba(95,214,193,.19);border-radius:10px;color:var(--hi);background:#183940;margin-top:1px}\n.guide-day-icon>.icon{height:17px;width:17px}\n.guide-itinerary>li>div{display:flex;flex-direction:column;gap:6px;min-width:0}\n.guide-day-label{font-size:12px;font-weight:650;line-height:1;color:var(--muted)}\n.guide-itinerary b{font-size:16px;font-weight:650;letter-spacing:-.02em;line-height:1.35}\n.guide-itinerary p{font-size:13px;line-height:1.6;color:var(--soft);margin:0}\n.group-avatars span{background:var(--avatar-color);box-shadow:0 0 0 1.7px #16303b}\n@media(max-width:700px){.guide-itinerary{padding:23px 0 24px}.guide-itinerary>li{gap:11px;padding-bottom:22px}.guide-itinerary>li:last-child{padding-bottom:0}.guide-itinerary b{font-size:15px}.guide-itinerary p{font-size:13px}}\n\n\n/* Only a calendar icon and date. The blue Lesgou blob opens below. */\n.coherent-booking .date-field{border-bottom:0;padding-bottom:12px}\n.coherent-booking .date-trigger,.coherent-booking .date-trigger[aria-expanded=\"true\"]{display:inline-flex;width:auto;max-width:100%;min-height:44px;padding:7px 0;gap:11px;border:0;border-radius:7px;background:none;box-shadow:none;color:var(--text);font-size:16px;font-weight:650;text-align:left;transition:color 160ms}\n.coherent-booking .date-trigger:hover,.coherent-booking .date-trigger[aria-expanded=\"true\"]{color:var(--hi)}\n.coherent-booking .date-icon-well,.coherent-booking .date-trigger[aria-expanded=\"true\"] .date-icon-well{width:23px;height:25px;display:grid;place-items:center;background:none;border:0;border-radius:0;box-shadow:none;color:var(--teal)}\n.coherent-booking .date-icon-well>.icon{height:22px;width:22px;stroke-width:1.65}\n.coherent-booking .calendar-panel.calendar-blob{top:calc(100% - 3px);bottom:auto;left:0;right:0;padding:17px;border:0;border-radius:26px;background:radial-gradient(ellipse at 0 0,rgba(47,191,166,.11),transparent 62%),linear-gradient(145deg,#19244e,#14203a);box-shadow:0 22px 50px rgba(2,9,25,.4);transform-origin:12px -22px}\n.coherent-booking .calendar-blob::before{background:rgba(40,70,158,.16);filter:blur(18px)}\n.coherent-booking .calendar-blob .calendar-heading{margin-bottom:10px}\n.coherent-booking .calendar-blob .calendar-heading b{font-size:16px;text-transform:none;letter-spacing:-.025em;color:#eef6f4}\n.coherent-booking .calendar-blob .calendar-heading b::first-letter{text-transform:uppercase}\n.coherent-booking .calendar-blob .calendar-nav button{width:32px;height:32px;border:0;border-radius:50%;background:rgba(202,232,232,.055);color:#cae8e8}\n.coherent-booking .calendar-blob .calendar-nav button:hover{background:rgba(47,191,166,.15);color:#5fd6c1}\n.coherent-booking .calendar-blob .calendar-weekdays{color:rgba(202,232,232,.65)}\n.coherent-booking .calendar-blob .calendar-day{border:0;border-radius:11px;color:#eef6f4;background:none;min-height:35px;height:35px;font-size:14px}\n.coherent-booking .calendar-blob .calendar-day:hover{background:rgba(202,232,232,.08)}\n.coherent-booking .calendar-blob [aria-selected=\"true\"] .calendar-day{background:#2fbfa6;color:#10243b;border-radius:11px;box-shadow:none;font-weight:800}\n.coherent-booking .calendar-blob .calendar-foot{border-color:rgba(202,232,232,.1);padding-top:12px;margin-top:12px}\n.coherent-booking .calendar-blob .calendar-selection{color:#cae8e8}\n.coherent-booking .calendar-blob .calendar-cancel{border:0;background:none;color:#cae8e8}\n.coherent-booking .calendar-blob .calendar-apply{border:0;background:#2fbfa6;color:#10243b}\n@media(max-width:700px){.coherent-booking .calendar-panel.calendar-blob{padding:14px;border-radius:26px}.coherent-booking .calendar-blob .calendar-day{height:34px;min-height:34px}.coherent-booking .date-trigger{font-size:16px}}\n@media(prefers-reduced-motion:reduce){.coherent-booking .date-trigger{transition:none}}\n\n:host{display:block;color:var(--text,#eef6f4);font-family:inherit;--hi:var(--teal-hi,#5fd6c1);--line2:var(--line-2,rgba(214,240,236,.16));isolation:isolate;scroll-margin-top:100px}\n.guides-root{background:transparent;font-family:inherit;line-height:normal;min-height:0}\n.guides-root>.wrap{max-width:none;padding:0;margin:0;width:100%}\n.guides-layout{display:grid;grid-template-columns:minmax(0,1fr) minmax(340px,440px);gap:clamp(36px,7vw,110px);align-items:center}\n.hero{padding:0;text-align:left;max-width:none;scroll-margin-top:110px}\n.hero .eyebrow{color:var(--hi);font-size:12px;font-weight:750;letter-spacing:.12em;margin:0 0 20px}\n.hero h2{font-size:clamp(2rem,4.6vw,3.6rem);font-weight:800;line-height:1.04;letter-spacing:-.035em;margin:0;text-wrap:balance}\n.hero h2 span{display:block;color:var(--teal)}\n.hero p{font-size:clamp(1.05rem,1.5vw,1.25rem);line-height:1.6;margin:22px 0 0;max-width:35ch;color:var(--soft);text-wrap:pretty}\n.sequence-wrap{max-width:440px;width:100%;margin:0;min-width:0;justify-self:end;scroll-margin-top:100px}\n.sequence-progress{gap:26px;margin-bottom:20px}.sequence-progress li{font-size:12px}\n.mock-footer{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;padding:24px 0 0;line-height:1.6;font-size:12px}\n.mock-footer button{font-size:12px;padding:7px 0;min-height:32px}\n.mock-footer>div{margin-left:auto}\n.screen-back{font-size:13px}.screen-topline>span{font-size:10px}\n.screen-guide-author{font-size:12px}.screen-guide-author .follow{font-size:12px;min-height:32px;padding-inline:12px}\n.calendar-panel{z-index:60}\n@media(max-width:760px){\n .guides-layout{grid-template-columns:minmax(0,1fr);gap:32px;max-width:540px;margin-inline:auto}\n .hero{text-align:center;max-width:480px;margin:0 auto;width:100%}\n .hero .eyebrow{margin-bottom:16px;font-size:11px}\n .hero h2{font-size:clamp(2rem,7.7vw,2.9rem);line-height:1.07}\n .hero p{margin:18px auto 0;font-size:16px;max-width:32ch}\n .sequence-wrap{justify-self:center}\n .sequence-progress{gap:25px;margin-bottom:19px}.sequence-progress li{font-size:11px}\n .mock-footer{max-width:440px;margin-inline:auto;padding-top:20px;gap:12px;font-size:11px}\n .mock-footer button{font-size:12px}\n}\n@media(prefers-reduced-motion:reduce){.hero{scroll-behavior:auto}}\n</style><div class=\"guides-root\">\n<div class=\"wrap\"><div class=\"guides-layout\" id=\"teaser\"><section class=\"hero\" id=\"story-copy\"><div class=\"eyebrow\">Guías de viajeros</div><h2 id=\"page-title\">Su viaje. <span>Tu próxima aventura.</span></h2><p id=\"page-intro\">Viajes que otros ya vivieron. Guías que puedes reservar.</p></section><section class=\"sequence-wrap\" aria-label=\"Teaser de guías de viajeros\"><ol class=\"sequence-progress\" aria-label=\"Progreso\"><li data-step=\"0\" aria-current=\"step\">Descubre</li><li data-step=\"1\">Inspírate</li><li data-step=\"2\">Repite</li></ol><div class=\"screen-shell\" id=\"screen-shell\"><div class=\"sequence-stage\" id=\"app-panel\" role=\"region\" aria-labelledby=\"screen-title\" tabindex=\"-1\"></div></div></section></div><div class=\"mock-footer\"><span id=\"footnote\">Teaser interactivo · Perfiles y precios de ejemplo. Sin reservas ni cobros.</span><div><button id=\"reset\">Volver a empezar</button></div></div></div></div>";
  class LesgouGuidesPreview extends HTMLElement {
    connectedCallback(){
      if(this._guidesController){this._guidesController.connect();return;}
      const scope=this.attachShadow({mode:'open'});
      scope.innerHTML=template;
      const shell=scope.querySelector('.guides-root');
      this._guidesController=


(function(host,scope,shell){
  'use strict';
  var photo='/assets/morrocoy.webp';
  function dateValue(date) {
    return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
  }
  function parseDate(value) { var p = value.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2], 12); }
  var today = dateValue(new Date());
  var initialDate = '2026-12-11';
  if (initialDate < today) { var future = parseDate(today); future.setDate(future.getDate() + 14); initialDate = dateValue(future); }
  var state = {
    stage: 0, lang: 'es', follow: false, saved: false, people: 4, lodging: 0, choices: false,
    stayQty: 1, boatType: 0, boatQty: 1, boatChoices: false, publishing: false,
    date: initialDate, dateOpen: false, dateDraft: initialDate, calendarMonth: initialDate.slice(0, 7) + '-01', calendarFocus: initialDate,
    itinerary: false, published: false, formError: false, titleEdited: false, tipEdited: false,
    title: 'Morrocoy con mi gente', tip: 'Salgan temprano al embarcadero y lleven protector solar.'
  };
  var words={
    es:{chooseDate:'Elige tu fecha de salida',previousMonth:'Mes anterior',nextMonth:'Mes siguiente',cancel:'Cancelar',applyDate:'Aplicar fecha',dateUpdated:'Fecha de salida actualizada.',calendarHelp:'Usa las flechas para recorrer los días, Re Pág y Av Pág para cambiar de mes, y Escape para cerrar.',stayOptions:'Opciones de hospedaje',selectedStay:'Seleccionado',credit:'Foto: AndreaC11 · CC BY-SA 3.0',defaultTitle:'Morrocoy con mi gente',defaultTip:'Salgan temprano al embarcadero y lleven protector solar.',navHow:'Cómo funciona',navGuides:'Guías de viajeros',preview:'VISTA PREVIA',eyebrow:'Guías de viajeros',title1:'El viaje de otros.',title2:'A tu manera.',lede:'Sigue a viajeros que te inspiran. Usa sus guías como base y adapta fechas, hospedaje y planes para viajar con tu gente.',discover:'Descubre',personalize:'Hazlo tuyo',share:'Comparte',returnLine:'Y cuando vuelvas, comparte el tuyo.',sample:'Ejemplo interactivo de la app. Sin reservas ni cobros.',footer:'Lesgou · Hecho en Venezuela',reset:'Reiniciar ejemplo',explainTitles:['Una buena guía es un buen comienzo.','Tu gente. Sus fechas. Sus planes.','Lo que viviste, le sirve a alguien más.'],explainTexts:['Encuentra rutas, noches y tips de otros viajeros. Guarda una guía o sigue a quien la compartió.','Usa la ruta como punto de partida. Cambia lo que quieran y armen el viaje del grupo.','Al volver, la ruta ya está. Añade tus tips y elige si también compartes el itinerario.'],guide:'Guía · 3 días',example:'EJEMPLO',guideTitle:'Morrocoy, sin correr.',from:'Por María',authorSubtitle:'2 noches · Viaje compartido',follow:'Seguir',following:'Siguiendo',route:'LA RUTA',withItinerary:'Con itinerario',withoutItinerary:'Sin itinerario',hotel:'Posada frente al mar',house:'Casa para el grupo',twoNights:'2 noches',boat:'Lancha a Cayo Sombrero',boatSub:'Un día entre los cayos',beach:'Tarde en la playa',beachSub:'Un rato sin apuro',day1:'Día 1',day2:'Día 2',day3:'Día 3',use:'Usar esta guía',save:'Guardar guía',saved:'Guía guardada',unsaved:'Guía retirada de guardadas',trip:'Tu viaje a Morrocoy',yourTrip:'TU VIAJE',based:'Basado en la guía de María',when:'Fecha de salida',howMany:'¿Cuántos van?',fewer:'Una persona menos',more:'Una persona más',yourPlans:'LOS PLANES DEL GRUPO',change:'Cambiar',changed:'A tu manera',people:'personas',person:'persona',nights:'2 noches',seeShare:'Así se comparte al volver',availability:'Al armar tu viaje se revisan precios y disponibilidad.',completed:'Viaje completado',publishHeading:'Ahora inspira tú.',publishIntro:'Tu ruta ya está. Ponle un título, añade tus tips y compártela.',titleLabel:'Título de tu guía',tipLabel:'Tu tip para este lugar',toggleTitle:'Compartir también mi itinerario',toggleSub:'Opcional. Tú eliges cuánto mostrar.',publish:'Publicar guía de ejemplo',dayPlan1:'Llegada y tarde en la playa',dayPlan2:'Lancha a los cayos',dayPlan3:'Desayuno y regreso',readyTitle:'Tu experiencia toma forma.',readyText:'Así se vería tu guía para otros viajeros.',byYou:'Por ti · Morrocoy · 2 noches',edit:'Editar mi ejemplo',followStatus:'Siguiendo a María en este ejemplo',unfollowStatus:'Dejaste de seguir a María en este ejemplo',formError:'Añade un título y un tip para continuar.'},
    en:{chooseDate:'Choose your departure date',previousMonth:'Previous month',nextMonth:'Next month',cancel:'Cancel',applyDate:'Apply date',dateUpdated:'Departure date updated.',calendarHelp:'Use arrow keys to move between days, Page Up and Page Down to change months, and Escape to close.',stayOptions:'Stay options',selectedStay:'Selected',credit:'Photo: AndreaC11 · CC BY-SA 3.0',defaultTitle:'Morrocoy with my people',defaultTip:'Head to the dock early and bring sunscreen.',navHow:'How it works',navGuides:'Traveler guides',preview:'PREVIEW',eyebrow:'Traveler guides',title1:'Their trip.',title2:'Your way.',lede:'Follow travelers who inspire you. Start with their guides and adapt the dates, stays and plans for a trip with your people.',discover:'Discover',personalize:'Make it yours',share:'Share',returnLine:'When you return, share your own.',sample:'Interactive app example. No bookings or payments.',footer:'Lesgou · Made in Venezuela',reset:'Reset example',explainTitles:['A good guide is a good place to start.','Your people. Your dates. Your plans.','Your experience can inspire someone else.'],explainTexts:['Find routes, stays and tips from other travelers. Save a guide or follow the person behind it.','Use the route as a starting point. Change what you want and shape the trip for your group.','After your trip, the route is ready. Add your tips and choose whether to share your itinerary too.'],guide:'Guide · 3 days',example:'EXAMPLE',guideTitle:'Morrocoy, at your own pace.',from:'By María',authorSubtitle:'2 nights · Shared trip',follow:'Follow',following:'Following',route:'THE ROUTE',withItinerary:'With itinerary',withoutItinerary:'Without itinerary',hotel:'Stay by the sea',house:'A house for the group',twoNights:'2 nights',boat:'Boat to Cayo Sombrero',boatSub:'A day exploring the cays',beach:'An afternoon at the beach',beachSub:'Time to slow down',day1:'Day 1',day2:'Day 2',day3:'Day 3',use:'Use this guide',save:'Save guide',saved:'Guide saved',unsaved:'Guide removed from saved guides',trip:'Your trip to Morrocoy',yourTrip:'YOUR TRIP',based:'Based on María’s guide',when:'Departure date',howMany:'How many people?',fewer:'One fewer person',more:'One more person',yourPlans:'YOUR GROUP’S PLANS',change:'Change',changed:'Made for you',people:'people',person:'person',nights:'2 nights',seeShare:'See how to share it afterwards',availability:'Prices and availability are checked when you plan your trip.',completed:'Trip completed',publishHeading:'Your turn to inspire.',publishIntro:'Your route is ready. Give it a title, add your tips and share it.',titleLabel:'Guide title',tipLabel:'Your tip for this place',toggleTitle:'Share my itinerary too',toggleSub:'Optional. You choose how much to show.',publish:'Publish example guide',dayPlan1:'Arrival and an afternoon at the beach',dayPlan2:'Boat trip to the cays',dayPlan3:'Breakfast and the journey home',readyTitle:'Your experience takes shape.',readyText:'Here is how your guide could look to other travelers.',byYou:'By you · Morrocoy · 2 nights',edit:'Edit my example',followStatus:'Following María in this example',unfollowStatus:'Unfollowed María in this example',formError:'Add a title and a tip to continue.'}
  };
  words.es.lede = 'Descubre un viaje. Ajústalo a tu grupo. Compártelo al volver.';
  words.en.lede = 'Discover a trip. Make it work for your group. Share it when you return.';
  words.es.discover = 'La guía'; words.en.discover = 'The guide';
  words.es.personalize = 'Tu versión'; words.en.personalize = 'Your version';
  words.es.explainTitles[0] = 'Un viaje que empieza con otro viajero.';
  words.en.explainTitles[0] = 'A trip that starts with another traveler.';
  words.es.explainTexts[0] = 'Su ruta, sus consejos y una base para hacerla tuya.';
  words.en.explainTexts[0] = 'Their route and tips. Your starting point.';
  words.es.explainTitles[1] = 'Mismo destino. Tu gente.';
  words.en.explainTitles[1] = 'Same destination. Your people.';
  words.es.explainTexts[1] = 'Cambia la fecha o el grupo y mira cómo se adapta el viaje.';
  words.en.explainTexts[1] = 'Change the date or group and see the trip adapt.';
  words.es.explainTexts[2] = 'Al volver, comparte tu versión para inspirar a alguien más.';
  words.en.explainTexts[2] = 'When you return, share your version to inspire someone else.';
  var panel = scope.getElementById('app-panel');
  var lastView = '';
  function w(key) { return words[state.lang][key]; }
  function esc(value) { return String(value).replace(/[&<>"']/g, function(c) { return {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]; }); }
  var guideIcons={"book": "<path d=\"M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Zm0 0v15\"/>", "bookmark": "<path d=\"M6 3h12v18l-6-4-6 4Z\"/>", "bed": "<path d=\"M3 17V7m18 10V9M3 14h18M6 10h5v4M3 17h18M4 17v3m16-3v3M13 10h5a3 3 0 0 1 3 3v1\"/>", "boat": "<path d=\"m12 3-1 12H3l4 5h10l4-5h-9V3Zm1 1 7 9h-7M9 6l-5 7h6M2 22c2-1 3-1 5 0 2-1 3-1 5 0 2-1 3-1 5 0 2-1 3-1 5 0\"/>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5\"/>", "copy": "<rect x=\"8\" y=\"8\" width=\"12\" height=\"13\" rx=\"2\"/><path d=\"M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3\"/>", "check": "<path d=\"m5 12 4 4L19 6\"/>", "people": "<circle cx=\"9\" cy=\"8\" r=\"3\"/><path d=\"M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v2\"/>", "edit": "<path d=\"m15 4 5 5M4 20l4-1L20 7a3 3 0 0 0-4-4L4 15l-1 6Z\"/>", "heart": "<path d=\"M20 4a5 5 0 0 0-8 2 5 5 0 0 0-8-2c-4 4 0 9 8 16 8-7 12-12 8-16Z\"/>", "pin": "<path d=\"M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 0 1 14 0Z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/>", "calendar": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"3\"/><path d=\"M7 3v4m10-4v4M3 11h18m-13 4h1m6 0h1m-8 3h1\"/>", "chevron-down": "<path d=\"m6 9 6 6 6-6\"/>", "chevron-left": "<path d=\"m15 6-6 6 6 6\"/>", "chevron-right": "<path d=\"m9 6 6 6-6 6\"/>", "minus": "<path d=\"M5 12h14\"/>", "plus": "<path d=\"M5 12h14M12 5v14\"/>", "replay": "<path d=\"M3 11a9 9 0 1 1 2 7M3 4v7h7\"/>"};
  function icon(name){return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">'+(guideIcons[name]||'')+'</svg>';}
  function row(name, title, sub, end) { return '<li><div class="ico">' + icon(name) + '</div><div class="row-text"><b>' + title + '</b><small>' + sub + '</small></div>' + (end || '') + '</li>'; }
  function status(message) { scope.getElementById('status').textContent = message; }
  function locale() { return state.lang === 'es' ? 'es-VE' : 'en-GB'; }
  function formatDate(value, options) { return new Intl.DateTimeFormat(locale(), options || {day:'numeric', month:'short', year:'numeric'}).format(parseDate(value)); }
  function focusPanel(selector) { var element = panel.querySelector(selector); if (element) element.focus({preventScroll:true}); }
  function shiftedMonth(value, delta) { var date = parseDate(value); date.setDate(1); date.setMonth(date.getMonth() + delta); return dateValue(date); }

  function renderCalendar() {
    var first = parseDate(state.calendarMonth);
    var offset = (first.getDay() + 6) % 7;
    var count = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    var weeks = Math.ceil((offset + count) / 7);
    var headers = '';
    for (var h = 0; h < 7; h++) {
      var weekday = new Date(2026, 0, 5 + h, 12);
      var shortName = new Intl.DateTimeFormat(locale(), {weekday:'short'}).format(weekday).replace('.', '');
      var longName = new Intl.DateTimeFormat(locale(), {weekday:'long'}).format(weekday);
      headers += '<span role="columnheader" aria-label="' + esc(longName) + '">' + esc(shortName) + '</span>';
    }
    var rows = '';
    for (var r = 0; r < weeks; r++) {
      var cells = '';
      for (var c = 0; c < 7; c++) {
        var day = r * 7 + c - offset + 1;
        if (day < 1 || day > count) { cells += '<div role="gridcell"></div>'; continue; }
        var value = dateValue(new Date(first.getFullYear(), first.getMonth(), day, 12));
        var disabled = value < today;
        cells += '<div role="gridcell" aria-selected="' + (value === state.dateDraft) + '"><button type="button" class="calendar-day" data-date="' + value + '" tabindex="' + (!disabled && value === state.calendarFocus ? '0' : '-1') + '" aria-label="' + esc(formatDate(value, {weekday:'long', day:'numeric', month:'long', year:'numeric'})) + '"' + (value === today ? ' aria-current="date"' : '') + (disabled ? ' disabled' : '') + '>' + day + '</button></div>';
      }
      rows += '<div class="calendar-week" role="row">' + cells + '</div>';
    }
    return '<div class="calendar-panel" id="departure-calendar" role="dialog" aria-labelledby="calendar-title"><h3 class="sr-only" id="calendar-title">' + w('chooseDate') + '</h3><div class="calendar-heading"><b id="calendar-month" aria-live="polite">' + esc(formatDate(state.calendarMonth, {month:'long', year:'numeric'})) + '</b><div class="calendar-nav"><button type="button" data-action="month-prev" aria-label="' + w('previousMonth') + '"' + (state.calendarMonth.slice(0, 7) <= today.slice(0, 7) ? ' disabled' : '') + '>' + icon('chevron-left') + '</button><button type="button" data-action="month-next" aria-label="' + w('nextMonth') + '">' + icon('chevron-right') + '</button></div></div><p class="sr-only" id="calendar-help">' + w('calendarHelp') + '</p><div role="grid" aria-labelledby="calendar-month" aria-describedby="calendar-help"><div class="calendar-weekdays" role="row">' + headers + '</div>' + rows + '</div><div class="calendar-foot"><div class="calendar-selection">' + icon('calendar') + '<span>' + esc(formatDate(state.dateDraft)) + '</span></div><button type="button" class="calendar-cancel" data-action="date-cancel">' + w('cancel') + '</button><button type="button" class="calendar-apply" data-action="date-apply">' + w('applyDate') + '</button></div></div>';
  }


  function groupAvatars() {
    return '<div class="group-avatars" aria-hidden="true"></div>';
  }
  function avatarPose(node) {
    var motion=node._avatarMotion, p=motion.position;
    var x=-24*Math.pow(1-p,2), y=-48*p*(1-p), scale=.58+.42*p;
    node.style.transform=p===1?'none':'translate3d('+x+'px,'+y+'px,0) scale('+scale+')';
    node.style.zIndex=p<.46?'0':String(Number(node.dataset.avatar)+2);
    node.style.setProperty('--avatar-glow',(.14+.18*p).toFixed(3));
  }
  function tickAvatarStack(root, now) {
    root._avatarFrame=null;
    if(!root.isConnected){root._avatarTime=null;return;}
    var dt=root._avatarTime?Math.max(0,(now-root._avatarTime)/1000):1/60;
    root._avatarTime=now;
    var moving=false, frequency=20, decay=Math.exp(-frequency*dt);
    root.querySelectorAll('[data-avatar]').forEach(function(node){
      var motion=node._avatarMotion;
      if(!motion)return;
      if(reduceMotion.matches){motion.position=motion.target;motion.velocity=0;}
      else {
        var displacement=motion.position-motion.target;
        var blend=motion.velocity+frequency*displacement;
        motion.position=motion.target+(displacement+blend*dt)*decay;
        motion.velocity=(motion.velocity-frequency*blend*dt)*decay;
        if(Math.abs(motion.position-motion.target)<.002&&Math.abs(motion.velocity)<.025){motion.position=motion.target;motion.velocity=0;}
      }
      avatarPose(node);
      if(motion.position===0&&motion.target===0){node.remove();return;}
      if(motion.position!==motion.target||motion.velocity!==0)moving=true;
    });
    if(moving)root._avatarFrame=requestAnimationFrame(function(time){tickAvatarStack(root,time);});
    else root._avatarTime=null;
  }
  function syncGroupAvatars(root) {
    if(!root)return;
    var first=root.dataset.count===undefined;
    var letters=['D','A','L','C','S','J','V','R','N','P'];
    var colors=['#f5a220','#5fd6c1','#9db4ff','#ff9d85','#e7d27a','#ae9bdb','#89c8e0'];
    root.style.width=Math.min(176,28+18*(state.people-1))+'px';
    var step=Math.max(0,(root.clientWidth-28)/Math.max(1,state.people-1));
    root.querySelectorAll('[data-avatar]').forEach(function(node){
      var leaving=Number(node.dataset.avatar)>=state.people;
      node.dataset.leaving=String(leaving);
      node._avatarMotion.target=leaving?0:1;
    });
    for(var i=0;i<state.people;i++) {
      var node=root.querySelector('[data-avatar="'+i+'"]');
      if(!node) {
        node=document.createElement('span');node.dataset.avatar=i;
        node.textContent=letters[i%letters.length];
        node.style.setProperty('--avatar-color',colors[i%colors.length]);
        node._avatarMotion={position:first||reduceMotion.matches?1:.18,velocity:first||reduceMotion.matches?0:7.5,target:1};
        root.appendChild(node);
      }
      node.dataset.leaving='false';node._avatarMotion.target=1;
      node.style.left=(i*step)+'px';avatarPose(node);
    }
    root.dataset.count=state.people;
    if(root._avatarFrame==null)root._avatarFrame=requestAnimationFrame(function(time){tickAvatarStack(root,time);});
  }

  function numberTicker(key,value){
    return '<span class="number-ticker" data-ticker="'+key+'" data-value="'+value+'"></span>';
  }
  function moneyTicker(key,value){return '<span class="ticker-currency">USD</span> '+numberTicker(key,value);}
  function tickerParts(value){
    var parts=new Intl.NumberFormat(locale(),{minimumFractionDigits:Number.isInteger(value)?0:2,maximumFractionDigits:2,useGrouping:false}).formatToParts(value);
    var digitsBefore=parts.filter(function(p){return p.type==='integer';}).map(function(p){return p.value;}).join('').length;
    var whole=0,fraction=0,afterDecimal=false,result=[];
    parts.forEach(function(part){
      if(part.type==='decimal'){afterDecimal=true;result.push({text:part.value});return;}
      for(var i=0;i<part.value.length;i++){
        var char=part.value[i];
        if(/\d/.test(char))result.push({digit:Number(char),place:afterDecimal?-(++fraction):digitsBefore-1-(whole++)});
        else result.push({text:char});
      }
    });
    return result;
  }
  function tickerPose(column){column.firstElementChild.style.transform='translate3d(0,'+(-column._roll.position*1.1)+'em,0)';}
  function tickNumber(root,now){
    root._tickerFrame=null;
    if(!root.isConnected){root._tickerTime=null;return;}
    var dt=root._tickerTime?Math.min(.04,(now-root._tickerTime)/1000):1/60;
    root._tickerTime=now;
    var frequency=19,decay=Math.exp(-frequency*dt),moving=false;
    root.querySelectorAll('.ticker-digit').forEach(function(column){
      var motion=column._roll;
      if(reduceMotion.matches){motion.position=motion.target;motion.velocity=0;}
      else{
        var displacement=motion.position-motion.target;
        var blend=motion.velocity+frequency*displacement;
        motion.position=motion.target+(displacement+blend*dt)*decay;
        motion.velocity=(motion.velocity-frequency*blend*dt)*decay;
        if(Math.abs(motion.position-motion.target)<.002&&Math.abs(motion.velocity)<.03){motion.position=motion.target;motion.velocity=0;}
      }
      tickerPose(column);
      if(motion.position!==motion.target||motion.velocity!==0)moving=true;
    });
    if(moving)root._tickerFrame=requestAnimationFrame(function(time){tickNumber(root,time);});
    else root._tickerTime=null;
  }
  function updateNumberTicker(root,value){
    var first=!root._tickerReady,oldValue=Number(root.dataset.value),direction=value>=oldValue?1:-1;
    var spoken=root.querySelector('.ticker-spoken'),visual=root.querySelector('.ticker-visual');
    if(!visual){
      spoken=document.createElement('span');spoken.className='sr-only ticker-spoken';
      visual=document.createElement('span');visual.className='ticker-visual';visual.setAttribute('aria-hidden','true');
      root.append(spoken,visual);
    }
    spoken.textContent=new Intl.NumberFormat(locale(),{minimumFractionDigits:Number.isInteger(value)?0:2,maximumFractionDigits:2}).format(value);
    var oldColumns={};
    visual.querySelectorAll('.ticker-digit').forEach(function(column){oldColumns[column.dataset.place]=column;});
    var ordered=[];
    tickerParts(value).forEach(function(part){
      if(part.digit===undefined){var separator=document.createElement('span');separator.className='ticker-separator';separator.textContent=part.text;ordered.push(separator);return;}
      var column=oldColumns[part.place];
      if(!column){
        column=document.createElement('span');column.className='ticker-digit';column.dataset.place=part.place;
        var track=document.createElement('span');track.className='ticker-track';
        for(var i=0;i<30;i++){var row=document.createElement('span');row.textContent=i%10;track.appendChild(row);}
        column.appendChild(track);
        column._roll={position:10+part.digit,target:10+part.digit,velocity:0,digit:part.digit};
      }else if(column._roll.digit!==part.digit){
        var motion=column._roll;
        motion.position=10+((motion.position%10)+10)%10;
        var target=10+part.digit;
        if(direction>0&&target<motion.position-.01)target+=10;
        if(direction<0&&target>motion.position+.01)target-=10;
        motion.target=target;motion.digit=part.digit;
        if(first||reduceMotion.matches){motion.position=target;motion.velocity=0;}
      }
      tickerPose(column);ordered.push(column);
    });
    visual.replaceChildren.apply(visual,ordered);
    root.dataset.value=value;root._tickerReady=true;
    if(root._tickerFrame==null)root._tickerFrame=requestAnimationFrame(function(time){tickNumber(root,time);});
  }
  function restoreTickers(previous){
    scope.querySelectorAll('[data-ticker]').forEach(function(slot){
      var value=Number(slot.dataset.value),root=previous[slot.dataset.ticker]||slot;
      if(root!==slot)slot.replaceWith(root);
      updateNumberTicker(root,value);
    });
  }

  var community={lang:'es',follow:false,saved:false,feed:'explore',view:'guide',expanded:false,people:4,date:initialDate,dateOpen:false,dateDraft:initialDate,calendarMonth:initialDate.slice(0,7)+'-01',calendarFocus:initialDate,checking:false};
  state=community;
  var panel=scope.getElementById('app-panel');
  var lastView='';
  var lastExpanded=false;
  var reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  function l(es,en){return state.lang==='es'?es:en;}
  function total(){return Math.ceil(state.people/4)*216+Math.ceil(state.people/7)*160;}
  function money(n){return 'USD '+new Intl.NumberFormat(locale(),{minimumFractionDigits:Number.isInteger(n)?0:2,maximumFractionDigits:2}).format(n);}
  function avatar(name,kind){return '<span class="person '+(kind||'')+'" aria-hidden="true">'+name+'</span>';}
  function followButton(extra){return '<button class="follow '+(state.follow?'is-following ':'')+(extra||'')+'" data-action="follow" aria-pressed="'+state.follow+'">'+(state.follow?icon('check'):'')+l(state.follow?'Siguiendo':'Seguir',state.follow?'Following':'Follow')+'</button>';}
  function sidebar(){
    return '<button class="self-card" data-action="my-profile">'+avatar('D','diego')+'<span><small>'+l('Tu perfil','Your profile')+'</small><b>Diego</b><span class="following-count">'+numberTicker('following-sidebar',state.follow?1:0)+' '+l('siguiendo','following')+'</span></span></button>'+(state.follow?'<button class="traveler-row" data-action="traveler-profile">'+avatar('M','maria')+'<span><b>María</b><small>'+l('Siguiendo','Following')+'</small></span>'+icon('check')+'</button>':'<p class="sidebar-empty">'+l('Tu próxima conexión.','Your next connection.')+'</p>');
  }
  function feed(){
    if(state.feed==='following'&&!state.follow)return '<div class="feed-empty">'+avatar('M','maria')+'<h3>'+l('Tu próxima inspiración empieza con alguien.','Your next inspiration starts with someone.')+'</h3><p>'+l('Sigue a María para ver aquí los viajes que comparta.','Follow María to see the trips she shares here.')+'</p>'+followButton('large')+'<button class="text-button" data-action="explore">'+l('Explorar viajes','Explore trips')+'</button></div>';
    return '<div class="feed-intro"><h3>'+l(state.feed==='following'?'De los viajeros que sigues':'Tu próximo viaje puede empezar aquí.',state.feed==='following'?'From the travelers you follow':'Your next trip could start here.')+'</h3><span>'+l('UN VIAJE COMPARTIDO','A SHARED TRIP')+'</span></div><article class="trip-post"><div class="post-author"><button class="author-link" data-action="traveler-profile">'+avatar('M','maria')+'<span><b>María</b><small>'+l('compartió su viaje','shared her trip')+'</small></span></button>'+followButton()+'</div><button class="post-cover" data-action="open-guide" aria-label="'+l('Ver la guía de María a Morrocoy','See María’s guide to Morrocoy')+'"><img src="'+photo+'" alt="Cayo Sombrero, Morrocoy"><span class="cover-place">'+icon('pin')+'Morrocoy, Venezuela</span><span class="post-cover-title">'+l('Morrocoy, sin correr.','Morrocoy, at your own pace.')+'</span><span class="cover-days">3 '+l('días','days')+'</span></button><div class="post-content"><p>'+l('Tres días en Morrocoy. Cero apuro.','Three days in Morrocoy. No rush.')+'</p><div class="post-facts"><span>'+icon('bed')+'2 '+l('noches','nights')+'</span><span>'+icon('people')+'4 '+l('personas','people')+'</span><span class="post-price">'+moneyTicker('post-person',94)+' <small>'+l('por persona','per person')+'</small></span></div><div class="post-actions"><button class="save-guide" data-action="save" aria-label="'+l(state.saved?'Guía guardada':'Guardar guía',state.saved?'Guide saved':'Save guide')+'" aria-pressed="'+state.saved+'">'+icon(state.saved?'check':'bookmark')+'</button><button class="view-trip" data-action="open-guide">'+icon('book')+l('Ver este viaje','View this trip')+'</button></div></div></article><div class="feed-caption">'+icon('people')+l('Sigue a quien te inspira. Encuentra tu próximo viaje.','Follow who inspires you. Find your next trip.')+'</div>';
  }
  function guideDetail(){
    if(!state.expanded)return '<div class="quiet-guide"><div class="detail-head"><span class="detail-eyebrow">'+l('DE LA GUÍA DE MARÍA','FROM MARÍA’S GUIDE')+'</span><h3 id="detail-title">'+l('El mismo viaje.','The same trip.')+'</h3></div><div class="quiet-plan"><span>'+icon('bed')+l('Dos noches junto al mar.','Two nights by the sea.')+'</span><span>'+icon('boat')+l('Un día entre los cayos.','A day among the cays.')+'</span></div><div class="detail-budget"><div><b>'+moneyTicker('guide-person',94)+'</b><small>'+l('por persona','per person')+'</small></div><p>'+l('Estimado · 4 personas','Estimate · 4 people')+'</p></div><button class="primary reserve-trip" data-action="reserve">'+l('Reservar este viaje','Book this trip')+'</button></div>';
    return '<div class="detail-head"><span class="detail-eyebrow">'+l('LA GUÍA DE MARÍA','MARÍA’S GUIDE')+'</span><h3 id="detail-title">'+l('El viaje completo.','The complete trip.')+'</h3><p>'+l('La misma ruta. Los mismos planes.','Same route. Same plans.')+'</p></div><div class="guide-credit">'+avatar('M','maria')+'<span>'+l('Compartido por','Shared by')+' <b>María</b></span><button class="icon-button" data-action="traveler-profile" aria-label="'+l('Ver el perfil de María','View María’s profile')+'">'+icon('people')+'</button></div><div class="itinerary-preview"><div class="day-stop"><span class="stop-node">1</span><div><small>'+l('LLEGADA','ARRIVAL')+'</small><b>'+l('Desconecta junto al mar','Switch off by the sea')+'</b><span>'+icon('bed')+l('Posada frente al mar · 2 noches','Stay by the sea · 2 nights')+'</span></div></div><div class="day-stop"><span class="stop-node">2</span><div><small>'+l('LOS CAYOS','THE CAYS')+'</small><b>'+l('Un día en Cayo Sombrero','A day at Cayo Sombrero')+'</b><span>'+icon('boat')+l('Traslado en lancha','Boat trip')+'</span></div></div><div class="day-stop"><span class="stop-node">3</span><div><small>'+l('SIN APURO','TAKE IT SLOW')+'</small><b>'+l('Un último baño y volver','One last swim, then home')+'</b><span>'+icon('sun')+l('Mañana libre y regreso','Free morning and return')+'</span></div></div></div><div class="detail-budget"><span>'+l('Presupuesto de ejemplo','Example budget')+'</span><div><b>'+moneyTicker('guide-person',94)+'</b><small>'+l('por persona','per person')+'</small></div><p>'+moneyTicker('guide-total',376)+' · 4 '+l('personas','people')+'</p></div><button class="primary reserve-trip" data-action="reserve">'+icon('book')+l('Reservar este viaje','Book this trip')+'</button><p class="detail-foot">'+l('Elige fecha y personas. El plan ya está.','Choose your date and group. The plan is ready.')+'</p>';
  }
  function bookingDetail(){
    var rooms=Math.ceil(state.people/4),boats=Math.ceil(state.people/7);
    return '<div class="detail-head"><button class="back-link" data-action="open-guide">'+l('Guía de María','María’s guide')+'</button><h3 id="detail-title">'+l('Ahora vas tú.','Your turn to go.')+'</h3><p>'+l('El mismo viaje, con tu gente.','The same trip, with your people.')+'</p></div><div class="booking-place"><img src="'+photo+'" alt="Morrocoy"><div><b>Morrocoy</b><small>3 '+l('días','days')+' · 2 '+l('noches','nights')+'</small><span>'+l('El viaje de María','María’s trip')+'</span></div></div><div class="setting-row group-setting"><div class="travelers-info"><label id="travelers-label">'+l('¿Cuántos van?','How many people?')+'</label>'+groupAvatars()+'</div><div class="home-stepper" role="group" aria-labelledby="travelers-label"><button data-action="minus" aria-label="'+l('Una persona menos','One fewer person')+'"'+(state.people===1?' disabled':'')+'>'+icon('minus')+'</button><output aria-live="polite">'+numberTicker('group-count',state.people)+'</output><button class="plus" data-action="plus" aria-label="'+l('Una persona más','One more person')+'"'+(state.people===20?' disabled':'')+'>'+icon('plus')+'</button></div></div><div class="date-field"><label id="date-label">'+l('Fecha de salida','Departure date')+'</label><button class="date-trigger" id="date-trigger" data-action="date-toggle" aria-labelledby="date-label date-value" aria-expanded="'+state.dateOpen+'" aria-haspopup="dialog">'+icon('calendar')+'<span id="date-value">'+esc(formatDate(state.date))+'</span>'+icon('chevron-down')+'</button>'+(state.dateOpen?renderCalendar():'')+'</div><div class="same-trip-services"><span>'+icon('bed')+numberTicker('room-qty',rooms)+' '+l(rooms===1?'habitación':'habitaciones',rooms===1?'room':'rooms')+' · '+l('Máx. 4 por habitación','4 max per room')+'</span><span>'+icon('boat')+numberTicker('boat-qty',boats)+' '+l(boats===1?'lancha':'lanchas',boats===1?'boat':'boats')+' · '+l('Máx. 7 por lancha','7 max per boat')+'</span></div><div class="booking-budget"><span>'+l('Total estimado','Estimated total')+'<b>'+moneyTicker('booking-total',total())+'</b></span><span>'+l('Por persona','Per person')+'<b>'+moneyTicker('booking-person',total()/state.people)+'</b></span></div>'+ '<button class="primary reserve-trip teaser-reserve" data-action="finish"'+(state.checking?' disabled':'')+'>'+icon(state.checking?'check':'book')+'<span class="reserve-label">'+l(state.checking?'Tu próxima aventura empieza aquí.':'Reservar',state.checking?'Your next adventure starts here.':'Book')+'</span></button>';
  }
  function travelerDetail(){
    return '<div class="profile-view"><span class="detail-eyebrow">'+l('PERFIL DE VIAJERO','TRAVELER PROFILE')+'</span>'+avatar('M','maria profile-avatar')+'<h3 id="detail-title">María</h3><p>'+l('Días de playa y viajes sin apuro.','Beach days and trips at your own pace.')+'</p>'+followButton('large')+'<div class="profile-divider"></div><h3>'+l('Su viaje compartido','Her shared trip')+'</h3><button class="mini-trip" data-action="open-guide"><img src="'+photo+'" alt="Morrocoy"><span><b>'+l('Morrocoy, sin correr.','Morrocoy, at your own pace.')+'</b><small>3 '+l('días','days')+' · USD 94 '+l('por persona','per person')+'</small></span></button></div>';
  }
  function selfDetail(){
    return '<div class="profile-view"><span class="detail-eyebrow">'+l('TU PERFIL · EJEMPLO','YOUR PROFILE · EXAMPLE')+'</span>'+avatar('D','diego profile-avatar')+'<h3 id="detail-title">Diego</h3><p>'+l('Tus viajeros. Tu próxima aventura.','Your travelers. Your next adventure.')+'</p><div class="profile-stat"><b>'+numberTicker('following-profile',state.follow?1:0)+'</b><span>'+l('siguiendo','following')+'</span></div><div class="profile-divider"></div>'+(state.follow?'<button class="traveler-row" data-action="traveler-profile">'+avatar('M','maria')+'<span><b>María</b><small>'+l('Ver su guía de Morrocoy','See her Morrocoy guide')+'</small></span></button>':'<p>'+l('Sigue a María para empezar a descubrir viajes desde tu perfil.','Follow María to start discovering trips from your profile.')+'</p>'+followButton('large'))+'<div class="own-guide-note">'+icon('book')+l('Al volver, tu viaje también podrá inspirar a otros.','When you return, your trip can inspire others too.')+'</div></div>';
  }

  state.view='discover';state.expanded=true;state.lang=host.ownerDocument.documentElement.lang==='en'?'en':'es';state.reservationDone=false;state.receiptHeight=0;
  var navigationRun=0,transitionAnimations=[],navigating=false;
  var stageHost=scope.getElementById('screen-shell');
  function screenIndex(view){return view==='booking'?2:view==='guide'?1:0;}
  function stageCopy(){
    if(state.view==='guide')return l(['Lo vivió María.','Tú también puedes.','Reserva el mismo viaje. O guarda la guía para inspirarte.'],['María lived it.','You can too.','Book the same trip. Or save the guide for inspiration.']);
    if(state.view==='booking')return l(['El mismo viaje.','Ahora vas tú.',state.checking?'Tu próxima aventura empieza aquí.':'Elige fecha y personas. El plan ya está.'],['The same trip.','Your turn to go.',state.checking?'Your next adventure starts here.':'Choose your date and group. The plan is ready.']);
    if(state.view==='traveler')return l(['Viajeros que inspiran.','Viajes que se comparten.','Sigue sus próximas guías. Descubre tu próximo viaje.'],['Travelers who inspire.','Trips worth sharing.','Follow their next guides. Discover your next trip.']);
    if(state.view==='self')return l(['Tus viajeros.','Tu próxima aventura.','Un buen viaje puede empezar con alguien que sigues.'],['Your travelers.','Your next adventure.','A great trip can start with someone you follow.']);
    return l(['Su viaje.','Tu próxima aventura.','Viajes que otros ya vivieron. Guías que puedes reservar.'],['Their trip.','Your next adventure.','Trips others have lived. Guides you can book.']);
  }
  function backControl(action,text){return '<button class="screen-back" data-action="'+action+'">'+text+'</button>';}
  function discoveryScreen(){
    return '<section class="preview-page discovery-page" data-screen="discover"><div class="screen-appbar"><span>'+icon('people')+l('Comunidad','Community')+'</span><button class="screen-account" data-action="my-profile" aria-label="'+l('Tu perfil','Your profile')+'">'+avatar('D','diego')+'</button></div>'+feed()+'</section>';
  }
  function guideItinerary(){
    var days=l([
      {icon:'bed',title:'Llegar y desconectar',detail:'Posada frente al mar · 2 noches'},
      {icon:'boat',title:'Un día en Cayo Sombrero',detail:'Traslado en lancha · tiempo de playa'},
      {icon:'sun',title:'Volver sin apuro',detail:'Mañana libre · salida de la posada'}
    ],[
      {icon:'bed',title:'Arrive and switch off',detail:'Stay by the sea · 2 nights'},
      {icon:'boat',title:'A day at Cayo Sombrero',detail:'Boat transfer · beach time'},
      {icon:'sun',title:'An easy trip home',detail:'Free morning · check out of the inn'}
    ]);
    return '<ol class="guide-itinerary" aria-label="'+l('Resumen del itinerario','Itinerary overview')+'">'+days.map(function(day,index){
      return '<li><span class="guide-day-icon" aria-hidden="true">'+icon(day.icon)+'</span><div><span class="guide-day-label">'+l('Día','Day')+' '+(index+1)+'</span><b>'+esc(day.title)+'</b><p>'+esc(day.detail)+'</p></div></li>';
    }).join('')+'</ol>';
  }
  function guideScreen(){
    return '<section class="preview-page screen-card guide-screen quiet-guide-screen" data-screen="guide"><div class="screen-topline">'+backControl('discover',l('Volver','Back'))+'<span>'+l('LA GUÍA DE MARÍA','MARÍA’S GUIDE')+'</span></div><h3 id="screen-title">'+l('Morrocoy, sin correr.','Morrocoy, at your own pace.')+'</h3><div class="screen-guide-author">'+avatar('M','maria')+'<span>'+l('María lo compartió.','Shared by María.')+'</span>'+followButton()+'</div>'+guideItinerary()+'<div class="glimpse-price"><b>'+moneyTicker('guide-person',94)+'</b><span>'+l('por persona · viaje de ejemplo','per person · example trip')+'</span></div><button class="primary" data-action="reserve">'+l('Reservar este viaje','Book this trip')+'</button><button class="inspiration-button '+(state.saved?'is-saved':'')+'" data-action="inspire" aria-pressed="'+state.saved+'">'+icon(state.saved?'check':'bookmark')+l(state.saved?'Guardada para inspirarte':'Guardar como inspiración',state.saved?'Saved for inspiration':'Save for inspiration')+'</button></section>';
  }
  function capacityAdviceKey(){
    var rooms=Math.ceil(state.people/4),boats=Math.ceil(state.people/7);
    return (rooms>2?'stay-many':rooms>1?'stay-one':'')+'|'+(boats>2?'boat-many':boats>1?'boat-one':'');
  }
  function capacityAdviceMarkup(){
    var rooms=Math.ceil(state.people/4),boats=Math.ceil(state.people/7),rows='';
    if(rooms>1)rows+='<div class="capacity-item" data-service="stay">'+icon('bed')+'<p><b>'+l('Esta habitación es para 4.','This room sleeps 4.')+'</b> '+l(rooms>2?'Te recomendamos sumar más habitaciones.':'Te recomendamos sumar otra habitación.',rooms>2?'We recommend adding more rooms.':'We recommend adding another room.')+'</p></div>';
    if(boats>1)rows+='<div class="capacity-item" data-service="boat">'+icon('boat')+'<p><b>'+l('Esta lancha admite hasta 7.','This boat takes up to 7.')+'</b> '+l(boats>2?'Te recomendamos sumar más lanchas.':'Te recomendamos sumar otra lancha.',boats>2?'We recommend adding more boats.':'We recommend adding another boat.')+'</p></div>';
    return rows?'<div class="capacity-advice-body">'+rows+'</div>':'';
  }
  function capacityAdvice(){
    var markup=capacityAdviceMarkup();
    return '<div class="capacity-advice" data-capacity-advice data-advice-key="'+capacityAdviceKey()+'" role="status" aria-live="polite" aria-atomic="true"'+(markup?'':' hidden')+'>'+markup+'</div>';
  }
  function syncCapacityAdvice(){
    var host=panel.querySelector('[data-capacity-advice]');if(!host)return;
    var key=capacityAdviceKey();if(host.dataset.adviceKey===key)return;
    var markup=capacityAdviceMarkup(),oldHeight=host.hidden?0:host.getBoundingClientRect().height;
    var previousServices=Array.from(host.querySelectorAll('[data-service]')).map(function(el){return el.dataset.service;});
    var run=host._adviceRun=(host._adviceRun||0)+1;
    if(host._adviceAnimation){host._adviceAnimation.cancel();host._adviceAnimation=null;}
    host.dataset.adviceKey=key;
    if(reduceMotion.matches||!host.animate){host.innerHTML=markup;host.hidden=!markup;return;}
    if(!markup&&oldHeight===0){host.innerHTML='';host.hidden=true;return;}
    host.hidden=false;
    if(markup)host.innerHTML=markup;
    var nextHeight=markup?host.getBoundingClientRect().height:0;
    var animation=host.animate([{height:oldHeight+'px',opacity:oldHeight?1:0},{height:nextHeight+'px',opacity:markup?1:0}],{duration:200,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'});
    host._adviceAnimation=animation;
    if(markup)host.querySelectorAll('[data-service]').forEach(function(row){
      if(previousServices.indexOf(row.dataset.service)===-1)row.animate([{opacity:0,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:200,easing:'cubic-bezier(.2,.8,.2,1)'});
    });
    animation.finished.then(function(){
      if(run!==host._adviceRun||!host.isConnected)return;
      if(!markup){host.innerHTML='';host.hidden=true;}
      animation.cancel();host._adviceAnimation=null;
    }).catch(function(){});
  }
  function bookingScreen(){
    if(state.checking)return reservationReceipt();
    var body=bookingDetail(), groupStart=body.indexOf('<div class="setting-row'), dateStart=body.indexOf('<div class="date-field"');
    var servicesStart=body.indexOf('<div class="same-trip-services"'), budgetStart=body.indexOf('<div class="booking-budget"');
    var buttonStart=body.indexOf('<button class="primary reserve-trip teaser-reserve"');
    var group=body.slice(groupStart,dateStart), date=body.slice(dateStart,servicesStart);
    date=date.replace(icon('calendar'),'<span class="date-icon-well" aria-hidden="true">'+icon('calendar')+'</span>');
    date=date.replace('class="calendar-panel"','class="calendar-panel calendar-blob"');
    date=date.replace(icon('chevron-down'),'');
    var budget=body.slice(budgetStart,buttonStart), reserve=body.slice(buttonStart);
    return '<section class="preview-page screen-card booking-screen coherent-booking" data-screen="booking"><div class="screen-topline">'+backControl('open-guide',l('Volver a la guía','Back to the guide'))+'<span>'+l('EL VIAJE DE MARÍA','MARÍA’S TRIP')+'</span></div><div class="booking-context"><img src="'+photo+'" alt="Morrocoy"><div><h3 id="screen-title">Morrocoy</h3><small>3 '+l('días','days')+' · 2 '+l('noches','nights')+' · '+l('La guía de María','María’s guide')+'</small></div></div><div class="booking-choices">'+date+group+'</div>'+capacityAdvice()+budget+reserve+'</section>';
  }
  function reservationReceipt(){
    var done=state.reservationDone;
    return '<section class="preview-page screen-card booking-screen coherent-booking reservation-screen" data-screen="booking" style="min-height:'+Math.max(480,state.receiptHeight||520)+'px"><div class="screen-topline">'+backControl('open-guide',l('Volver a la guía','Back to the guide'))+'<span>'+l('EL VIAJE DE MARÍA','MARÍA’S TRIP')+'</span></div><div class="reservation-confirmation '+(done?'is-complete':'is-revealing')+'"><div class="reservation-mark" aria-hidden="true"><span class="confirmation-surface"></span><span class="receipt-halo"></span><svg class="receipt-symbol" viewBox="0 0 112 112" fill="none"><circle class="receipt-track" cx="56" cy="56" r="43"/><circle class="receipt-ring" cx="56" cy="56" r="43" pathLength="1"/><path class="receipt-check" d="M36 56.5 50 70.5 77 42" pathLength="1"/></svg></div><h3 class="receipt-title" id="screen-title">'+l('Reservado','Booked')+'</h3><p class="receipt-subtitle">'+l('Morrocoy te espera.','Morrocoy is waiting.')+'</p><div class="receipt-meta"><span>'+icon('calendar')+esc(formatDate(state.date))+'</span><i aria-hidden="true"></i><span>'+icon('people')+numberTicker('receipt-people',state.people)+' '+l(state.people===1?'persona':'personas',state.people===1?'person':'people')+'</span></div></div><p class="sr-only" role="status" aria-live="polite" aria-atomic="true" data-reservation-status>'+l(done?'Reservado. Morrocoy te espera.':'Reservando.',done?'Booked. Morrocoy is waiting.':'Booking.')+'</p></section>';
  }
  var confirmationRun=0,confirmationTimer=0,confirmationAnimations=[];
  function cancelReservationAnimation(){
    confirmationRun++;clearTimeout(confirmationTimer);confirmationTimer=0;
    confirmationAnimations.forEach(function(a){a.cancel();});confirmationAnimations=[];
  }
  function animateReservation(el,frames,options){
    if(!el||reduceMotion.matches||!el.animate)return Promise.resolve();
    var animation=el.animate(frames,Object.assign({duration:160,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'},options||{}));
    confirmationAnimations.push(animation);return animation.finished.catch(function(){});
  }
  function completeReservation(run){
    if(run!==confirmationRun||state.view!=='booking'||!state.checking)return;
    state.reservationDone=true;confirmationTimer=0;
    var receipt=panel.querySelector('.reservation-confirmation');
    if(receipt){receipt.classList.remove('is-revealing');receipt.classList.add('is-complete');}
    var status=panel.querySelector('[data-reservation-status]');
    if(status)status.textContent=l('Reservado. Morrocoy te espera.','Booked. Morrocoy is waiting.');
  }
  async function beginReservation(){
    if(state.checking)return;
    cancelReservationAnimation();
    if(state.dateOpen){
      cancelCalendarMotion();state.dateOpen=false;
      var popup=panel.querySelector('#departure-calendar');if(popup)popup.remove();
      var trigger=panel.querySelector('#date-trigger');if(trigger)trigger.setAttribute('aria-expanded','false');
    }
    var run=confirmationRun,card=panel.firstElementChild,button=panel.querySelector('[data-action="finish"]');
    var origin=button.getBoundingClientRect();
    state.receiptHeight=Math.round(card.getBoundingClientRect().height);
    state.checking=true;state.reservationDone=reduceMotion.matches;
    if(reduceMotion.matches){render();panel.focus({preventScroll:true});return;}
    panel.inert=true;
    await Promise.all([
      animateReservation(card.querySelector('.booking-context'),[{opacity:1},{opacity:0,transform:'translateY(-5px)'}],{duration:150}),
      animateReservation(card.querySelector('.booking-choices'),[{opacity:1},{opacity:0,transform:'translateY(-5px)',filter:'blur(2px)'}],{duration:150}),
      animateReservation(card.querySelector('.booking-budget'),[{opacity:1},{opacity:0,transform:'translateY(-4px)'}],{duration:130}),
      animateReservation(card.querySelector('[data-capacity-advice]'),[{opacity:1},{opacity:0,transform:'translateY(-4px)'}],{duration:130}),
      animateReservation(button,[{transform:'scale(1)'},{transform:'scale(.97)'}],{duration:150})
    ]);
    if(run!==confirmationRun||state.view!=='booking')return;
    confirmationAnimations.forEach(function(a){a.cancel();});confirmationAnimations=[];
    render();panel.inert=false;
    var mark=panel.querySelector('.reservation-mark'),surface=panel.querySelector('.confirmation-surface');
    var destination=mark.getBoundingClientRect();
    var dx=origin.left+origin.width/2-destination.left-destination.width/2;
    var dy=origin.top+origin.height/2-destination.top-destination.height/2;
    animateReservation(surface,[
      {transform:'translate3d('+dx+'px,'+dy+'px,0) scale('+origin.width/destination.width+','+origin.height/destination.height+')',background:'#2fbfa6',borderColor:'#2fbfa6',borderRadius:'56px'},
      {transform:'translate3d(0,0,0) scale(1)',background:'rgba(47,191,166,.065)',borderColor:'rgba(47,191,166,.12)',borderRadius:'56px'}
    ],{duration:560});
    confirmationTimer=setTimeout(function(){completeReservation(run);},1360);
    panel.focus({preventScroll:true});
  }
  function travelerScreen(){return '<section class="preview-page screen-card profile-screen" data-screen="traveler">'+backControl('discover',l('Volver al viaje','Back to the trip'))+travelerDetail()+'</section>';}
  function selfScreen(){return '<section class="preview-page screen-card profile-screen" data-screen="self">'+backControl('discover',l('Volver al viaje','Back to the trip'))+selfDetail()+'</section>';}
  function refreshBookingPeople(){
    var stack=panel.querySelector('.group-avatars');
    if(!stack){render();return;}
    syncGroupAvatars(stack);
    [['group-count',state.people],['booking-total',total()],['booking-person',total()/state.people]].forEach(function(pair){
      var ticker=panel.querySelector('[data-ticker="'+pair[0]+'"]');
      if(ticker)updateNumberTicker(ticker,pair[1]);
    });
    var less=panel.querySelector('[data-action="minus"]'),more=panel.querySelector('[data-action="plus"]');
    if(less)less.disabled=state.people===1;
    if(more)more.disabled=state.people===20;
    syncCapacityAdvice();
  }
  function render(){
    var previousTickers={};scope.querySelectorAll('[data-ticker]').forEach(function(el){previousTickers[el.dataset.ticker]=el;});
    var oldStack=state.view==='booking'?panel.querySelector('.group-avatars'):null;
    var activeAction=scope.activeElement&&scope.activeElement.dataset.action;
    var copy=stageCopy();
    shell.lang=state.lang;shell.dataset.screen=state.view;
    scope.getElementById('page-title').innerHTML=esc(copy[0])+' <span>'+esc(copy[1])+'</span>';
    scope.getElementById('page-intro').textContent=copy[2];
    scope.querySelector('.eyebrow').textContent=l('Guías de viajeros','Traveler guides');
    var steps=l(['Descubre','Inspírate','Repite'],['Discover','Get inspired','Go']);
    scope.querySelectorAll('[data-step]').forEach(function(el){var index=Number(el.dataset.step);el.textContent=steps[index];if(index===screenIndex(state.view))el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});
    panel.innerHTML=({discover:discoveryScreen,guide:guideScreen,booking:bookingScreen,traveler:travelerScreen,self:selfScreen})[state.view]();
    var heading=panel.querySelector('#screen-title')||panel.querySelector('#detail-title')||panel.querySelector('.post-cover-title');
    if(heading){heading.id='screen-title';panel.setAttribute('aria-labelledby','screen-title');}
    var placeholder=panel.querySelector('.group-avatars');if(oldStack&&placeholder)placeholder.replaceWith(oldStack);
    syncGroupAvatars(panel.querySelector('.group-avatars'));restoreTickers(previousTickers);
    scope.getElementById('footnote').textContent=l('Teaser interactivo · Perfiles y precios de ejemplo. Sin reservas ni cobros.','Interactive teaser · Example profiles and prices. No bookings or payments.');
    scope.getElementById('reset').textContent=l('Volver a empezar','Start again');
    if(activeAction){var action=panel.querySelector('[data-action="'+activeAction+'"]');if(action&&!action.disabled)action.focus({preventScroll:true});}
  }
  function animateTransition(el,frames,options){
    if(!el||reduceMotion.matches||!el.animate)return Promise.resolve();
    var animation=el.animate(frames,Object.assign({duration:460,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'},options||{}));
    transitionAnimations.push(animation);return animation.finished.catch(function(){});
  }
  function clearTransition(){transitionAnimations.forEach(function(a){a.cancel();});transitionAnimations=[];}
  function cancelNavigation(){cancelCalendarMotion();cancelReservationAnimation();navigationRun++;clearTransition();navigating=false;panel.inert=false;stageHost.style.height='';stageHost.style.overflow='';}
  async function navigate(view,direction){
    if(navigating||view===state.view)return;
    cancelReservationAnimation();
    if(state.dateOpen){cancelCalendarMotion();state.dateOpen=false;render();}
    var run=++navigationRun,copy=scope.getElementById('story-copy');
    navigating=true;panel.inert=true;
    var oldHeight=stageHost.getBoundingClientRect().height;
    stageHost.style.height=oldHeight+'px';stageHost.style.overflow='hidden';
    await Promise.all([
      animateTransition(panel.firstElementChild,[{opacity:1,transform:'translate3d(0,0,0) scale(1)',filter:'blur(0)'},{opacity:0,transform:'translate3d('+(-direction*18)+'px,-5px,0) scale(.975)',filter:'blur(3px)'}],{duration:190,easing:'cubic-bezier(.4,0,1,1)'}),
      animateTransition(copy,[{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-7px)'}],{duration:170})
    ]);
    if(run!==navigationRun)return;
    clearTransition();state.view=view;state.expanded=true;state.dateOpen=false;state.checking=false;render();
    var demoAnchor=scope.querySelector('.sequence-wrap');if(demoAnchor.getBoundingClientRect().top<90)demoAnchor.scrollIntoView({block:'start',behavior:reduceMotion.matches?'auto':'smooth'});
    var nextHeight=panel.firstElementChild.getBoundingClientRect().height;
    await Promise.all([
      animateTransition(panel.firstElementChild,[{opacity:0,transform:'translate3d('+(direction*20)+'px,9px,0) scale(.975)',filter:'blur(3px)'},{opacity:1,transform:'translate3d(0,0,0) scale(1)',filter:'blur(0)'}],{duration:510}),
      animateTransition(copy,[{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:460,delay:35}),
      animateTransition(stageHost,[{height:oldHeight+'px'},{height:nextHeight+'px'}],{duration:510})
    ]);
    if(run!==navigationRun)return;
    clearTransition();stageHost.style.height='';stageHost.style.overflow='';navigating=false;panel.inert=false;
    panel.focus({preventScroll:true});
  }
  var calendarMotionRun=0,calendarAnimations=[],calendarClosing=false;
  function cancelCalendarMotion(){
    calendarMotionRun++;calendarClosing=false;
    calendarAnimations.forEach(function(a){a.cancel();});calendarAnimations=[];
  }
  function calendarAnimation(el,frames,options){
    var animation=el.animate(frames,options);calendarAnimations.push(animation);
    animation.finished.catch(function(){});return animation;
  }
  function openCalendarBlob(){
    cancelCalendarMotion();
    var cal=panel.querySelector('#departure-calendar'),well=panel.querySelector('.date-icon-well');
    if(!cal)return;
    var run=calendarMotionRun,box=cal.getBoundingClientRect(),anchor=well.getBoundingClientRect();
    cal.style.transformOrigin=(anchor.left+anchor.width/2-box.left)+'px '+(anchor.top+anchor.height/2-box.top)+'px';
    if(box.bottom>document.documentElement.clientHeight-16)cal.scrollIntoView({block:'nearest',inline:'nearest',behavior:reduceMotion.matches?'auto':'smooth'});
    if(reduceMotion.matches||!cal.animate){cal.dataset.motion='open';return;}
    cal.dataset.motion='opening';
    var opening=calendarAnimation(cal,[
      {opacity:0,transform:'translate3d(0,-4px,0) scale(.14,.09)',borderRadius:'48% 52% 54% 46% / 40% 43% 57% 60%'},
      {offset:.76,opacity:1,transform:'translate3d(0,2px,0) scale(1.012,1.016)',borderRadius:'22px 30px 28px 26px'},
      {opacity:1,transform:'translate3d(0,0,0) scale(1,1)',borderRadius:'26px'}
    ],{duration:430,easing:'cubic-bezier(.2,.85,.2,1)'});
    cal.querySelectorAll('.calendar-heading,[role="grid"],.calendar-foot').forEach(function(el){
      calendarAnimation(el,[{opacity:0,transform:'translateY(-4px)'},{opacity:1,transform:'translateY(0)'}],{duration:210,delay:85,easing:'cubic-bezier(.2,.85,.2,1)',fill:'backwards'});
    });
    calendarAnimation(well,[{transform:'scale(.94)'},{transform:'scale(1.03)'},{transform:'scale(1)'}],{duration:280,easing:'cubic-bezier(.2,.85,.2,1)'});
    opening.finished.then(function(){if(run===calendarMotionRun&&cal.isConnected)cal.dataset.motion='open';}).catch(function(){});
  }
  function closeCalendar(apply,focus){
    if(apply)state.date=state.dateDraft;
    var cal=panel.querySelector('#departure-calendar');
    if(!state.dateOpen)return;
    if(calendarClosing)return;
    if(!cal||reduceMotion.matches||!cal.animate){cancelCalendarMotion();state.dateOpen=false;render();if(focus)focusPanel('#date-trigger');return;}
    var style=getComputedStyle(cal),from={opacity:style.opacity,transform:style.transform,borderRadius:style.borderRadius};
    cancelCalendarMotion();var run=calendarMotionRun;calendarClosing=true;cal.dataset.motion='closing';
    var closing=calendarAnimation(cal,[from,{opacity:0,transform:'translate3d(0,8px,0) scale(.12,.12)',borderRadius:'50% 48% 46% 54% / 48% 54% 46% 52%'}],{duration:200,easing:'cubic-bezier(.4,0,.7,.2)',fill:'both'});
    cal.querySelectorAll('.calendar-heading,[role="grid"],.calendar-foot').forEach(function(el){calendarAnimation(el,[{opacity:1},{opacity:0}],{duration:100,fill:'both'});});
    closing.finished.then(function(){
      if(run!==calendarMotionRun)return;
      cancelCalendarMotion();state.dateOpen=false;render();if(focus)focusPanel('#date-trigger');
    }).catch(function(){});
  }
  panel.addEventListener('click',function(e){
    if(navigating||(calendarClosing&&e.target.closest('#departure-calendar')))return;
    var day=e.target.closest('[data-date]');
    if(day&&!day.disabled){state.dateDraft=day.dataset.date;state.calendarFocus=day.dataset.date;render();focusPanel('[data-date="'+state.calendarFocus+'"]');return;}
    var button=e.target.closest('[data-action]');if(!button||button.disabled)return;
    var action=button.dataset.action;
    if(action==='follow'){state.follow=!state.follow;render();return;}
    if(action==='save'||action==='inspire'){state.saved=!state.saved;render();if(!reduceMotion.matches){var saved=panel.querySelector('[data-action="'+action+'"] .icon');if(saved)saved.animate([{transform:'scale(.75)'},{transform:'scale(1)'}],{duration:260,easing:'cubic-bezier(.16,1,.3,1)'});}return;}
    if(action==='discover'){navigate('discover',-1);return;}
    if(action==='my-profile'){navigate('self',1);return;}
    if(action==='traveler-profile'){navigate('traveler',1);return;}
    if(action==='open-guide'){navigate('guide',state.view==='booking'?-1:1);return;}
    if(action==='reserve'){navigate('booking',1);return;}
    if(action==='finish'){beginReservation();return;}
    if(action==='plus'||action==='minus'){
      state.people=Math.max(1,Math.min(20,state.people+(action==='plus'?1:-1)));state.checking=false;refreshBookingPeople();
      var control=panel.querySelector('[data-action="'+action+'"]');
      if(control&&!reduceMotion.matches)control.animate([{filter:'brightness(1.13)',backgroundPosition:'10% 10%'},{filter:'brightness(1)',backgroundPosition:'50% 50%'}],{duration:180,easing:'cubic-bezier(.2,.8,.2,1)'});
      return;
    }
    if(action==='date-toggle'){
      if(state.dateOpen){closeCalendar(false,true);return;}
      state.dateOpen=true;state.dateDraft=state.date;state.calendarFocus=state.date;state.calendarMonth=state.date.slice(0,7)+'-01';render();openCalendarBlob();focusPanel('[data-date="'+state.calendarFocus+'"]');return;
    }
    if(action==='date-cancel'||action==='date-apply'){closeCalendar(action==='date-apply',true);return;}
    if(action==='month-prev'||action==='month-next'){
      state.calendarMonth=shiftedMonth(state.calendarMonth,action==='month-next'?1:-1);
      state.calendarFocus=state.dateDraft.slice(0,7)===state.calendarMonth.slice(0,7)?state.dateDraft:(state.calendarMonth<today?today:state.calendarMonth);render();focusPanel('[data-action="'+action+'"]');return;
    }
  });
  scope.getElementById('reset').addEventListener('click',function(){cancelNavigation();state.view='discover';state.follow=false;state.saved=false;state.people=4;state.date=initialDate;state.dateOpen=false;state.checking=false;state.reservationDone=false;render();});
  scope.addEventListener('click',function(e){if(state.dateOpen&&!e.target.closest('.date-field')&&!e.target.closest('#language'))closeCalendar(false,false);});
  render();

  panel.addEventListener('keydown', function(e) {
    if (!state.dateOpen) return;
    if (e.key === 'Escape') { e.preventDefault(); closeCalendar(false, true); return; }
    var button = e.target.closest('[data-date]');
    if (!button) return;
    var next = parseDate(button.dataset.date);
    var offset = (next.getDay() + 6) % 7;
    if (e.key === 'ArrowLeft') next.setDate(next.getDate() - 1);
    else if (e.key === 'ArrowRight') next.setDate(next.getDate() + 1);
    else if (e.key === 'ArrowUp') next.setDate(next.getDate() - 7);
    else if (e.key === 'ArrowDown') next.setDate(next.getDate() + 7);
    else if (e.key === 'Home') next.setDate(next.getDate() - offset);
    else if (e.key === 'End') next.setDate(next.getDate() + 6 - offset);
    else if (e.key === 'PageUp' || e.key === 'PageDown') {
      var previousDay = next.getDate();
      next.setDate(1); next.setMonth(next.getMonth() + (e.key === 'PageDown' ? 1 : -1));
      next.setDate(Math.min(previousDay, new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate()));
    } else return;
    e.preventDefault();
    state.calendarFocus = dateValue(next) < today ? today : dateValue(next);
    state.calendarMonth = state.calendarFocus.slice(0, 7) + '-01';
    render(); focusPanel('[data-date="' + state.calendarFocus + '"]');
  });


  var languageObserver,connected=false;
  function syncPageLanguage(){
    var next=host.ownerDocument.documentElement.lang==='en'?'en':'es';
    if(next===state.lang)return;
    cancelNavigation();state.lang=next;state.dateOpen=false;
    if(state.checking)state.reservationDone=true;
    render();
  }
  function outsidePointer(event){
    if(state.dateOpen&&!event.composedPath().includes(host))closeCalendar(false,false);
  }
  function connect(){
    if(connected)return;connected=true;syncPageLanguage();
    languageObserver=new MutationObserver(syncPageLanguage);
    languageObserver.observe(host.ownerDocument.documentElement,{attributes:true,attributeFilter:['lang']});
    host.ownerDocument.addEventListener('pointerdown',outsidePointer);
  }
  function disconnect(){
    connected=false;languageObserver.disconnect();
    host.ownerDocument.removeEventListener('pointerdown',outsidePointer);
    cancelNavigation();
  }
  connect();return {connect:connect,disconnect:disconnect};

})(this,scope,shell);
    }
    disconnectedCallback(){if(this._guidesController)this._guidesController.disconnect();}
  }
  customElements.define('lesgou-guides-preview',LesgouGuidesPreview);
})();
