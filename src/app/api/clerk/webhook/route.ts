

export const POST = async(req: Request) =>{
const { data } = await req.json(); 
console.log('clerk webhook created');

return new Response('clerk webhook created', { status: 200 });  
}