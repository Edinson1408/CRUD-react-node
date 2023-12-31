import BlogModel from "../models/BlogModel.js";



/*metodos para el crud

//*mostar todos los reqgistros*/

export const getAllBlogs= async (req,res)=>{
    try {
        const blogs=await BlogModel.findAll();
        res.json(blogs)
    } catch (error) {
        res.json({message:error.message})
    }
}
//*mostrar solo un registro*/
export const getBlog =async (req,res)=>{
        try {
            const blog= await BlogModel.findAll({
                where:{id:req.params.id}
            })
            res.json(blog[0])
        } catch (error) {
            res.json({message:error.message})
        }
}

//**Crear un regisro */
export const createBlog = async (req,res)=>{
    try {
        await BlogModel.create(req.body);
        res.json({message:"Registro creado correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//**Update Blog*/
export const updateBlog=async (req,res)=>{
    try {
        await BlogModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({message:"Registro Actualizado Correctamente"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//**Delete blog */

export const deleteBlog=async (req, res)=>{
        try {
            await BlogModel.destroy({
                where:{id:req.params.id}
            })
            res.json({message:"Registro eliminado"})
        } catch (error) {
            
        }
}

