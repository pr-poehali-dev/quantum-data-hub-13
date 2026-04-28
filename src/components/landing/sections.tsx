import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Образовательный путеводитель</Badge>,
    title: "ИИ: от теории к практике.",
    content: 'Разбираемся в видах искусственного интеллекта — понятно, структурировано и без лишнего жаргона.',
    details: 'Искусственный интеллект (ИИ) — это область компьютерных наук, которая создаёт системы, способные выполнять задачи, требующие человеческого мышления: обучаться, рассуждать, понимать язык и распознавать образы. ИИ уже используется в медицине, образовании, бизнесе и повседневной жизни — от голосовых помощников до самоуправляемых автомобилей.'
  },
  {
    id: 'ml',
    icon: 'TrendingUp',
    image: 'https://cdn.poehali.dev/projects/ba748f42-3867-48cf-be8c-9e8d00842323/files/538ac1b5-0340-42ee-9a61-22add1405331.jpg',
    title: 'Машинное обучение',
    content: 'Алгоритмы, которые учатся на данных без явного программирования.',
    details: 'Машинное обучение (Machine Learning) — это ветвь ИИ, где системы улучшают свою работу с опытом. Модели анализируют огромные массивы данных и находят скрытые закономерности. Именно ML стоит за рекомендациями в Netflix и Spotify, антиспам-фильтрами в почте, системами обнаружения мошенничества в банках и предсказанием цен на рынке.',
    links: [
      { label: 'Kaggle — платформа ML-соревнований', url: 'https://www.kaggle.com' },
      { label: 'Scikit-learn — библиотека ML', url: 'https://scikit-learn.org' },
      { label: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course' },
    ]
  },
  {
    id: 'neural',
    icon: 'Brain',
    image: 'https://cdn.poehali.dev/projects/ba748f42-3867-48cf-be8c-9e8d00842323/files/36953dd1-97fc-4f27-acad-d253fed90a35.jpg',
    title: 'Нейронные сети',
    content: 'Модели, вдохновлённые строением человеческого мозга.',
    details: 'Нейронные сети состоят из слоёв взаимосвязанных узлов — как нейроны в мозге. Глубокие нейронные сети (Deep Learning) способны решать задачи, которые раньше считались невозможными для машин: распознавание лиц, синтез голоса, создание реалистичных изображений. Именно они лежат в основе ChatGPT, DALL·E и Midjourney.',
    links: [
      { label: 'ChatGPT — языковая модель OpenAI', url: 'https://chat.openai.com' },
      { label: 'Midjourney — генерация изображений', url: 'https://www.midjourney.com' },
      { label: 'TensorFlow — фреймворк нейросетей', url: 'https://www.tensorflow.org' },
    ]
  },
  {
    id: 'nlp',
    icon: 'MessageSquare',
    image: 'https://cdn.poehali.dev/projects/ba748f42-3867-48cf-be8c-9e8d00842323/files/32ddc46d-7e2c-4d0a-b478-e4db77fceef4.jpg',
    title: 'Обработка языка (NLP)',
    content: 'Технологии, которые позволяют машинам понимать человеческую речь.',
    details: 'Natural Language Processing — одна из самых быстроразвивающихся областей ИИ. NLP-системы умеют переводить тексты, отвечать на вопросы, анализировать тональность отзывов и вести осмысленный диалог. Голосовые помощники Siri, Alexa и Алиса, а также все современные чат-боты работают именно на NLP-технологиях.',
    links: [
      { label: 'DeepL — нейросетевой переводчик', url: 'https://www.deepl.com' },
      { label: 'Hugging Face — модели NLP', url: 'https://huggingface.co' },
      { label: 'Claude — ИИ-ассистент Anthropic', url: 'https://claude.ai' },
    ]
  },
  {
    id: 'cv',
    icon: 'Eye',
    image: 'https://cdn.poehali.dev/projects/ba748f42-3867-48cf-be8c-9e8d00842323/files/622b30aa-9985-4d29-b61d-aebbb4ae1836.jpg',
    title: 'Компьютерное зрение',
    content: 'ИИ, который «видит» и анализирует визуальную информацию.',
    details: 'Computer Vision позволяет машинам интерпретировать изображения и видео так же, как это делает человек. Врачи используют CV для ранней диагностики рака по снимкам МРТ. Беспилотные автомобили с его помощью распознают дорожные знаки и пешеходов. Смартфоны разблокируются по лицу — тоже работа компьютерного зрения.',
    links: [
      { label: 'Google Vision API', url: 'https://cloud.google.com/vision' },
      { label: 'Roboflow — обучение CV-моделей', url: 'https://roboflow.com' },
      { label: 'DALL·E — генерация изображений', url: 'https://openai.com/dall-e-3' },
    ]
  },
  {
    id: 'future',
    icon: 'Rocket',
    image: 'https://cdn.poehali.dev/projects/ba748f42-3867-48cf-be8c-9e8d00842323/files/68799c1b-c480-4d27-affd-9f850f43e672.jpg',
    title: 'Изучай ИИ уже сегодня.',
    content: 'Искусственный интеллект — не далёкое будущее, а инструмент настоящего.',
    details: 'Понимание видов ИИ открывает новые возможности: студенты выбирают более осознанные карьерные пути, преподаватели строят актуальные программы обучения. Мир меняется быстро — и те, кто разбирается в технологиях, всегда будут востребованы.',
    showButton: true,
    buttonText: 'Узнать больше'
  },
]