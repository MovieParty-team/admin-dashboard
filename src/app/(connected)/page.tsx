"use client";

import { useLogout } from "@/api/auth/hooks/useLogout";
import Button from "@/components/Button";

export default function HomePage() {
  const { mutate } = useLogout();

  return (
    <>
      <h1>Dashboard Admin</h1>
      <form action="">
        <Button
          type="primary"
          onClick={() => {
            mutate();
          }}
        >
          Deconnexion
        </Button>
      </form>
    </>
  );
}
