export default function (req, res, next) {
  if (req.user.role !== 'Admin')
    return res.status(403).send('forbidden access');
  next();
}
