import {questionType} from './Type';

export const DummyQuestions: questionType[] = [
  {
    id: 1,
    question:
      'In the sentence "John kicked the football across the yard," what is the verb?',
    options: [
      {
        text: 'Kicked',
        isCorrect: true,
      },
      {
        text: 'John',
        isCorrect: false,
      },
      {
        text: 'Accross',
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: 'Which is the plural of ox?',
    options: [
      {
        text: 'Oxen',
        isCorrect: true,
      },
      {
        text: 'Oxi',
        isCorrect: false,
      },
      {
        text: 'Oxia',
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: 'What is the plural form of the word "goose"?',
    options: [
      {
        text: 'Goause',
        isCorrect: true,
      },
      {
        text: 'Gooses',
        isCorrect: false,
      },
      {
        text: 'Geese',
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: 'What word describes a word that sounds like the noise it makes?',
    options: [
      {
        text: 'Allegory',
        isCorrect: true,
      },
      {
        text: 'Onomatopoeia',
        isCorrect: false,
      },
      {
        text: 'Metaphor',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question: 'In grammar, what is the name of a word that modifies a noun?',
    options: [
      {
        text: 'Adverb',
        isCorrect: true,
      },
      {
        text: 'Verb',
        isCorrect: false,
      },
      {
        text: 'Adjective',
        isCorrect: false,
      },
    ],
  },
];
