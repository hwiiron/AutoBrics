import {
  BarChart3,
  Building2,
  Camera,
  Cpu,
  FileBarChart,
  LayoutDashboard,
  SquareCheckBigIcon,
  User,
} from "lucide-react";

const data = {
  user: {
    name: "AutoBrics",
    email: "AutoBrics@atlabs.com",
    avatar: "/avatars/shadcn.jpg",
  },
  users: [
    {
      name: "AutoBrics",
      logo: User,
      rank: "Admin",
    },
    {
      name: "오윤석",
      logo: User,
      rank: "대표",
    },
    {
      name: "유준하",
      logo: User,
      rank: "이사",
    },
    {
      name: "이정우",
      logo: User,
      rank: "연구원",
    },
    {
      name: "이인수",
      logo: User,
      rank: "연구원",
    },
    {
      name: "신휘철",
      logo: User,
      rank: "연구원",
    },
  ],
  nav: [
    {
      title: "대시보드",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "검수 통계",
      url: "#",
      icon: SquareCheckBigIcon,
      isActive: true,
      items: [
        {
          title: "총 검수 현황",
          url: "#",
        },
        {
          title: "납품 기업별 검수 현황",
          url: "#",
        },
      ],
    },
    {
      title: "기기관리",
      url: "/",
      icon: Cpu,
    },
    {
      title: "원격 검수 시스템",
      url: "/",
      icon: Camera,
    },
    {
      title: "레포트",
      url: "/",
      icon: FileBarChart,
    },
    {
      title: "사용량 통계",
      url: "/",
      icon: BarChart3,
    },
    {
      title: "기업 정보",
      url: "/",
      icon: Building2,
    },
  ],
};

export default data;
