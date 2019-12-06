import enMessages from './messages/en';
import thMessages from './messages/th';

const messages = {
  th: thMessages,
  en: enMessages
};

export const getMessages = currentIntl => messages[currentIntl] || enMessages;
