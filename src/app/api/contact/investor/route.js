import { Resend } from "resend";

export async function POST(req) {
    try {
        const body = await req.json();

        const {
            title,
            firstName,
            lastName,
            email,
            company,
            address1,
            address2,
            city,
            state,
            zip,
            country,
            phone,
            comments
        } = body;

        if ([firstName, lastName, email, address1, city, state, zip, country, phone].some(ele => !ele || ele.trim() === "")) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
            });
        }

        const resend = new Resend(process.env.RESEND_API);

        try {
            const res = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: "milleniuminvestments361@gmail.com",
                subject: '📩 New Investor Contact Request',
                html: `
<div style="font-family: 'Helvetica', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
    <h2 style="color: #2c3e50; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">📩 New Message from Contact Form</h2>
    <p><strong>Title:</strong> ${title || 'N/A'}</p>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2980b9;">${email}</a></p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    <p><strong>Address Line 1:</strong> ${address1}</p>
    ${address2 ? `<p><strong>Address Line 2:</strong> ${address2}</p>` : ''}
    <p><strong>City:</strong> ${city}</p>
    <p><strong>State:</strong> ${state}</p>
    <p><strong>ZIP:</strong> ${zip}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    ${comments ? `<p><strong>Comments:</strong> ${comments}</p>` : ''}
    <hr style="margin: 20px 0;">
    <p style="font-size: 12px; color: #888;">This message was sent via your website's contact form.</p>
</div>
                `,
            });

            if (res.error) {
                return new Response(JSON.stringify({ error: 'Failed to send email', message: res.error.message }), { status: 500 });
            }

            return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), { status: 200 });

        } catch (error) {
            return new Response(JSON.stringify({ error: 'Failed to send email', message: error.message }), { status: 500 });
        }

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
}
