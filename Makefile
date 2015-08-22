all:
	@echo "make composer"

composer:
	@curl -sS https://getcomposer.org/installer | php

npm:
	@npm install gulp
	@npm install

assets:
	@./node_modules/.bin/gulp

server:
	@php artisan serve
