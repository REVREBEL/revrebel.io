const pageConfig = {
  // Title for your status page
  title: "REBEL UPTIME",
  // Links shown at the header of your status page, could set `highlight` to `true`
  url: "https://uptime.revrebel.io",
  logo: "uptime-logo.png",
  daysInHistogram: "90",
  collectResponseTimes: true,
  allmonitorsOperational: "All Systems Go",
  notAllmonitorsOperational: "Houston, we have a site down",
  monitorLabelOperational: "Operational",
  monitorLabelNotOperational: "Monkey, We've got a 404",
  monitorLabelNoData: "No data",
  dayInHistogramNoData: "No data",
  dayInHistogramOperational: "All good",
  dayInHistogramNotOperational: "incident(s)",
  links: [
    { link: "https://github.com/REVREBEL", label: "GitHub" },
    { link: "https://blog.revrebel.io/", label: "RR Blog" },
    { link: "mailto:helpdesk@revrebel.io", label: "Get in Touch", highlight: true },
  ],
};

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: "foo_monitor",
      name: "My API Monitor",
      method: "POST",
      target: "https://example.com",
      tooltip: "This is a tooltip for this monitor",
      statusPageLink: "https://example.com",
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        "User-Agent": "Uptimeflare",
        Authorization: "Bearer YOUR_TOKEN_HERE",
      },
      body: "Hello, world!",
      responseKeyword: "success",
      checkLocationWorkerRoute: "https://xxx.example.com",
    },
    {
      id: "cf-worker-uptime.revrebel.io",
      name: "Cloudflare | uptime.revrebel.io",
      method: "GET",
      target: "uptime.revrebel.io",
      tooltip: "Tooltip",
      expectedCodes: [200],
      statusPageLink: "https://uptime.revrebel.io",
    },
    {
      id: "revrebel.io",
      name: "REVREBEL | revrebel.io",
      method: "GET",
      target: "https://www.revrebel.io",
      expectedCodes: [200],
      tooltip: "REVREBEL | REBELS in Hospitality",
      statusPageLink: "https://www.revrebel.io",
    },
    {
      id: "blog.revrebel.io",
      name: "RR Blog | blog.revrebel.io",
      method: "GET",
      target: "https://blog.revrebel.io",
      expectedCodes: [200],
      tooltip: "RR Blog | Revenue Rendezvous",
      statusPageLink: "https://blog.revrebel.io",
    },
    {
      id: "rebel.camp",
      name: "REBELCAMP | rebel.camp",
      method: "GET",
      target: "https://rebel.camp",
      expectedCodes: [200],
      tooltip: "REBELCAMP | rebel.camp",
      statusPageLink: "https://rebel.camp",
    },
  ],

  callbacks: {
    onStatusChange: async (env: any, monitor: any, isUp: boolean, timeIncidentStart: number, timeNow: number, reason: string) => {
      await notify(env, monitor, isUp, timeIncidentStart, timeNow, reason);
    },

    onIncident: async (env: any, monitor: any, timeIncidentStart: number, timeNow: number, reason: string) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
};

const escapeMarkdown = (text: string) => {
  return text.replace(/[_*[\](){}~`>#+\-=|.!\\]/g, "\\$&");
};

async function notify(env: any, monitor: any, isUp: boolean, timeIncidentStart: number, timeNow: number, reason: string) {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai",
  });

  const downtimeDuration = Math.round((timeNow - timeIncidentStart) / 60);
  const timeIncidentStartFormatted = dateFormatter.format(new Date(timeIncidentStart * 1000));
  const statusText = isUp ? `The service is up again after being down for ${downtimeDuration} minutes.` : `Service became unavailable at ${timeIncidentStartFormatted}. Issue: ${reason || "unspecified"}`;

  console.log("Notifying: ", monitor.name, statusText);

  if (env.BARK_SERVER && env.BARK_DEVICE_KEY) {
    try {
      const title = isUp ? `✅ ${monitor.name} is up again!` : `🔴 ${monitor.name} is currently down.`;
      await sendBarkNotification(env, monitor, title, statusText);
    } catch (error) {
      console.error("Error sending Bark notification:", error);
    }
  }

  if (env.SECRET_TELEGRAM_CHAT_ID && env.SECRET_TELEGRAM_API_TOKEN) {
    try {
      const operationalLabel = isUp ? "Up" : "Down";
      const statusEmoji = isUp ? "✅" : "🔴";
      const telegramText = `*${escapeMarkdown(monitor.name)}* is currently *${operationalLabel}*\n${statusEmoji} ${escapeMarkdown(statusText)}`;
      await notifyTelegram(env, monitor, isUp, telegramText);
    } catch (error) {
      console.error("Error sending Telegram notification:", error);
    }
  }

  if (env.SECRET_SLACK_WEBHOOK_URL) {
    try {
      const operationalLabel = isUp ? "Up" : "Down";
      const statusEmoji = isUp ? "✅" : "🔴";
      const title = isUp ? `✅ ${monitor.name} is up again!` : `🔴 ${monitor.name} is currently down.`;
                         `< ${monitor.url} | [GO TO STAUS PAGE] >`;
      const fallback = `Monitor ${monitor.name} changed status to *${operationalLabel}*\n${statusEmoji} ${escapeMarkdown(statusText)}`;
      const slackText = `*${escapeMarkdown(monitor.name)}* is currently *${operationalLabel}*\n${statusEmoji} ${escapeMarkdown(statusText)}`;
      await notifySlack(env, title, isUp, fallback, slackText);
    } catch (error) {
      console.error("Error sending Slack notification:", error);
    }
  }
  if (env.SECRET_DISCORD_WEBHOOK_URL) {
    try {
      const operationalLabel = isUp ? "Up" : "Down";
      const statusEmoji = isUp ? ":white_check_mark:" : ":x:";
      const title = `*${escapeMarkdown(monitor.name)}* is currently *${operationalLabel}*\n${statusEmoji} ${escapeMarkdown(statusText)}`;
      const description = `\`${monitor.method ? monitor.method : "GET"} ${monitor.url}\` - :eyes: [Status Page](${pageConfig.url})`;
      const discordText = `*${escapeMarkdown(monitor.name)}* is currently *${operationalLabel}*\n${statusEmoji} ${escapeMarkdown(statusText)}`;
      await notifyDiscord(env, title, isUp, description, discordText);
    } catch (error) {
      console.error("Error sending Discord notification:", error);
    }
  }
}



export async function notifyTelegram(env: any, monitor: any, operational: boolean, text: string) {
  const chatId = env.SECRET_TELEGRAM_CHAT_ID;
  const apiToken = env.SECRET_TELEGRAM_API_TOKEN;

  const payload = new URLSearchParams({
    chat_id: chatId,
    parse_mode: "MarkdownV2",
    text: text,
  });

  try {
    const response = await fetch(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    });

    if (!response.ok) {
      console.error(`Failed to send Telegram notification "${text}",  ${response.status} ${response.statusText} ${await response.text()}`);
    }
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
}

async function sendBarkNotification(env: any, monitor: any, title: string, body: string, group: string = "") {
  const barkServer = env.BARK_SERVER;
  const barkDeviceKey = env.BARK_DEVICE_KEY;
  const barkUrl = `${barkServer}/push`;
  const data = {
    title: title,
    body: body,
    group: group,
    url: monitor.url,
    device_key: barkDeviceKey,
  };

  const response = await fetch(barkUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log("Bark notification sent successfully.");
  } else {
    const respText = await response.text();
    console.error("Failed to send Bark notification:", response.status, response.statusText, respText);
  }
}

export async function notifySlack(env: any, fallback: any, operational: boolean, text: string, title: string) {
  const slackWebhook = env.SECRET_SLACK_WEBHOOK_URL;
  //const payload = new URLSearchParams({
  const payload = {
    attachments: [
      {
        icon_url: `${pageConfig.url}/${pageConfig.logo}`,
        fallback: fallback,
        pretext: fallback,
        color: operational ? "#36a64f" : "#f2c744",
        fields: [{ title: title, text: text, short: false }],
      },
    ],
  };

  try {
    const response = await fetch(`${slackWebhook}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error(`Failed to send Slack notification "${text}",  ${response.status} ${response.statusText} ${await response.text()}`);
    }
  } catch (error) {
    console.error("Error sending Slack notification:", error);
  }
}

async function notifyDiscord(env: any, description: any, operational: boolean, text: string, title: string) {
    const slackDiscord = env.SECRET_DISCORD_WEBHOOK_URL;
 
  const payload = {
    username: `${pageConfig.title}`,
    avatar_url: `${pageConfig.url}/${pageConfig.logo}`,
    embeds: [
      {
        title: title,
        description: description,
        color: operational ? 3581519 : 13632027,
      },
    ],
  };
  try {
    const response = await fetch(`${slackDiscord}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error(`Failed to send Discord notification "${text}",  ${response.status} ${response.statusText} ${await response.text()}`);
    }
  } catch (error) {
    console.error("Error sending Discord notification:", error);
  }
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig };
