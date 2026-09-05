import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkList } from "@/components/LinkList";
import type { LinkItem, Profile } from "@/types/link";

const profile: Profile = {
  name: "장가이버",
  bio: "바이브코딩 시작",
  avatarUrl: "/장가이버프로필이미지.png",
};

const links: LinkItem[] = [
  {
    id: "0",
    label: "🙋‍♂️ 장가이버 소개",
    url: "image:/장가이버 소개.png",
  },
  {
    id: "1",
    label: "🐙 GitHub",
    url: "https://github.com/stjang7428/",
  },
  {
    id: "2",
    label: "📘 Facebook",
    url: "https://www.facebook.com/profile.php?id=61572114887603",
  },
  {
    id: "3",
    label: "📧 Email",
    url: "mailto:stjang7428@gmail.com",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-gradient-to-b from-[#fff8ee] via-[#fdeee0] to-[#fbe0cc] px-6 py-16 sm:px-8">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader profile={profile} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
