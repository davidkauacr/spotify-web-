const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = 3001;

const uri = "mongodb+srv://bruno:mkxNHowF7WDWotef@cluster0.0bfuzzo.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErros: true,
  }
});

app.use(express.json());
app.use(cors());


app.get('/playlists', async (req, res) => {
    try {
        await client.connect();

        const playlistsCollection = client.db("spotify").collection("playlists");

        
        const playlists = await playlistsCollection.find().toArray();

        res.json(playlists);
    } finally {
        
        await client.close();
    }
});

app.get('/playlists/:id', async (req, res) => {
    try {
        const { id } = req.params;

        
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'ID de playlist inválido' });
        }

        await client.connect();

        const playlistsCollection = client.db("spotify").collection("playlists");

        
        const playlist = await playlistsCollection.findOne({ _id: new ObjectId(id) });

        if (playlist) {
            res.json(playlist);
        } else {
            res.status(404).json({ error: 'Playlist não encontrada' });
        }
    } finally {
        
        await client.close();
    }
});

app.post('/users', async (req, res) => {
    try {
        await client.connect();

        const usersCollection = client.db("spotify").collection("users");

        
        const newUser = req.body;
        await usersCollection.insertOne(newUser);

        
        res.json(newUser);
    } finally {
        
        await client.close();
    }
});

app.get('/users', async (req, res) => {
    try {
        await client.connect();

        const usersCollection = client.db("spotify").collection("users");

        
        const users = await usersCollection.find().toArray();

        const { email } = req.query;
        const filteredUsers = email ? users.filter((u) => u.email === email) : users;

        res.json(filteredUsers);
    } finally {
        
        await client.close();
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        await client.connect();

        const usersCollection = client.db("spotify").collection("users");

        const { id } = req.params;
        const updatedUser = req.body;

        
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'ID de usuário inválido' });
        }

        const filter = { _id: new ObjectId(id) };
        const update = { $set: updatedUser };

        
        const result = await usersCollection.updateOne(filter, update);

        if (result.matchedCount > 0) {
            res.json({ message: 'Usuário atualizado com sucesso' });
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } finally {
        
        await client.close();
    }
});

app.post('/playlists', async (req, res) => {
    try {
        await client.connect();

        const playlistsCollection = client.db("spotify").collection("playlists");

        
        const newPlaylist = req.body;
        await playlistsCollection.insertOne(newPlaylist);

        
        res.json(newPlaylist);
    } finally {
        
        await client.close();
    }
});

app.get('/songs', async (req, res) => {
    try {
        const { nome } = req.query;

        await client.connect();

        const songsCollection = client.db("spotify").collection("songs");

        
        const songsCursor = await songsCollection.find();
        const songs = await songsCursor.toArray();

        
        const filteredSongs = nome ? songs.filter((s) => s.nome === nome) : songs;

        res.json(filteredSongs);
    } finally {
        
        await client.close();
    }
});

app.put('/playlists/:id', async (req, res) => {
    try {
        await client.connect();

        const playlistsCollection = client.db("spotify").collection("playlists");

        const { id } = req.params;
        const updatedPlaylist = req.body;

        
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'ID de playlist inválido' });
        }

        const filter = { _id: new ObjectId(id) };
        const update = { $set: updatedPlaylist };

        
        const result = await playlistsCollection.updateOne(filter, update);

        if (result.matchedCount > 0) {
            res.json({ message: 'Playlist atualizada com sucesso' });
        } else {
            res.status(404).json({ error: 'Playlist não encontrada' });
        }
    } finally {
        
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});