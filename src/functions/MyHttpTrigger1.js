const { app } = require('@azure/functions');

app.http('MyHttpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Modified: Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `updated Hello, ${name}!` };
    }
});
