all:
	@echo "make composer"

composer:
	@curl -sS https://getcomposer.org/installer | php

vendor:
	@php composer.phar install

npm:
	@npm install

assets:
	@./node_modules/.bin/gulp

watch:
	@./node_modules/.bin/gulp watch

server:
	@php artisan serve

sqlite:
	touch storage/database.sqlite

migrate: sqlite
	php artisan migrate
	php artisan db:seed --class=CategoryTableSeeder

migrate-refresh:
	php artisan migrate:refresh --seeder=CategoryTableSeeder
