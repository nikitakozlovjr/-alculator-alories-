import db from '../db/db.js';

class PostsController {
    async createPost(req, res) {
        const author = req.session.username;
        const { title, description, body } = req.body;
        
        const newPostData = await db.query(`
            INSERT INTO users_posts(title, description, body, author)
            VALUES ($1, $2, $3, $4)
            RETURNING *`, [title, description, body, author]
        );

        return newPostData.rows[0];
    }
}

export default PostsController;