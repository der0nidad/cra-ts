import * as React from "react";

type Props = {};

export const LoginForm: React.FC<Props> = () => {
  //   const [article, setArticle] = React.useState<IArticle | {}>();

  //   const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
  //     setArticle({
  //       ...article,
  //       [e.currentTarget.id]: e.currentTarget.value,
  //     });
  //   };

  //   const addNewArticle = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     saveArticle(article);
  //   };

  return (
    <div>
      <div>Войти</div>
      <button>Нет, Выйти</button>
    </div>
  );
};
