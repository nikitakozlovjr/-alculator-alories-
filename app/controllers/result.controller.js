import db from '../db/db.js';

class ResultController {
    async saveResult(req, res) {
        const { normal, low, more, name } = req.query;
        const username = req.session.username;
        const newCalculation = await db.query(`
            INSERT INTO calculations (name, username, normal, low, more)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`, [name, username, parseInt(normal), parseInt(low), parseInt(more)]
        );

        return newCalculation.rows[0];
    }
};

export default ResultController;