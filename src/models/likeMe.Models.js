import { pool} from '../config/db.js';

export const getAllPosts = async () => {
    const query = 'SELECT * FROM posts';
    const response = await pool.query(query);
    return response.rows;
}

export const createPost = async (post) => {
    const query = {
        text: 'insert into posts (titulo, img, descripcion, likes) values ($1, $2, $3, 0) returning *',
        values: [post.titulo, post.img, post.descripcion]
    }
    const response = await pool.query(query);
    console.log("row solo: ",response.rows);
    console.log("row solo con [0]: ",response.rows[0]);
    return response.rows;
}
