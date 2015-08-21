all:
	@echo "make composer"

composer:
	@curl -sS https://getcomposer.org/installer | php

server:
	@php artisan serve
