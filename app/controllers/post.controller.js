import db from '../db/db.js';

class PostsController {
    async createPost(req, __res) {
        const author = req.session.username;
        const { title, description, body } = req.body;
        
        const newPostData = await db.query(`
            INSERT INTO users_posts(title, description, body, author)
            VALUES ($1, $2, $3, $4)
            RETURNING *`, [title, description, body, author]
        );

        return newPostData.rows[0];
    }

    async getPosts(__req, __res) {
        const postsData = await db.query(`SELECT * FROM users_posts`);
        return postsData.rows;
    };

    async getPost(req, __res) {
        const {id} = req.params;
        const postData = await db.query(`
            SELECT *
            FROM users_posts
            WHERE id = $1`, [id]
        );

        return postData.rows[0];
    };
}

export default PostsController;