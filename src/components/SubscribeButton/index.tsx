import { signIn, useSession } from "next-auth/client";
import styles from "./styles.module.scss";
interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  function handleSubscribe() {
    //Check user logged
    if (!session) {
      signIn("github");
      return;
    }

    //Create checkout session
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
