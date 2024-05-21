import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    // Generate random user details
    const userId = Math.floor(Math.random() * 1000);
    const userName = `User${userId}`;
    const email = `user${userId}@example.com`;
    const phone = `123456789${userId}`;
    const postCode = `12345${userId}`;
    
    // Send POST request to your form endpoint
    const formData = {
        name: userName,
        email: email,
        phone: phone,
        postCode: postCode,
        audience: 'Some Audience',
        priceRange: 'Some Price Range',
        lookingToBuy: 'Yes',
        contactMethod: 'Email',
        selectPreApproval: 'Yes',
        scheduleInspection: true,
        requestFloorPlans: true,
        priceInformation: true,
        brochure: true,
        message: 'This is a test message from ' + userName
    };
    
    const res = http.post('your_form_endpoint_url', formData);
    
    // Wait for 1-3 seconds between requests
    sleep(Math.random() * 3 + 1);
}
