# Stage 1: Build the React frontend
FROM node:20-slim AS frontend-builder

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .
RUN npm run build

# Stage 2: Setup the Python backend
FROM python:3.11-slim

WORKDIR /app

# Copy python dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend source code
COPY backend/ ./

# Copy the built frontend static files to the backend's static directory
COPY --from=frontend-builder /app/frontend/dist ./static

# Cloud Run expects the app to listen on port 8080 (or the port specified by the PORT environment variable)
ENV PORT=8080
EXPOSE $PORT

# Command to run the application, using the $PORT environment variable
CMD exec uvicorn main:app --host 0.0.0.0 --port ${PORT:-8080}
