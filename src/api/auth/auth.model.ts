import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  accessFrom: z.string(),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const logoutSchema = z.object({});

export type LogoutInput = z.infer<typeof logoutSchema>;

export const geUserSchema = z.object({
  uuid: z.string(),
});

export interface Credentials {
  provided: {
    accessToken: string | null;
  };
}
