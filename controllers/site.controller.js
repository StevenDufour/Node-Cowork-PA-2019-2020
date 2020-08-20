const models = require('../models');
const Site = models.Site;

class SiteController {

    static createSite(name, description) {
        return Site.create({
            name,
            description
        });
    }

    static selectSiteById(id){
        return Site.findOne({
            where: {
                id: id
            }
        });
    }

    static selectAllSite(){
        return Site.findAll();
    }

    static updateSite(id, name, description){
        return Site.update({
            name:name,
            description:description
        }, {
            where: {
                id:id
            }
        });
    }

    static async deleteSite(id) {
        await Site.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = SiteController;