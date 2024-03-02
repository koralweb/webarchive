const mongoose = require('mongoose')
const Domains = require('../models/domains')

const url = `mongodb+srv://fortavey:CaHaLviff6_@cluster0.nqtyfzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

async function start() {
    try {
        await mongoose.connect(url)
    } catch (e) {
        console.log(e)
    }
}

start()

class SiteController {
    async fullSiteList(req, res) {
        let {bigInput} = req.body
        const resultArr = []
        const fullSiteList = bigInput.split(' ')
        let blackListArr = await Domains.find()
        blackListArr = blackListArr.map(el => el.title)

        fullSiteList.forEach(site => {
            if (!blackListArr.includes(site)) {
                resultArr.push(site)
            }
        })
        res.json(resultArr)
    }

    async deleteSite(req, res) {
        const domain = new Domains({
            title: req.body.site
        })

        await domain.save()
        res.json({res: true})
    }
}

module.exports = new SiteController()
