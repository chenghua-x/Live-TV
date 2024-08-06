From node:lts-slim

# Set the working directory in the container to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in package.json
RUN npm install

# Make port 32888 available to the world outside this container
EXPOSE 32888

# Run app.js when the container launches
CMD ["node", "server.js"]