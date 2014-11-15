# README

node or nvm is required.

    $ fig up
    $ make open

**NOTE**: Your 1st `fig up` may fail because of timing of migration.

    sentry2_1  | Error in migration: djcelery:0004_v30_changes
    figsentryha_sentry2_1 exited with code 1
    Gracefully stopping... (press Ctrl+C again to force)
    Stopping figsentryha_haproxy_1...
    Stopping figsentryha_sentry1_1...

Then please retry `fig up`.

Create a new team and project on the sentry.
And edit main.js about initialization of client.

    $ . .env
    $ make run

