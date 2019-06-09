const SwaggerRouter = require('koa-swagger-decorator');
 
const router = new SwaggerRouter()
 

router.swagger({
  title: '千家智哲demo后端',
  description: 'API DOC',
  version: '1.0.0',
  swaggerHtmlEndpoint: '/swagger-html',
  swaggerJsonEndpoint: '/swagger-json',
  swaggerOptions: {
    securityDefinitions: {
      api_key: {
        type: 'apiKey',
        in: 'header',
        name: 'api_key',
      },
    },
  },
  swaggerConfiguration: {
    display: {
      defaultModelsExpandDepth: 4, 
      defaultModelExpandDepth: 3, 
      docExpansion: 'list', 
      defaultModelRendering: 'model' 
    }
  }
})
router.mapDir(_path.resolve(__dirname), {})

module.exports = router;