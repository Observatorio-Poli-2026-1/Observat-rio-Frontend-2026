const DEFAULT_COOLDOWN_MS = 30_000;

type AntiAutomationAction = 'login' | 'register' | 'article';

const storageKey = (action: AntiAutomationAction) => `antiAutomation:${action}`;

export const getCooldownRemaining = (
  action: AntiAutomationAction,
  cooldownMs = DEFAULT_COOLDOWN_MS,
  now = Date.now(),
) => {
  if (typeof window === 'undefined') {
    return 0;
  }

  const lastAttempt = Number(window.localStorage.getItem(storageKey(action)) || '0');
  if (!lastAttempt) {
    return 0;
  }

  const remaining = cooldownMs - (now - lastAttempt);
  return remaining > 0 ? remaining : 0;
};

export const canAttemptAction = (action: AntiAutomationAction, cooldownMs = DEFAULT_COOLDOWN_MS) => {
  return getCooldownRemaining(action, cooldownMs) === 0;
};

export const registerAttempt = (action: AntiAutomationAction) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(storageKey(action), String(Date.now()));
};

export const isHoneypotFilled = (value: string) => value.trim().length > 0;

export const formatCooldown = (remainingMs: number) => {
  const seconds = Math.max(1, Math.ceil(remainingMs / 1000));
  return seconds === 1 ? '1 segundo' : `${seconds} segundos`;
};
