all:
	@echo "make composer"

composer:
	@curl -sS https://getcomposer.org/installer | php

vendor:
	@php composer.phar install

npm:
	@npm install gulp
	@npm install

assets:
	@./node_modules/.bin/gulp

watch:
	@./node_modules/.bin/gulp watch

server:
	@php artisan serve
