const models = require('../models');
const Invitation = models.Invitation;

class InvitationController {

    static createInvitation(id_user, id_site) {
        return Invitation.create({
            SiteId: id_site,
            UserId: id_user
        });
    }

    static selectInvitationById(id){
        return Invitation.findOne({
            where: {
                id: id
            }
        });
    }

    static selectAllInvitationByUser(id_user){
        return Invitation.findAll({
            where: {
                UserId: id_user
            }
        });
    }

    static async deleteInvitation(id) {
        await Invitation.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = InvitationController;