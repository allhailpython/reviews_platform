Reviews Platform project with Django v4.2 and Next.js

BACKEND

#####################

Read pyproject.toml carefully.

#####################

SETTINGS

Settings are in core/backend/settings and core/backend/**init**.py.

1. Settings for local development (added to .gitignore) can be set in
   local/settings.dev.py (create dir 'local' and file 'settings.dev.py')

Example how local settings could be used in core/backend/settings/templates/settings.dev.py

2. Example settings for unit testing can be found in core/backend/settings/templates/settings.unittest.py
   Copy that file settings.unittest.py to dir 'local' and make adjustments if needed.

#####################

To run locally

poetry install --no-root

set up settings according to SETTINGS

create .env. Use .env.example as an example

make up-dev // start postgres in docker container

make runserver

#####################

FRONTEND

Node.js version check in package.json. Using Volta as node version manager.
