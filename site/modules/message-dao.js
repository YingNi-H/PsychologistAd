const SQL = require("sql-template-strings");
const dbPromise = require("./database.js");


// Create new message
async function createMessage(message) {
    const db = await dbPromise;

    const result = await db.run(SQL`
        insert into messages (name, phone, email, introduction, timestamp)
        values(${message.name}, ${message.phone}, ${message.email},${message.introduction}, datetime('now'))`);

    // Get the auto-generated ID value, and assign it back to the article object.
    message.id = result.lastID;
    console.log(`message id = ${message.id}`);
}




// Retrieve all messages
async function retrieveAllMessages() {
    const db = await dbPromise;

    const allMessages = await db.all(SQL`

        select a.timestamp as 'timestamp', a.introduction as 'introduction', a.name as 'name', a.phone as 'phone', a.email as 'email', a.id as 'id'
        from messages a
        order by a.timestamp desc`);

    return allMessages;
}

// Create new article
async function createArticle(article) {
    const db = await dbPromise;

    const result = await db.run(SQL`
        insert into articles (title, image, content, timestamp)
        values(${article.title}, ${article.image}, ${article.content},datetime('now'))`);

    // Get the auto-generated ID value, and assign it back to the article object.
    article.id = result.lastID;
    console.log(`article id = ${article.id}`);
}




// Retrieve all articles
async function retrieveAllArticles() {
    const db = await dbPromise;

    const allArticles = await db.all(SQL`

        select a.timestamp as 'timestamp', a.content as 'content', a.title as 'title', a.image as 'image', a.id as 'id'
        from articles a
        order by a.timestamp desc`);

    return allArticles;
}


// Export functions.
module.exports = {
    createMessage,
    retrieveAllMessages,
    createArticle,
    retrieveAllArticles
    
};