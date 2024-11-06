FROM alpine
# when open os go to app
WORKDIR /app

# copy main.cpp
COPY main.cpp .

# Install g++ and compile main.cpp
RUN apk add --no-cache g++ && g++ -o app main.cpp

# Command to run the compiled app
CMD ["./app"]