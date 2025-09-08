import {client, getBooks, getPopularAuthors} from '../models/db.js'

const indexController = async  (req, res)=>{
   const books =await getBooks(client)
    const authors = await getPopularAuthors(client)
    res.json({books, authors});
}



export {indexController}