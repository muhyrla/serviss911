// Функция для отложенной загрузки скриптов
export const loadScript = (src, callback = null) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  
  if (callback) {
    script.onload = callback;
  }
  
  document.body.appendChild(script);
};

// Функция для загрузки Bitrix24
export const loadBitrix24 = () => {
  (function(w,d,u){
    var s=d.createElement('script');
    s.async=true;
    s.src=u+'?'+(Date.now()/60000|0);
    var h=d.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s,h);
  })(window,document,'https://cdn-ru.bitrix24.ru/b33648864/crm/site_button/loader_1_wg5zlx.js');
};

// Функция для отложенной загрузки Яндекс.Метрики
export const loadYandexMetrica = () => {
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(101686254, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true,
    trackHash:true,
    ecommerce:"dataLayer",
    params: {
      city: "Новгород",
      domain: "novgorod112.ru"
    }
  });

  // Функция для отслеживания кликов по кнопкам
  document.addEventListener('click', function(e) {
    const target = e.target.closest('button, a');
    if (target) {
      const buttonText = target.textContent.trim();
      const href = target.href;
      ym(101686254, 'reachGoal', 'button_click', {
        button_text: buttonText,
        button_href: href,
        button_type: target.tagName.toLowerCase()
      });
    }
  });
};

// Функция для отложенной загрузки всех скриптов
export const loadDelayedScripts = () => {
  // Загружаем Яндекс.Метрику
  loadYandexMetrica();
  
  // Загружаем Bitrix24
  loadBitrix24();
  
  // Добавляем noscript для Яндекс.Метрики
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.src = 'https://mc.yandex.ru/watch/101686254';
  img.style.position = 'absolute';
  img.style.left = '-9999px';
  img.alt = '';
  noscript.appendChild(img);
  document.body.appendChild(noscript);
}; 