import Login from '../models/login-model.js';

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    // console.log(name, email, password );
    
    if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });

    const existing = await Login.findOne({ email });
    if (existing) return res.status(400).json({ error: 'User already exists' });

    const user = new Login({ name, email, password });
    await user.save();

    const token = user.generateAuthToken();
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Missing fields' });

    const user = await Login.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await user.comparePassword(password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = user.generateAuthToken();
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default { register, login };
