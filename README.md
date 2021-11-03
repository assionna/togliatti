## deploy
- use laravel: 8.0, vue: 2.6.12
- git clone https://github.com/assionna/togliatti
- CREATE database togliatti;
- GRANT ALL PRIVILEGES ON togliatti.* to '<user_name>'@'localhost';
- cd ~/../togliatti
- composer install
- rename & change .env.example -> .env
- npm i
- php artisan migrate
- php artisan serve

## backend route
- http://127.0.0.1:8000/checks

## frontend route
- http://127.0.0.1:8000
