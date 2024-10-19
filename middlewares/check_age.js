
const checkAge = (req, res, next) => {
    const employees = Array.isArray(req.body) ? req.body : [req.body];

    const kid = employees.some(employee => employee.age < 18);

    if (kid) {
        return res.status(403).json({
            message: 'all employees must be 18 years as minimum'
        });
    }

    next();
};

export default checkAge;
