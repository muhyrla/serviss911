const basePhoneNumber = "7 800 555-49-13";
const baseTelegramHandle = "@LockServiceOmsk";

// UTM-метки для Ижевска
const utmParams = "utm_source=site&utm_medium=button&utm_campaign=izhevsk";

export const LINKS = {
  phone: {
    raw: basePhoneNumber,
    tel: `tel:+78005554913`,
  },
  telegram: {
    handle: baseTelegramHandle,
    url: "https://t.me/zamkovbot?start=izhevsk",
  },
  yandexMapId: "3A43eb009744df70e21c8be38437baead23bcfe9a8b7c30d2dc6ed2d2c364977d7",
  yandexMetricaId: "101686254",
  address: {
    full: "Ижевск, ул. Пушкинская, д. 216, офис 305",
    street: "ул. Пушкинская, д. 216, офис 305",
    city: "Ижевск",
    region: "Удмуртская Республика",
    postalCode: "426000"
  }
};
