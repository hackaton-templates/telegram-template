# Чатбот услуги бронирования талонов "Почты Донбасса"

Чатбот позволяет клиенту удалённо забронировать дату и время для посещения отделения почты.
Для первого использования клиенту необходимо посетить отделение почты, чтобы зарегистрироваться в системе.

Основной стэк: `telegraf`, `nodejs`, `typescript`

## Развертывание

### Docker

Приложение поддерживает развертывание в среде Docker Compose

### Ручное развертывание

1. Установить необходимые библиотеки

   ```bash
   npm ci
   ```

2. Определить переменные среды (см. .env.example)
3. Запустить проект

   ```bash
   npm run start
   ```

### Переменные среды

- `BOT_TOKEN` - токен бота
- `API_URL` - API-ручка сервера