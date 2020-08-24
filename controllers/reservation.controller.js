const models = require('../models');
const Reservation = models.Reservation;

class ReservationController {

    static createReservation(date, start_time, end_time, idService, idUser){
        const reservation = Reservation.create({
            date:date,
            start_time: start_time,
            end_time: end_time,
            ServiceId:idService,
            UserId:idUser
        });
        return reservation;
    }

    static selectReservationById(id){
        return Reservation.findOne({
            where: {
                id: id
            }
        });
    }

    static selectAllReservationByUser(idUser){
        return Reservation.findAll({
            where: {
                UserId: idUser
            }
        })
    }

    static updateReservation(id, date, start_time, end_time){
        return Reservation.update({
            date:date,
            start_time:start_time,
            end_time:end_time
        }, {
            where: {
                id:id
            }
        });
    }

    static async deleteReservation(id) {
        await Reservation.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = ReservationController;