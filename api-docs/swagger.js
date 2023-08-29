import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import {welcomeRouteDocs} from "./welcome.docs.js"
import {contactRouteDocs} from "./contact.docs.js"



const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'Portfolio Api',
        description: 'Portfolio api configurations',
      },
      servers: [
        {
          url: 'http://localhost:5200',
          description: 'Development server',
        },
        {
          url: 'https://vast-plum-indri-tutu.cyclic.cloud/',
          description: 'Production server',
        },
      ],
      tags: [
        
        { name: 'Contact', description: 'Contact Routes' }
        
      ],
      components: {
        securitySchemes: {
          token: {
            type: 'apiKey',
            scheme: 'bearer',
           
          },
        },
      },
      paths: {...contactRouteDocs,...welcomeRouteDocs},
    },
    apis: ['../routes/**/*.js'],
  }

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) =>{
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
}

export default swaggerDocs;