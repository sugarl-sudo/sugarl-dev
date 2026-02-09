import { Paper, Experience, Project, Profile } from "@/types";

export const profile: Profile = {
  name: "佐藤 裕太",
  nameEn: "Yuta Sato",
  title: "大学院生 / MLエンジニア",
  bio: "千葉大学大学院 川本・計良研究室に所属する修士2年。MathAIの研究に取り組みながら、複数企業でMLエンジニア・データエンジニアとしてのインターンシップ経験を積んでいます。",
  university: "千葉大学大学院",
  department: "川本・計良研究室（修士2年）",
  email: "sato.yuta0112@gmail.com",
  github: "sugarl-sudo",
  twitter: "sugarL_sudo",
  linkedin: "%E8%A3%95%E5%A4%AA-%E4%BD%90%E8%97%A4-0a5580317",
  skills: [
    {
      category: "プログラミング言語",
      items: ["Python", "SQL", "Java", "C", "TypeScript"],
    },
    {
      category: "フレームワーク",
      items: ["PyTorch", "FastAPI", "Next.js"],
    },
    {
      category: "インフラ・ツール",
      items: ["Docker", "AWS", "GCP", "Terraform", "Git/GitHub"],
    },
    {
      category: "研究分野",
      items: ["MathAI", "深層学習", "Chain-of-Thought"],
    },
  ],
};

export const papers: Paper[] = [
  {
    id: "paper-1",
    title:
      "Chain of Thought in Order: Discovering Learning-Friendly Orders for Arithmetic",
    titleEn:
      "Chain of Thought in Order: Discovering Learning-Friendly Orders for Arithmetic",
    authors: ["Yuta Sato", "Kazuhiko Kawamoto", "Hiroshi Kera"],
    venue: "ICML Workshop 2025 / IBIS 2025",
    year: 2025,
    abstract:
      "算術タスクにおいて、Transformerが学習しやすいChain-of-Thoughtの順序を自動的に発見する手法を提案。計算過程の記述順序が学習効率に大きく影響することを実験的に示し、最適な順序を探索するフレームワークを構築しました。",
    tags: ["MathAI", "Chain-of-Thought", "Transformer", "PyTorch"],
    pdfUrl: "https://arxiv.org/abs/2506.23875",
  },
  {
    id: "paper-2",
    title:
      "Improving the Accuracy–Robustness Trade-Off in Vision Transformers via Attention Guidance",
    authors: [
      "Yuta Sato",
      "Hiroshi Kera",
      "Kazuhiko Kawamoto",
      "Satoshi Suzuki",
    ],
    venue:
      "Proc. of International Symposium on Nonlinear Theory and Its Applications (NOLTA), pp.73-76, 2025",
    year: 2025,
    abstract:
      "Vision Transformerにおいて、Attention機構のガイダンスを通じて精度とロバスト性のトレードオフを改善する手法を提案。敵対的摂動に対する頑健性を高めながら、通常の分類精度を維持することに成功しました。",
    tags: ["Vision Transformer", "Adversarial Robustness", "Attention"],
    pdfUrl: "https://nolta2025.org/",
  },
  {
    id: "paper-3",
    title: "計算代数の諸問題におけるTransformerの推論能力の検証",
    authors: ["佐藤裕太", "川本一彦", "計良宥志"],
    venue: "人工知能学会全国大会論文集",
    year: 2024,
    abstract:
      "計算代数の諸問題（多項式因数分解、GCD計算など）に対して、Transformerがどの程度正確に推論できるかを体系的に検証。数学的構造の理解におけるTransformerの能力と限界を明らかにしました。",
    tags: ["MathAI", "Transformer", "計算代数", "深層学習"],
    pdfUrl: "https://cir.nii.ac.jp/crid/1390018971042403456",
  },
  {
    id: "paper-4",
    title: "CALT: A Library for Computer Algebra with Transformer",
    authors: ["Hiroshi Kera", "Shun Arakawa", "Yuta Sato"],
    venue: "International Symposium on Symbolic and Algebraic Computation, 2025",
    year: 2025,
    abstract:
      "Transformerを用いた計算代数タスクの学習を、数学者が容易に実装できるようにするライブラリを開発。データセット生成からモデル訓練までを一気通貫でサポートし、オープンソースとして公開しています。",
    tags: ["MathAI", "計算代数", "Transformer", "OSS"],
    pdfUrl: "https://arxiv.org/abs/2506.08600",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "ZOZO",
    role: "エンジニア インターン",
    period: "2025年8月 - 現在",
    description: "",
    achievements: [],
    technologies: [],
  },
  {
    id: "exp-2",
    company: "サイバーエージェント",
    role: "エンジニア インターン",
    period: "2024年 - 2025年",
    description: "画像解析AIの開発に従事。",
    achievements: [],
    technologies: ["Python", "PyTorch", "Docker"],
  },
  {
    id: "exp-3",
    company: "楽天",
    role: "MLエンジニア インターン",
    period: "2024年8月 - 2024年9月",
    description: "",
    achievements: [],
    technologies: ["Python", "PyTorch", "LangChain", "GCP", "OpenAI API"],
  },
  {
    id: "exp-4",
    company: "NTT",
    role: "インターン",
    period: "2024年9月 - 2024年10月",
    description: "",
    achievements: [],
    technologies: [],
  },
  {
    id: "exp-5",
    company: "CARTA",
    role: "データエンジニア インターン",
    period: "2024年8月 - 2024年9月",
    description: "",
    achievements: [],
    technologies: ["Python", "dbt", "Snowflake", "Terraform"],
  },
  {
    id: "exp-6",
    company: "Shinonome",
    role: "MLエンジニア インターン",
    period: "2023年1月 - 2024年5月",
    description:
      "ユーザの行動ログから日記生成するAIモデルのMVP開発を担当。",
    achievements: [],
    technologies: ["Python", "PyTorch"],
  },
  {
    id: "exp-7",
    company: "LightBlue Technology",
    role: "MLエンジニア インターン",
    period: "2022年10月 - 2023年3月",
    description: "画像解析AIの開発に従事。",
    achievements: [],
    technologies: ["Python", "PyTorch", "Docker", "AWS"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "CALT - Computer Algebra with Transformer",
    description:
      "Transformerを用いた計算代数タスクの学習フレームワーク",
    longDescription:
      "数学者が容易に実装できるよう、データセット生成からモデル訓練までを一気通貫でサポートするオープンソースライブラリ。ISSAC 2025で発表。",
    technologies: ["Python", "PyTorch", "Transformer"],
    githubUrl: "https://github.com/HiroshiKERA/calt",
    featured: true,
  },
  {
    id: "proj-2",
    title: "CALT Codebase - 実験リポジトリ",
    description: "CALTライブラリを使った計算代数実験のコードベース",
    technologies: ["Python", "PyTorch"],
    githubUrl: "https://github.com/HiroshiKERA/calt-codebase",
    featured: false,
  },
];
