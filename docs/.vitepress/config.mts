import { defineConfig } from 'vitepress';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: '/bug-recorder-docs/', 
  title: 'QA Lis – документация',
  description: 'Шаги, баг-репорты и тест-кейсы в QA Lis: Network, Console и связанные вкладки.',
  lang: 'ru-RU',
  locales: { root: { label: 'Русский', lang: 'ru-RU' } },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/bug-recorder-docs/favicon.png' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SZF0W87VER'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SZF0W87VER');`
    ]
  ],
  markdown: {
    config(md) {
      const renderImage = md.renderer.rules.image!;
      md.renderer.rules.image = (tokens, index, options, env, self) => {
        const token = tokens[index];
        const src = token.attrGet('src') || '';
        if (!src.startsWith('/images/')) return renderImage(tokens, index, options, env, self);
        const png = readFileSync(fileURLToPath(new URL('../public' + src, import.meta.url)));
        // All documentation captures use a real 2x device scale, not upscaling.
        token.attrSet('width', String(png.readUInt32BE(16) / 2));
        token.attrSet('height', String(png.readUInt32BE(20) / 2));
        token.attrSet('loading', 'lazy');
        token.attrSet('decoding', 'async');
        const image = renderImage(tokens, index, options, env, self);
        const href = md.utils.escapeHtml('/bug-recorder-docs' + src);
        return `<a class="doc-screenshot" href="${href}" target="_blank" rel="noopener" title="Открыть скриншот в полном размере">${image}</a>`;
      };
    }
  },
  themeConfig: {
    siteTitle: 'QA Lis',
    nav: [
      { text: 'Документация', link: '/getting-started/what-is' },
      { text: 'Помощь', link: '/help/troubleshooting' },
      { text: 'Telegram', link: 'https://t.me/testingqabug' }
    ],
    sidebar: [
  {
    "text": "Начало работы",
    "collapsed": false,
    "items": [
      {
        "text": "Что такое QA Lis",
        "link": "/getting-started/what-is"
      },
      {
        "text": "Установка",
        "link": "/getting-started/installation"
      },
      {
        "text": "Первая запись",
        "link": "/getting-started/first-recording"
      }
    ]
  },
  {
    "text": "Recorder",
    "collapsed": false,
    "items": [
      {
        "text": "Начало записи",
        "link": "/recorder/start"
      },
      {
        "text": "Панель",
        "link": "/recorder/panel"
      },
      {
        "text": "Пауза и продолжение",
        "link": "/recorder/pause"
      },
      {
        "text": "Завершение записи",
        "link": "/recorder/stop"
      },
      {
        "text": "Работа между вкладками",
        "link": "/recorder/tabs"
      },
      {
        "text": "Сохранённые отчёты",
        "link": "/recorder/draft"
      },
      {
        "text": "Наборы багов и тест-кейсов",
        "link": "/recorder/records"
      }
    ]
  },
  {
    "text": "Шаги",
    "collapsed": false,
    "items": [
      {
        "text": "Как формируются шаги",
        "link": "/steps/how-it-works"
      },
      {
        "text": "Просмотр шагов",
        "link": "/steps/view"
      },
      {
        "text": "Редактирование и порядок",
        "link": "/steps/edit"
      },
      {
        "text": "Удаление",
        "link": "/steps/delete"
      },
      {
        "text": "Поля ввода",
        "link": "/steps/inputs"
      }
    ]
  },
  {
    "text": "Отчёты",
    "collapsed": false,
    "items": [
      {
        "text": "Структура отчёта",
        "link": "/report/"
      },
      {
        "text": "Тест-кейс",
        "link": "/report/test-case"
      },
      {
        "text": "Заголовок",
        "link": "/report/title"
      },
      {
        "text": "Ожидаемый и фактический результат",
        "link": "/report/expected-actual"
      },
      {
        "text": "Окружение",
        "link": "/report/environment"
      },
      {
        "text": "Копирование отчёта",
        "link": "/report/copy"
      }
    ]
  },
  {
    "text": "Network и Console",
    "collapsed": false,
    "items": [
      {
        "text": "Что записывается",
        "link": "/network/"
      },
      {
        "text": "Работа с запросами",
        "link": "/network/requests"
      },
      {
        "text": "Ошибки и предупреждения Console",
        "link": "/network/console"
      }
    ]
  },
  {
    "text": "Настройки",
    "collapsed": false,
    "items": [
      {
        "text": "RU / EN",
        "link": "/settings/language"
      }
    ]
  },
  {
    "text": "Помощь",
    "collapsed": false,
    "items": [
      {
        "text": "Решение проблем",
        "link": "/help/troubleshooting"
      },
      {
        "text": "Recorder не запускается",
        "link": "/help/not-starting"
      },
      {
        "text": "Не записался шаг",
        "link": "/help/missing-step"
      },
      {
        "text": "Не отображается Network",
        "link": "/help/missing-network"
      },
      {
        "text": "Панель ведёт себя неправильно",
        "link": "/help/panel"
      },
      {
        "text": "Сообщить о проблеме",
        "link": "/help/report-a-bug"
      },
      {
        "text": "Предложить улучшение",
        "link": "/help/suggest-feature"
      }
    ]
  }
],
    outline: { label: 'На этой странице', level: [2, 3] },
    docFooter: { prev: 'Предыдущая страница', next: 'Следующая страница' },
    sidebarMenuLabel: 'Разделы',
    returnToTopLabel: 'Наверх',
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Включить светлую тему',
    darkModeSwitchTitle: 'Включить тёмную тему',
    skipToContentLabel: 'Перейти к содержимому',
    externalLinkIcon: true,
    notFound: {
      title: 'Страница не найдена',
      quote: 'Воспользуйтесь поиском или вернитесь к началу документации.',
      linkLabel: 'На главную',
      linkText: 'На главную'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск по документации' },
          modal: {
            displayDetails: 'Показать подробности',
            resetButtonTitle: 'Очистить поиск',
            backButtonTitle: 'Закрыть поиск',
            noResultsText: 'Ничего не найдено',
            footer: { selectText: 'выбрать', selectKeyAriaLabel: 'Enter', navigateText: 'перейти', navigateUpKeyAriaLabel: 'Стрелка вверх', navigateDownKeyAriaLabel: 'Стрелка вниз', closeText: 'закрыть', closeKeyAriaLabel: 'Escape' }
          }
        }
      }
    },
    footer: { message: 'Документация для ручных тестировщиков · <a href="https://t.me/testingqabug">Telegram-канал</a>' }
  }
});
