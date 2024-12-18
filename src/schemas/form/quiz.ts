import {z} from 'zod';


export const quizCreationSchema = z.object({
    topic: z.string().min(4, {message: "Topics must be at least 4 charecters long"}).max(50),
    type: z.enum(["mcq", "open_ended"]),
    amount: z.number().min(1).max(10)
})

export const checkAnswerSchema = z.object({
    questionId: z.string(),
    userAnswer: z.string(),
})