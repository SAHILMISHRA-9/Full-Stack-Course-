import { 
    SignInButton, 
    SignOutButton, 
    // UserButton 
    Show,
    SignUpButton
} from "@clerk/nextjs"
import Link from "next/link"

export const Navigation = () =>{
    return(
        <nav className="bg-[var(--background borderb border-(--foreground)/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="shrink-0">
                        <h1 className="text-xl font-semibold text-foreground">
                            Next.js App
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Show when="signed-out">
                            {/* <SignInButton mode="modal"> */}
                            <SignInButton mode="modal">
                                <button>Sign In</button>
                            </SignInButton>
                            {/* <SignUpButton mode="modal"/> */}
                            <SignUpButton mode="modal">
                                <button>Sing Up</button>
                            </SignUpButton>
                        </Show>
                        <Show when="signed-in">
                            <Link href="/user-profile">Profile</Link>
                            <SignOutButton />
                        </Show>
                        {/* <UserButton /> */}
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}