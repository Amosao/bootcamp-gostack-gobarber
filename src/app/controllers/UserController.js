import User from '../models/User';

class UserController {
  // GET ALL USERS DATA
  async index(req, res) {
    return res.json();
  }

  // GET 1 USER DATA
  async show(req, res) {
    return res.json();
  }

  // CREATE USER
  async store(req, res) {
    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);
    return res.json({ id, name, email, provider });
  }

  // UPDATE USER DATA
  async update(req, res) {
    return res.json({ message: 'nha' });
  }

  // DEACTIVATE USER
  async delete(req, res) {
    return res.json();
  }
}

export default new UserController();
