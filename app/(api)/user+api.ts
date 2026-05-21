import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_NEON_CONNECTION_STRING || "")

export async function POST(request: Request) {
    try {
        const { name, email, clerkId } = await request.json()
        if (!name || !email || !clerkId) {
            // return new Response("Missing required fields", { status: 400 })
            return Response.json({ error: "Missing required fields" }, { status: 400 })
        }
        const response = await sql`
                INSERT INTO users 
                (
                    name, 
                    email, 
                    clerk_id
                ) 
                VALUES 
                (
                    ${name}, 
                    ${email}, 
                    ${clerkId}
                ) 
            `

        return new Response(JSON.stringify({ data: response }), { status: 201 })
    } catch (error) {
        console.error("Error fetching users:", error)
        return Response.json({ error: "Error fetching users" }, { status: 500 })
    }
}

export async function GET() {
    try {
        const result = await sql`SELECT * FROM users`
        console.log("result", result)
        return new Response(JSON.stringify(result), { status: 200 })
    } catch (error) {
        console.error("Error fetching users:", error)
        return new Response("Error fetching users", { status: 500 })
    }
}
