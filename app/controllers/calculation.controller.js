import db from '../db/db.js';

class CalculationController {
    async getCalculations(req, __res) {
        const username = req.session.username;
        const calculationsData = await db.query(`
            SELECT *
            FROM calculations
            WHERE username = $1`, [username]
        );

        return calculationsData.rows;
    }
};

export default CalculationController;