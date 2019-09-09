const express = require('express');
const router = express.Router();
const Article = require('../models/article')

const faker = require('faker');

router.get('/create', async function (req, res) {
    for (let i = 0; i < 100; i++){
        await Article.create({
            title: faker.name.title(),
            imageUrl: faker.image.imageUrl(),
            description: faker.lorem.paragraph()
        })
    }
    console.log(faker.name.title())
    console.log(faker.image.imageUrl())
    console.log(faker.lorem.paragraph())
    res.send('create')
});

router.get('/articles', function (req, res) {

});

module.exports = router;