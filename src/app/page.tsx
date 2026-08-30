import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkList } from "@/components/LinkList";
import type { LinkItem, Profile } from "@/types/link";

const profile: Profile = {
  name: "장가이버",
  bio: "바이브코딩 새싹",
  avatarUrl: "/avatar-placeholder.svg",
};

const links: LinkItem[] = [
  { id: "1", label: "GitHub", url: "https://github.com", clickCount: 0 },
  { id: "2", label: "LinkedIn", url: "https://linkedin.com", clickCount: 0 },
  { id: "3", label: "Blog", url: "https://example.com/blog", clickCount: 0 },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-start justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:items-center">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950">
        <ProfileHeader profile={profile} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
