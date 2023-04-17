import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const secret = 'mysecretkey'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Invalid request method' })
  }

  const { email, password } = req.body

  // Verificar se o usuário existe no banco de dados
  const user = await getUserByEmail(email)

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  // Verificar se a senha é válida
  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  // Gerar o token de autenticação
  const token = jwt.sign({ email, role: user.role }, secret, { expiresIn: '1h' })

  res.status(200).json({ token })
}

async function getUserByEmail(email: string) {
  // Implemente a busca do usuário no banco de dados
  // e retorne um objeto com as informações do usuário,
  // incluindo a senha criptografada e o tipo de usuário (cliente ou gestor)
}