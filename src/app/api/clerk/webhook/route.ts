import { db } from "@/server/db";


export const POST = async(req: Request) =>{
const { data } = await req.json(); 
console.log('clerk webhook created');


const emailAddress = data.email_addresses[0].email_addresses;
const firstName = data.first_name;
const lastName = data.last_name;
const imageUrl = data.image_url;
const id = data.id;

await db.user.create({
    data: {
        id: id,
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        imageUrl: imageUrl
    }
});

return new Response('clerk webhook created', { status: 200 });  
}