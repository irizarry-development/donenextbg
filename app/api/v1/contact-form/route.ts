import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const submitFormDataSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    phone: z.string(),
    projectType: z.string(),
    projectDetails: z.string(),
    legalConsent: z.string()
});

export async function POST(req: NextRequest) {
    // Handle the POST request

    const formBody = await req.json()

    const {
        email,
        name,
        phone,
        projectType,
        projectDetails,
        legalConsent
    } = submitFormDataSchema.parse(formBody)
    
    if (legalConsent !== 'on') {
        return NextResponse.json({
            message: "You must agree to the terms and conditions"
        }, {
            status: 400
        })
    }

    const formPostRequest = {
        submittedAt: new Date().getTime(),
        fields: [
            {
                objectTypeId: "0-1",
                name: "email",
                value: email
            }
        ],
        legalConsentOptions: {
            consent: {
                consentToProcess: true,
                text: "I agree to allow DoneNextBG to store and data submitted by this form.",
                communications: [
                    {
                        value: true,
                        subscriptionTypeId: 999,
                        text: "I agree to allow DoneNextBG to store and use data submitted by this form to contact me."
                    }
                ]
            }
        }
    }

    // Send the form submission to HubSpot

    const formPostRequestJson = await JSON.stringify(formPostRequest)

    const formPostResponse = await axios.post(`https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`, formPostRequestJson, {
        headers: {
            'Content-Type': 'application/json',
        }
    })

    console.log(formPostResponse.data)

    return NextResponse.json({
        message: "Form submitted successfully"
    });
 }