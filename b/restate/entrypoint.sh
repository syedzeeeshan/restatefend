#!/bin/sh

# Wait for the database to be ready
echo "Waiting for postgres..."
while ! nc -z $POSTGRES_HOST 5432; do
  sleep 0.1
done
echo "PostgreSQL started"

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate

# Start Gunicorn
echo "Starting Gunicorn..."
gunicorn restate.wsgi:application --bind 0.0.0.0:8000
