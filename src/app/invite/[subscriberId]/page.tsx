import Image from "next/image";

import devstage from "../../../assets/logo.svg";
import { Ranking } from "./ranking";
import { Stats } from "./stats";
import { InviteLinkInput } from "./invite-link-input";

interface InvitePageProps {
  params: Promise<{
    subscriberId: string;
  }>;
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { subscriberId } = await params;

  const inviteLink = `http://localhost:3333/invites/${subscriberId}`;

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={devstage} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscriberId} />
        </div>
      </div>

      <Ranking />
    </div>
  );
}
