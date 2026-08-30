import Image from "next/image";
import type { Profile } from "@/types/link";

export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Image
        src={profile.avatarUrl}
        alt={profile.name}
        width={128}
        height={128}
        className="h-32 w-32 rounded-full object-cover"
        priority
      />
      <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {profile.name}
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{profile.bio}</p>
    </div>
  );
}
