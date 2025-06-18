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

export const addLikeModel = async (id) => {
    const query = {
        text: 'update posts set likes = likes + 1 where id = $1 returning *',
        values: [id]
    }
    const response = await pool.query(query);
    if (response.rows.length === 0) {
        throw new Error('Post not found');
    }else {
        return response.rows[0];
    }
}

export const deletePostModel = async (id) => {
    const query = {
        text: 'delete from posts where id = $1 returning *',
        values: [id]
    }
    const response = await pool.query(query);
    return response.rows[0];
}