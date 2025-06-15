import {pool} from '../../DB/config.js';

export const getAllPostsModel = async () => {
    const query = 'select * from posts';
    const response = await pool.query(query);
    return response.rows;
}

export const createPostModel = async (titulo, img, descripcion) => {
    const query = {
        text: 'insert into posts (titulo, img, descripcion, likes) values ($1, $2, $3, 0) returning *',
        values: [titulo, img, descripcion]
    }
    const response = await pool.query(query);
    console.log("row solo: ",response.rows);
    console.log("row solo con [0]: ",response.rows[0]);
    return response.rows;
}
