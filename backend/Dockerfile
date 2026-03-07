# Use PHP 8.2 with Apache
FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Enable mysqli and PDO extensions for MySQL/MariaDB
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy PHP backend files into container
COPY . .

# Expose port 80 for Apache
EXPOSE 80