import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.send([
        {
            'id': "1",
            'description': "produto"
        },
        {
            'id': "2",
            'description': "produto x"
        },
        {
            'id': "3",
            'description': "produto z"
        }
    ]);
});
app.listen(3333);
