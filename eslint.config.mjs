import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ),
  {
    ignores: [
      '.next/',
      'out/',
      'node_modules/',
      'public/',
      '**/*.config.js',
      '**/*.config.cjs',
      '**/*.config.mjs',
      '**/*.generated.*',
      '.env*',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'prettier/prettier': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Встроенные модули (fs, path)
            'external', // Пакеты из node_modules
            'internal', // Внутренние модули вашего проекта
            'parent', // Родительские директории (../)
            'sibling', // Соседние файлы (./)
            'index', // index файлы
            'object', // Импорт через `import * as X`
            'type', // Импорты только типов
          ],
          'newlines-between': 'always', // Разделять группы пустыми строками
          alphabetize: {
            order: 'asc', // Сортировать по алфавиту
            caseInsensitive: true, // Игнорировать регистр
          },
          pathGroups: [
            {
              pattern: '@/**', // Кастомные компоненты (предполагая алиас @)
              group: 'internal',
              position: 'after',
            },
            {
              pattern: './*.scss', // Обычные стили
              group: 'index',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
];

// порядок импорта
// классы без скобок
// самозакрывающиеся теги

export default eslintConfig;
