module.exports = function () {
    require('./auth.route')(...arguments);
    require('./sub.route')(...arguments);
    require('./event.route')(...arguments);
    require('./product.route')(...arguments);
    require('./site.route')(...arguments);
    require('./user.route')(...arguments);
    require('./timetable.route')(...arguments);
}