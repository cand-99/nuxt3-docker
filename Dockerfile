# Use the official Node.js v16 image as the base
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Generate the Prisma client
RUN npx prisma generate

# Apply database migrations
RUN chmod 400 keyfile
# RUN npx prisma db push

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
