(self.webpackChunkkoillection=self.webpackChunkkoillection||[]).push([[193],{20876:(a,e,t)=>{"use strict";t(21249),t(47941),t(26833),t(89554),t(54747),t(69720),t(79753),t(82526),t(41817),t(41539),t(32165),t(66992),t(78783),t(33948),t(47042),t(68309),t(91038),t(43743),t(65529),t(4713);var r=t(65179),s=t.n(r),n=t(70492),o=t.n(n);function c(a,e){return function(a){if(Array.isArray(a))return a}(a)||function(a,e){var t=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null==t)return;var r=[],s=!0,n=!1,o=void 0;try{for(t=t.call(a),_s;!(s=(_s=t.next()).done)&&(r.push(_s.value),!e||r.length!==e);s=!0);}catch(a){n=!0,o=a}finally{try{s||null==t.return||t.return()}finally{if(n)throw o}}return r}(a,e)||function(a,e){if(!a)return;if("string"==typeof a)return l(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);"Object"===t&&a.constructor&&(t=a.constructor.name);if("Map"===t||"Set"===t)return Array.from(a);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(a,e)}(a,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(a,e){(null==e||e>a.length)&&(e=a.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=a[t];return r}t(46295),t(40451),t(40055),t(81052),t(58362),t(83062),t(88067);var i=[s().trans("global.months.january"),s().trans("global.months.february"),s().trans("global.months.march"),s().trans("global.months.april"),s().trans("global.months.may"),s().trans("global.months.june"),s().trans("global.months.july"),s().trans("global.months.august"),s().trans("global.months.september"),s().trans("global.months.october"),s().trans("global.months.november"),s().trans("global.months.december")],d="dark"===document.getElementById("settings").dataset.theme,u=d?"#00ce99":"#009688",f=d?"#007C5C":"#006355",m=d?"#4DDDB8":"#1ab0a2",p=d?"#b3f0e0":"#80cbc4",b=JSON.parse(document.querySelector("#items-evolution-chart").dataset.json),h=JSON.parse(document.querySelector("#calendars").dataset.json),y=JSON.parse(document.querySelector("#radial-tree").dataset.json);function v(a){var e=JSON.parse(a.dataset.json);o().init(a).setOption({tooltip:{formatter:function(a){return s().transChoice("statistics.items_added",a.value)}},color:[u],xAxis:{type:"category",data:e.map((function(a){return a.abscissa})),axisLabel:{textStyle:{color:d?"#f0f0f0":"#323233"}},axisTick:{alignWithLabel:!0,lineStyle:{color:d?"#f0f0f0":"#323233"}},axisLine:{lineStyle:{color:d?"#f0f0f0":"#323233"}}},yAxis:{splitLine:{lineStyle:{color:d?"#7d7f82":"#ccc"}},axisLabel:{textStyle:{color:d?"#f0f0f0":"#323233"}},axisTick:{lineStyle:{color:d?"#f0f0f0":"#323233"}},axisLine:{lineStyle:{color:d?"#f0f0f0":"#323233"}}},series:[{type:"bar",data:e.map((function(a){return a.count}))}]})}v(document.querySelector("#month-days-chart")),v(document.querySelector("#hours-chart")),v(document.querySelector("#months-chart")),v(document.querySelector("#week-days-chart")),o().init(document.getElementById("items-evolution-chart")).setOption({tooltip:{trigger:"axis",position:function(a){return[a[0],"10%"]},formatter:function(a){return a[0].axisValue+": "+s().transChoice("statistics.items",a[0].data)}},color:[u],xAxis:{type:"category",data:Object.keys(b),axisLabel:{textStyle:{color:d?"#f0f0f0":"#323233"}},axisTick:{alignWithLabel:!0,lineStyle:{color:d?"#f0f0f0":"#323233"}},axisLine:{lineStyle:{color:d?"#f0f0f0":"#323233"}}},yAxis:{type:"value",axisLabel:{textStyle:{color:d?"#f0f0f0":"#323233"}},axisTick:{lineStyle:{color:d?"#f0f0f0":"#323233"}},axisLine:{lineStyle:{color:d?"#f0f0f0":"#323233"}}},dataZoom:[{handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}],series:[{data:Object.values(b),type:"line",smooth:!0,symbol:"none",sampling:"average",areaStyle:{normal:{color:u}}}]}),Object.entries(h).forEach((function(a){var e=c(a,2),t=e[0],r=e[1],n=[];Object.entries(r).forEach((function(a){var e=c(a,2),t=(e[0],e[1]);n.push([t[0],""+t[1]])})),o().init(document.getElementById("calendar_"+t)).setOption({tooltip:{formatter:function(a){return s().transChoice("statistics.items_added",a.value[1])}},visualMap:{type:"piecewise",orient:"horizontal",right:"215",bottom:"bottom",pieces:[{min:31,color:f},{min:16,max:30,color:u},{min:6,max:15,color:m},{min:1,max:5,color:p},{min:0,max:0,color:"#ededed"}],textStyle:{color:d?"#f0f0f0":"#323233"}},calendar:{splitLine:{show:!1},top:"middle",left:"center",range:t,cellSize:20,yearLabel:{show:!1},itemStyle:{normal:{borderWidth:2,borderColor:d?"#36393e":"#ffffff",color:d?"#7d7f82":"#ededed"}},dayLabel:{show:!1},monthLabel:{show:!0,nameMap:i,color:d?"#f0f0f0":"#323233"}},series:[{type:"heatmap",coordinateSystem:"calendar",calendarIndex:0,data:n}]})})),o().init(document.getElementById("radial-tree")).setOption({tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[y],layout:"radial",symbol:"emptyCircle",symbolSize:7,initialTreeDepth:-1,animationDurationUpdate:750,itemStyle:{borderColor:u},lineStyle:{color:d?"#4a4b4d":"#ccc"},label:{color:d?"#a6a7a8":"#555"}}]})},43743:(a,e,t)=>{"use strict";var r,s=t(65179);(r=t.n(s)()).fallback="en-GB",r.defaultDomain="messages"},65529:(a,e,t)=>{"use strict";var r,s=t(65179);(r=t.n(s)()).add("global.months.january","January","javascript","en-GB"),r.add("global.months.february","February","javascript","en-GB"),r.add("global.months.march","March","javascript","en-GB"),r.add("global.months.april","April","javascript","en-GB"),r.add("global.months.may","May","javascript","en-GB"),r.add("global.months.june","June","javascript","en-GB"),r.add("global.months.july","July","javascript","en-GB"),r.add("global.months.august","August","javascript","en-GB"),r.add("global.months.september","September","javascript","en-GB"),r.add("global.months.october","October","javascript","en-GB"),r.add("global.months.november","November","javascript","en-GB"),r.add("global.months.december","December","javascript","en-GB"),r.add("global.days.monday","Monday","javascript","en-GB"),r.add("global.days.tuesday","Tuesday","javascript","en-GB"),r.add("global.days.wednesday","Wednesday","javascript","en-GB"),r.add("global.days.thursday","Thursday","javascript","en-GB"),r.add("global.days.friday","Friday","javascript","en-GB"),r.add("global.days.saturday","Saturday","javascript","en-GB"),r.add("global.days.sunday","Sunday","javascript","en-GB"),r.add("global.today","Today","javascript","en-GB"),r.add("btn.clear","Clear","javascript","en-GB"),r.add("btn.close","Close","javascript","en-GB"),r.add("statistics.items_added","{0} %count% items added| {1} %count% item added| ]1,Inf[ %count% items added","javascript","en-GB"),r.add("statistics.users","{0} %count% users| {1} %count% user| ]1,Inf[ %count% users","javascript","en-GB"),r.add("statistics.items","{0} %count% items| {1} %count% item| ]1,Inf[ %count% items","javascript","en-GB"),r.add("select2.no_results","No results found","javascript","en-GB"),r.add("select2.searching","Searching...","javascript","en-GB"),r.add("select2.none","None","javascript","en-GB"),r.add("global.search.more_results","{1} + %count% more result| ]1,Inf[ + %count% more results","javascript","en-GB"),r.add("global.search.no_results","No results","javascript","en-GB")},4713:(a,e,t)=>{"use strict";var r,s=t(65179);(r=t.n(s)()).add("global.months.january","Janvier","javascript","fr-FR"),r.add("global.months.february","Février","javascript","fr-FR"),r.add("global.months.march","Mars","javascript","fr-FR"),r.add("global.months.april","Avril","javascript","fr-FR"),r.add("global.months.may","Mai","javascript","fr-FR"),r.add("global.months.june","Juin","javascript","fr-FR"),r.add("global.months.july","Juillet","javascript","fr-FR"),r.add("global.months.august","Août","javascript","fr-FR"),r.add("global.months.september","Septembre","javascript","fr-FR"),r.add("global.months.october","Octobre","javascript","fr-FR"),r.add("global.months.november","Novembre","javascript","fr-FR"),r.add("global.months.december","Décembre","javascript","fr-FR"),r.add("global.days.monday","Lundi","javascript","fr-FR"),r.add("global.days.tuesday","Mardi","javascript","fr-FR"),r.add("global.days.wednesday","Mercredi","javascript","fr-FR"),r.add("global.days.thursday","Jeudi","javascript","fr-FR"),r.add("global.days.friday","Vendredi","javascript","fr-FR"),r.add("global.days.saturday","Samedi","javascript","fr-FR"),r.add("global.days.sunday","Dimanche","javascript","fr-FR"),r.add("global.today","Aujourd'hui","javascript","fr-FR"),r.add("btn.clear","Effacer","javascript","fr-FR"),r.add("btn.close","Fermer","javascript","fr-FR"),r.add("statistics.items_added","[0,1] %count% objet ajouté| ]1,Inf[ %count% objets ajoutés","javascript","fr-FR"),r.add("statistics.users","[0,1] %count% utilisateur| ]1,Inf[ %count% utilisateurs","javascript","fr-FR"),r.add("statistics.items","[0,1] %count% objet| ]1,Inf[ %count% objets","javascript","fr-FR"),r.add("select2.no_results","Aucun résultat trouvé","javascript","fr-FR"),r.add("select2.searching","Recherche en cours...","javascript","fr-FR"),r.add("select2.none","Aucun(e)","javascript","fr-FR"),r.add("global.search.more_results","{1} + %count% résultat| ]1,Inf[ + %count% résultats","javascript","fr-FR"),r.add("global.search.no_results","Pas de résultats","javascript","fr-FR")},65179:function(a,e,t){var r,s;t(24603),t(74916),t(39714),t(15306),t(23123),t(4723),t(9653),t(91058),t(82526),t(41817),t(41539),t(32165),t(66992),t(78783),t(33948),void 0===(s="function"==typeof(r=function(){"use strict";function a(a,e){var t,r=p.placeHolderPrefix,s=p.placeHolderSuffix;for(t in e){var n=new RegExp(r+t+s,"g");if(n.test(a)){var o=String(e[t]).replace(new RegExp("\\$","g"),"$$$$");a=a.replace(n,o)}}return a}function e(a,e,r,s,n){var o,c,i,u=r||s||n,f=e,m=u.split("_")[0];if(!(u in l))if(m in l)u=m;else{if(!(n in l))return a;u=n}if(null==f)for(var p=0;p<d.length;p++)if(t(u,d[p],a)||t(m,d[p],a)||t(n,d[p],a)){f=d[p];break}if(t(u,f,a))return l[u][f][a];for(;u.length>2&&(o=u.length,i=(c=u.split(/[\s_]+/))[c.length-1].length,1!==c.length);)if(t(u=u.substring(0,o-(i+1)),f,a))return l[u][f][a];return t(n,f,a)?l[n][f][a]:a}function t(a,e,t){return a in l&&e in l[a]&&t in l[a][e]}function r(a,e,t){var r,o,c=[],l=[],i=a.split(p.pluralSeparator),d=[];for(r=0;r<i.length;r++){var b=i[r];f.test(b)?c[(d=b.match(f))[0]]=d[d.length-1]:u.test(b)?(d=b.match(u),l.push(d[1])):l.push(b)}for(o in c)if(m.test(o))if((d=o.match(m))[1]){var h,y=d[2].split(",");for(h in y)if(e==y[h])return c[o]}else{var v=s(d[4]),g=s(d[5]);if(("["===d[3]?e>=v:e>v)&&("]"===d[6]?e<=g:e<g))return c[o]}return l[n(e,t)]||l[0]||void 0}function s(a){return"-Inf"===a?Number.NEGATIVE_INFINITY:"+Inf"===a||"Inf"===a?Number.POSITIVE_INFINITY:parseInt(a,10)}function n(a,e){var t=e;switch("pt_BR"===t&&(t="xbr"),t.length>3&&(t=t.split("_")[0]),t){case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"az":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return 1==a?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===a||1==a?0:1;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return a%10==1&&a%100!=11?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2;case"cs":case"sk":return 1==a?0:a>=2&&a<=4?1:2;case"ga":return 1==a?0:2==a?1:2;case"lt":return a%10==1&&a%100!=11?0:a%10>=2&&(a%100<10||a%100>=20)?1:2;case"sl":return a%100==1?0:a%100==2?1:a%100==3||a%100==4?2:3;case"mk":return a%10==1?0:1;case"mt":return 1==a?0:0===a||a%100>1&&a%100<11?1:a%100>10&&a%100<20?2:3;case"lv":return 0===a?0:a%10==1&&a%100!=11?1:2;case"pl":return 1==a?0:a%10>=2&&a%10<=4&&(a%100<12||a%100>14)?1:2;case"cy":return 1==a?0:2==a?1:8==a||11==a?2:3;case"ro":return 1==a?0:0===a||a%100>0&&a%100<20?1:2;case"ar":return 0===a?0:1==a?1:2==a?2:a>=3&&a<=10?3:a>=11&&a<=99?4:5;default:return 0}}function o(a,e){for(var t=0;t<a.length;t++)if(e===a[t])return!0;return!1}function c(){return"undefined"!=typeof document?document.documentElement.lang.replace("-","_"):i}var l={},i="en",d=[],u=new RegExp(/^\w+\: +(.+)$/),f=new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),m=new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/),p={locale:c(),fallback:i,placeHolderPrefix:"%",placeHolderSuffix:"%",defaultDomain:"messages",pluralSeparator:"|",add:function(a,e,t,r){var s=r||this.locale||this.fallback,n=t||this.defaultDomain;return l[s]||(l[s]={}),l[s][n]||(l[s][n]={}),l[s][n][a]=e,!1===o(d,n)&&d.push(n),this},trans:function(t,r,s,n){return a(e(t,s,n,this.locale,this.fallback),r||{})},transChoice:function(t,s,n,o,c){var l=e(t,o,c,this.locale,this.fallback),i=parseInt(s,10);return void 0===(n=n||{}).count&&(n.count=s),void 0===l||isNaN(i)||(l=r(l,i,c||this.locale||this.fallback)),a(l,n)},fromJSON:function(a){if("string"==typeof a&&(a=JSON.parse(a)),a.locale&&(this.locale=a.locale),a.fallback&&(this.fallback=a.fallback),a.defaultDomain&&(this.defaultDomain=a.defaultDomain),a.translations)for(var e in a.translations)for(var t in a.translations[e])for(var r in a.translations[e][t])this.add(r,a.translations[e][t][r],t,e);return this},reset:function(){l={},d=[],this.locale=c()}};return p})?r.call(e,t,e,a):r)||(a.exports=s)}},a=>{"use strict";a.O(0,[633,870],(()=>{return e=20876,a(a.s=e);var e}));a.O()}]);