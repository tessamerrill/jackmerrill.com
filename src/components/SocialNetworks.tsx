import {
  SiDiscord,
  SiDribbble,
  SiGithub,
  SiSpotify,
  SiX,
} from "@icons-pack/react-simple-icons";

export default function SocialNetworks() {
  const socialNetworks = [
    {
      name: "BlueSky",
      icon: <span className="w-3 h-3 block bg-white rounded-sm"></span>,
      borderColor: "border-[#023FAA]",
      bgColor: "bg-[#0560FF]",
      href: "https://bsky.app/profile/tessa.sh",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="w-3 h-3"></SiGithub>,
      borderColor: "border-[#2A5FA3]",
      bgColor: "bg-[#4078C0]",
      href: "https://github.com/tessamerrill",
    },
    {
      name: "Spotify",
      icon: <SiSpotify className="w-3 h-3"></SiSpotify>,
      borderColor: "border-[#15883E]",
      bgColor: "bg-[#1DB954]",
      href: "https://open.spotify.com/user/vgimmhvujjedyiefq413gx22s",
    },
    {
      name: "Discord",
      icon: <SiDiscord className="w-3 h-3"></SiDiscord>,
      borderColor: "border-[#3E49C5]",
      bgColor: "bg-[#5865F2]",
      href: "https://discord.com/users/401792058970603539",
    },
  ];

  return (
    <div className="flex items-center content-center gap-3 self-stretch flex-wrap">
      {socialNetworks.map((s) => (
        <a
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className={`flex px-2 py-1 text-xs items-center gap-1 rounded-full border-2 ${s.borderColor} ${s.bgColor}`}
        >
          {s.icon}
          {s.name}
        </a>
      ))}
    </div>
  );
}
