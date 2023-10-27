import { Api } from './openapi';

export const apiConfig = {
  baseUrl: 'https://linguachat-5tzn.onrender.com',
};

export const api = new Api(apiConfig);

const array = [
  'Русская культура',
  'Путешествия',
  'Дизайн',
  'Кулинария',
  'Книги',
  'Языки',
  'Спорт',
];

export default array;

interface IQuestion {
  question: string;
  text: string[];
  id: number;
}

export const headersWithToken = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + `${localStorage.getItem('accessToken')}`,
};

export const FAQArray: IQuestion[] = [
  {
    question: 'Где это я?',
    text: [
      'Вы - на языковой платформе LinguaChat, созданной для того, чтобы учить языки вместе. Здесь делятся знаниями, общаются и повышают свои разговорные навыки.',
    ],
    id: 1,
  },
  {
    question: 'И что здесь можно делать?',
    text: [
      'На LinguaChat вы можете найти партнеров для изучения языка, переписываться с ними в локальных и групповых чатах, обмениваться учебными материалами. Общаться с людьми, заводить друзей, делиться книгами и ссылками, познакомиться с разными культурами и открыть для кого-то свою, повышать свой уровень и отслеживать прогресс.',
    ],
    id: 2,
  },
  {
    question: 'В чём ваша фишка?',
    text: [
      'У нас их три)',
      'Первая — общение с носителями (а не с учителями) или с другими людьми, которым интересен тот же язык, что и вам. Научно доказано, что изучение иностранных языков в малых группах и в парах повышает эффективность - так вы продвинетесь в выбранном языке быстрее и дальше, не теряя заинтересованности и мотивации.',
      'Вторая — формат. Здесь вы не занимаетесь скучной зубрежкой - вы отдыхаете и общаетесь с приятными людьми, пока ваш уровень владения языком и уверенность в себе растут)',
      'Третья — наша команда разработчиков. Мы стремимся создать удобную и современную платформу для наших пользователей и пользуемся ей сами, восприимчивы к рекомендациям и критике, а также регулярно изучаем платформы наших коллег, чтобы заимствовать у конкурентов лучшие практики и сделать все, чтобы на нашей платформе вам было удобно и приятно.',
    ],
    id: 3,
  },
  {
    question: 'Как мне найти собеседника?',
    text: [
      'На главной странице сайта под верхним логотипом  есть кнопка поиска собеседника. Нажмите её, укажите в фильтре нужные вам параметры и начните.',
    ],
    id: 4,
  },
  {
    question: 'Как мне начать разговор с другим пользователем?',
    text: [
      'Наша платформа предоставляет вам удобную систему фильтров: сперва вы выбираете в ней нужный язык, а затем подбираете себе собеседника на свой вкус. Напишите тому, кто вам понравится, что-нибудь доброе и веселое - если он заинтересуется, то ответит вам. Рекомендация: заполненный профиль пользователя, где ваш собеседник сможет ознакомиться с информацией о вас, значительно повысит шансы.',
    ],
    id: 5,
  },
  {
    question: 'А если я не хочу продолжать взаимодействие?',
    text: [
      'Можете отказаться от общения, перестать отвечать и даже заблокировать пользователя.',
      'Рекомендуем сперва написать ему - например, сообщить, что в силу занятости вы не сможете продолжить занятия или станете появляться реже - и попрощаться.',
    ],
    id: 6,
  },
  {
    question:
      'Могу ли я делиться обучающими материалами и книгами прямо на платформе?',
    text: [
      'Да, вы можете обмениваться файлами и ссылками. Пожалуйста, не нарушайте авторские права)',
    ],
    id: 7,
  },
];

export const usernameRegexp = /^[A-Za-zА-Яа-я]+[\wА-Яа-я-_. ]+/gm;
export const passwordRegexp =
  /^(?=[^a-z\s]*[a-z])[\w@.\-(!,@,#,%,^,$,*,+,&);]+$/gm;
