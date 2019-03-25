import Mock from "mockjs";
const baseUrl = "https://www.mock.com";
Mock.mock(baseUrl + "/recommend", "get", {
  recomendList: [
    {
      id: 0,
      title: "斗罗大陆",
      author: "唐家三少"
    },
    {
      id: 1,
      title: "善良的死神",
      author: "唐家三少"
    },
    {
      id: 2,
      title: "食神",
      author: "唐家三少"
    },
    {
      id: 3,
      title: "光之子",
      author: "唐家三少"
    },
    {
      id: 4,
      title: "十二生肖",
      author: "唐家三少"
    },
    {
      id: 5,
      title: "天珠变",
      author: "唐家三少"
    },
    {
      id: 6,
      title: "神印王座",
      author: "唐家三少"
    },
    {
      id: 7,
      title: "琴帝",
      author: "唐家三少"
    },
    {
      id: 8,
      title: "星辰变",
      author: "唐家三少"
    },
    {
      id: 9,
      title: "狂神",
      author: "唐家三少"
    },
    {
      id: 10,
      title: "星火大道",
      author: "唐家三少"
    }
  ]
});
