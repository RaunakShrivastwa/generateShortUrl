import Url from "../model/Shortener.js";

export default class urlController {

// for the Short Url nad Save In DB
    sortAndCreate = async (req, res) => {
        const  originalUrl  = req.body.originalUrl;
        try {
            let UrlDaat = await Url.findOne({ originalUrl: originalUrl });
            console.log(UrlDaat);
            if (UrlDaat) {
                return res.json({ Warning: 'This Url Already Here' })
            }
            const shortUrl = this.generateShortUrl()
            UrlDaat = new Url({ originalUrl, shortUrl });
            await UrlDaat.save();
            return res.json({ originalUrl, shortUrl });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };


    getAllUrl = async (req,res)=>{
        try{
            return res.json(await Url.find({}))
        }catch(err){
            return console.log("There is error with Finding All Url",err);
        }
    }

    // Getting Original Url By Short Url
    getOriginal = async (req, res) => {
        try {
            const Original = await Url.findOne({ shortUrl: req.params.shortUrl });
            if (!Original) {
                return res.json({ Error: "Invalide Url" })
            }
            return res.json({ OriginalUrl: Original.originalUrl })
        } catch (err) {
            return console.log("There is Error ", err);
        }
    };


    // Generate Short Url
    generateShortUrl = (req, res) => {
        const length = 6;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let shortUrl = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            shortUrl += characters.charAt(randomIndex);
        }

        return shortUrl;
    }
}