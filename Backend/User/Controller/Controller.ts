export const getAll=async(req: any,res: any)=>{
    try {
        return res.status(200).json({message:"USER ROUTE"})  
    } catch (error) {
        return res.status(500).json({message:"Error"});        
    }
};