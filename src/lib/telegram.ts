type TelegramMessageResult = {
  ok: boolean;
};

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export function canSendTelegramMessage() {
  return Boolean(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID);
}

export async function sendTelegramMessage(text: string): Promise<boolean> {
  if (!canSendTelegramMessage()) {
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as TelegramMessageResult;
    return data.ok;
  } catch {
    return false;
  }
}
