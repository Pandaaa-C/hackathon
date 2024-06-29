import LoginComponent from "@/components/login/login-component";
import { getServerAuthSession } from "@/server/auth";

export default async function LoginPage() {
    const session = await getServerAuthSession();

    return (
        <>
            <LoginComponent session={session} />
        </>
    )
}