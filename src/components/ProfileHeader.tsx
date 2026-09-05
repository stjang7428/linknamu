import Image from "next/image";
import type { Profile } from "@/types/link";

export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="rounded-full bg-white/40 p-1.5 shadow-[0_12px_28px_-8px_rgba(120,72,32,0.35)]">
        <Image
          src={profile.avatarUrl}
          alt={profile.name}
          width={128}
          height={128}
          className="h-32 w-32 rounded-full object-cover ring-1 ring-white/70"
          priority
        />
      </div>
      <h1 className="text-xl font-semibold tracking-tight text-[#3a2e26]">
        {profile.name}
      </h1>
      <p className="text-sm text-[#8a7566]">{profile.bio}</p>
    </div>
  );
}
