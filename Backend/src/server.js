const express = require('express')
const app = express();

const articleInfo = {
    "travel-work":{ 
    comments: [],
    },
    "travel-Photo":{ 
        comments: [],
        },
        "travel-beach":{ 
            comments: [],
            },
}

app.use(express.json())

app.post("/api/articles/:name/add-comments", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    articleInfo[articleName].comments.push({ username, text});
    res.status(200).send(articleInfo[articleName])
})

app.listen(3000, () => console.log("Server 3000"))