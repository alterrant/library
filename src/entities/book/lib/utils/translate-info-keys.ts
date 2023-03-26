export const translateInfoKeys = (key: string) => {
  switch (key) {
    case 'publish': {
      return 'Издательство';
    }
    case 'issueYear': {
      return 'Год издания';
    }
    case 'pages': {
      return 'Страниц';
    }
    case 'cover': {
      return 'Переплёт';
    }
    case 'format': {
      return 'Формат';
    }
    case 'categories': {
      return 'Жанр';
    }
    case 'weight': {
      return 'Вес';
    }
    case 'ISBN': {
      return 'ISBN';
    }
    case 'producer': {
      return 'Изготовитель';
    }
    default: {
      return '';
    }
  }
};
