require('dotenv').config();
const { Sequelize } = require("sequelize")
const path = require("path")
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {

    seed1: (req , res) => {
        sequelize.query(`
        drop table if exists
        articles;

        create table articles

        (
            article_id serial primary key,
            date varchar(30),
            content varchar(100),
            imagelink varchar(50)
        );
            insert into articles (date, content, imagelink)
            values ('July 2019', 'Pnk Flamingo releases debut album.', 'https://i.postimg.cc/gkhDhmyq/blacksanta.png');
        

        `)
        .then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    
    seed: (req , res) => {
        sequelize.query(`
        drop table if exists
        messages;

        create table messages

        (
            message_id serial primary key,
            email varchar(30),
            message varchar(50)
        );
            insert into messages (email, message)
            values ('test', 'test');
        

        `)
        .then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.js'))
    },

    sendMessage: (req, res) => {
        let {email, message} = req.body
        sequelize.query(`
        insert into messages (email, message)
        values ('${email}', '${message}')
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err)) 
    },

    getNews: (req, res) => {
        sequelize.query(`
        select * 
        FROM articles
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }

}