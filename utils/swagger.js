import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDoc = YAML.load('./docs/swagger.yaml');
const docsUrl = '/api/v1/docs';

export function swaggerDocs(app, port) {
  // Swagger pages
  app.use(docsUrl, swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  // Docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDoc);
  });
  console.log(`Docs available at http://localhost:${port}${docsUrl}`);
}
