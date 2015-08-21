all:
	@echo "make composer"

composer:
	@curl -sS https://getcomposer.org/installer | php

assets:
	npm install gulp
	npm install

	./node_modules/.bin/gulp

server:
	@php artisan serve
