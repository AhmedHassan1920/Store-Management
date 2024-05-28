import connection from '../../../db/connectionDB.js';



//////////////////////////////// -- GET PRODUCT -- ////////////////////////////////
export const getProducts = (req,res,next)=>{
    const query = `select * from products`

    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(400).json({msg:"query Error !"},err)
        }
        return res.status(201).json({msg:"Done",result})
    })
}


//////////////////////////////// -- ADD PRODUCT -- ////////////////////////////////
export const addProduct = (req,res,next)=>{
    const {productName,productPrice,productDesc,productCateg} = req.body
    const query = `insert into products (productName,productPrice,productDesc,productCateg) values ("${productName}","${productPrice}","${productDesc}","${productCateg}")`

    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(400).json({msg:"query Error !"},err)
        }
        else if(!result.affectedRows)
        {
            return res.status(400).json({msg:"Failed To Add Product !"})
        }
        return res.status(201).json({msg:"Product Added !"})
    })
}

//////////////////////////////// -- UPDATE PRODUCT -- ////////////////////////////////
export const updateProduct = (req,res,next)=>{
    const {productName,productPrice,productDesc,productCateg ,id} = req.body
    const query = `update products set productName = "${productName}" , productPrice = "${productPrice}",productDesc="${productDesc}",productCateg="${productCateg}" where id="${id}"`

    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(400).json({msg:"query Error !"},err)
        }
        else if(!result.affectedRows)
        {
            return res.status(400).json({msg:"Failed To Update Product !"})
        }
        return res.status(201).json({msg:"Product Updated !"})
    })
}


//////////////////////////////// -- DELETE PRODUCT -- ////////////////////////////////
export const deleteProduct = (req,res,next)=>{
    const {id} = req.body
    const query = `delete from products where id="${id}"`

    connection.execute(query,(err,result)=>{
        if(err){
            return res.status(400).json({msg:"query Error !"},err)
        }
        else if(!result.affectedRows)
        {
            return res.status(400).json({msg:"Failed To Delete Product !"})
        }
        return res.status(201).json({msg:"Product Deleted !"})
    })
}
