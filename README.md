# TEDI Bear (LinkedIn-Type Web App)

This assignment contains a full-stack application that simulates a LinkedIn environment.

The application contains 2 types of users, normal access users that can be created by registering during runtime and admin access users that are created programmatically at the initialization of the app.

To build, you need to have MYSQL service running and maven installed. Project requires Java 8, JDK 8 and the environment variable JAVA_HOME to be pointing to the jdk folder. Port, name and credentials for database can be found in application.properties.

If you decide to keep the default database settings, you can initialize it by using the 3 following commands:
```
mysql -u root -ptest
```
```
CREATE DATABASE tedidb
```
```
USE tedidb
```

Build server using:


  ```
  mvn clean install
  ```

inside the tedi_server folder. Run the server using 

  ```
  mvn spring-boot:run
  ```

in the same folder path and leave the terminal opened.

For the front-end you need to have Python v3.7.0 installed and Chrome v68.0.3440 or later.
Open a new terminal window and navigate to the front-end folder and run:

  ```
  python -m http.server <port_number> (here <port_number> will be 8001)
  ```

and leave the terminal opened. Then open your Chrome browser, navigate to

  ```
  https://localhost:8443
  ```

choose advanced settings and allow the browser to access the page then navigate to

  ```
  http://localhost:<port_number> (here http://localhost:8001)
  ```

and you will see the platform's welcome/login page.

Architecture-wise, the server has controller classes which contain the endpoints and state the i/o models for each of them. Most of the logic is propagated from the controllers to the service layer. Communication with the database happens through repository interfaces and entity classes. Utilities package contains helping static functions for our application.

Front-end has been implemented using HTML, CSS, Bootstrap v4.1.3, AngularJS v1.7.2 and jQuery v3.3.1 and some other modules all included in the bower_components folder. Architecture-wise, the platfrom is running a main angular app which loads the different pages and tabs as routes. Each route has its own url, HTML file and angular controller which are being loaded on top of the existing html, so there is no need for the whole html to be reloaded. There is also an angular service which contains all the necessary functions for making requests to the server, used by the controllers.
