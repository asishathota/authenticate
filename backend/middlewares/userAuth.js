import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const token = req.cookies.refreshToken;
    
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.body = req.body || {};
        
        if(decoded.userId){
            req.body.userId = decoded.userId;
            next();
        }
        else{
            return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
        }
    } catch (error) {
            console.log("error in userAuth middleware:", error);
        return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }
};

export default userAuth;