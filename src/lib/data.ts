import { Paper, Experience, Project, Profile } from "@/types";

export const profile: Profile = {
  name: "佐藤 悠太",
  nameEn: "Yuta Sato",
  title: "大学院生 / ソフトウェアエンジニア",
  bio: "計算機科学を専攻する大学院生。自然言語処理と機械学習の研究に取り組みながら、Webアプリケーション開発のインターンシップで実践的な開発経験を積んでいます。技術で社会課題を解決することに情熱を持っています。",
  university: "東京大学",
  department: "情報理工学系研究科 コンピュータ科学専攻",
  email: "yuta.sato@example.com",
  github: "yutasato",
  twitter: "yuta_dev",
  linkedin: "yutasato",
  skills: [
    {
      category: "プログラミング言語",
      items: ["Python", "TypeScript", "Go", "Rust"],
    },
    {
      category: "フレームワーク",
      items: ["Next.js", "React", "FastAPI", "PyTorch"],
    },
    {
      category: "インフラ・ツール",
      items: ["Docker", "AWS", "GCP", "Kubernetes", "Terraform"],
    },
    {
      category: "研究分野",
      items: ["自然言語処理", "機械学習", "大規模言語モデル", "情報検索"],
    },
  ],
};

export const papers: Paper[] = [
  {
    id: "paper-1",
    title: "大規模言語モデルを用いた日本語文書要約の効率化手法",
    titleEn:
      "Efficient Japanese Document Summarization Using Large Language Models",
    authors: ["佐藤悠太", "田中太郎", "山田花子"],
    venue: "言語処理学会 第30回年次大会",
    year: 2024,
    abstract:
      "大規模言語モデル（LLM）を活用して、日本語の長文文書を高精度かつ高速に要約する手法を提案しました。従来手法と比較して、要約精度（ROUGE-L）を15%向上させながら、推論時間を40%削減することに成功。医療文書や法律文書など、専門領域への応用可能性も示しました。",
    tags: ["NLP", "LLM", "要約", "Python", "PyTorch"],
    doi: "10.xxxx/example-1",
  },
  {
    id: "paper-2",
    title: "検索拡張生成（RAG）における知識グラフの統合手法",
    titleEn:
      "Integrating Knowledge Graphs into Retrieval-Augmented Generation",
    authors: ["佐藤悠太", "鈴木一郎"],
    venue: "人工知能学会全国大会 2024",
    year: 2024,
    abstract:
      "RAG（Retrieval-Augmented Generation）システムに知識グラフを統合することで、LLMの回答精度と事実整合性を向上させる手法を提案。企業のFAQシステムでの実験で、hallucination率を60%削減し、回答の正確性を大幅に改善しました。",
    tags: ["RAG", "知識グラフ", "LLM", "情報検索"],
  },
  {
    id: "paper-3",
    title: "分散学習環境における効率的なモデル並列化フレームワーク",
    titleEn:
      "An Efficient Model Parallelism Framework for Distributed Training",
    authors: ["佐藤悠太", "田中太郎", "李明"],
    venue: "情報処理学会論文誌 Vol.65",
    year: 2023,
    abstract:
      "複数GPUを活用した大規模モデルの効率的な分散学習フレームワークを開発。メモリ使用量を最適化しながら、学習速度を従来比2.3倍に高速化。オープンソースとして公開し、研究コミュニティに貢献しています。",
    tags: ["分散学習", "GPU", "PyTorch", "CUDA", "最適化"],
    pdfUrl: "#",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "株式会社メガテック",
    role: "バックエンドエンジニア インターン",
    period: "2024年6月 - 現在",
    description:
      "大規模SaaSプロダクトのバックエンド開発チームに所属し、マイクロサービスアーキテクチャの設計・実装を担当。",
    achievements: [
      "【状況】月間1000万リクエストを処理する検索APIのレスポンスタイムが目標値を超過していた",
      "【課題】既存のSQLクエリの最適化だけでは性能要件を満たせず、アーキテクチャレベルの改善が必要だった",
      "【行動】Elasticsearchを導入し、データパイプラインの再設計とキャッシュ戦略の最適化を実施",
      "【結果】検索APIのレスポンスタイムを平均200msから50msに改善（75%削減）",
    ],
    technologies: [
      "Go",
      "gRPC",
      "Elasticsearch",
      "Redis",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    id: "exp-2",
    company: "AIスタートアップ株式会社",
    role: "MLエンジニア インターン",
    period: "2023年4月 - 2024年3月",
    description:
      "自然言語処理を活用したプロダクトの機械学習パイプライン構築を担当。",
    achievements: [
      "【状況】新規チャットボットサービスの自然言語理解モジュールの精度が実用水準に達していなかった",
      "【課題】限られた学習データで高精度な意図分類モデルを構築する必要があった",
      "【行動】Few-shot learningとデータ拡張技術を組み合わせた独自の学習パイプラインを設計・実装",
      "【結果】意図分類の精度を78%から94%に向上させ、サービスの正式リリースに貢献",
    ],
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "GCP", "MLflow"],
  },
  {
    id: "exp-3",
    company: "株式会社ウェブクリエイト",
    role: "フロントエンドエンジニア インターン",
    period: "2022年8月 - 2023年3月",
    description:
      "自社プロダクトのフロントエンド開発。React/Next.jsを用いたSPA開発を担当。",
    achievements: [
      "【状況】レガシーなjQuery製のダッシュボードの保守コストが増大し、新機能追加が困難だった",
      "【課題】ユーザー体験を損なわずに、段階的にモダンなフレームワークへ移行する必要があった",
      "【行動】Next.js + TypeScriptへの段階的マイグレーション計画を策定し、主要画面のリライトを主導",
      "【結果】コードベースの70%を移行完了。ページロード時間を3.2秒から0.8秒に短縮",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "AI論文サーチエンジン",
    description: "RAGを活用した学術論文の意味検索・要約システム",
    longDescription:
      "arXivの論文データベースをベクトル化し、自然言語での論文検索と自動要約を実現。Embeddingモデルによるセマンティック検索と、LLMによる要約生成を組み合わせた統合検索システム。",
    technologies: ["Python", "FastAPI", "React", "Pinecone", "OpenAI API"],
    githubUrl: "#",
    demoUrl: "#",
    featured: true,
  },
  {
    id: "proj-2",
    title: "リアルタイムコード共有エディタ",
    description: "WebSocketベースのリアルタイム共同編集エディタ",
    longDescription:
      "CRDTアルゴリズムを用いたリアルタイム共同編集機能を実装。シンタックスハイライト、複数カーソル表示、ビデオチャット統合などの機能を備えたペアプログラミングツール。",
    technologies: [
      "TypeScript",
      "Next.js",
      "WebSocket",
      "Y.js",
      "Tailwind CSS",
    ],
    githubUrl: "#",
    featured: true,
  },
  {
    id: "proj-3",
    title: "クラウドコスト最適化ダッシュボード",
    description:
      "AWS/GCPの利用コストを可視化・最適化するダッシュボード",
    longDescription:
      "マルチクラウド環境のコストデータを統合し、異常検知アルゴリズムでコストスパイクを早期発見。リソースの使用率分析に基づく最適化提案を自動生成する機能を実装。",
    technologies: ["Go", "React", "PostgreSQL", "Docker", "Terraform"],
    githubUrl: "#",
    featured: true,
  },
  {
    id: "proj-4",
    title: "自然言語SQL変換ツール",
    description: "日本語の質問文をSQLクエリに変換するCLIツール",
    technologies: ["Python", "LangChain", "SQLite"],
    githubUrl: "#",
    featured: false,
  },
];
