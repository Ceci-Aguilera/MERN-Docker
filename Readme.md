# Node Express React  MongoDB - docker



There are 3 images on use for development: the MongoDB image, the Node+Express Image, and the React Image. For production, the Node+Express Image and the React Image are merged into the Website Image (Node + Express + React).

### Content Table

- [Installation](#installation)
- [Structure and Folders](#struct_folders)
- [Environment Variables](#envars)
- [Docker-compose Files](#docker_compose_files)
- [Development and Production Modes](#dev_prod_mod)



<a name="installation"></a>

###  Installation

1. Clone the repo from GitHub and start containers:

   ```bash
   git clone <repo>
   cd <repo>
   cp <repo>/server simple_env_conf.env .env
   docker-compose up --build
   ```
   

<a name="struct_folders"></a>

###  Structure and Folders

- The __server__ folder contains the __Node.js and Express.js__ server and the Dockerfile for development.

- The __client__ folder contains the __React__ application and the Dockerfile for development.

  

<a name="envars"></a>

###  Environment Variables

- The __server/.simple_env_conf.env__ file has the __MongoDB__. 

  

<a name="docker_compose_files"></a>

### Docker-Compose Files

The docker-compose.x.yml indicates that it is the file for the environment x. The current one in use is production (prod). The Dockerfile in the root directory is only used in production while the Dockerfiles from the __server__ and __client__ folders are only used for development.



<a name="dev_prod_mod"></a>

### Development and Production Modes

For development, comment the lines marked as comments in the __server/server.js__ file. Then, copy the __docker-compose.dev.yml__ to the __docker-compose.yml__ file. 

The backend server should be running on port __8080__ while the frontend client is on port __3000__.

---

For the production mode, the website is on port __8080__.
