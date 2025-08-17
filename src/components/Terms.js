import * as React from 'react';
import { Typography, Grid } from '@mui/material';
import ReviewsIcon from '@mui/icons-material/Reviews';

const termsAndConditions = [
    {
        heading: "General Information",
        description: "Scrap Harbor has proudly served the community since 2022, providing reliable scrap collection services for households and industries. We are committed to sustainability and exceptional service, ensuring proper recycling and waste management practices."
    },
    {
        heading: "Use of the Website",
        description: "You may browse our offerings through our website, but all orders for scrap collection must be scheduled through our online platform or by contacting our support team. Unauthorized use of our website or misuse of its content may result in denial of access."
    },
    {
        heading: "Service Availability and Pricing",
        description: "We strive to ensure that our service information, including availability and pricing, is accurate. Prices are subject to change without prior notice and are listed in INR (Indian Rupees). Any applicable taxes or additional charges will be clearly communicated at the time of booking."
    },
    {
        heading: "Booking and Payment Terms",
        description: "All bookings for scrap collection must be confirmed in advance through our website or support team. Payment can be made through accepted methods such as UPI, net banking, or cash on service completion. Scrap Harbor reserves the right to refuse service or bookings as necessary."
    },
    {
        heading: "Cancellation and Refund Policy",
        description: "Cancellations are allowed up to 24 hours before the scheduled collection time. Refunds, if applicable, will be processed within 7 working days. Please note that service charges may apply for late cancellations or no-shows."
    },
    {
        heading: "Intellectual Property",
        description: "All content on this website, including text, images, and logos, is the property of Scrap Harbor and may not be used without prior permission."
    }
];


export default function Terms(props) {
    return (
        <Grid container className='termParent container-padding' justifyContent={"center"} direction={'row'}>
            <Typography variant='h1' mt={3} mb={3}>TERMS AND CONDITION</Typography>
            
            <Grid item>
                <Grid container direction={"column"} spacing={2} justifyContent='center' alignItems={"center"}>
                    {termsAndConditions.map((data, index) => (
                        <Grid container>
                            <Grid item xs={1} sm={3}></Grid>
                            <Grid item xs={10} sm={6}>
                                <Typography variant='h6' className="term-heading">{index + 1}. {data.heading}</Typography>
                                <Typography variant='body1' className="term-description">
                                    {data.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sm={3}></Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}