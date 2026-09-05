# Bug Report Recorder Docs

Самостоятельный сайт на VitePress. Исходники расширения и его зависимости не требуются. Документация на русском, со светлой и тёмной темами и локальным поиском.

Используется стабильный VitePress 1.6.4; Vite закреплён через overrides на исправленной версии 6.4.3. Совместимость проверена production-сборкой. При обновлении зависимостей повторите сборку и проверку поиска.

## Локальный запуск

Требуется Node.js 22 или новее. Откройте терминал в этой папке:

```sh
npm install
npm run docs:dev
```

Откройте адрес, показанный в терминале (обычно http://localhost:5173).
В PowerShell, если запуск npm.ps1 запрещён, используйте `npm.cmd` вместо `npm`.

## Production build

```sh
npm run docs:build
```

Результат: `docs/.vitepress/dist`. Сборка проверяет внутренние Markdown-ссылки.

## Preview

```sh
npm run docs:preview
```

Откройте выведенный локальный адрес (обычно http://localhost:4173).

## Публикация через Vercel

1. Создайте GitHub-репозиторий `bug-report-recorder-docs`.
2. Загрузите **содержимое этой папки** в корень репозитория, включая скрытые файлы, package-lock.json и docs/.vitepress. Не загружайте node_modules, cache и dist.
3. В Vercel выберите Import Git Repository.
4. Выберите репозиторий.
5. Root Directory: корень репозитория. Framework Preset: Other.
6. Build Command: `npm run docs:build`.
7. Output Directory: `docs/.vitepress/dist`.
8. Install Command: `npm install`.
9. Нажмите Deploy.

Эти параметры сборки также указаны в vercel.json. Если импортируется весь репозиторий расширения, установите Root Directory в `bug-report-recorder-docs`; остальные значения сохраняются. Предпочтителен отдельный репозиторий.

## Структура

```text
package.json
package-lock.json
vercel.json
README.md
CONTENT_REVIEW.md
docs/
  index.md
  .vitepress/
    config.mts
    theme/index.js
    theme/custom.css
  getting-started/
  recorder/
  steps/
  report/
  network/
  settings/
  help/
  public/
    favicon.png
    images/
      getting-started/
      recorder/
      steps/
      report/
      network/
      settings/
      help/
```

## Страницы

### Начало работы

- [Что такое Bug Report Recorder](docs/getting-started/what-is.md)
- [Установка](docs/getting-started/installation.md)
- [Первая запись](docs/getting-started/first-recording.md)

### Recorder

- [Начало записи](docs/recorder/start.md)
- [Панель](docs/recorder/panel.md)
- [Пауза и продолжение](docs/recorder/pause.md)
- [Завершение записи](docs/recorder/stop.md)
- [Работа между вкладками](docs/recorder/tabs.md)
- [Сохранённый черновик](docs/recorder/draft.md)

### Шаги

- [Как формируются шаги](docs/steps/how-it-works.md)
- [Просмотр шагов](docs/steps/view.md)
- [Редактирование](docs/steps/edit.md)
- [Удаление](docs/steps/delete.md)
- [Поля ввода](docs/steps/inputs.md)

### Баг-репорт

- [Структура отчёта](docs/report/index.md)
- [Заголовок](docs/report/title.md)
- [Ожидаемый и фактический результат](docs/report/expected-actual.md)
- [Окружение](docs/report/environment.md)
- [Копирование отчёта](docs/report/copy.md)

### Network

- [Что записывается](docs/network/index.md)
- [Работа с запросами](docs/network/requests.md)

### Настройки

- [RU / EN](docs/settings/language.md)

### Помощь

- [Решение проблем](docs/help/troubleshooting.md)
- [Recorder не запускается](docs/help/not-starting.md)
- [Не записался шаг](docs/help/missing-step.md)
- [Не отображается Network](docs/help/missing-network.md)
- [Панель ведёт себя неправильно](docs/help/panel.md)
- [Сообщить о проблеме](docs/help/report-a-bug.md)
- [Предложить улучшение](docs/help/suggest-feature.md)

Главная: [docs/index.md](docs/index.md).

## Редактирование и новые языки

Тексты находятся в Markdown-файлах. Добавляйте новые страницы в соответствующую папку и ссылки на них в sidebar в `docs/.vitepress/config.mts`.

Русская версия настроена через locale `root`. Для английской версии позже добавьте locale `en`, страницы в `docs/en/` и отдельные nav/sidebar/search translations. Сейчас пустых английских страниц и переключателя языка документации нет.

Версия проверенной реализации хранится один раз: `extensionVersion` в `docs/.vitepress/config.mts`. Не считайте её автоматически текущей версией Chrome Web Store.

Изображения лежат в **docs/public/images/**: VitePress копирует public из корня контента docs. Ссылка в Markdown: `![Описание](/images/recorder/panel.png)`. Используйте только реальные скриншоты с тестовыми данными. Favicon взят из существующей иконки расширения.

## Что проверить перед публикацией

- Откройте главную страницу и статью по прямой ссылке, обновите страницу.
- Проверьте навигацию, светлую и тёмную тему, меню на узком экране.
- В поиске попробуйте: Network, шаги, запись, ОР, ФР, заголовок, вкладки, пароль, панель, установка, Telegram.
- Проверьте переходы в Chrome Web Store и Telegram.
- Добавьте реальные скриншоты в местах `TODO: добавить скриншот`.
- Сверьте статьи с версией расширения, которую публикуете.

Детали проверки содержимого и оставшиеся уточнения: [CONTENT_REVIEW.md](CONTENT_REVIEW.md). Результаты технической проверки: [VALIDATION.md](VALIDATION.md). Снимки готового сайта: [главная](previews/home-desktop.png), [мобильная версия](previews/home-mobile.png).

Настройка основана на [руководстве VitePress](https://vitepress.dev/guide/getting-started), [локальном поиске](https://vitepress.dev/reference/default-theme-search) и [публикации](https://vitepress.dev/guide/deploy).
