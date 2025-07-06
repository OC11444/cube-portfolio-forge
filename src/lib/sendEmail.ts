import emailjs from "@emailjs/browser";

export async function sendEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID!,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
    {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
  );
}
