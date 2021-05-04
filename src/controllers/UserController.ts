import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Felipe', email: 'felipe@gmail.com'}
];

export default {
    async index(req : Request, res: Response) {
        return res.json(users);
    },
    async create(req : Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendEmail(
            { 
                to:{ name: req.body.to.name, email: req.body.to.email},
                message: { subject: req.body.message.subject, body:req.body.message.body}
            }
        );

       return res.send();
    }
}