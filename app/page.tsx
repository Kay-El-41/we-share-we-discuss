import { Button } from "@nextui-org/react";
import * as actions from "@/src/actions";
import { auth } from "@/src/auth";
import Profile from "@/src/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <form action={actions.signIn}>
        <Button type="submit">Sign In With Github</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      <div>
        <p>Hi, I&apos;from server:</p>
        {session?.user ? (
          <>{JSON.stringify(session.user)}</>
        ) : (
          <>User is Signed Out</>
        )}
      </div>

      <div>
        <p>Hi, I&apos;from client:</p>
        <Profile />
      </div>
    </main>
  );
}
