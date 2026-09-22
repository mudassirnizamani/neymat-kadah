export const getWhatsAppLink = (message: string) => {
  // We import businessConfig here to avoid circular dependencies if utils are used in config
  // but config is simple so we can just use the hardcoded value for the fallback
  const phone = "923001234567"; // Replace with config.whatsapp if needed
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};
