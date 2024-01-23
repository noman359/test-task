# Use an official Redis image as the base image
FROM redis:latest

# Expose the default Redis port
EXPOSE 6379

# Set the working directory to /data
# WORKDIR /data

# Specify the volume to persist data
# VOLUME ["/data"]

# Start Redis server
CMD ["redis-server"]
